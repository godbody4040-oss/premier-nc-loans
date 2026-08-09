import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { CompareLoans } from "@/components/site/CompareLoans";
import { LeadFunnel } from "@/components/site/LeadFunnel";
import { ContactStrip } from "@/components/site/ContactStrip";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

const title = "Compare Mortgage Loan Programs in North Carolina | Premier Lending NC";
const description =
  "Compare conventional, FHA, VA, USDA and jumbo mortgage programs side by side. General, educational characteristics for North Carolina buyers and homeowners.";
const path = "/compare-loan-programs";

export const Route = createFileRoute("/compare-loan-programs")({
  head: () => ({
    ...pageHead({ title, description, path }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Loan Programs", path: "/loan-programs" },
            { name: "Compare Programs", path },
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
        eyebrow="Compare Options"
        title={
          <>
            Compare mortgage
            <br />
            options clearly.
          </>
        }
        body="See how the major loan program categories differ in purpose and in what they ask you to review — without the sales pitch."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Loan Programs", path: "/loan-programs" },
          { name: "Compare Programs", path },
        ]}
      />
      <CompareLoans />
      <LeadFunnel />
      <ContactStrip />
    </SiteLayout>
  );
}
