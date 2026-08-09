import { createFileRoute } from "@tanstack/react-router";
import { serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Investors } from "@/components/site/Investors";
import { Calculator } from "@/components/site/Calculator";
import { FinalCTA } from "@/components/site/FinalCTA";

const title = "Investment Property Loans NC | Premier Lending NC";
const description =
  "Financing strategy for North Carolina real-estate investors: property acquisition, portfolio growth, refinancing and long-term investment planning.";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/investors" },
    ],
    links: [{ rel: "canonical", href: "/investors" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({ name: "Investment Property Financing", description, path: "/investors" }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Investment Property Financing", path: "/investors" },
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
        eyebrow="For Real-Estate Investors"
        title={
          <>
            Your next property
            <br />
            deserves a strategy.
          </>
        }
        body="Financing, structure and timing can all play an important role in your real-estate strategy."
      />
      <Investors />
      <Calculator />
      <FinalCTA />
    </SiteLayout>
  );
}
