import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./ui";

export const faqs = [
  {
    q: "How does mortgage pre-qualification work?",
    a: "Pre-qualification is an early conversation about your goals, income, assets and credit profile. It helps you understand what financing options may be available. It is not an approval or a commitment to lend.",
  },
  {
    q: "What information should I have ready?",
    a: "A general sense of your income, employment history, monthly debts, savings available for a down payment and the type of property you're considering is a good starting point.",
  },
  {
    q: "How much should I put down?",
    a: "Down payment requirements vary by program, property type and lender guidelines. The right amount depends on your goals, cash reserves and monthly payment comfort — not a single universal number.",
  },
  {
    q: "What types of properties can I finance?",
    a: "Financing may be available for primary residences, second homes and investment properties, subject to program guidelines, property condition and lender approval.",
  },
  {
    q: "Can self-employed borrowers apply?",
    a: "Yes. Self-employed and business-owner borrowers can apply. Documentation requirements differ from W-2 income, so it's helpful to discuss your income structure early.",
  },
  {
    q: "Can I finance an investment property?",
    a: "Investment property financing may be available and typically follows different guidelines than owner-occupied financing, including down payment and reserve requirements.",
  },
  {
    q: "Should I speak with a mortgage broker before finding a home?",
    a: "Many buyers find it helpful. Understanding your financing position first can make property search and offer conversations clearer.",
  },
  {
    q: "How long can the mortgage process take?",
    a: "Timelines vary based on the loan type, documentation, appraisal, title work and lender turn times. Your timeline will be discussed once your situation is reviewed.",
  },
  {
    q: "Can I refinance an existing mortgage?",
    a: "Refinancing may be an option depending on your equity, credit profile, current loan and goals. Whether it makes sense is an individual analysis.",
  },
  {
    q: "What happens after I submit my information?",
    a: "A member of the Premier Lending NC team can review your request and follow up to discuss next steps. Submitting a form does not mean you are approved or pre-qualified.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1000px] px-5 lg:px-10">
        <Reveal>
          <SectionHead eyebrow="FAQ" title={<>Questions before you move forward?</>} />
        </Reveal>

        <div className="mt-14 border-t border-border">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={Math.min(i, 4) * 60}>
              <div className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 text-left"
                >
                  <span className="min-w-0 font-display text-lg text-navy">{f.q}</span>
                  <span
                    className={`shrink-0 text-gold transition-transform duration-300 ${
                      open === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-400 ${
                    open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 pr-8 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
