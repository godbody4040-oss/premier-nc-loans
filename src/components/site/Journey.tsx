import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./ui";

const steps = [
  { n: "01", t: "Discover", b: "Tell us where you are and what you're trying to accomplish." },
  { n: "02", t: "Prepare", b: "Review your financing position and potential options." },
  { n: "03", t: "Shop", b: "Move forward with a clearer understanding of your financing." },
  { n: "04", t: "Offer", b: "Work with your real-estate team to pursue the right property." },
  { n: "05", t: "Close", b: "Complete the final steps toward ownership." },
];

export function Journey() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

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
                <h3 className="display mt-7 text-xl text-navy lg:mt-16">{s.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
