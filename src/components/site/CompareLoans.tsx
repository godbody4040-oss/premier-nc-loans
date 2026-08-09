import { useState } from "react";
import { track } from "@/lib/analytics";
import { services, type Service } from "@/content/services";
import { Reveal } from "./Reveal";
import { CTA, SectionHead } from "./ui";
import { SiteLink } from "./SiteLink";

const COMPARABLE = [
  "conventional-loans",
  "fha-loans",
  "va-loans",
  "usda-loans",
  "jumbo-loans",
] as const;

const programs = COMPARABLE.map((slug) => services.find((s) => s.slug === slug)).filter(
  Boolean,
) as Service[];

export function CompareLoans() {
  const [selected, setSelected] = useState<string[]>([
    "conventional-loans",
    "fha-loans",
    "va-loans",
  ]);

  const toggle = (slug: string) => {
    setSelected((prev) => {
      const next = prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug];
      track("compare_program_select", { program: slug, selected: next.length });
      return next.length ? next : prev;
    });
  };

  const shown = programs.filter((p) => selected.includes(p.slug));

  return (
    <section className="bg-background py-20 lg:py-28" id="compare">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="Compare Mortgage Options"
            title={
              <>
                Programs, side
                <br />
                by side.
              </>
            }
            body="Select the programs you want to look at. Each summary is educational and general — specific eligibility, costs and terms are determined by the lender and your full application."
          />
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Select programs to compare">
            {programs.map((p) => {
              const on = selected.includes(p.slug);
              return (
                <button
                  key={p.slug}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(p.slug)}
                  className={`min-h-11 border px-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    on
                      ? "border-gold bg-navy text-white"
                      : "border-border bg-white text-muted-foreground hover:border-gold hover:text-navy"
                  }`}
                >
                  {p.nav}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {shown.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <article className="flex h-full flex-col border border-border bg-white p-8 shadow-[var(--shadow-card)]">
                <span className="text-[0.62rem] uppercase tracking-[0.18em] text-gold">{p.eyebrow}</span>
                <h3 className="display mt-4 text-xl text-navy">{p.nav}</h3>
                <span className="mt-4 block h-px w-10 bg-gold" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

                <p className="mt-7 text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Often considered by
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {p.forWho.slice(0, 3).map((w) => (
                    <li key={w} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                      <span className="min-w-0">{w}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
                  What to review
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {p.highlights.slice(0, 2).map((h) => (
                    <li key={h.t} className="flex gap-3">
                      <span className="mt-2 h-px w-3 shrink-0 bg-gold" />
                      <span className="min-w-0">{h.t}</span>
                    </li>
                  ))}
                </ul>

                <SiteLink
                  to={`/${p.slug}`}
                  className="arrow-cta mt-auto pt-8 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:text-gold"
                >
                  Full program details
                </SiteLink>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 border border-border bg-white p-8 text-center shadow-[var(--shadow-card)] lg:p-12">
            <h3 className="display text-2xl text-navy sm:text-[2rem]">
              Not sure which option may fit your situation?
            </h3>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A short pre-qualification conversation is the fastest way to narrow the list to the structures
              that actually apply to you.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CTA to="/contact" variant="navy" onClick={() => track("compare_cta_click", { target: "prequal" })}>
                Get Pre-Qualified
              </CTA>
              <CTA
                to="/mortgage-tools"
                variant="outlineDark"
                arrow={false}
                onClick={() => track("compare_cta_click", { target: "tools" })}
              >
                Run the Numbers
              </CTA>
            </div>
            <p className="mt-7 text-xs leading-relaxed text-muted-foreground">
              Program characteristics are general and educational. Eligibility, costs and terms are set by the
              lender and confirmed only through a complete application.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
