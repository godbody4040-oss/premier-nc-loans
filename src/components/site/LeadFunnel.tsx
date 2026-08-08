import { useState } from "react";
import { track, trackOnce } from "@/lib/analytics";
import { submitLead } from "@/lib/leads";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";

const goals = ["Buy a Home", "Refinance", "Buy an Investment Property", "Just Exploring"];
const propertyTypes = ["Single Family", "Townhome or Condo", "Multi-Unit", "Not Sure Yet"];
const priceRanges = ["Under $250k", "$250k – $450k", "$450k – $750k", "$750k – $1.2M", "Over $1.2M", "Not Sure"];
const timelines = ["As Soon As Possible", "1–3 Months", "3–6 Months", "6+ Months", "Not Sure"];
const employment = ["W-2 Employee", "Self-Employed", "Business Owner", "Retired", "Other"];
const creditBands = ["Excellent", "Good", "Fair", "Rebuilding", "Prefer Not to Say"];
const contactPrefs = ["Phone", "Email", "Either"];

const STEPS = [
  "Your Goal",
  "Timeline",
  "Property",
  "About You",
  "Contact",
  "Review",
] as const;

type Form = {
  goal: string;
  propertyType: string;
  location: string;
  priceRange: string;
  timeline: string;
  employment: string;
  creditBand: string;
  firstTime: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  contactPreference: string;
  message: string;
  company: string;
};

const empty: Form = {
  goal: "",
  propertyType: "",
  location: "",
  priceRange: "",
  timeline: "",
  employment: "",
  creditBand: "",
  firstTime: "",
  first: "",
  last: "",
  email: "",
  phone: "",
  contactPreference: "",
  message: "",
  company: "",
};

type Errors = Partial<Record<keyof Form, string>>;

const inputCls =
  "min-h-12 w-full border border-border bg-white px-4 text-sm text-navy outline-none transition-colors duration-300 focus:border-gold focus:ring-2 focus:ring-gold/20";
const labelCls = "block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground";

function ChoiceGrid({
  options,
  value,
  onChange,
  columns = 2,
  name,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  columns?: 1 | 2 | 3;
  name: string;
}) {
  const cols = columns === 3 ? "sm:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <div className={`mt-4 grid gap-3 ${cols}`} role="radiogroup" aria-label={name}>
      {options.map((o) => {
        const selected = value === o;
        return (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(o)}
            className={`group flex min-h-14 items-center justify-between gap-3 border px-5 py-3 text-left text-sm transition-all duration-300 ${
              selected
                ? "border-gold bg-gold/10 text-navy shadow-[var(--shadow-card)]"
                : "border-border bg-white text-muted-foreground hover:border-navy/30 hover:text-navy"
            }`}
          >
            <span className="min-w-0">{o}</span>
            <span
              className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
                selected ? "border-gold bg-gold" : "border-border group-hover:border-navy/40"
              }`}
            >
              {selected ? <span className="block h-1.5 w-1.5 rounded-full bg-navy" /> : null}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function StepHeading({ title, hint }: { title: string; hint?: string }) {
  return (
    <div>
      <h2 className="display text-[1.8rem] text-navy sm:text-[2.4rem]">{title}</h2>
      <span className="gold-rule mt-6" />
      {hint ? <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function LeadFunnel() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set = <K extends keyof Form>(k: K, v: Form[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validateStep = (s: number) => {
    const e: Errors = {};
    if (s === 0 && !form.goal) e.goal = "Select what you're looking to accomplish.";
    if (s === 1 && !form.timeline) e.timeline = "Select a timeline.";
    if (s === 2) {
      if (!form.propertyType) e.propertyType = "Select a property type.";
      if (form.location.length > 120) e.location = "That location is too long.";
    }
    if (s === 4) {
      if (!form.first.trim() || form.first.length > 60) e.first = "Enter your first name.";
      if (!form.last.trim() || form.last.length > 60) e.last = "Enter your last name.";
      if (!/^[\d\s().+-]{10,20}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()) || form.email.length > 255)
        e.email = "Enter a valid email address.";
      if (form.message.length > 1000) e.message = "Message is too long.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (!validateStep(step)) return;
    trackOnce("prequal_start");
    track("prequal_step_complete", { step: step + 1, step_name: STEPS[step] ?? "" });
    setStep((s) => Math.min(STEPS.length - 1, s + 1));
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const submit = async () => {
    if (form.company) return; // honeypot
    for (let s = 0; s <= 4; s++) {
      if (!validateStep(s)) {
        setStep(s);
        return;
      }
    }
    setStatus("sending");
    setServerError("");
    const result = await submitLead({
      ...form,
      leadType: "pre-qualification",
      source: "prequal-funnel",
    });
    if (!result.ok) {
      setStatus("error");
      setServerError(result.error ?? "We couldn't submit your request. Please try again.");
      return;
    }
    track("prequal_complete", { goal: form.goal, timeline: form.timeline });
    setStatus("done");
  };

  const progress = status === "done" ? 100 : ((step + 1) / STEPS.length) * 100;

  return (
    <section className="bg-white py-24 lg:py-32" id="start">
      <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Get Pre-Qualified</Eyebrow>
            <p className="mt-5 text-sm text-muted-foreground">
              Six short steps. No credit pull, no obligation.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <div className="flex items-center justify-between gap-3 text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="truncate">
                {status === "done" ? "Complete" : `Step ${step + 1} of ${STEPS.length} · ${STEPS[step]}`}
              </span>
              <span className="shrink-0 tabular-nums text-gold">{Math.round(progress)}%</span>
            </div>
            <div className="mt-3 h-[3px] w-full overflow-hidden bg-border">
              <span
                className="block h-full bg-gold transition-[width] duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 border border-border bg-background p-7 shadow-[var(--shadow-card)] sm:p-10 lg:p-14">
            {status === "done" ? (
              <div className="animate-fade-in">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/60 text-gold">
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" aria-hidden="true">
                    <path
                      d="M1 8l7 6L21 1"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h2 className="display mt-8 text-[1.9rem] text-navy sm:text-[2.5rem]">
                  You're one step closer.
                </h2>
                <span className="gold-rule mt-7" />
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Thanks, {form.first || "there"} — your request has been received. Premier Lending NC will
                  review your information and follow up regarding next steps.
                </p>
                <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
                  Submitting this form does not mean you have been approved or pre-qualified for financing.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <CTA to="/calculator" variant="navy" arrow={false}>
                    Estimate a Payment
                  </CTA>
                  <CTA to="/" variant="outlineDark" arrow={false}>
                    Return Home
                  </CTA>
                </div>
              </div>
            ) : (
              <div key={step} className="animate-fade-in">
                {step === 0 ? (
                  <div>
                    <StepHeading
                      title="What are you looking to accomplish?"
                      hint="This helps frame the rest of the conversation."
                    />
                    <ChoiceGrid
                      name="Goal"
                      options={goals}
                      value={form.goal}
                      onChange={(v) => set("goal", v)}
                    />
                    {errors.goal ? <p className="mt-3 text-xs text-destructive">{errors.goal}</p> : null}
                  </div>
                ) : null}

                {step === 2 ? (
                  <div>
                    <StepHeading title="Tell us about the property." hint="Estimates are completely fine." />
                    <p className="mt-8 text-sm font-medium text-navy">Property type</p>
                    <ChoiceGrid
                      name="Property type"
                      options={propertyTypes}
                      value={form.propertyType}
                      onChange={(v) => set("propertyType", v)}
                    />
                    {errors.propertyType ? (
                      <p className="mt-3 text-xs text-destructive">{errors.propertyType}</p>
                    ) : null}

                    <p className="mt-10 text-sm font-medium text-navy">Estimated price range</p>
                    <ChoiceGrid
                      name="Price range"
                      options={priceRanges}
                      value={form.priceRange}
                      onChange={(v) => set("priceRange", v)}
                      columns={3}
                    />

                    <div className="mt-10">
                      <label className={labelCls} htmlFor="pf-location">
                        City or County (optional)
                      </label>
                      <input
                        id="pf-location"
                        value={form.location}
                        maxLength={120}
                        onChange={(e) => set("location", e.target.value)}
                        className={`${inputCls} mt-2`}
                      />
                      {errors.location ? (
                        <p className="mt-2 text-xs text-destructive">{errors.location}</p>
                      ) : null}
                    </div>
                  </div>
                ) : null}

                {step === 1 ? (
                  <div>
                    <StepHeading
                      title="When are you looking to move?"
                      hint="Timing shapes what's worth reviewing first."
                    />
                    <ChoiceGrid
                      name="Timeline"
                      options={timelines}
                      value={form.timeline}
                      onChange={(v) => set("timeline", v)}
                      columns={3}
                    />
                    {errors.timeline ? (
                      <p className="mt-3 text-xs text-destructive">{errors.timeline}</p>
                    ) : null}
                  </div>
                ) : null}

                {step === 3 ? (
                  <div>
                    <StepHeading
                      title="A little about you."
                      hint="General information only — no account numbers or documents."
                    />
                    <p className="mt-8 text-sm font-medium text-navy">Employment type</p>
                    <ChoiceGrid
                      name="Employment"
                      options={employment}
                      value={form.employment}
                      onChange={(v) => set("employment", v)}
                      columns={3}
                    />
                    <p className="mt-10 text-sm font-medium text-navy">
                      How would you describe your credit?
                    </p>
                    <ChoiceGrid
                      name="Credit"
                      options={creditBands}
                      value={form.creditBand}
                      onChange={(v) => set("creditBand", v)}
                      columns={3}
                    />
                    <p className="mt-10 text-sm font-medium text-navy">Is this your first home purchase?</p>
                    <ChoiceGrid
                      name="First-time buyer"
                      options={["Yes", "No", "Not Applicable"]}
                      value={form.firstTime}
                      onChange={(v) => set("firstTime", v)}
                      columns={3}
                    />
                  </div>
                ) : null}

                {step === 4 ? (
                  <div>
                    <StepHeading title="How can we reach you?" />
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      {(
                        [
                          ["first", "First Name", "text"],
                          ["last", "Last Name", "text"],
                          ["phone", "Phone", "tel"],
                          ["email", "Email", "email"],
                        ] as const
                      ).map(([k, l, type]) => (
                        <div key={k}>
                          <label className={labelCls} htmlFor={`pf-${k}`}>
                            {l}
                          </label>
                          <input
                            id={`pf-${k}`}
                            type={type}
                            value={form[k]}
                            maxLength={255}
                            autoComplete={
                              k === "first"
                                ? "given-name"
                                : k === "last"
                                  ? "family-name"
                                  : k === "phone"
                                    ? "tel"
                                    : "email"
                            }
                            onChange={(e) => set(k, e.target.value)}
                            aria-invalid={Boolean(errors[k])}
                            className={`${inputCls} mt-2`}
                          />
                          {errors[k] ? <p className="mt-2 text-xs text-destructive">{errors[k]}</p> : null}
                        </div>
                      ))}
                    </div>

                    <p className="mt-10 text-sm font-medium text-navy">Preferred contact method</p>
                    <ChoiceGrid
                      name="Contact preference"
                      options={contactPrefs}
                      value={form.contactPreference}
                      onChange={(v) => set("contactPreference", v)}
                      columns={3}
                    />

                    <div className="mt-8">
                      <label className={labelCls} htmlFor="pf-message">
                        Anything else? (optional)
                      </label>
                      <textarea
                        id="pf-message"
                        rows={4}
                        maxLength={1000}
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        className="mt-2 w-full border border-border bg-white p-4 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
                      />
                      {errors.message ? (
                        <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                      ) : null}
                    </div>

                    <input
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      className="hidden"
                    />
                  </div>
                ) : null}

                {step === 5 ? (
                  <div>
                    <StepHeading title="Review and submit." hint="Check anything you'd like to adjust." />
                    <dl className="mt-8 divide-y divide-border border-y border-border">
                      {(
                        [
                          ["Goal", form.goal],
                          ["Property Type", form.propertyType],
                          ["Price Range", form.priceRange],
                          ["Location", form.location],
                          ["Timeline", form.timeline],
                          ["Employment", form.employment],
                          ["Credit", form.creditBand],
                          ["First Purchase", form.firstTime],
                          ["Name", `${form.first} ${form.last}`.trim()],
                          ["Phone", form.phone],
                          ["Email", form.email],
                          ["Preferred Contact", form.contactPreference],
                          ["Notes", form.message],
                        ] as const
                      )
                        .filter(([, v]) => v)
                        .map(([k, v]) => (
                          <div key={k} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-4">
                            <dt className="min-w-0 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                              {k}
                            </dt>
                            <dd className="min-w-0 break-words text-right text-sm text-navy">{v}</dd>
                          </div>
                        ))}
                    </dl>

                    <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                      Your information is submitted privately and used only to contact you about your
                      inquiry. Please do not send Social Security numbers, account numbers or financial
                      documents through this form — a secure application system will be provided when
                      needed. Submitting this form is not an application and is not a commitment to lend.
                    </p>

                    {status === "error" ? (
                      <p className="mt-6 border border-destructive/40 bg-destructive/5 p-4 text-xs text-destructive">
                        {serverError}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                <div className="mt-12 flex flex-col-reverse gap-3 sm:flex-row sm:items-center">
                  {step > 0 ? (
                    <CTA variant="outlineDark" arrow={false} onClick={back}>
                      Back
                    </CTA>
                  ) : null}
                  {step < STEPS.length - 1 ? (
                    <CTA variant="navy" onClick={next}>
                      Continue
                    </CTA>
                  ) : (
                    <CTA
                      variant="gold"
                      onClick={submit}
                      className={status === "sending" ? "pointer-events-none opacity-60" : ""}
                    >
                      {status === "sending" ? "Submitting…" : "Submit My Request"}
                    </CTA>
                  )}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
