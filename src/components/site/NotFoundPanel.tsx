import { SiteLayout } from "./SiteLayout";
import { SiteLink } from "./SiteLink";
import { CTA } from "./ui";

export function NotFoundPanel({
  title,
  body,
  to,
  cta,
}: {
  title: string;
  body: string;
  to: string;
  cta: string;
}) {
  return (
    <SiteLayout>
      <section className="bg-navy pb-24 pt-40 text-white">
        <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
          <p className="eyebrow text-gold">Not found</p>
          <h1 className="display mt-5 max-w-3xl text-[2.1rem] text-white sm:text-[3rem]">{title}</h1>
          <span className="gold-rule mt-8" />
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/65">{body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <SiteLink
              to={to}
              className="border border-gold px-7 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              {cta}
            </SiteLink>
            <CTA to="/contact" variant="outlineLight" arrow={false}>
              Talk With Us
            </CTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
