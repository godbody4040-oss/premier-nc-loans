import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { Placeholder } from "@/components/site/ui";

const title = "Licensing & Disclosures | Premier Lending NC";
const description =
  "Licensing, regulatory and advertising disclosures for Premier Lending NC, a mortgage brokerage serving North Carolina.";

export const Route = createFileRoute("/disclosures")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/disclosures" },
    ],
    links: [{ rel: "canonical", href: "/disclosures" }],
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Licensing & Disclosures"
        body="These disclosures must be reviewed and completed with verified licensing information before this website is published."
      />
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[820px] space-y-12 px-5 lg:px-10">
          <div className="border border-dashed border-gold/60 bg-gold/5 p-7">
            <p className="eyebrow text-gold">Action Required Before Launch</p>
            <ul className="mt-5 space-y-3 text-sm text-navy">
              {[
                "[NMLS #] — company and individual identifiers",
                "[LICENSE INFORMATION] — NC Commissioner of Banks licensing details",
                "[OFFICE ADDRESS] — licensed branch address",
                "[VERIFIED LOAN PROGRAMS] — only advertise programs actually offered",
                "State-specific advertising disclosures required by NC and federal regulation",
              ].map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-gold">—</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>

          {[
            [
              "General Disclosure",
              "Premier Lending NC is a mortgage brokerage. Information provided on this website is for general educational purposes only and does not constitute financial, legal or tax advice, an offer of credit, or a commitment to lend.",
            ],
            [
              "No Guarantee of Approval or Terms",
              "No rates, payments, loan amounts, approval outcomes, closing timelines, savings or investment returns are guaranteed. All financing is subject to application, underwriting, credit review, income and asset verification, property appraisal, title review, lender guidelines and applicable law.",
            ],
            [
              "Calculator Disclosure",
              "Any calculator on this website produces illustrative estimates only. Results may exclude mortgage insurance, escrow adjustments, closing costs and other charges, and are not a quote or a commitment to lend.",
            ],
            [
              "Equal Housing Opportunity",
              "Premier Lending NC supports equal housing opportunity and does not discriminate on the basis of race, color, religion, national origin, sex, familial status, disability or any other protected characteristic.",
            ],
            [
              "Third-Party Content",
              "This website may reference third-party resources. Premier Lending NC is not responsible for the content, accuracy or availability of external websites.",
            ],
          ].map(([h, b]) => (
            <div key={h}>
              <h2 className="display text-2xl text-navy">{h}</h2>
              <span className="gold-rule mt-4" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </div>
          ))}

          <div className="border-t border-border pt-8 text-sm">
            <p className="text-muted-foreground">Licensing identifiers:</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Placeholder>[NMLS #]</Placeholder>
              <Placeholder>[LICENSE INFORMATION]</Placeholder>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
