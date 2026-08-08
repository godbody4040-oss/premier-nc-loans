import { business, formatAddress } from "@/config/business";
import { reviews } from "@/config/reviews";

export const SITE_URL = "https://premier-nc-loans.lovable.app";

/** Drop null/undefined/empty values so no unverified field is ever published. */
function clean<T extends Record<string, unknown>>(obj: T): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) => v !== null && v !== undefined && !(Array.isArray(v) && v.length === 0),
    ),
  );
}

const sameAs = [
  business.social.linkedin,
  business.social.facebook,
  business.social.instagram,
  business.googleReviewsUrl,
].filter(Boolean) as string[];

/** Sitewide Organization identity. */
export function organizationSchema() {
  return clean({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: business.name,
    url: SITE_URL,
    description:
      "North Carolina mortgage broker helping buyers, homeowners and investors explore financing options.",
    email: business.email,
    telephone: business.phone,
    founder: { "@type": "Person", name: business.founder, jobTitle: "Mortgage Broker" },
    areaServed: { "@type": "State", name: business.serviceArea },
    sameAs,
  });
}

/** Homepage LocalBusiness (FinancialService) with verified details only. */
export function localBusinessSchema(description: string) {
  const address = business.address
    ? {
        "@type": "PostalAddress",
        streetAddress: business.address.line1,
        addressLocality: business.address.city,
        addressRegion: business.address.state,
        postalCode: business.address.zip,
        addressCountry: "US",
      }
    : null;

  const openingHours = business.hours.map((h) => `${h.days} ${h.hours}`);

  const verified = reviews.filter((r) => r.verified);
  const review = verified.map((r) =>
    clean({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.quote,
      datePublished: r.date,
      itemReviewed: { "@id": `${SITE_URL}/#localbusiness` },
      publisher: r.source ? { "@type": "Organization", name: r.source } : null,
    }),
  );

  return clean({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: business.name,
    url: SITE_URL,
    description,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    founder: { "@type": "Person", name: business.founder, jobTitle: "Mortgage Broker" },
    telephone: business.phone,
    email: business.email,
    address,
    ...(business.address ? { name_address_note: undefined } : {}),
    openingHours,
    areaServed: { "@type": "State", name: business.serviceArea },
    serviceType: "Mortgage brokerage",
    priceRange: undefined,
    identifier: business.nmls
      ? { "@type": "PropertyValue", name: "NMLS", value: business.nmls }
      : null,
    sameAs,
    review,
    // aggregateRating is intentionally omitted until verified ratings exist.
  });
}

export function addressLine() {
  return business.address ? formatAddress(business.address) : null;
}
