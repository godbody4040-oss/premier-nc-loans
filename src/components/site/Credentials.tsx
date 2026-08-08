import { Reveal } from "./Reveal";
import { CTA } from "./ui";

const credentials = [
  {
    label: "Licensing",
    title: "Licensed North Carolina mortgage brokerage",
    body: "Premier Lending NC operates as a mortgage brokerage in North Carolina. Company and individual NMLS identifiers are provided on request and on the licensing & disclosures page.",
  },
  {
    label: "Broker Model",
    title: "Multiple lenders, one point of contact",
    body: "As a broker, Premier Lending NC reviews financing options across lending partners rather than a single in-house product menu — and tells you plainly what fits and what doesn't.",
  },
  {
    label: "Fair Housing",
    title: "Equal Housing Opportunity",
    body: "Every inquiry is reviewed under the same standards. No approval, rate or outcome is promised before a lender review is complete.",
  },
  {
    label: "Privacy",
    title: "Information handled carefully",
    body: "Forms on this site never request Social Security numbers, account numbers or financial documents. A secure application system is provided when it's actually needed.",
  },
];

export function Credentials() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow text-gold">Credibility</p>
            <h2 className="display mt-5 text-[2rem] text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              What we can actually stand behind.
            </h2>
            <span className="gold-rule mt-8" />
            <p className="mt-7 text-base leading-relaxed text-white/65">
              No invented statistics, no borrowed logos, no promises made before a lender has reviewed your
              file. Only what can be verified.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2">
          {credentials.map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="bg-navy p-9 lg:p-11">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-gold">{c.label}</p>
              <h3 className="display mt-5 text-xl text-white lg:text-2xl">{c.title}</h3>
              <span className="mt-5 block h-px w-10 bg-gold" />
              <p className="mt-5 text-sm leading-relaxed text-white/60">{c.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <CTA to="/disclosures" variant="outlineLight" arrow={false}>
              Licensing &amp; Disclosures
            </CTA>
            <CTA to="/contact" variant="gold">
              Talk With Jorge
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
