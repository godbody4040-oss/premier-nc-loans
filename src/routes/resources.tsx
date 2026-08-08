import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { LeadMagnet } from "@/components/site/LeadMagnet";
import { FAQ } from "@/components/site/FAQ";
import { ResourceCenter } from "@/components/site/ResourceCenter";

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

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resources"
        title="Clarity before commitment."
        body="Educational material to help you understand the financing side of your next move."
      />
      <ResourceCenter />
      <LeadMagnet />
      <FAQ />
    </SiteLayout>
  );
}
