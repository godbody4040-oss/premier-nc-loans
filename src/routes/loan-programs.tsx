import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SiteLink } from "@/components/site/SiteLink";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/ui";
import { ContactStrip } from "@/components/site/ContactStrip";
import { LeadFunnel } from "@/components/site/LeadFunnel";
import { services } from "@/content/services";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

const title = "Mortgage Loan Programs in North Carolina | Premier Lending NC";
const description =
  "Compare North Carolina mortgage loan programs: home loans, first-time buyer options, FHA, VA, conventional, refinancing, investment property financing and pre-approval.";

export const Route = createFileRoute("/loan-programs")({
  head: () => ({
    ...pageHead({ title, description, path: "/loan-programs" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Loan Programs", path: "/loan-programs" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Mortgage loan programs",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.h1,
            url: `https://premier-nc-loans.lovable.app/${s.slug}`,
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Loan Programs"
        title={
          <>
            Every path to
            <br />
            the right loan.
          </>
        }
        body="Programs differ in down payment, mortgage insurance, credit expectations and documentation. Start with the one closest to your situation."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Loan Programs", path: "/loan-programs" },
        ]}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal>
            <Eyebrow>Programs</Eyebrow>
            <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-[2.5rem]">Explore your options.</h2>
            <span className="gold-rule mt-7" />
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Want to see the major categories next to each other first?{" "}
              <SiteLink to="/compare-loan-programs" className="text-navy underline underline-offset-4 transition-colors hover:text-gold">
                Compare mortgage options
              </SiteLink>
              .
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100}>
                <SiteLink
                  to={`/${s.slug}`}
                  className="group block h-full border border-border bg-white p-8 transition-colors hover:border-gold"
                >
                  <span className="text-[0.62rem] uppercase tracking-[0.18em] text-gold">{s.eyebrow}</span>
                  <h3 className="display mt-4 text-xl text-navy">{s.nav}</h3>
                  <span className="mt-4 block h-px w-10 bg-gold" />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  <span className="arrow-cta mt-6 inline-block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors group-hover:text-gold">
                    Learn more
                  </span>
                </SiteLink>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LeadFunnel />
      <ContactStrip />
    </SiteLayout>
  );
}
