import { SITE_URL } from "./structured-data";

type Crumb = { name: string; path: string };

export function pageHead({
  title,
  description,
  path,
  type = "website",
  extraMeta = [],
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  extraMeta?: { name?: string; property?: string; content: string }[];
}) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: `${SITE_URL}${path}` },
      { property: "og:site_name", content: "Premier Lending NC" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...extraMeta,
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
  };
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed = "North Carolina",
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "State", name: areaServed },
  };
}

export function localAreaServiceSchema({
  city,
  county,
  description,
  path,
}: {
  city: string;
  county: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: `Premier Lending NC — Mortgage Broker serving ${city}, NC`,
    description,
    url: `${SITE_URL}${path}`,
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    serviceType: "Mortgage brokerage",
    areaServed: [
      { "@type": "City", name: `${city}, North Carolina` },
      { "@type": "AdministrativeArea", name: county },
    ],
  };
}

export function articleSchema({
  headline,
  description,
  path,
  published,
  updated,
  authorName,
}: {
  headline: string;
  description: string;
  path: string;
  published: string;
  updated: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    mainEntityOfPage: `${SITE_URL}${path}`,
    datePublished: published,
    dateModified: updated,
    author: { "@type": "Person", name: authorName },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}
