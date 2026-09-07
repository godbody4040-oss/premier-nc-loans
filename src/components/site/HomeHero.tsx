import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-home.jpg";
import { track } from "@/lib/analytics";
import { CTA } from "./ui";

const pillars = [
  "ITIN & alternative documentation",
  "Rental and fix-and-flip investment",
  "Refinancing and cash-out reviews",
  "Guidance in English or Spanish",
];

export function HomeHero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(Math.min(window.scrollY, 600) * 0.15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-[88svh] items-center overflow-hidden bg-navy">
      <img
        src={heroImg}
        alt="Luxury North Carolina home at dusk with warm interior lighting"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-[115%] w-full object-cover"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(7,17,31,0.94)_0%,rgba(7,17,31,0.78)_45%,rgba(7,17,31,0.45)_100%)]" />

      <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-5 pb-16 pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14 lg:px-10 lg:pb-20 lg:pt-28">
        <div className="rise-in max-w-2xl" style={{ animationDelay: "80ms" }}>
          <p className="eyebrow text-gold">North Carolina Mortgage Broker</p>
          <h1 className="display mt-7 text-[2.5rem] text-white sm:text-[3.5rem] lg:text-[4.2rem]">
            Mortgage Solutions Built Around Your Goals.
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-white/70">
            Home financing and real estate investment solutions designed to help eligible borrowers
            and investors explore their next opportunity.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTA
              href="#solutions"
              variant="gold"
              className="hover-scale shadow-[var(--shadow-luxe)]"
              onClick={() => track("hero_cta_prequal_click", { location: "hero" })}
            >
              Explore Your Options
            </CTA>
            <CTA
              to="/contact"
              variant="outlineLight"
              arrow={false}
              className="hover-scale"
              onClick={() => track("hero_cta_calculator_click", { location: "hero" })}
            >
              Contact Premier Lending NC
            </CTA>
          </div>

          <p className="mt-8 text-[0.7rem] uppercase tracking-[0.22em] text-white/55">
            Home Purchase <span className="text-gold">•</span> Refinance <span className="text-gold">•</span>{" "}
            Investment
          </p>
          <p className="mt-3 text-sm text-white/45">Start with a conversation. No pressure. No guesswork.</p>
        </div>

        <div className="rise-in lg:justify-self-end" style={{ animationDelay: "260ms" }}>
          <div className="float-slow w-full max-w-sm border border-white/12 bg-white/[0.06] p-8 backdrop-blur-xl">
            <p className="eyebrow text-gold">Six Ways We Help</p>
            <span className="gold-rule mt-5" />
            <ul className="mt-7 space-y-5">
              {pillars.map((s) => (
                <li key={s} className="flex items-start gap-3.5 text-sm text-white/85">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold/60 text-[0.6rem] text-gold">
                    ✓
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
