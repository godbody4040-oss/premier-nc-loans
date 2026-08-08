import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Solutions } from "@/components/site/Solutions";
import { SignatureCTA } from "@/components/site/SignatureCTA";
import { FAQ } from "@/components/site/FAQ";

const title = "Mortgage Solutions in NC | Premier Lending NC";
const description =
  "Explore home purchase, first-time buyer, refinance, investment property and self-employed mortgage financing options with a North Carolina mortgage broker.";

export const Route = createFileRoute("/mortgage-solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/mortgage-solutions" },
    ],
    links: [{ rel: "canonical", href: "/mortgage-solutions" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Financing Options"
        title={
          <>
            The right loan
            <br />
            for the right move.
          </>
        }
        body="Explore financing solutions designed for different homeownership and real-estate goals. Program availability is confirmed individually."
      />
      <Solutions />
      <SignatureCTA />
      <FAQ />
    </SiteLayout>
  );
}
