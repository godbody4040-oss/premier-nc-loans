import type { Article } from "@/content/articles";
import { articles, author, categorySlug } from "@/content/articles";
import { serviceBySlug } from "@/content/services";
import { locationBySlug } from "@/content/locations";
import { SiteLayout } from "./SiteLayout";
import { SiteLink } from "./SiteLink";
import { Breadcrumbs } from "./Breadcrumbs";
import { Reveal } from "./Reveal";
import { CTA } from "./ui";
import { FaqList } from "./FaqList";
import { ContactStrip } from "./ContactStrip";

const fmt = (d: string) =>
  new Date(`${d}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

export function ArticleTemplate({ article }: { article: Article }) {
  const services = article.relatedServices.map(serviceBySlug).filter(Boolean);
  const places = (article.relatedLocations ?? []).map(locationBySlug).filter(Boolean);
  const more = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <SiteLayout>
      <header className="bg-navy pb-16 pt-32 text-white lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <Breadcrumbs
            crumbs={[
              { name: "Home", path: "/" },
              { name: "Resources", path: "/resources" },
              { name: article.title, path: `/resources/${article.slug}` },
            ]}
          />
          <p className="eyebrow mt-7 text-gold">{article.category}</p>
          <h1 className="display mt-5 max-w-4xl text-[2.1rem] leading-[1.1] text-white sm:text-[3rem]">
            {article.title}
          </h1>
          <span className="gold-rule mt-8" />
          <p className="mt-7 max-w-3xl text-base leading-relaxed text-white/65">{article.intro}</p>
          <p className="mt-8 text-[0.68rem] uppercase tracking-[0.16em] text-white/40">
            {author.name} · Updated {fmt(article.updated)} · {article.readMinutes} min read
          </p>
        </div>
      </header>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-14 px-5 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
          <article className="max-w-3xl">
            {article.sections.map((s) => (
              <Reveal key={s.h}>
                <div className="mb-12">
                  <h2 className="display text-[1.5rem] text-navy sm:text-[1.9rem]">{s.h}</h2>
                  <span className="mt-4 block h-px w-10 bg-gold" />
                  {s.p.map((p) => (
                    <p key={p} className="mt-5 text-base leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                  {s.list ? (
                    <ul className="mt-6 space-y-3">
                      {s.list.map((li) => (
                        <li key={li} className="flex gap-4 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                          {li}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}

            <p className="border-t border-border pt-8 text-xs leading-relaxed text-muted-foreground">
              This article is general education, not financial advice or a commitment to lend. Program
              guidelines, eligibility and terms are determined by individual lenders and are subject to
              underwriting and applicable law. Equal Housing Opportunity.
            </p>
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="bg-navy p-8 text-white shadow-[var(--shadow-luxe)]">
              <p className="eyebrow text-gold">Ready when you are</p>
              <p className="display mt-4 text-xl text-white">Put this into practice.</p>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Review your own numbers with a licensed mortgage professional serving North Carolina.
              </p>
              <div className="mt-7 space-y-3">
                <CTA to="/contact" variant="gold" className="w-full">
                  Get Pre-Qualified
                </CTA>
                <CTA to="/calculator" variant="outlineLight" arrow={false} className="w-full">
                  Open the Calculator
                </CTA>
              </div>
            </div>

            {services.length ? (
              <div className="border border-border bg-white p-8">
                <p className="eyebrow text-muted-foreground">Related programs</p>
                <ul className="mt-5 space-y-3 text-sm">
                  {services.map((s) => (
                    <li key={s!.slug}>
                      <SiteLink
                        to={`/${s!.slug}`}
                        className="arrow-cta text-navy transition-colors hover:text-gold"
                      >
                        {s!.nav}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {places.length ? (
              <div className="border border-border bg-white p-8">
                <p className="eyebrow text-muted-foreground">Local guides</p>
                <ul className="mt-5 space-y-3 text-sm">
                  {places.map((l) => (
                    <li key={l!.slug}>
                      <SiteLink
                        to={`/locations/${l!.slug}`}
                        className="arrow-cta text-navy transition-colors hover:text-gold"
                      >
                        {l!.city}, {l!.state}
                      </SiteLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      {article.faqs.length ? (
        <FaqList eyebrow="Frequently asked" heading="Related questions" faqs={article.faqs} />
      ) : null}

      {more.length ? (
        <section className="bg-cream py-20">
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <p className="eyebrow text-muted-foreground">More in {article.category}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {more.map((a) => (
                <SiteLink
                  key={a.slug}
                  to={`/resources/${a.slug}`}
                  className="group block h-full border border-border bg-white p-7 transition-colors hover:border-gold"
                >
                  <span className="text-[0.62rem] uppercase tracking-[0.16em] text-gold">
                    {categorySlug(a.category).replace(/-/g, " ")}
                  </span>
                  <h3 className="display mt-4 text-base text-navy">{a.title}</h3>
                  <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {a.description}
                  </p>
                </SiteLink>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <ContactStrip />
    </SiteLayout>
  );
}
