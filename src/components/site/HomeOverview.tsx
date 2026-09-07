import { Reveal } from "./Reveal";
import { CTA } from "./ui";

const paths = [
  "ITIN Home Loans",
  "Bank Statement Home Loans",
  "Rental Property Investors",
  "Fix-and-Flip Investors",
  "Refinancing / Cash Out",
  "Non-Permanent Residents",
];

export function HomeOverview() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1100px] px-5 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow text-gold">Six Mortgage Paths. One Clear Conversation.</p>
          <h2 className="display mx-auto mt-6 max-w-4xl text-[2rem] leading-tight text-navy sm:text-[2.75rem] lg:text-[3.25rem]">
            Financing for real situations — not one-size-fits-all lending.
          </h2>
          <span className="gold-rule mx-auto mt-8" />
        </Reveal>

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-navy/80 sm:text-lg">
            Every borrower has a different story. Some file taxes traditionally. Some use an ITIN.
            Some invest in rental properties or fix-and-flip projects. Some need to refinance or
            access equity. Some are building a life here on a non-permanent status. At Premier
            Lending NC, we review your situation and help you explore the mortgage or investment
            financing options that may fit your goals. No pressure. No guesswork. Just clear
            guidance in English or Spanish.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
            {paths.map((p) => (
              <span
                key={p}
                className="inline-flex items-center rounded-full border border-navy/15 bg-white/70 px-4 py-2 text-sm font-medium text-navy backdrop-blur-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTA href="#solutions" variant="navy">
              Explore the Six Sections
            </CTA>
            <CTA to="/contact" variant="outlineDark" arrow={false}>
              Contact Premier Lending NC
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
