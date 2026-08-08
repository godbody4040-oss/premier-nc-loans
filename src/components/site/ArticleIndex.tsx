import { useState } from "react";
import { articles, categories, type Category } from "@/content/articles";
import { SiteLink } from "./SiteLink";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./ui";

export function ArticleIndex() {
  const [active, setActive] = useState<Category | "All">("All");
  const list = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <section className="bg-cream py-20 lg:py-28" id="guides">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <Eyebrow>Mortgage Guides</Eyebrow>
          <h2 className="display mt-6 text-[1.9rem] text-navy sm:text-[2.5rem]">
            Answers to the questions buyers actually ask.
          </h2>
          <span className="gold-rule mt-7" />
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-2">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c as Category | "All")}
              className={`min-h-11 border px-4 text-[0.66rem] font-semibold uppercase tracking-[0.14em] transition-colors ${
                active === c
                  ? "border-gold bg-navy text-gold"
                  : "border-border bg-white text-muted-foreground hover:border-gold hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {list.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 3) * 90}>
              <SiteLink
                to={`/resources/${a.slug}`}
                className="group block h-full border border-border bg-white p-7 transition-colors hover:border-gold"
              >
                <span className="text-[0.6rem] uppercase tracking-[0.16em] text-gold">{a.category}</span>
                <h3 className="display mt-4 text-lg leading-snug text-navy">{a.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                <span className="mt-6 block text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                  {a.readMinutes} min read
                </span>
              </SiteLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
