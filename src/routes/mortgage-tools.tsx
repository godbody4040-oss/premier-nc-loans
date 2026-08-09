import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { MortgageTools } from "@/components/site/MortgageTools";
import { FinalCTA } from "@/components/site/FinalCTA";
import { breadcrumbSchema, pageHead } from "@/lib/seo";

const title = "Mortgage Calculators & Tools | Premier Lending NC";
const description =
  "Affordability, down payment, rent vs. buy and refinance break-even calculators for North Carolina buyers and homeowners. Educational estimates only.";
const path = "/mortgage-tools";

export const Route = createFileRoute("/mortgage-tools")({
  head: () => ({
    ...pageHead({ title, description, path }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Mortgage Tools", path },
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
        eyebrow="Mortgage Tools"
        title={
          <>
            Model it before
            <br />
            you commit.
          </>
        }
        body="Four planning tools that turn assumptions into numbers you can talk through. Every result is an educational estimate, not a quote or a commitment to lend."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Mortgage Tools", path },
        ]}
      />
      <MortgageTools />
      <FinalCTA />
    </SiteLayout>
  );
}
