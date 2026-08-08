import textureImg from "@/assets/arch-texture.jpg";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";

const points = [
  {
    t: "Statewide by design",
    b: "Premier Lending NC works with clients across North Carolina, from the Piedmont to the coast and the mountains.",
  },
  {
    t: "Local market context",
    b: "Property taxes, insurance and HOA costs vary widely by county — those details belong in the conversation early.",
  },
  {
    t: "Remote-friendly process",
    b: "Conversations, document review and updates can happen by phone, email or video wherever you are in the state.",
  },
];

export function NorthCarolina() {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 lg:py-32">
      <img
        src={textureImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,17,31,0.95),rgba(13,27,42,0.82))]" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 lg:px-10">
        <Reveal>
          <Eyebrow>North Carolina</Eyebrow>
          <h2 className="display mt-6 text-[2.1rem] text-white sm:text-[3rem] lg:text-[3.4rem]">
            Financing across
            <br />
            North Carolina.
          </h2>
          <span className="gold-rule mt-8" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70">
            Every market in the state moves a little differently. The goal is the same everywhere: a
            financing plan you understand before you commit to it.
          </p>
          <div className="mt-10">
            <CTA to="/contact" variant="gold">
              Start Your Conversation
            </CTA>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <ul className="space-y-px bg-white/10">
            {points.map((p) => (
              <li
                key={p.t}
                className="bg-navy/70 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-navy-deep lg:p-10"
              >
                <h3 className="display text-xl text-white">{p.t}</h3>
                <span className="mt-4 block h-px w-10 bg-gold" />
                <p className="mt-5 text-sm leading-relaxed text-white/60">{p.b}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-relaxed text-white/45">
            Service areas and licensed jurisdictions are confirmed directly with Premier Lending NC.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
