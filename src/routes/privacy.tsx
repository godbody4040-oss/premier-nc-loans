import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Placeholder } from "@/components/site/ui";

const title = "Privacy Policy | Premier Lending NC";
const description =
  "How Premier Lending NC collects, uses and protects the information you submit through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Page,
});

const sections = [
  [
    "Information We Collect",
    "We collect the information you voluntarily submit through forms on this website, such as your name, phone number, email address and general details about your property or financing goals. We do not request Social Security numbers, account numbers or financial documents through this website.",
  ],
  [
    "How We Use Information",
    "Submitted information is used to respond to your inquiry, discuss potential financing options and provide requested resources. We do not publish, sell or display submitted information publicly.",
  ],
  [
    "Communication",
    "By submitting a form, you consent to be contacted by Premier Lending NC regarding your inquiry. You may request to stop receiving communications at any time.",
  ],
  [
    "Data Security",
    "Reasonable administrative and technical safeguards are used to protect submitted information. If a formal loan application is needed, a secure application system will be provided rather than a general website form.",
  ],
  [
    "Third Parties",
    "Information may be shared with service providers or lending partners only as necessary to respond to your request and as permitted by applicable law.",
  ],
  ["Contact", "Questions about this policy can be directed to the contact details listed below."],
];

function Page() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" body="Last updated: pending review before launch." />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[820px] space-y-12 px-5 lg:px-10">
          {sections.map(([h, b]) => (
            <div key={h}>
              <h2 className="display text-2xl text-navy">{h}</h2>
              <span className="gold-rule mt-4" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          ))}
          <div className="border border-dashed border-gold/50 bg-gold/5 p-7 text-sm">
            <p className="text-navy">
              Business contact and licensing details to be confirmed before publication:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Placeholder>[PHONE]</Placeholder>
              <Placeholder>[EMAIL]</Placeholder>
              <Placeholder>[OFFICE ADDRESS]</Placeholder>
              <Placeholder>[NMLS #]</Placeholder>
              <Placeholder>[LICENSE INFORMATION]</Placeholder>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
