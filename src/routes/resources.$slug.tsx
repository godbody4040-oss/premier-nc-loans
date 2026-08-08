import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticleTemplate } from "@/components/site/ArticleTemplate";
import { NotFoundPanel } from "@/components/site/NotFoundPanel";
import { articleBySlug, author } from "@/content/articles";
import { articleSchema, breadcrumbSchema, faqSchema, pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const article = articleBySlug(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found | Premier Lending NC" }, { name: "robots", content: "noindex" }] };
    }
    const a = loaderData.article;
    const path = `/resources/${params.slug}`;
    return {
      ...pageHead({ title: a.metaTitle, description: a.description, path, type: "article" }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            articleSchema({
              headline: a.title,
              description: a.description,
              path,
              published: a.published,
              updated: a.updated,
              authorName: author.name,
            }),
          ),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
              { name: a.title, path },
            ]),
          ),
        },
        ...(a.faqs.length
          ? [{ type: "application/ld+json", children: JSON.stringify(faqSchema(a.faqs)) }]
          : []),
      ],
    };
  },
  notFoundComponent: () => (
    <NotFoundPanel
      title="That article isn't available."
      body="The guide you're looking for may have moved. Browse the full resource library instead."
      to="/resources"
      cta="Back to Resources"
    />
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  return <ArticleTemplate article={article} />;
}
