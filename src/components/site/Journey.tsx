import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { track } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { Arrow, SectionHead } from "./ui";

const steps = [
  {
    n: "01",
    t: "Discover",
    b: "Tell us where you are and what you're trying to accomplish.",
    detail: "Get oriented: what the process looks like, and which financing categories may apply to your goal.",
    links: [
      { label: "Explore loan programs", to: "/loan-programs" },
      { label: "Compare mortgage options", to: "/compare-loan-programs" },
    ],
  },
  {
    n: "02",
    t: "Prepare",
    b: "Review your financing position and potential options.",
    detail: "Look at price range, down payment and estimated monthly cost before you start touring homes.",
    links: [
      { label: "Home affordability calculator", to: "/mortgage-tools" },
      { label: "Payment calculator", to: "/calculator" },
    ],
  },
  {
    n: "03",
    t: "Get Qualified",
    b: "Move forward with a clearer understanding of your financing.",
    detail: "Share your details so your options can be reviewed and a pre-qualification conversation can begin.",
    links: [
      { label: "Get my free mortgage quote", to: "/contact" },
      { label: "Pre-approval overview", to: "/mortgage-pre-approval" },
    ],
  },
  {
    n: "04",
    t: "Shop",
    b: "Work with your real-estate team to pursue the right property.",
    detail: "Search with a defined budget, then align your offer with the financing you've reviewed.",
    links: [
      { label: "First-time buyer guide", to: "/first-time-home-buyers" },
      { label: "Buyer resources", to: "/resources" },
    ],
  },
  {
    n: "05",
    t: "Close",
    b: "Complete the final steps toward ownership.",
    detail: "Documentation is finalised, figures are confirmed, and the loan moves toward closing.",
    links: [
      { label: "NC home buyer checklist", to: "/nc-home-buyer-checklist" },
      { label: "Resource center", to: "/resources" },
    ],
  },
];

export function Journey() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState<string | null>("01");

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.85 - r.top) / (r.height * 0.9);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="The Home Buyer Journey"
            title={
              <>
                From first conversation
                <br />
                to closing day.
              </>
            }
          />
        </Reveal>

        <div ref={ref} className="relative mt-16 pl-10 lg:mt-20 lg:pl-0">
          <div className="absolute left-[15px] top-0 h-full w-px bg-border lg:left-0 lg:top-[46px] lg:h-px lg:w-full">
            <div
              className="h-full bg-gold transition-[width,height] duration-300 lg:h-px"
              style={{
                height: `${progress * 100}%`,
                width: "100%",
              }}
            />
          </div>
          <div className="absolute left-0 top-[46px] hidden h-px w-full bg-border lg:block">
            <div className="h-px bg-gold" style={{ width: `${progress * 100}%` }} />
          </div>

          <ol className="grid gap-12 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 110} className="relative">
                <p className="font-display text-3xl text-gold/70">{s.n}</p>
                <span className="absolute -left-10 top-2 grid h-[9px] w-[9px] place-items-center rounded-full bg-gold lg:left-0 lg:top-[42px]" />
                <h3 className="display mt-7 text-xl text-navy lg:mt-16">
                  <button
                    type="button"
                    aria-expanded={open === s.n}
                    aria-controls={`journey-${s.n}`}
                    onClick={() => {
                      const next = open === s.n ? null : s.n;
                      setOpen(next);
                      if (next) track("roadmap_stage_open", { stage: s.n, name: s.t });
                    }}
                    className="inline-flex min-h-11 items-center gap-3 text-left transition-colors hover:text-gold"
                  >
                    {s.t}
                    <span
                      aria-hidden="true"
                      className={`text-gold transition-transform duration-300 ${open === s.n ? "rotate-90" : ""}`}
                    >
                      <Arrow />
                    </span>
                  </button>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
                <div
                  id={`journey-${s.n}`}
                  hidden={open !== s.n}
                  className="mt-4 border-l-2 border-gold/40 pl-4"
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  <ul className="mt-4 space-y-2">
                    {s.links.map((l) => (
                      <li key={l.to + l.label}>
                        <Link
                          to={l.to}
                          onClick={() => track("roadmap_stage_open", { stage: s.n, target: l.to })}
                          className="arrow-cta inline-flex min-h-11 items-center text-sm text-navy transition-colors hover:text-gold"
                        >
                          {l.label}
                          <Arrow />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
