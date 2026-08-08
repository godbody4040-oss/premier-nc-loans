import type { FAQ } from "./services";

export const categories = [
  "First-Time Home Buyers",
  "Mortgage Education",
  "Credit & Home Buying",
  "Down Payments",
  "Refinancing",
  "Loan Programs",
  "North Carolina Home Buying",
  "Mortgage FAQs",
] as const;

export type Category = (typeof categories)[number];

export type Article = {
  slug: string;
  category: Category;
  title: string;
  metaTitle: string;
  description: string;
  published: string;
  updated: string;
  readMinutes: number;
  intro: string;
  sections: { h: string; p: string[]; list?: string[] }[];
  faqs: FAQ[];
  relatedServices: string[];
  relatedLocations?: string[];
};

export const categorySlug = (c: Category) =>
  c.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const author = {
  name: "Jorge Vasquez",
  role: "Mortgage Broker & Economic Consultant, Premier Lending NC",
};
