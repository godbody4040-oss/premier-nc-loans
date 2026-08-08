import archImg from "@/assets/arch-texture.jpg";
import { Reveal } from "./Reveal";
import { CTA } from "./ui";

export function SignatureCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <img
        src={archImg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1600}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,17,31,0.96),rgba(7,17,31,0.7))]" />
      <div className="relative mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <span className="gold-rule !w-24" />
          <h2 className="display mt-8 max-w-3xl text-[2.1rem] text-white sm:text-[3rem] lg:text-[3.6rem]">
            Before you shop,
            <br />
            know your options.
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65">
            A stronger understanding of your financing position can help you approach your next property
            with greater confidence.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTA to="/contact" variant="gold">
              Start My Pre-Qualification
            </CTA>
            <CTA to="/about" variant="outlineLight">
              Speak With Jorge
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
