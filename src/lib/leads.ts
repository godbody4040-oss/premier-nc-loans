/**
 * Centralized lead structure shared by every lead source on the site.
 * Every submission is posted to /api/public/lead, which validates it and — when
 * a CRM/webhook URL is configured — forwards it onward.
 */

export type LeadType =
  | "pre-qualification"
  | "contact"
  | "resource-download"
  | "calculator"
  | "investor";

export type LeadSource =
  | "prequal-funnel"
  | "resource-guide"
  | "calculator-cta"
  | "investor-cta"
  | "contact-page";

export type Lead = {
  leadType: LeadType;
  source: LeadSource;
  first: string;
  last?: string;
  email: string;
  phone?: string;
  goal?: string;
  propertyType?: string;
  location?: string;
  zip?: string;
  priceRange?: string;
  downPayment?: string;
  timeline?: string;
  employment?: string;
  creditBand?: string;
  firstTime?: string;
  contactPreference?: string;
  resource?: string;
  message?: string;
  /** Which "Find Your Path" route the visitor selected, when known. */
  selectedPath?: string;
  /** Loan program the visitor was reading about, when known. */
  loanProgram?: string;
  /** Filled in automatically by submitLead. */
  pagePath?: string;
  /** Captured automatically by submitLead. */
  referrer?: string;
  /** Honeypot — must remain empty. */
  company?: string;
};


export async function submitLead(lead: Lead): Promise<{ ok: boolean; error?: string }> {
  try {
    const payload = {
      ...lead,
      pagePath: lead.pagePath ?? (typeof window !== "undefined" ? window.location.pathname : ""),
      referrer: typeof document !== "undefined" ? document.referrer.slice(0, 300) : "",
    };
    const res = await fetch("/api/public/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error ?? "We couldn't submit your request. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "We couldn't submit your request. Please try again." };
  }
}

