import { createFileRoute } from "@tanstack/react-router";
import { ServiceTemplate } from "@/components/site/ServiceTemplate";
import { serviceBySlug } from "@/content/services";
import { breadcrumbSchema, faqSchema, pageHead, serviceSchema } from "@/lib/seo";

const service = serviceBySlug("fha-loans")!;
const path = "/fha-loans";

export const Route = createFileRoute(path)({
  head: () => ({
    ...pageHead({ title: service.title, description: service.description, path }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          serviceSchema({ name: service.h1, description: service.description, path }),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema(service.faqs)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Loan Programs", path: "/loan-programs" },
            { name: service.nav, path },
          ]),
        ),
      },
    ],
  }),
  component: () => <ServiceTemplate service={service} />,
});
