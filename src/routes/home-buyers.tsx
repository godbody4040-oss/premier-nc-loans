import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Journey } from "@/components/site/Journey";
import { Difference } from "@/components/site/Difference";
import { LeadMagnet } from "@/components/site/LeadMagnet";
import { FinalCTA } from "@/components/site/FinalCTA";

const title = "First Time Home Buyer NC | Premier Lending NC";
const description =
  "A step-by-step look at the North Carolina home buying journey — from first conversation to closing day — with personal guidance from a NC mortgage broker.";

export const Route = createFileRoute("/home-buyers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/home-buyers" },
    ],
    links: [{ rel: "canonical", href: "/home-buyers" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="For Home Buyers"
        title={
          <>
            From first conversation
            <br />
            to closing day.
          </>
        }
        body="Understanding your financing early can make the rest of the process clearer. Here's how the journey typically unfolds."
      />
      <Journey />
      <Difference />
      <LeadMagnet />
      <FinalCTA />
    </SiteLayout>
  );
}
