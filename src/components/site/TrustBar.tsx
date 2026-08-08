import { Reveal } from "./Reveal";

const items = [
  { top: "North Carolina", bottom: "Focused" },
  { top: "Personalized", bottom: "Guidance" },
  { top: "Residential", bottom: "& Investment" },
  { top: "Strategic", bottom: "Financing" },
];

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-px bg-border lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.top} delay={i * 90} className="bg-white px-6 py-10 text-center lg:py-12">
            <p className="eyebrow text-gold">{it.top}</p>
            <p className="display mt-3 text-xl text-navy lg:text-2xl">{it.bottom}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
