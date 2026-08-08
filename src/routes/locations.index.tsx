import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { SiteLink } from "@/components/site/SiteLink";
import { Reveal } from "@/components/site/Reveal";
import { Eyebrow } from "@/components/site/ui";
import { ContactStrip } from "@/components/site/ContactStrip";
import { LeadFunnel } from "@/components/site/LeadFunnel";
import { locations } from "@/content/locations";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

const title = "North Carolina Service Areas | Premier Lending NC";
const description =
  "Premier Lending NC serves buyers, homeowners and investors across the Triangle — Raleigh, Durham, Cary, Apex, Garner, Wake Forest, Chapel Hill, Morrisville and Holly Springs.";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    ...pageHead({ title, description, path: "/locations" }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/locations" },
          ]),
        ),
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service Areas"
        title={
          <>
            Financing guidance,
            <br />
            close to home.
          </>
        }
        body="Local market conditions change how a mortgage file is structured. Choose your area to see what matters where you're buying."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/locations" },
        ]}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Reveal>
            <Eyebrow>North Carolina</Eyebrow>
            <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-[2.5rem]">Where we work.</h2>
            <span className="gold-rule mt-7" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((l, i) => (
              <Reveal key={l.slug} delay={(i % 3) * 100}>
                <SiteLink
                  to={`/locations/${l.slug}`}
                  className="group block h-full border border-border bg-white p-8 transition-colors hover:border-gold"
                >
                  <span className="text-[0.62rem] uppercase tracking-[0.18em] text-gold">{l.county}</span>
                  <h3 className="display mt-4 text-xl text-navy">{l.city}, {l.state}</h3>
                  <span className="mt-4 block h-px w-10 bg-gold" />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{l.description}</p>
                  <span className="arrow-cta mt-6 inline-block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-navy transition-colors group-hover:text-gold">
                    View {l.city} guide
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
