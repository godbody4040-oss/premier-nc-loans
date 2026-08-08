import investorImg from "@/assets/investor.jpg";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";

const cards = [
  { t: "Property Acquisition", b: "Explore financing possibilities for your next property." },
  { t: "Portfolio Growth", b: "Explore strategies for expanding your real-estate holdings." },
  { t: "Refinancing", b: "Evaluate financing options for an existing property." },
  { t: "Investment Strategy", b: "Start a conversation about your broader real-estate goals." },
];

export function Investors() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={investorImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={1104}
          className="ken-burns h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.93),rgba(7,17,31,0.86))]" />

      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <Eyebrow>For Real-Estate Investors</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[2.1rem] text-white sm:text-[3rem] lg:text-[3.6rem]">
            Your next property
            <br />
            deserves a strategy.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65">
            Real estate investing is about more than finding a property. Financing, structure and timing can
            all play an important role in your strategy.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 110}>
              <article className="group h-full bg-navy/70 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-navy-deep lg:p-10">
                <h3 className="display text-xl text-white">{c.t}</h3>
                <span className="mt-5 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                <p className="mt-6 text-sm leading-relaxed text-white/60">{c.b}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12">
            <CTA to="/contact" variant="gold">
              Talk About Investment Financing
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
