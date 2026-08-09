import { useState } from "react";
import { track, trackOnceFor } from "@/lib/analytics";
import { submitLead } from "@/lib/leads";
import { Reveal } from "./Reveal";
import { CTA } from "./ui";

export function LeadMagnet({
  eyebrow = "Free Resource",
  heading = (
    <>
      Buying in North Carolina?
      <br />
      Start with the numbers.
    </>
  ),
  resource = "The North Carolina Home Buyer Starter Guide",
  blurb = "A simple guide to help you understand the major steps involved in preparing for a home purchase.",
  bullets = [
    "What to organize before you start looking",
    "How monthly costs are typically estimated",
    "Questions worth asking early in the process",
  ],
}: {
  eyebrow?: string;
  heading?: React.ReactNode;
  resource?: string;
  blurb?: string;
  bullets?: string[];
} = {}) {
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (company) return; // honeypot
    if (!first.trim()) return setError("Enter your first name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setError("Enter a valid email address.");
    setError("");
    setStatus("sending");
    const result = await submitLead({
      leadType: "resource-download",
      source: "resource-guide",
      first: first.trim(),
      email: email.trim(),
      resource,
    });
    if (!result.ok) {
      setStatus("idle");
      setError(result.error ?? "We couldn't submit your request. Please try again.");
      return;
    }
    track("resource_download", { resource });
    track("resource_download_complete", { resource });
    setStatus("done");
  };

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <div className="grid gap-12 border border-border bg-white p-8 shadow-[var(--shadow-card)] sm:p-12 lg:grid-cols-2 lg:gap-20 lg:p-16">
            <div>
              <p className="eyebrow text-gold">{eyebrow}</p>
              <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-[2.5rem]">{heading}</h2>
              <span className="gold-rule mt-7" />
              <p className="mt-7 font-display text-lg text-navy">{resource}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{blurb}</p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {bullets.map((li) => (
                  <li key={li} className="flex items-start gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span className="leading-relaxed">{li}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-16">
              {status === "done" ? (
                <div className="animate-fade-in">
                  <p className="display text-2xl text-navy">Thanks, {first}.</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Your guide request has been received. We'll send it to {email}.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={submit}
                  className="space-y-5"
                  noValidate
                  onFocus={() => trackOnceFor(resource, "resource_download_start", { resource })}
                >
                  <div>
                    <label
                      htmlFor="lm-first"
                      className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      First Name
                    </label>
                    <input
                      id="lm-first"
                      value={first}
                      maxLength={60}
                      autoComplete="given-name"
                      onChange={(e) => setFirst(e.target.value)}
                      className="mt-2 min-h-12 w-full border border-border bg-white px-4 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lm-email"
                      className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="lm-email"
                      type="email"
                      value={email}
                      maxLength={255}
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 min-h-12 w-full border border-border bg-white px-4 text-sm text-navy outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20"
                    />
                  </div>
                  <input
                    tabIndex={-1}
                    aria-hidden="true"
                    autoComplete="off"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="hidden"
                  />
                  {error ? <p className="text-xs text-destructive">{error}</p> : null}
                  <CTA
                    type="submit"
                    variant="navy"
                    className={`w-full ${status === "sending" ? "pointer-events-none opacity-60" : ""}`}
                  >
                    {status === "sending" ? "Sending…" : "Get the Free Guide"}
                  </CTA>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    We'll only use your email to send the guide and occasional updates. No sensitive
                    financial information is collected here.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
