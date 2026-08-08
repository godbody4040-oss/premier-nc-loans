import { Reveal } from "./Reveal";
import { CTA, SectionHead } from "./ui";

const pillars = [
  {
    t: "Verified reviews only",
    b: "Client feedback is published here only after it has been provided and confirmed by Premier Lending NC.",
  },
  {
    t: "No stock stories",
    b: "No sample names, placeholder quotes or purchased testimonials appear on this site.",
  },
  {
    t: "Straightforward claims",
    b: "No promises of approval, rates, savings or outcomes — only what can be supported.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="Client Stories"
            title="Credibility, earned in writing."
            body="Reviews from real clients will be published here as they are collected and verified."
            center
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 120}>
              <article className="luxe-card flex h-full flex-col p-9 lg:p-10">
                <span className="grid h-10 w-10 place-items-center border border-gold/50 font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display mt-7 text-xl text-navy">{p.t}</h3>
                <span className="mt-4 block h-px w-10 bg-gold" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              Worked with Premier Lending NC? Your experience can be shared here.
            </p>
            <CTA to="/contact" variant="outlineDark" arrow={false}>
              Share Your Experience
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
