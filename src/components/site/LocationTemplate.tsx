import type { Location } from "@/content/locations";
import { locations } from "@/content/locations";
import { serviceBySlug } from "@/content/services";
import { PageHero, SiteLayout } from "./SiteLayout";
import { SiteLink } from "./SiteLink";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";
import { FaqList } from "./FaqList";
import { LeadFunnel } from "./LeadFunnel";
import { ContactStrip } from "./ContactStrip";

export function LocationTemplate({ location }: { location: Location }) {
  const services = location.services.map(serviceBySlug).filter(Boolean)!;
  const others = locations.filter((l) => l.slug !== location.slug);

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`${location.city}, North Carolina`}
        title={location.h1}
        body={location.intro}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
          { name: location.city, path: `/locations/${location.slug}` },
        ]}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal>
            <Eyebrow>Local context</Eyebrow>
            <h2 className="display mt-6 max-w-3xl text-[1.9rem] text-navy sm:text-[2.5rem]">
              What shapes financing in {location.city}.
            </h2>
            <span className="gold-rule mt-7" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {location.context.map((c, i) => (
              <Reveal key={c.t} delay={i * 110}>
                <article className="luxe-card h-full p-8">
                  <h3 className="display text-lg text-navy">{c.t}</h3>
                  <span className="mt-4 block h-px w-10 bg-gold" />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full border border-border bg-white p-8">
                <p className="eyebrow text-muted-foreground">Areas we work in</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {location.neighborhoods.map((n) => (
                    <li
                      key={n}
                      className="border border-border px-3 py-1.5 text-[0.72rem] uppercase tracking-[0.12em] text-muted-foreground"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
                  {location.buyerProfile}
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full bg-navy p-8 text-white">
                <p className="eyebrow text-gold">Programs {location.city} clients ask about</p>
                <ul className="mt-6 space-y-4">
                  {services.map((s) => (
                    <li key={s!.slug}>
                      <SiteLink
                        to={`/${s!.slug}`}
                        className="arrow-cta text-sm text-white transition-colors hover:text-gold"
                      >
                        {s!.h1}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <CTA to="/contact" variant="gold" className="w-full">
                    Start My Pre-Qualification
                  </CTA>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqList heading={`Mortgage questions from ${location.city} buyers`} faqs={location.faqs} />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow text-muted-foreground">Other North Carolina areas we serve</p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-navy">
            {others.map((l) => (
              <li key={l.slug}>
                <SiteLink to={`/locations/${l.slug}`} className="transition-colors hover:text-gold">
                  {l.city}, {l.state}
                </SiteLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LeadFunnel />
      <ContactStrip />

      <section className="bg-background pb-20">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Premier Lending NC serves clients throughout North Carolina, including {location.city} and{" "}
            {location.county}. This page is educational and is not a commitment to lend or an offer of credit.
            Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
