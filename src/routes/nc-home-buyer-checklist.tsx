import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/site/SiteLayout";
import { ContactStrip } from "@/components/site/ContactStrip";
import { Reveal } from "@/components/site/Reveal";
import { CTA } from "@/components/site/ui";
import { breadcrumbSchema, faqSchema, pageHead } from "@/lib/seo";
import { track } from "@/lib/analytics";

const path = "/nc-home-buyer-checklist";
const title = "The North Carolina Home Buyer Checklist (Free) | Premier Lending NC";
const description =
  "A free, printable North Carolina home buying checklist: every document lenders ask for and every step from pre-approval to closing, in order.";

type Item = { id: string; label: string; note?: string };
type Group = { id: string; heading: string; blurb: string; items: Item[] };

const groups: Group[] = [
  {
    id: "documents",
    heading: "Documents to gather before you apply",
    blurb:
      "Assembling these first is the single biggest factor in a fast, uneventful approval. Requirements vary by program and borrower profile.",
    items: [
      { id: "d1", label: "Photo identification for every borrower" },
      { id: "d2", label: "Most recent pay stubs covering a full month", note: "W-2 employees" },
      { id: "d3", label: "W-2 forms for the last two years" },
      { id: "d4", label: "Federal tax returns, all pages and schedules", note: "Two years is typical" },
      { id: "d5", label: "Business returns, 1099s and a year-to-date profit and loss", note: "Self-employed or contract income" },
      { id: "d6", label: "Two months of statements for every asset account", note: "All pages, even blank ones" },
      { id: "d7", label: "Documentation for any large or unusual deposit" },
      { id: "d8", label: "Gift letter and transfer records if family is helping" },
      { id: "d9", label: "Current mortgage statement, tax bill and insurance for property you own" },
      { id: "d10", label: "Lease agreements for any rental property" },
      { id: "d11", label: "Divorce decree, child support or alimony documentation if applicable" },
      { id: "d12", label: "Bankruptcy discharge or foreclosure documentation if applicable" },
      { id: "d13", label: "Certificate of Eligibility or DD-214", note: "VA financing" },
    ],
  },
  {
    id: "before",
    heading: "Before you start shopping",
    blurb: "Everything here happens before you tour a single house.",
    items: [
      { id: "b1", label: "Review your credit reports and dispute genuine errors" },
      { id: "b2", label: "Pay down revolving balances and stop opening new accounts" },
      { id: "b3", label: "Set a monthly payment you are comfortable with, not just a price" },
      { id: "b4", label: "Estimate total cash to close, not only the down payment" },
      { id: "b5", label: "Get a documented pre-approval, not a quick online estimate" },
      { id: "b6", label: "Confirm your loan program and any assistance you plan to use" },
      { id: "b7", label: "Choose a buyer's agent who works your target submarket" },
    ],
  },
  {
    id: "offer",
    heading: "Under contract in North Carolina",
    blurb:
      "North Carolina uses a due diligence period and an attorney-managed closing. These steps are time-sensitive.",
    items: [
      { id: "o1", label: "Deliver due diligence and earnest money per the contract" },
      { id: "o2", label: "Send the executed contract to your broker the same day" },
      { id: "o3", label: "Schedule the home inspection early in due diligence" },
      { id: "o4", label: "Order any specialty inspections: septic, well, radon, pest" },
      { id: "o5", label: "Choose a real estate closing attorney" },
      { id: "o6", label: "Shop and bind homeowners insurance" },
      { id: "o7", label: "Review HOA documents, budget and any pending assessment" },
      { id: "o8", label: "Confirm the appraisal has been ordered" },
      { id: "o9", label: "Return every underwriting condition within 24 hours" },
    ],
  },
  {
    id: "closing",
    heading: "The final two weeks",
    blurb: "Keep your financial life boring until the deed is recorded.",
    items: [
      { id: "c1", label: "Do not finance furniture, appliances or a vehicle" },
      { id: "c2", label: "Do not change jobs or income structure" },
      { id: "c3", label: "Do not move money between accounts without records" },
      { id: "c4", label: "Review the Closing Disclosure against your Loan Estimate" },
      { id: "c5", label: "Verify wire instructions by phone with a known contact" },
      { id: "c6", label: "Complete the final walk-through" },
      { id: "c7", label: "Bring photo ID and certified or wired funds to closing" },
      { id: "c8", label: "Save the full closing package for taxes and any future refinance" },
    ],
  },
];

const faqs = [
  {
    q: "Is this checklist free to use or share?",
    a: "Yes. It is free to use, print and link to. It is educational material, not financial advice or a commitment to lend.",
  },
  {
    q: "Do all of these documents apply to me?",
    a: "No. Requirements vary by loan program, income structure and property type. Bring what applies and your broker will confirm the rest.",
  },
  {
    q: "What is a due diligence period in North Carolina?",
    a: "It is a negotiated window in the standard North Carolina contract during which a buyer may terminate for any reason, typically with a non-refundable due diligence fee already paid to the seller.",
  },
  {
    q: "How early should I start this?",
    a: "Gathering documents and reviewing credit ideally begins several months before you plan to write an offer.",
  },
];

export const Route = createFileRoute("/nc-home-buyer-checklist")({
  head: () => ({
    ...pageHead({ title, description, path }),
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
            { name: "NC Home Buyer Checklist", path },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "The North Carolina Home Buyer Checklist",
          description,
          step: groups.map((g, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: g.heading,
            text: g.blurb,
          })),
        }),
      },
    ],
  }),
  component: Page,
});

function Page() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const total = useMemo(() => groups.reduce((n, g) => n + g.items.length, 0), []);
  const completed = Object.values(done).filter(Boolean).length;
  const pct = Math.round((completed / total) * 100);

  const toggle = (id: string) => setDone((d) => ({ ...d, [id]: !d[id] }));

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Free Resource"
        title="The North Carolina home buyer checklist."
        body="Every document a lender will ask for and every step from pre-approval to closing, in the order they happen. Tick items as you go, or print the whole thing."
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Home Buyer Checklist", path },
        ]}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1000px] px-5 lg:px-10">
          <div className="sticky top-20 z-10 mb-12 border border-border bg-white/95 p-6 backdrop-blur print:hidden">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="eyebrow text-muted-foreground">Your progress</p>
                <p className="display mt-2 text-2xl text-navy">
                  {completed} of {total} complete
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setDone({})}
                  className="min-h-11 border border-border px-5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-gold hover:text-navy"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => {
                    track("resource_download", { resource: "nc-home-buyer-checklist", method: "print" });
                    window.print();
                  }}
                  className="min-h-11 border border-navy bg-navy px-5 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-gold transition-opacity hover:opacity-90"
                >
                  Print / Save PDF
                </button>
              </div>
            </div>
            <div className="mt-5 h-1 w-full bg-border">
              <div className="h-1 bg-gold transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
          </div>

          {groups.map((g) => (
            <Reveal key={g.id}>
              <div className="mb-14">
                <h2 className="display text-[1.5rem] text-navy sm:text-[1.9rem]">{g.heading}</h2>
                <span className="mt-4 block h-px w-10 bg-gold" />
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{g.blurb}</p>
                <ul className="mt-7 divide-y divide-border border border-border">
                  {g.items.map((it) => (
                    <li key={it.id}>
                      <label className="flex cursor-pointer items-start gap-4 p-5 transition-colors hover:bg-cream">
                        <input
                          type="checkbox"
                          checked={!!done[it.id]}
                          onChange={() => toggle(it.id)}
                          className="mt-1 h-4 w-4 shrink-0 accent-[#C8A96B]"
                        />
                        <span>
                          <span
                            className={`block text-sm leading-relaxed ${
                              done[it.id] ? "text-muted-foreground line-through" : "text-navy"
                            }`}
                          >
                            {it.label}
                          </span>
                          {it.note ? (
                            <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.14em] text-gold">
                              {it.note}
                            </span>
                          ) : null}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          <div className="border border-border bg-cream p-8 print:hidden">
            <p className="eyebrow text-muted-foreground">Use it freely</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Agents, attorneys and educators are welcome to share or link to this checklist for
              their North Carolina clients. Attribution to Premier Lending NC is appreciated.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CTA to="/contact" variant="gold">
                Get Pre-Qualified
              </CTA>
              <CTA to="/calculator" variant="outline" arrow={false}>
                Estimate My Payment
              </CTA>
            </div>
          </div>

          <p className="mt-10 border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
            This checklist is general education, not financial or legal advice or a commitment to
            lend. Program guidelines and requirements are determined by individual lenders and are
            subject to underwriting and applicable law. Equal Housing Opportunity.
          </p>
        </div>
      </section>

      <ContactStrip />
    </SiteLayout>
  );
}
