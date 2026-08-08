import { Reveal } from "./Reveal";
import { Arrow, SectionHead } from "./ui";
import { Link } from "@tanstack/react-router";

export const solutions = [
  {
    title: "Home Purchase",
    body: "Explore financing options for purchasing your next home.",
    who: "Buyers with a property in mind or a search underway",
    consider: "Down payment, timeline and estimated carrying costs",
    cta: "Explore Home Loans",
    to: "/home-buyers",
  },
  {
    title: "First-Time Buyer",
    body: "Take the first step toward understanding your path to homeownership.",
    who: "Anyone purchasing their first property",
    consider: "Documentation, budgeting and the order of the steps",
    cta: "Start Here",
    to: "/home-buyers",
  },
  {
    title: "Refinancing",
    body: "Explore whether refinancing may align with your current financial goals.",
    who: "Homeowners reviewing an existing mortgage",
    consider: "Costs, time horizon and your overall objective",
    cta: "Explore Refinancing",
    to: "/mortgage-solutions",
  },
  {
    title: "Investment Property",
    body: "Explore financing possibilities for acquiring additional real-estate assets.",
    who: "Investors buying or refinancing rental property",
    consider: "Property type, structure and long-term strategy",
    cta: "Explore Investor Financing",
    to: "/investors",
  },
  {
    title: "Self-Employed",
    body: "Explore mortgage solutions for borrowers with non-traditional income profiles.",
    who: "Business owners, contractors and 1099 earners",
    consider: "How income is documented and reviewed",
    cta: "Discuss Your Options",
    to: "/contact",
  },
  {
    title: "Other Loan Solutions",
    body: "Discover additional financing options that may fit your circumstances.",
    who: "Situations that don't fit a standard category",
    consider: "What you're trying to accomplish, first",
    cta: "Talk With Jorge",
    to: "/contact",
  },
];

export function Solutions() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="Financing Options"
            title={
              <>
                The right loan
                <br />
                for the right move.
              </>
            }
            body="Explore financing solutions designed for different homeownership and real-estate goals."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
              <Link
                to={s.to}
                className="luxe-card group flex h-full flex-col justify-between p-9 lg:p-10"
              >
                <div>
                  <h3 className="display text-[1.6rem] text-navy">{s.title}</h3>
                  <span className="mt-5 block h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{s.body}</p>

                  <dl className="mt-7 space-y-4 border-t border-border pt-6 text-sm">
                    <div>
                      <dt className="text-[0.62rem] uppercase tracking-[0.16em] text-gold">Who it's for</dt>
                      <dd className="mt-1.5 leading-relaxed text-muted-foreground">{s.who}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.62rem] uppercase tracking-[0.16em] text-gold">
                        Worth considering
                      </dt>
                      <dd className="mt-1.5 leading-relaxed text-muted-foreground">{s.consider}</dd>
                    </div>
                  </dl>
                </div>
                <span className="arrow-cta mt-10 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors group-hover:text-gold">
                  {s.cta}
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            These categories describe general types of financing and are not offers of credit. Specific
            program availability, eligibility and terms are confirmed directly with Premier Lending NC and
            are subject to lender approval.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
