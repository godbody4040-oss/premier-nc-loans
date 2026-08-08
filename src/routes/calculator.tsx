import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Calculator } from "@/components/site/Calculator";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";

const title = "Mortgage Calculator | North Carolina Home Loans";
const description =
  "Estimate a monthly mortgage payment including principal, interest, property taxes, insurance and HOA. Educational estimates only — not a commitment to lend.";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/calculator" },
    ],
    links: [{ rel: "canonical", href: "/calculator" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Mortgage Calculator"
        title="See the numbers."
        body="Adjust the inputs to explore how price, down payment, rate and term can affect an estimated monthly payment."
      />
      <Calculator />
      <FAQ />
      <FinalCTA />
    </SiteLayout>
  );
}
