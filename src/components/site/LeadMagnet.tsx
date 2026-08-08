import { useState } from "react";
import { Reveal } from "./Reveal";
import { CTA } from "./ui";

export function LeadMagnet() {
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!first.trim()) return setError("Enter your first name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setError("Enter a valid email address.");
    setError("");
    setDone(true);
  };

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <div className="grid gap-12 border border-border bg-white p-8 shadow-[var(--shadow-card)] sm:p-12 lg:grid-cols-2 lg:gap-20 lg:p-16">
            <div>
              <p className="eyebrow text-gold">Free Resource</p>
              <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-[2.5rem]">
                Buying in North Carolina?
                <br />
                Start with the numbers.
              </h2>
              <span className="gold-rule mt-7" />
              <p className="mt-7 font-display text-lg text-navy">
                The North Carolina Home Buyer Starter Guide
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A simple guide to help you understand the major steps involved in preparing for a home
                purchase.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                <span className="rounded-[2px] border border-dashed border-gold/60 bg-gold/10 px-2 py-0.5 font-mono text-[0.7rem] text-navy">
                  [PLACEHOLDER PDF]
                </span>{" "}
                Replace with the final guide before launch.
              </p>
            </div>

            <div className="lg:border-l lg:border-border lg:pl-16">
              {done ? (
                <div>
                  <p className="display text-2xl text-navy">Thanks, {first}.</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Your guide request has been received. We'll send the starter guide to {email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5" noValidate>
                  <div>
                    <label htmlFor="lm-first" className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      First Name
                    </label>
                    <input
                      id="lm-first"
                      value={first}
                      maxLength={60}
                      onChange={(e) => setFirst(e.target.value)}
                      className="mt-2 min-h-12 w-full border border-border bg-white px-4 text-sm text-navy outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="lm-email" className="block text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="lm-email"
                      type="email"
                      value={email}
                      maxLength={255}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 min-h-12 w-full border border-border bg-white px-4 text-sm text-navy outline-none focus:border-gold"
                    />
                  </div>
                  {error ? <p className="text-xs text-destructive">{error}</p> : null}
                  <CTA type="submit" variant="navy" className="w-full">
                    Get the Free Guide
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
