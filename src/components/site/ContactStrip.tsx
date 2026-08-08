import { business, telHref, formatAddress } from "@/config/business";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { CTA } from "./ui";

/**
 * Compact contact band for landing pages. Only renders verified details from
 * src/config/business.ts — never a placeholder.
 */
export function ContactStrip() {
  return (
    <section className="bg-navy py-16 text-white lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="eyebrow text-gold">Talk with a loan professional</p>
              <h2 className="display mt-4 text-[1.75rem] text-white sm:text-[2.25rem]">
                Explore your options with a real conversation.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
                Premier Lending NC serves clients across {business.serviceArea}. Share your goals and
                timeline and we will walk through what may realistically fit.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
                {business.phone ? (
                  <li>
                    <a
                      href={telHref(business.phone)}
                      onClick={() => track("phone_click", { location: "contact_strip" })}
                      className="transition-colors hover:text-gold"
                    >
                      {business.phone}
                    </a>
                  </li>
                ) : null}
                {business.email ? (
                  <li>
                    <a
                      href={`mailto:${business.email}`}
                      onClick={() => track("email_click", { location: "contact_strip" })}
                      className="transition-colors hover:text-gold"
                    >
                      {business.email}
                    </a>
                  </li>
                ) : null}
                {business.address ? <li>{formatAddress(business.address)}</li> : null}
              </ul>
            </div>
            <div className="space-y-3">
              <CTA
                to="/contact"
                variant="gold"
                className="w-full"
                onClick={() => track("talk_with_jorge_click", { location: "contact_strip" })}
              >
                Request a Consultation
              </CTA>
              <CTA to="/calculator" variant="outlineLight" arrow={false} className="w-full">
                Check Your Numbers
              </CTA>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
