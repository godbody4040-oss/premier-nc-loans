import { useState } from "react";
import { track, trackOnce } from "@/lib/analytics";
import { submitLead } from "@/lib/leads";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";

const goals = ["Buy a Home", "Refinance", "Buy an Investment Property", "Just Exploring"];
const creditBands = [
  "Excellent (740+)",
  "Good (700–739)",
  "Fair (640–699)",
  "Building (below 640)",
  "Not Sure",
];
const priceRanges = ["Under $250k", "$250k – $450k", "$450k – $750k", "$750k – $1.2M", "Over $1.2M", "Not Sure"];
const downPayments = ["Less than 3%", "3% – 5%", "5% – 10%", "10% – 20%", "20% or more", "Not Sure"];
const timelines = ["As Soon As Possible", "1–3 Months", "3–6 Months", "6+ Months", "Not Sure"];
const contactPrefs = ["Phone", "Email", "Either"];

const STEPS = ["Your Goal", "Credit", "Price", "Down Payment", "Timeline", "Contact"] as const;

type Form = {
  goal: string;
  creditBand: string;
  priceRange: string;
  downPayment: string;
  timeline: string;
  first: string;
  last: string;
  email: string;
  phone: string;
  zip: string;
  contactPreference: string;
  message: string;
  company: string;
};

const empty: Form = {
  goal: "",
  creditBand: "",
  priceRange: "",
  downPayment: "",
  timeline: "",
  first: "",
  last: "",
  email: "",
  phone: "",
  zip: "",
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
    if (s === 1 && !form.creditBand) e.creditBand = "Choose the range that fits best.";
    if (s === 2 && !form.priceRange) e.priceRange = "Select an estimated price range.";
    if (s === 3 && !form.downPayment) e.downPayment = "Select a down payment range.";
    if (s === 4 && !form.timeline) e.timeline = "Select a timeline.";
    if (s === 5) {
      if (!form.first.trim() || form.first.length > 60) e.first = "Enter your first name.";
      if (!form.last.trim() || form.last.length > 60) e.last = "Enter your last name.";
      if (!/^[\d\s().+-]{10,20}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()) || form.email.length > 255)
        e.email = "Enter a valid email address.";
      if (form.zip && !/^\d{5}$/.test(form.zip.trim())) e.zip = "Enter a 5-digit ZIP code.";
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
    for (let s = 0; s < STEPS.length; s++) {
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

  const summary = (
    [
      ["Goal", form.goal],
      ["Credit", form.creditBand],
      ["Price Range", form.priceRange],
      ["Down Payment", form.downPayment],
      ["Timeline", form.timeline],
    ] as const
  ).filter(([, v]) => v);

  return (
    <section className="bg-white py-24 lg:py-32" id="start">
      <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Get My Free Mortgage Quote</Eyebrow>
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
            <ol className="mt-4 hidden gap-2 sm:grid sm:grid-cols-6">
              {STEPS.map((s, i) => (
                <li
                  key={s}
                  className={`truncate text-[0.58rem] uppercase tracking-[0.14em] transition-colors ${
                    i <= step || status === "done" ? "text-navy" : "text-muted-foreground/60"
                  }`}
                >
                  {s}
                </li>
              ))}
            </ol>
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

                {step === 1 ? (
                  <div>
                    <StepHeading
                      title="How would you describe your credit?"
                      hint="An estimate is fine — nothing here triggers a credit check."
                    />
                    <ChoiceGrid
                      name="Credit"
                      options={creditBands}
                      value={form.creditBand}
                      onChange={(v) => set("creditBand", v)}
                      columns={3}
                    />
                    {errors.creditBand ? (
                      <p className="mt-3 text-xs text-destructive">{errors.creditBand}</p>
                    ) : null}
                  </div>
                ) : null}

                {step === 2 ? (
                  <div>
                    <StepHeading
                      title="What price range are you considering?"
                      hint="A rough range is all we need to start."
                    />
                    <ChoiceGrid
                      name="Price range"
                      options={priceRanges}
                      value={form.priceRange}
                      onChange={(v) => set("priceRange", v)}
                      columns={3}
                    />
                    {errors.priceRange ? (
                      <p className="mt-3 text-xs text-destructive">{errors.priceRange}</p>
                    ) : null}
                  </div>
                ) : null}

                {step === 3 ? (
                  <div>
                    <StepHeading
                      title="How much are you planning to put down?"
                      hint="Down payment shapes which programs are worth reviewing first."
                    />
                    <ChoiceGrid
                      name="Down payment"
                      options={downPayments}
                      value={form.downPayment}
                      onChange={(v) => set("downPayment", v)}
                      columns={3}
                    />
                    {errors.downPayment ? (
                      <p className="mt-3 text-xs text-destructive">{errors.downPayment}</p>
                    ) : null}
                  </div>
                ) : null}

                {step === 4 ? (
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

                {step === 5 ? (
                  <div>
                    <StepHeading title="How can we reach you?" hint="Last step — then we'll take it from here." />

                    {summary.length ? (
                      <dl className="mt-8 flex flex-wrap gap-2">
                        {summary.map(([k, v]) => (
                          <div
                            key={k}
                            className="border border-border bg-white px-4 py-2 text-[0.7rem] text-navy"
                          >
                            <dt className="inline uppercase tracking-[0.14em] text-muted-foreground">{k}: </dt>
                            <dd className="inline font-medium">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      {(
                        [
                          ["first", "First Name", "text"],
                          ["last", "Last Name", "text"],
                          ["phone", "Phone", "tel"],
                          ["email", "Email", "email"],
                          ["zip", "ZIP Code (optional)", "text"],
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
                            maxLength={k === "zip" ? 5 : 255}
                            inputMode={k === "zip" ? "numeric" : undefined}
                            autoComplete={
                              k === "first"
                                ? "given-name"
                                : k === "last"
                                  ? "family-name"
                                  : k === "phone"
                                    ? "tel"
                                    : k === "zip"
                                      ? "postal-code"
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
                      {status === "sending" ? "Submitting…" : "Get My Free Mortgage Quote"}
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
