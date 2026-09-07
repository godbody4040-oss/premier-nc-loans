import { createFileRoute } from "@tanstack/react-router";
import { localBusinessSchema } from "@/lib/structured-data";
import { SiteLayout } from "@/components/site/SiteLayout";
import { HomeHero } from "@/components/site/HomeHero";
import { HomeSolutions } from "@/components/site/HomeSolutions";
import { faqs } from "@/components/site/FAQ";



const title = "North Carolina Mortgage Broker | Premier Lending NC";
const description =
  "Premier Lending NC helps North Carolina home buyers, homeowners and investors explore mortgage financing options with clarity and confidence.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessSchema(description)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout transparentNav>
      <HomeHero />
      <HomeSolutions />

    </SiteLayout>
  );
}

