import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { LeadMagnet } from "@/components/site/LeadMagnet";
import { FAQ } from "@/components/site/FAQ";
import { Reveal } from "@/components/site/Reveal";
import { Arrow } from "@/components/site/ui";
import { Link } from "@tanstack/react-router";

const title = "Home Financing Resources NC | Premier Lending NC";
const description =
  "Educational resources for North Carolina home buyers and real-estate investors: buyer guides, payment estimates and financing basics.";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Page,
});

const items = [
  {
    t: "The NC Home Buyer Starter Guide",
    b: "Understand the major steps involved in preparing for a home purchase.",
    to: "/resources",
    cta: "Request the Guide",
  },
  {
    t: "Mortgage Payment Calculator",
    b: "Explore how price, down payment, rate and term affect an estimated payment.",
    to: "/calculator",
    cta: "Open Calculator",
  },
  {
    t: "Financing Options Overview",
    b: "See the categories of financing that may fit different property goals.",
    to: "/mortgage-solutions",
    cta: "Explore Options",
  },
  {
    t: "Investor Financing Basics",
    b: "How financing can factor into a longer-term real-estate strategy.",
    to: "/investors",
    cta: "For Investors",
  },
];

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resources"
        title="Clarity before commitment."
        body="Educational material to help you understand the financing side of your next move."
      />
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 md:grid-cols-2 lg:px-10">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 2) * 120}>
              <Link to={it.to} className="luxe-card group flex h-full flex-col justify-between p-9 lg:p-11">
                <div>
                  <h2 className="display text-[1.6rem] text-navy">{it.t}</h2>
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
      </section>
      <LeadMagnet />
      <FAQ />
    </SiteLayout>
  );
}
