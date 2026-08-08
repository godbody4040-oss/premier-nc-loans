import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { LeadFunnel } from "@/components/site/LeadFunnel";
import { Reveal } from "@/components/site/Reveal";
import { Placeholder } from "@/components/site/ui";

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
      <section className="bg-background pb-24 lg:pb-32">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:grid-cols-3 lg:px-10">
          {[
            ["Phone", <Placeholder key="p">[PHONE]</Placeholder>],
            ["Email", <Placeholder key="e">[EMAIL]</Placeholder>],
            ["Office", <Placeholder key="o">[OFFICE ADDRESS]</Placeholder>],
          ].map(([label, node], i) => (
            <Reveal key={String(label)} delay={i * 100}>
              <div className="border border-border bg-white p-8">
                <p className="eyebrow text-gold">{label as string}</p>
                <p className="mt-4 text-sm">{node}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
