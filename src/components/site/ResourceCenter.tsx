import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { Arrow } from "./ui";

type Category = "Home Buying" | "Refinancing" | "Investors" | "Tools";

const categories: Array<"All" | Category> = ["All", "Home Buying", "Refinancing", "Investors", "Tools"];

type Item = {
  t: string;
  b: string;
  to: string;
  cta: string;
  category: Category;
  minutes: string;
};

const items: Item[] = [
  {
    t: "The NC Home Buyer Starter Guide",
    b: "Understand the major steps involved in preparing for a home purchase, from organizing documents to what happens after an offer is accepted.",
    to: "/resources",
    cta: "Request the Guide",
    category: "Home Buying",
    minutes: "Guide",
  },
  {
    t: "First-Time Buyer Roadmap",
    b: "A plain-language walkthrough of the buying process for anyone purchasing their first home in North Carolina.",
    to: "/home-buyers",
    cta: "Read the Roadmap",
    category: "Home Buying",
    minutes: "5 min read",
  },
  {
    t: "Mortgage Payment Calculator",
    b: "Explore how price, down payment, rate, term, taxes and insurance shape an estimated monthly payment.",
    to: "/calculator",
    cta: "Open Calculator",
    category: "Tools",
    minutes: "Interactive",
  },
  {
    t: "Pre-Qualification Walkthrough",
    b: "Six short steps that outline your goal, property, timeline and contact preferences — no credit pull, no obligation.",
    to: "/contact",
    cta: "Start the Walkthrough",
    category: "Tools",
    minutes: "3 min",
  },
  {
    t: "Financing Options Overview",
    b: "See the categories of financing that may fit different property goals and how brokers compare them across lenders.",
    to: "/mortgage-solutions",
    cta: "Explore Options",
    category: "Refinancing",
    minutes: "4 min read",
  },
  {
    t: "When Refinancing Is Worth Reviewing",
    b: "The questions worth asking before assuming a refinance makes sense — and the costs that belong in the math.",
    to: "/mortgage-solutions",
    cta: "Review the Basics",
    category: "Refinancing",
    minutes: "4 min read",
  },
  {
    t: "Investor Financing Basics",
    b: "How financing factors into a longer-term real-estate strategy, including what lenders typically look at on investment property.",
    to: "/investors",
    cta: "For Investors",
    category: "Investors",
    minutes: "5 min read",
  },
  {
    t: "Building a Portfolio in North Carolina",
    b: "Considerations for buyers moving from a single property toward multiple doors across NC markets.",
    to: "/investors",
    cta: "See the Approach",
    category: "Investors",
    minutes: "4 min read",
  },
];

export function ResourceCenter() {
  const [active, setActive] = useState<"All" | Category>("All");
  const shown = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((c) => {
              const on = active === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={on}
                  className={`min-h-11 border px-5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${
                    on
                      ? "border-gold bg-navy text-white"
                      : "border-border bg-white text-muted-foreground hover:border-navy/30 hover:text-navy"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {shown.map((it, i) => (
            <Reveal key={it.t} delay={(i % 2) * 100}>
              <Link
                to={it.to}
                onClick={() => track("resource_view", { resource: it.t, category: it.category })}
                className="luxe-card group flex h-full flex-col justify-between p-9 lg:p-11"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[0.62rem] uppercase tracking-[0.2em]">
                    <span className="text-gold">{it.category}</span>
                    <span className="text-muted-foreground">{it.minutes}</span>
                  </div>
                  <h2 className="display mt-5 text-[1.5rem] text-navy lg:text-[1.7rem]">{it.t}</h2>
                  <span className="mt-5 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{it.b}</p>
                </div>
                <span className="arrow-cta mt-10 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy">
                  {it.cta}
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
