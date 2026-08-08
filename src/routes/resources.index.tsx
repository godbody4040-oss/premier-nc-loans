import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { LeadMagnet } from "@/components/site/LeadMagnet";
import { FAQ } from "@/components/site/FAQ";
import { ResourceCenter } from "@/components/site/ResourceCenter";
import { ArticleIndex } from "@/components/site/ArticleIndex";

const title = "Home Financing Resources NC | Premier Lending NC";
const description =
  "Educational resources for North Carolina home buyers and real-estate investors: buyer guides, payment estimates and financing basics.";

export const Route = createFileRoute("/resources/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Resources"
        title="Clarity before commitment."
        body="Educational material to help you understand the financing side of your next move."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]}
      />
      <ResourceCenter />
      <section className="bg-navy py-16 text-white lg:py-20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-8 px-5 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">Free tool</p>
            <h2 className="display mt-5 text-[1.7rem] text-white sm:text-[2.2rem]">
              The North Carolina home buyer checklist.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Every document lenders ask for and every step from pre-approval to closing — tick it
              off online or print it. Free to use and share.
            </p>
          </div>
          <CTA to="/nc-home-buyer-checklist" variant="gold">
            Open the Checklist
          </CTA>
        </div>
      </section>

      <ArticleIndex />
      <LeadMagnet />
      <FAQ />
    </SiteLayout>
  );
}
