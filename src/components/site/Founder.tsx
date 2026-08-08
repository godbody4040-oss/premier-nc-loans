import jorgeImg from "@/assets/jorge.jpg";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";

export function Founder() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 lg:grid-cols-[0.85fr_1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <div className="relative">
            <span className="absolute -left-4 -top-4 hidden h-32 w-32 border-l border-t border-gold/50 lg:block" />
            <img
              src={jorgeImg}
              alt="Jorge Vasquez, North Carolina mortgage broker and founder of Premier Lending NC"
              loading="lazy"
              width={1008}
              height={1264}
              className="relative w-full object-cover shadow-[var(--shadow-luxe)]"
            />
          </div>
        </Reveal>

        <Reveal delay={140}>
          <Eyebrow>Meet Your Mortgage Broker</Eyebrow>
          <h2 className="display mt-6 text-[2.1rem] text-navy sm:text-[3rem]">Financing is personal.</h2>
          <span className="gold-rule mt-8" />
          <p className="mt-8 font-display text-2xl text-navy">Jorge Vasquez</p>
          <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
            NC Mortgage Broker · Economic Consultant
          </p>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground">
            "Buying property is one of the biggest financial decisions many people make. My goal is to make
            the financing side easier to understand, easier to navigate and aligned with what you're trying
            to accomplish."
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Whether you're purchasing a home or exploring your next investment opportunity, Premier Lending
            NC is built around personal guidance—not a one-size-fits-all approach.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <CTA to="/contact" variant="navy">
              Connect With Jorge
            </CTA>
            <div className="flex gap-2">
              {["IG", "FB", "IN"].map((s) => (
                <span
                  key={s}
                  title="Link a verified account before launch"
                  className="grid h-11 w-11 place-items-center border border-border text-[0.65rem] tracking-[0.1em] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
