import { createFileRoute } from "@tanstack/react-router";
import { localBusinessSchema } from "@/lib/structured-data";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Difference } from "@/components/site/Difference";
import { Solutions } from "@/components/site/Solutions";
import { SpecialtySolutions } from "@/components/site/SpecialtySolutions";
import { SignatureCTA } from "@/components/site/SignatureCTA";
import { Journey } from "@/components/site/Journey";
import { Investors } from "@/components/site/Investors";
import { Founder } from "@/components/site/Founder";
import { Calculator } from "@/components/site/Calculator";
import { LeadFunnel } from "@/components/site/LeadFunnel";
import { LeadMagnet } from "@/components/site/LeadMagnet";
import { FAQ, faqs } from "@/components/site/FAQ";
import { Testimonials } from "@/components/site/Testimonials";
import { Credentials } from "@/components/site/Credentials";
import { FinalCTA } from "@/components/site/FinalCTA";
import { FindYourPath } from "@/components/site/FindYourPath";
import { NorthCarolina } from "@/components/site/NorthCarolina";


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
      <Hero />
      <TrustBar />
      <FindYourPath />
      <Difference />
      <Solutions />
      <SpecialtySolutions />
      <SignatureCTA />
      <Journey />
      <NorthCarolina />
      <Investors />
      <Founder />
      <Calculator />
      <LeadFunnel />
      <LeadMagnet />
      <FAQ />
      <Credentials />
      <Testimonials />
      <FinalCTA />
    </SiteLayout>
  );
}

