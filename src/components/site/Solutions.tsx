import { Reveal } from "./Reveal";
import { Arrow, SectionHead } from "./ui";
import { Link } from "@tanstack/react-router";

export const solutions = [
  {
    title: "Home Purchase",
    body: "Explore financing options for purchasing your next home.",
    cta: "Explore Home Loans",
    to: "/home-buyers",
  },
  {
    title: "First-Time Buyer",
    body: "Take the first step toward understanding your path to homeownership.",
    cta: "Start Here",
    to: "/home-buyers",
  },
  {
    title: "Refinancing",
    body: "Explore whether refinancing may align with your current financial goals.",
    cta: "Explore Refinancing",
    to: "/mortgage-solutions",
  },
  {
    title: "Investment Property",
    body: "Explore financing possibilities for acquiring additional real-estate assets.",
    cta: "Explore Investor Financing",
    to: "/investors",
  },
  {
    title: "Self-Employed",
    body: "Explore mortgage solutions for borrowers with non-traditional income profiles.",
    cta: "Discuss Your Options",
    to: "/contact",
  },
  {
    title: "Other Loan Solutions",
    body: "Discover additional financing options that may fit your circumstances.",
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
                </div>
                <span className="arrow-cta mt-10 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy">
                  {s.cta}
                  <Arrow />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-12 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            Specific loan programs are shown only after verification.{" "}
            <span className="rounded-[2px] border border-dashed border-gold/60 bg-gold/10 px-2 py-0.5 font-mono text-[0.7rem] text-navy">
              [VERIFIED LOAN PROGRAMS]
            </span>{" "}
            — confirm availability, eligibility and licensing before publication.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
