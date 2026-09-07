import { specialtySolutions } from "@/content/specialty";
import itinImg from "@/assets/specialty-itin.jpg";
import bankImg from "@/assets/specialty-bank-statement.jpg";
import rentalImg from "@/assets/specialty-rental.jpg";
import flipImg from "@/assets/specialty-flip.jpg";
import refiImg from "@/assets/specialty-refinance.jpg";
import residentsImg from "@/assets/specialty-residents.jpg";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { CTA } from "./ui";

const images: Record<string, string> = {
  "itin-home-loans": itinImg,
  "bank-statement-home-loans": bankImg,
  "rental-property-financing": rentalImg,
  "fix-and-flip-financing": flipImg,
  "refinancing-cash-out": refiImg,
  "non-permanent-resident-mortgages": residentsImg,
};

type Tone = "light" | "cream" | "dark";

const tones: Record<string, Tone> = {
  "itin-home-loans": "light",
  "bank-statement-home-loans": "cream",
  "rental-property-financing": "light",
  "fix-and-flip-financing": "dark",
  "refinancing-cash-out": "cream",
  "non-permanent-resident-mortgages": "light",
};

export function HomeSolutions() {
  return (
    <div id="solutions" className="scroll-mt-24">
      <h2 className="sr-only">Our six mortgage and investment solutions</h2>
      {specialtySolutions.map((s, i) => {
        const tone = tones[s.slug] ?? "light";
        const dark = tone === "dark";
        const imageFirst = i % 2 === 1;

        return (
          <section
            key={s.slug}
            id={s.slug}
            aria-labelledby={`sec-${s.slug}`}
            className={`scroll-mt-[var(--header-h)] py-20 lg:py-28 ${
              dark ? "bg-navy" : tone === "cream" ? "bg-cream" : "bg-background"
            }`}
          >
            <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
              <Reveal className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                <div className="relative overflow-hidden rounded-[3px]">
                  <img
                    src={images[s.slug]}
                    alt={s.imageAlt}
                    loading="lazy"
                    width={1408}
                    height={1056}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04]"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 border border-gold/25"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>

              <Reveal delay={120} className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <div>
                  <p className="eyebrow text-gold">{s.category}</p>
                  <h3
                    id={`sec-${s.slug}`}
                    className={`display mt-5 text-[1.85rem] leading-tight sm:text-[2.3rem] lg:text-[2.6rem] ${
                      dark ? "text-white" : "text-navy"
                    }`}
                  >
                    {s.headline}
                  </h3>
                  <span className="gold-rule mt-7" />

                  <div className="mt-7 space-y-4">
                    {s.body.map((p) => (
                      <p
                        key={p}
                        className={`text-base leading-relaxed ${
                          dark ? "text-white/70" : "text-muted-foreground"
                        }`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <ul
                    className={`mt-8 space-y-3 border-t pt-7 text-sm ${
                      dark ? "border-white/15" : "border-border"
                    }`}
                  >
                    {s.points.map((p) => (
                      <li
                        key={p.t}
                        className={`flex gap-3 leading-relaxed ${
                          dark ? "text-white/80" : "text-foreground/80"
                        }`}
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                          aria-hidden="true"
                        />
                        {p.t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <CTA
                      to={s.path}
                      variant={dark ? "gold" : "navy"}
                      className="hover-scale"
                      onClick={() => track("specialty_cta_click", { solution: s.slug, location: "home" })}
                    >
                      {s.cta}
                    </CTA>
                    <CTA
                      to="/contact"
                      variant={dark ? "outlineLight" : "outlineDark"}
                      arrow={false}
                      className="hover-scale"
                    >
                      Contact Premier Lending NC
                    </CTA>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <div className="bg-background pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
            These descriptions are general and educational. They are not offers of credit or a
            commitment to lend. Program availability, guidelines, terms and eligibility are set by
            individual lenders and subject to underwriting, verification and applicable law. Equal
            Housing Opportunity.
          </p>
        </div>
      </div>
    </div>
  );
}
