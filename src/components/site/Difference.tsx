import { Reveal } from "./Reveal";
import { SectionHead } from "./ui";

const cards = [
  {
    n: "01",
    t: "Understand",
    b: "We start by understanding your goals, financial picture and property plans.",
  },
  {
    n: "02",
    t: "Strategize",
    b: "We help you explore financing options that may fit your situation and objectives.",
  },
  {
    n: "03",
    t: "Move Forward",
    b: "Once you understand your options, you can make your next move with greater confidence.",
  },
];

export function Difference() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="The Premier Difference"
            title={
              <>
                Mortgages aren't
                <br />
                one-size-fits-all.
              </>
            }
            body="Your financing strategy should reflect where you are today—and where you're trying to go next."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.n} delay={i * 140}>
              <article className="luxe-card group h-full p-9 lg:p-11">
                <p className="font-display text-4xl text-gold/70">{c.n}</p>
                <h3 className="display mt-8 text-2xl text-navy">{c.t}</h3>
                <span className="mt-5 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
