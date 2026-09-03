import type { SpecialtySolution } from "@/content/specialty";
import { track } from "@/lib/analytics";
import { PageHero, SiteLayout } from "./SiteLayout";
import { SiteLink } from "./SiteLink";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";
import { LeadFunnel } from "./LeadFunnel";
import { ContactStrip } from "./ContactStrip";

export function SpecialtyTemplate({
  solution,
  image,
}: {
  solution: SpecialtySolution;
  image?: string;
}) {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={solution.category}
        title={solution.headline}
        body={solution.summary}
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Mortgage Solutions", path: "/mortgage-solutions" },
          { name: solution.nav, path: solution.path },
        ]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
            <div>
              {image ? (
                <Reveal>
                  <img
                    src={image}
                    alt={solution.imageAlt}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="mb-12 aspect-[16/10] w-full object-cover"
                  />
                </Reveal>
              ) : null}

              <Reveal>
                <Eyebrow>Overview</Eyebrow>
                <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-[2.4rem]">
                  What this solution covers.
                </h2>
                <span className="gold-rule mt-7" />
                <div className="mt-8 space-y-5">
                  {solution.body.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>

              <div className="mt-14 grid gap-6 sm:grid-cols-2">
                {solution.points.map((p, i) => (
                  <Reveal key={p.t} delay={i * 110}>
                    <article className="luxe-card h-full p-8">
                      <h3 className="display text-lg text-navy">{p.t}</h3>
                      <span className="mt-4 block h-px w-10 bg-gold" />
                      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={120}>
              <aside className="space-y-6 lg:sticky lg:top-24">
                <div className="bg-navy p-8 text-white shadow-[var(--shadow-luxe)]">
                  <p className="eyebrow text-gold">Next step</p>
                  <p className="display mt-4 text-2xl text-white">{solution.cta}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    Share your situation and we will review which options may be available to you.
                    No obligation.
                  </p>
                  <div className="mt-7 space-y-3">
                    <CTA
                      to="/contact"
                      variant="gold"
                      className="w-full"
                      onClick={() =>
                        track("specialty_cta_click", { solution: solution.slug, target: "contact" })
                      }
                    >
                      {solution.cta}
                    </CTA>
                    <CTA
                      to="/calculator"
                      variant="outlineLight"
                      arrow={false}
                      className="w-full"
                      onClick={() =>
                        track("specialty_cta_click", { solution: solution.slug, target: "calculator" })
                      }
                    >
                      Calculate My Payment
                    </CTA>
                  </div>
                </div>

                <div className="border border-border bg-white p-8">
                  <p className="eyebrow text-muted-foreground">Related solutions</p>
                  <ul className="mt-5 space-y-3 text-sm">
                    {solution.related.map((r) => (
                      <li key={r.to}>
                        <SiteLink
                          to={r.to}
                          className="arrow-cta text-navy transition-colors hover:text-gold"
                        >
                          {r.label}
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

      <LeadFunnel />
      <ContactStrip />

      <section className="bg-background pb-20">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Information on this page is general and educational. It is not a commitment to lend, an offer of
            credit, or financial, legal or immigration advice. Program availability, guidelines, terms and
            eligibility are set by individual lenders and subject to underwriting, credit review, property
            review, verification of information and applicable law. Equal Housing Opportunity.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
