import { Reveal } from "./Reveal";
import { SectionHead } from "./ui";

export function Testimonials() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <SectionHead
            eyebrow="Client Stories"
            title="Verified client experiences will appear here."
            body="This section is ready for verified reviews. No testimonials are displayed until they are provided and confirmed by Premier Lending NC."
            center
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 120}>
              <article className="flex h-full flex-col border border-dashed border-border bg-white/60 p-9">
                <span className="font-display text-4xl text-gold/40">“</span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Verified review content will appear here.
                </p>
                <div className="mt-8 border-t border-border pt-5 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  <p>Client Name</p>
                  <p className="mt-1 text-gold">Property Type · Date</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
