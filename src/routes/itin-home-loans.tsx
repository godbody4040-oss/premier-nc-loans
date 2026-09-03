import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyTemplate } from "@/components/site/SpecialtyTemplate";
import { specialtyBySlug } from "@/content/specialty";
import { breadcrumbSchema, pageHead, serviceSchema } from "@/lib/seo";
import image from "@/assets/specialty-itin.jpg";

const solution = specialtyBySlug("itin-home-loans")!;

export const Route = createFileRoute("/itin-home-loans")({
  head: () => ({
    ...pageHead({ title: solution.title, description: solution.description, path: solution.path }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({
            name: solution.headline,
            description: solution.description,
            path: solution.path,
          }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Mortgage Solutions", path: "/mortgage-solutions" },
            { name: solution.nav, path: solution.path },
          ]),
        ),
      },
    ],
  }),
  component: () => <SpecialtyTemplate solution={solution} image={image} />,
});
