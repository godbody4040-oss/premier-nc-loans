import { Reveal } from "./Reveal";
import { CTA, SectionHead } from "./ui";
import { business } from "@/config/business";
import { reviews, type Review } from "@/config/reviews";

const standards = [
  {
    t: "Verified reviews only",
    b: "Client feedback appears here only after it has been provided by the client and confirmed by Premier Lending NC.",
  },
  {
    t: "No stock stories",
    b: "No sample names, invented quotes or purchased testimonials are published on this site.",
  },
  {
    t: "Straightforward claims",
    b: "No promises of approval, rates, savings or outcomes — only what can be supported.",
  },
];

function ReviewCard({ r, i }: { r: Review; i: number }) {
  const initial = r.name.trim().charAt(0).toUpperCase();
  return (
    <Reveal delay={i * 110}>
      <article className="luxe-card flex h-full flex-col p-9 lg:p-10">
        <svg width="26" height="20" viewBox="0 0 26 20" fill="none" aria-hidden="true" className="text-gold">
          <path
            d="M10.6 0v8.2c0 6.5-3.4 10.4-9.3 11.8L0 17.4c3.3-1 5.2-3 5.6-6H1.9V0h8.7Zm14.4 0v8.2c0 6.5-3.4 10.4-9.3 11.8l-1.3-2.6c3.3-1 5.2-3 5.6-6h-3.7V0H25Z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
        <p className="mt-7 flex-1 text-base leading-relaxed text-navy">{r.quote}</p>
        <div className="mt-9 flex items-center gap-4 border-t border-border pt-7">
          {r.photo ? (
            <img
              src={r.photo}
              alt={`${r.name}, Premier Lending NC client`}
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 shrink-0 rounded-full object-cover"
            />
          ) : (
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/50 font-display text-base text-gold">
              {initial}
            </span>
          )}
          <div className="min-w-0">
            <p className="truncate font-display text-base text-navy">{r.name}</p>
            <p className="mt-1 truncate text-[0.66rem] uppercase tracking-[0.16em] text-muted-foreground">
              {r.propertyType} · {r.date}
            </p>
          </div>
        </div>
        {r.verified ? (
          <p className="mt-5 flex items-center gap-2 text-[0.62rem] uppercase tracking-[0.18em] text-gold">
            <svg width="12" height="9" viewBox="0 0 12 9" fill="none" aria-hidden="true">
              <path
                d="M1 4.5L4.2 8 11 1"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Verified via {r.source}
          </p>
        ) : null}
      </article>
    </Reveal>
  );
}

export function Testimonials() {
  const published = reviews.filter((r) => r.verified);
  const hasReviews = published.length > 0;

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="Client Stories"
            title="Real experiences, published carefully."
            body="Experiences from clients we've helped navigate their financing journey — added here as they are collected and confirmed."
            center
          />
        </Reveal>

        {hasReviews ? (
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {published.map((r, i) => (
              <ReviewCard key={`${r.name}-${r.date}`} r={r} i={i} />
            ))}
          </div>
        ) : (
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {standards.map((p, i) => (
              <Reveal key={p.t} delay={i * 120}>
                <article className="luxe-card flex h-full flex-col p-9 lg:p-10">
                  <span className="grid h-10 w-10 place-items-center border border-gold/50 font-display text-sm text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display mt-7 text-xl text-navy">{p.t}</h3>
                  <span className="mt-4 block h-px w-10 bg-gold" />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
                </article>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
              Worked with Premier Lending NC? Your experience can be shared here with your approval.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <CTA to="/contact" variant="outlineDark" arrow={false}>
                Share Your Experience
              </CTA>
              {business.googleReviewsUrl ? (
                <CTA href={business.googleReviewsUrl} variant="ghost" arrow>
                  Read Reviews on Google
                </CTA>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
