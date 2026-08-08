import { Reveal } from "./Reveal";
import { CTA } from "./ui";
import { track } from "@/lib/analytics";
import { business, formatAddress, hasSocial, telHref } from "@/config/business";

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-6 first:border-t-0 first:pt-0">
      <p className="text-[0.62rem] uppercase tracking-[0.2em] text-gold">{label}</p>
      <div className="mt-3 text-sm leading-relaxed text-navy">{children}</div>
    </div>
  );
}

export function ContactDetails() {
  const a = business.address;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-10">
        <Reveal>
          <div>
            <p className="eyebrow text-gold">Direct Contact</p>
            <h2 className="display mt-5 text-[1.9rem] text-navy sm:text-[2.5rem]">
              Speak with someone
              <br />
              who does this every day.
            </h2>
            <span className="gold-rule mt-7" />

            <div className="mt-10">
              <Row label="Phone">
                {business.phone ? (
                  <a
                    href={telHref(business.phone)}
                    onClick={() => track("phone_click", { location: "contact_details" })}
                    className="transition-colors hover:text-gold"
                  >
                    {business.phone}
                  </a>
                ) : (
                  <span className="text-muted-foreground">
                    A direct line is shared as soon as your inquiry is received.
                  </span>
                )}
              </Row>

              <Row label="Email">
                {business.email ? (
                  <a
                    href={`mailto:${business.email}`}
                    onClick={() => track("email_click", { location: "contact_details" })}
                    className="transition-colors hover:text-gold"
                  >
                    {business.email}
                  </a>
                ) : (
                  <span className="text-muted-foreground">
                    Messages sent through the form below are routed directly to the team.
                  </span>
                )}
              </Row>

              <Row label="Office">
                {a ? (
                  <address className="not-italic">{formatAddress(a)}</address>
                ) : (
                  <span className="text-muted-foreground">
                    Consultations are held by phone, video or in person by appointment across{" "}
                    {business.serviceArea}.
                  </span>
                )}
              </Row>

              <Row label="Hours">
                {business.hours.length > 0 ? (
                  <ul className="space-y-2">
                    {business.hours.map((h) => (
                      <li key={h.days} className="flex flex-wrap justify-between gap-4">
                        <span>{h.days}</span>
                        <span className="text-muted-foreground">{h.hours}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-muted-foreground">
                    Appointments are scheduled around your availability, including evenings and weekends.
                  </span>
                )}
              </Row>

              {hasSocial ? (
                <Row label="Connect">
                  <div className="flex flex-wrap gap-5">
                    {business.social.linkedin ? (
                      <a href={business.social.linkedin} className="transition-colors hover:text-gold">
                        LinkedIn
                      </a>
                    ) : null}
                    {business.social.facebook ? (
                      <a href={business.social.facebook} className="transition-colors hover:text-gold">
                        Facebook
                      </a>
                    ) : null}
                    {business.social.instagram ? (
                      <a href={business.social.instagram} className="transition-colors hover:text-gold">
                        Instagram
                      </a>
                    ) : null}
                  </div>
                </Row>
              ) : null}
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="flex h-full flex-col justify-between bg-navy p-9 text-white shadow-[var(--shadow-luxe)] lg:p-12">
            <div>
              <p className="eyebrow text-gold">Schedule</p>
              <h3 className="display mt-5 text-[1.6rem] text-white lg:text-[2rem]">
                Schedule a conversation.
              </h3>
              <span className="gold-rule mt-6" />
              <p className="mt-7 text-sm leading-relaxed text-white/65">
                A short call to understand your goals, your timeline and which financing paths are worth
                reviewing. No credit pull and no obligation.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-white/80">
                {[
                  "Review your goal and timeline",
                  "Talk through realistic financing paths",
                  "Agree on a clear next step",
                ].map((li) => (
                  <li key={li} className="flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold/60 text-[0.6rem] text-gold">
                      ✓
                    </span>
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 space-y-3">
              {business.schedulingUrl ? (
                <CTA
                  href={business.schedulingUrl}
                  variant="gold"
                  className="w-full"
                  onClick={() => track("talk_with_jorge_click", { location: "contact_scheduler" })}
                >
                  Schedule a Conversation
                </CTA>
              ) : (
                <CTA
                  href="#start"
                  variant="gold"
                  className="w-full"
                  onClick={() => track("talk_with_jorge_click", { location: "contact_scheduler" })}
                >
                  Schedule a Conversation
                </CTA>
              )}
              <CTA href="#start" variant="outlineLight" arrow={false} className="w-full">
                Get Pre-Qualified
              </CTA>
              <p className="pt-2 text-xs leading-relaxed text-white/45">
                Requests are reviewed directly by Premier Lending NC. Submitting a request is not an
                application and is not a commitment to lend.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
