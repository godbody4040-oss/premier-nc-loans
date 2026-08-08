/**
 * Single source of truth for verified business information.
 *
 * Every value starts as `null` on purpose: nothing is invented, and the public
 * site never renders an unfinished placeholder. Components read from here and
 * quietly fall back to professional alternate copy until a real, verified value
 * is filled in below.
 *
 * To finish the site, replace a `null` with the verified value — the matching
 * UI appears automatically, everywhere it belongs.
 */

export type BusinessHours = { days: string; hours: string };

export const business = {
  name: "Premier Lending NC",
  founder: "Jorge Vasquez",
  /** e.g. "(704) 555-0100" */
  phone: null as string | null,
  /** e.g. "jorge@premierlendingnc.com" */
  email: null as string | null,
  /** e.g. { line1: "123 Main St, Suite 200", city: "Charlotte", state: "NC", zip: "28202" } */
  address: null as { line1: string; city: string; state: string; zip: string } | null,
  /** Company NMLS identifier, e.g. "123456" */
  nmls: null as string | null,
  /** Individual NMLS identifier for the founder */
  founderNmls: null as string | null,
  /** Business hours — leave empty until confirmed */
  hours: [] as BusinessHours[],
  /** Public scheduling link (Calendly, Acuity, Google Appointments, etc.) */
  schedulingUrl: null as string | null,
  /** Public Google Business Profile review link */
  googleReviewsUrl: null as string | null,
  social: {
    linkedin: null as string | null,
    facebook: null as string | null,
    instagram: null as string | null,
  },
  serviceArea: "North Carolina",
} as const;

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export function formatAddress(a: NonNullable<typeof business.address>) {
  return `${a.line1}, ${a.city}, ${a.state} ${a.zip}`;
}

export const hasSocial =
  Boolean(business.social.linkedin) ||
  Boolean(business.social.facebook) ||
  Boolean(business.social.instagram);
