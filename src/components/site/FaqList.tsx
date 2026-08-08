import { useState } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

export function FaqList({
  eyebrow = "Questions",
  heading,
  faqs,
}: {
  eyebrow?: string;
  heading: string;
  faqs: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="display mt-6 max-w-3xl text-[1.9rem] text-navy sm:text-[2.5rem]">{heading}</h2>
          <span className="gold-rule mt-7" />
        </Reveal>

        <div className="mt-12 max-w-3xl divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex min-h-14 w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-base font-medium text-navy">{f.q}</span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
