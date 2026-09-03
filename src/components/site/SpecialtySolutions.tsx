import { specialtySolutions } from "@/content/specialty";
import { Reveal } from "./Reveal";
import { SiteLink } from "./SiteLink";
import { Arrow, SectionHead } from "./ui";

export function SpecialtySolutions() {
  return (
    <section id="specialty-solutions" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="Specialty Solutions"
            title={
              <>
                Financing built around
                <br />
                real situations.
              </>
            }
            body="Six areas where we help borrowers and investors who do not fit a standard profile. Program availability, terms and eligibility are confirmed individually and subject to approval."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {specialtySolutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 110}>
              <SiteLink
                to={s.path}
                className="luxe-card group flex h-full flex-col justify-between bg-white p-9 lg:p-10"
              >
                <div>
                  <span className="text-[0.62rem] uppercase tracking-[0.18em] text-gold">
                    {s.category}
                  </span>
                  <h3 className="display mt-4 text-[1.45rem] leading-snug text-navy">{s.headline}</h3>
                  <span className="mt-5 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>

                  <ul className="mt-7 space-y-3 border-t border-border pt-6 text-sm">
                    {s.points.map((p) => (
                      <li key={p.t} className="flex gap-3 leading-relaxed text-muted-foreground">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                          aria-hidden="true"
                        />
                        {p.t}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="arrow-cta mt-10 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors group-hover:text-gold">
                  {s.cta}
                  <Arrow />
                </span>
              </SiteLink>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            These descriptions are general and educational. They are not offers of credit or a commitment
            to lend. Program availability, guidelines, terms and eligibility are set by individual lenders
            and subject to underwriting, verification and applicable law. Equal Housing Opportunity.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
