import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { LeadFunnel } from "@/components/site/LeadFunnel";
import { ContactDetails } from "@/components/site/ContactDetails";

const title = "Contact a North Carolina Mortgage Broker | Premier Lending NC";
const description =
  "Start a conversation with Premier Lending NC. Share your goals and timeline, and a member of the team can follow up about financing next steps.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get Pre-Qualified"
        title={
          <>
            Start with
            <br />
            a conversation.
          </>
        }
        body="No pressure. No guesswork. Tell us where you are and what you're trying to accomplish."
      />
      <LeadFunnel />
      <ContactDetails />
    </SiteLayout>
  );
}
