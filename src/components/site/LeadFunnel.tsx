import { useState } from "react";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";

const goals = ["Buy a Home", "Refinance", "Buy an Investment Property", "Just Exploring"];
const timelines = ["As Soon As Possible", "1–3 Months", "3–6 Months", "6+ Months", "Not Sure"];
const employment = ["W-2 Employee", "Self-Employed", "Business Owner", "Retired", "Other"];

type Errors = Partial<Record<string, string>>;

export function LeadFunnel() {
  const [stage, setStage] = useState(1);
  const [goal, setGoal] = useState("");
  const [timeline, setTimeline] = useState("");
  const [form, setForm] = useState({
    first: "",
    last: "",
    phone: "",
    email: "",
    price: "",
    down: "",
    employment: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Errors = {};
    if (!form.first.trim() || form.first.length > 60) e.first = "Enter your first name.";
    if (!form.last.trim() || form.last.length > 60) e.last = "Enter your last name.";
    if (!/^[\d\s().+-]{10,20}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()) || form.email.length > 255)
      e.email = "Enter a valid email address.";
    if (form.message.length > 1000) e.message = "Message is too long.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (form.company) return; // honeypot
    if (!validate()) return;
    setStage(3);
  };

  const input =
    "min-h-12 w-full border border-border bg-white px-4 text-sm text-navy outline-none transition-colors focus:border-gold";
  const label = "block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground";

  return (
    <section className="bg-white py-24 lg:py-32" id="start">
      <div className="mx-auto max-w-[1100px] px-5 lg:px-10">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Get Pre-Qualified</Eyebrow>
            <div className="mt-8 flex items-center justify-center gap-2">
              {[1, 2, 3].map((s) => (
                <span
                  key={s}
                  className={`h-px w-14 transition-colors duration-500 ${
                    stage >= s ? "bg-gold" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 border border-border bg-background p-7 shadow-[var(--shadow-card)] sm:p-10 lg:p-14">
            {stage === 1 ? (
              <div>
                <h2 className="display text-[1.9rem] text-navy sm:text-[2.5rem]">
                  Let's start with the basics.
                </h2>
                <span className="gold-rule mt-7" />

                <p className="mt-10 text-sm font-medium text-navy">What are you looking to do?</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {goals.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGoal(g)}
                      className={`min-h-14 border px-5 text-left text-sm transition-all duration-300 ${
                        goal === g
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-border bg-white text-muted-foreground hover:border-navy/30"
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>

                <p className="mt-10 text-sm font-medium text-navy">
                  When are you looking to make your move?
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {timelines.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      className={`min-h-12 border px-5 text-xs uppercase tracking-[0.12em] transition-all duration-300 ${
                        timeline === t
                          ? "border-gold bg-gold/10 text-navy"
                          : "border-border bg-white text-muted-foreground hover:border-navy/30"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="mt-12">
                  <CTA
                    variant="navy"
                    onClick={() => goal && timeline && setStage(2)}
                    className={!goal || !timeline ? "pointer-events-none opacity-40" : ""}
                  >
                    Continue
                  </CTA>
                </div>
              </div>
            ) : null}

            {stage === 2 ? (
              <form onSubmit={submit} noValidate>
                <h2 className="display text-[1.9rem] text-navy sm:text-[2.5rem]">
                  Let's understand your goals.
                </h2>
                <span className="gold-rule mt-7" />

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {([
                    ["first", "First Name", "text"],
                    ["last", "Last Name", "text"],
                    ["phone", "Phone", "tel"],
                    ["email", "Email", "email"],
                    ["price", "Estimated Purchase Price", "text"],
                    ["down", "Estimated Down Payment", "text"],
                  ] as const).map(([k, l, type]) => (
                    <div key={k}>
                      <label className={label} htmlFor={k}>
                        {l}
                      </label>
                      <input
                        id={k}
                        type={type}
                        value={form[k]}
                        maxLength={255}
                        onChange={(e) => set(k, e.target.value)}
                        className={`${input} mt-2`}
                      />
                      {errors[k] ? <p className="mt-2 text-xs text-destructive">{errors[k]}</p> : null}
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <label className={label} htmlFor="employment">
                      Employment Type
                    </label>
                    <select
                      id="employment"
                      value={form.employment}
                      onChange={(e) => set("employment", e.target.value)}
                      className={`${input} mt-2`}
                    >
                      <option value="">Select</option>
                      {employment.map((e) => (
                        <option key={e} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className={label} htmlFor="message">
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      maxLength={1000}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      className="mt-2 w-full border border-border bg-white p-4 text-sm text-navy outline-none focus:border-gold"
                    />
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

                <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                  Your information is submitted privately and used only to contact you about your inquiry.
                  Please do not send Social Security numbers, account numbers or other sensitive financial
                  documents through this form — a secure application system will be provided when needed.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <CTA type="submit" variant="gold">
                    Submit My Information
                  </CTA>
                  <CTA variant="outlineDark" arrow={false} onClick={() => setStage(1)}>
                    Back
                  </CTA>
                </div>
              </form>
            ) : null}

            {stage === 3 ? (
              <div>
                <h2 className="display text-[1.9rem] text-navy sm:text-[2.5rem]">
                  You're one step closer.
                </h2>
                <span className="gold-rule mt-7" />
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
                  Thanks, {form.first || "there"}. Your information has been received. A member of the
                  Premier Lending NC team can review your request and follow up regarding next steps.
                </p>
                <p className="mt-5 max-w-xl text-xs leading-relaxed text-muted-foreground">
                  Submitting this form does not mean you have been approved or pre-qualified for financing.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <CTA href="tel:" variant="navy" arrow={false}>
                    Call Premier Lending NC
                  </CTA>
                  <CTA to="/" variant="outlineDark" arrow={false}>
                    Return to Website
                  </CTA>
                </div>
              </div>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
