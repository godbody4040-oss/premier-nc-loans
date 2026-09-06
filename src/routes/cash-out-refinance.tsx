import { createFileRoute } from "@tanstack/react-router";
import { SpecialtyTemplate } from "@/components/site/SpecialtyTemplate";
import { specialtyBySlug } from "@/content/specialty";
import { breadcrumbSchema, pageHead, serviceSchema } from "@/lib/seo";
import image from "@/assets/final-cta.jpg";

const solution = specialtyBySlug("refinancing-cash-out")!;
const path = "/cash-out-refinance";

export const Route = createFileRoute("/cash-out-refinance")({
  head: () => ({
    ...pageHead({ title: solution.title, description: solution.description, path }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({ name: solution.headline, description: solution.description, path }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Mortgage Solutions", path: "/mortgage-solutions" },
            { name: solution.nav, path },
          ]),
        ),
      },
    ],
  }),
  component: () => <SpecialtyTemplate solution={solution} image={image} />,
});
