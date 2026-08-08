import { useState } from "react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import investorImg from "@/assets/investor.jpg";
import finalImg from "@/assets/final-cta.jpg";
import { Reveal } from "./Reveal";
import { Arrow, SectionHead } from "./ui";

type Path = {
  key: string;
  label: string;
  headline: string;
  body: string;
  next: string;
  to: string;
  image: string;
  alt: string;
};

const paths: Path[] = [
  {
    key: "first-time",
    label: "First-Time Buyer",
    headline: "Start with what you can plan for.",
    body: "Understand the steps involved in preparing for a first purchase, from documentation to estimated monthly costs.",
    next: "See the buyer roadmap",
    to: "/home-buyers",
    image: heroImg,
    alt: "North Carolina home exterior at dusk",
  },
  {
    key: "buying",
    label: "Buying a Home",
    headline: "Know your options before you offer.",
    body: "Review the financing categories that may apply to your purchase so you can move with a clear plan.",
    next: "Explore purchase financing",
    to: "/mortgage-solutions",
    image: finalImg,
    alt: "Elegant residential entrance",
  },
  {
    key: "refinance",
    label: "Refinancing",
    headline: "Re-evaluate an existing loan.",
    body: "Look at how a refinance could fit your current goals, and what factors are worth reviewing first.",
    next: "Explore refinancing",
    to: "/mortgage-solutions",
    image: heroImg,
    alt: "North Carolina home exterior at dusk",
  },
  {
    key: "investor",
    label: "Real Estate Investor",
    headline: "Financing as part of the strategy.",
    body: "Discuss how structure, timing and financing can factor into acquiring or refinancing investment property.",
    next: "For investors",
    to: "/investors",
    image: investorImg,
    alt: "Modern multi-unit residential property",
  },
  {
    key: "self-employed",
    label: "Self-Employed",
    headline: "Non-traditional income, reviewed carefully.",
    body: "Business owners and self-employed borrowers often need a closer look at documentation and structure.",
    next: "Start a conversation",
    to: "/contact",
    image: investorImg,
    alt: "Modern multi-unit residential property",
  },
  {
    key: "unsure",
    label: "Not Sure Where to Start",
    headline: "Begin with a conversation.",
    body: "If you're early in the process, a short discussion can help clarify what to look at first.",
    next: "Talk with Jorge",
    to: "/contact",
    image: finalImg,
    alt: "Elegant residential entrance",
  },
];

export function FindYourPath() {
  const [active, setActive] = useState(0);
  const current = paths[active]!;

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="Find Your Path"
            title={
              <>
                Where are you
                <br />
                in the process?
              </>
            }
            body="Select the situation that sounds closest to yours and we'll point you toward the right next step."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal>
            <ul className="flex flex-col border-t border-border" role="tablist" aria-label="Find your path">
              {paths.map((p, i) => {
                const selected = i === active;
                return (
                  <li key={p.key} className="border-b border-border">
                    <button
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActive(i)}
                      className={`group grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 text-left transition-colors duration-300 ${
                        selected ? "text-navy" : "text-muted-foreground hover:text-navy"
                      }`}
                    >
                      <span className="min-w-0">
                        <span className="block font-display text-lg sm:text-xl">{p.label}</span>
                        <span
                          className={`mt-2 block h-px bg-gold transition-all duration-500 ${
                            selected ? "w-16" : "w-6 group-hover:w-12"
                          }`}
                        />
                      </span>
                      <span
                        className={`shrink-0 transition-transform duration-300 ${
                          selected ? "translate-x-1 text-gold" : "text-muted-foreground/60"
                        }`}
                      >
                        <Arrow />
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <article
              key={current.key}
              className="animate-fade-in overflow-hidden border border-border bg-background shadow-[var(--shadow-card)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/8]">
                <img
                  src={current.image}
                  alt={current.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,17,31,0.15),rgba(7,17,31,0.72))]" />
                <p className="absolute bottom-6 left-6 right-6 font-display text-2xl text-white sm:text-3xl">
                  {current.headline}
                </p>
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-base leading-relaxed text-muted-foreground">{current.body}</p>
                <Link
                  to={current.to}
                  className="arrow-cta mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:text-gold"
                >
                  {current.next}
                  <Arrow />
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
