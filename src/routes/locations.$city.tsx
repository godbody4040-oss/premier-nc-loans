import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { LocationTemplate } from "@/components/site/LocationTemplate";
import { NotFoundPanel } from "@/components/site/NotFoundPanel";
import { locationBySlug } from "@/content/locations";
import { breadcrumbSchema, faqSchema, localAreaServiceSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/locations/$city")({
  loader: ({ params }) => {
    const location = locationBySlug(params.city);
    if (!location) {
      // Friendly aliases: /locations/raleigh -> /locations/raleigh-nc
      const alias = locationBySlug(`${params.city.replace(/-nc$/, "")}-nc`);
      if (alias) {
        throw redirect({ to: "/locations/$city", params: { city: alias.slug } });
      }
      throw notFound();
    }
    return { location };
  },

  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Service area not found | Premier Lending NC" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const l = loaderData.location;
    const path = `/locations/${params.city}`;
    return {
      ...pageHead({ title: l.title, description: l.description, path }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            localAreaServiceSchema({
              city: l.city,
              county: l.county,
              description: l.description,
              path,
            }),
          ),
        },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(l.faqs)) },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/locations" },
              { name: l.city, path },
            ]),
          ),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <NotFoundPanel
      title="We don't have a page for that area yet."
      body="See every North Carolina community Premier Lending NC currently serves."
      to="/locations"
      cta="View Service Areas"
    />
  ),
  component: CityPage,
});

function CityPage() {
  const { location } = Route.useLoaderData();
  return <LocationTemplate location={location} />;
}
