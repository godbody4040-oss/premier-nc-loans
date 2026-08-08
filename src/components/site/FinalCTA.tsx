import ctaImg from "@/assets/final-cta.jpg";
import { Reveal } from "./Reveal";
import { CTA } from "./ui";

export function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy">
      <img
        src={ctaImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1088}
        className="ken-burns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.85),rgba(7,17,31,0.92))]" />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-24 text-center lg:px-10 lg:py-32">
        <Reveal>
          <span className="gold-rule mx-auto" />
          <h2 className="display mx-auto mt-8 max-w-3xl text-[2.25rem] text-white sm:text-[3.25rem] lg:text-[4rem]">
            Ready to make
            <br />
            your next move?
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/65">
            Let's start with a conversation about where you are—and where you're going.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CTA to="/contact" variant="gold">
              Get Pre-Qualified
            </CTA>
            <CTA href="tel:" variant="outlineLight" arrow={false}>
              Call Premier Lending NC
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
