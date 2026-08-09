import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services } from "@/content/services";
import { locations } from "@/content/locations";
import { articles } from "@/content/articles";

const BASE_URL = "https://premier-nc-loans.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/mortgage-solutions", changefreq: "monthly", priority: "0.9" },
  { path: "/home-buyers", changefreq: "monthly", priority: "0.9" },
  { path: "/investors", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/calculator", changefreq: "monthly", priority: "0.7" },
  { path: "/mortgage-tools", changefreq: "monthly", priority: "0.8" },
  { path: "/compare-loan-programs", changefreq: "monthly", priority: "0.8" },
  { path: "/resources", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/disclosures", changefreq: "yearly", priority: "0.3" },
  { path: "/loan-programs", changefreq: "monthly", priority: "0.9" },
  { path: "/nc-home-buyer-checklist", changefreq: "monthly", priority: "0.8" },

  { path: "/locations", changefreq: "monthly", priority: "0.8" },
  ...services.map((s) => ({
    path: `/${s.slug}`,
    changefreq: "monthly" as const,
    priority: "0.9",
  })),
  ...locations.map((l) => ({
    path: `/locations/${l.slug}`,
    changefreq: "monthly" as const,
    priority: "0.8",
  })),
  ...articles.map((a) => ({
    path: `/resources/${a.slug}`,
    changefreq: "monthly" as const,
    priority: "0.6",
  })),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
