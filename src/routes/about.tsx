import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Founder } from "@/components/site/Founder";
import { Difference } from "@/components/site/Difference";
import { FinalCTA } from "@/components/site/FinalCTA";

const title = "About Jorge Vasquez | NC Mortgage Broker";
const description =
  "Jorge Vasquez is a North Carolina mortgage broker and economic consultant focused on personal guidance for home buyers, homeowners and real-estate investors.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Jorge Vasquez",
          jobTitle: "Mortgage Broker, Economic Consultant",
          worksFor: { "@type": "Organization", name: "Premier Lending NC" },
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
        eyebrow="Meet Your Mortgage Broker"
        title="Financing is personal."
        body="Premier Lending NC is built around personal guidance—not a one-size-fits-all approach."
      />
      <Founder />
      <Difference />
      <FinalCTA />
    </SiteLayout>
  );
}
