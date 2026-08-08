import type { Service } from "@/content/services";
import { serviceBySlug } from "@/content/services";
import { locations } from "@/content/locations";
import { PageHero, SiteLayout } from "./SiteLayout";
import { SiteLink } from "./SiteLink";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";
import { LeadFunnel } from "./LeadFunnel";
import { FaqList } from "./FaqList";
import { ContactStrip } from "./ContactStrip";

export function ServiceTemplate({ service }: { service: Service }) {
  const related = service.related.map(serviceBySlug).filter(Boolean) as Service[];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.h1}
        body={service.intro}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Loan Programs", path: "/loan-programs" },
          { name: service.nav, path: `/${service.slug}` },
        ]}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <Reveal>
                <Eyebrow>Who this fits</Eyebrow>
                <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-[2.5rem]">
                  Is this the right structure for you?
                </h2>
                <span className="gold-rule mt-7" />
                <ul className="mt-8 space-y-4">
                  {service.forWho.map((f) => (
                    <li key={f} className="flex gap-4 text-base leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="mt-16 grid gap-6 sm:grid-cols-2">
                {service.highlights.map((h, i) => (
                  <Reveal key={h.t} delay={i * 110}>
                    <article className="luxe-card h-full p-8">
                      <h3 className="display text-lg text-navy">{h.t}</h3>
                      <span className="mt-4 block h-px w-10 bg-gold" />
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{h.b}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={120}>
              <aside className="sticky top-28 space-y-6">
                <div className="bg-navy p-8 text-white shadow-[var(--shadow-luxe)]">
                  <p className="eyebrow text-gold">Next step</p>
                  <p className="display mt-4 text-2xl text-white">Check your options.</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    A short conversation is enough to see which programs realistically fit your situation.
                    No obligation, no pressure.
                  </p>
                  <div className="mt-7 space-y-3">
                    <CTA to="/contact" variant="gold" className="w-full">
                      Get Pre-Qualified
                    </CTA>
                    <CTA to="/calculator" variant="outlineLight" arrow={false} className="w-full">
                      Calculate My Payment
                    </CTA>
                  </div>
                </div>

                <div className="border border-border bg-white p-8">
                  <p className="eyebrow text-muted-foreground">Related programs</p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <SiteLink
                          to={`/${r.slug}`}
                          className="arrow-cta text-navy transition-colors hover:text-gold"
                        >
                          {r.h1}
                        </SiteLink>
                      </li>
                    ))}
                  </ul>
                  <p className="eyebrow mt-8 text-muted-foreground">Serving</p>
                  <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    {locations.slice(0, 6).map((l) => (
                      <li key={l.slug}>
                        <SiteLink
                          to={`/locations/${l.slug}`}
                          className="transition-colors hover:text-gold"
                        >
                          {l.city}
                        </SiteLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-[2.5rem]">The process, step by step.</h2>
            <span className="gold-rule mt-7" />
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {service.process.map((s, i) => (
              <Reveal key={s.t} delay={i * 90}>
                <li className="h-full border border-border bg-white p-7">
                  <span className="font-display text-sm text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-4 text-base text-navy">{s.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FaqList
        eyebrow="Questions"
        heading={`${service.nav} — frequently asked`}
        faqs={service.faqs}
      />

      <LeadFunnel />
      <ContactStrip />

      <section className="bg-background pb-20">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Information on this page is general and educational. It is not a commitment to lend, an offer of
            credit, or financial advice. Program availability, guidelines, terms and eligibility are set by
            individual lenders and subject to underwriting, credit review, property review, verification of
            information and applicable law. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
