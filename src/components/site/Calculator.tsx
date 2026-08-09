import { useEffect, useRef, useState } from "react";
import { track, trackOnce } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { CTA, Eyebrow } from "./ui";

function useCountUp(value: number) {
  const [display, setDisplay] = useState(value);
  const raf = useRef<number | null>(null);
  const from = useRef(value);

  useEffect(() => {
    const start = performance.now();
    const startVal = from.current;
    const delta = value - startVal;
    const dur = 450;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(startVal + delta * eased);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else from.current = value;
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      from.current = value;
    };
  }, [value]);

  return display;
}

const money = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
  grouped = false,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  /** Show thousands separators (currency-style fields). */
  grouped?: boolean;
}) {
  const safe = Number.isFinite(value) ? value : 0;
  const clamp = (n: number) => Math.min(max, Math.max(min, Number.isFinite(n) ? n : min));
  const [draft, setDraft] = useState<string | null>(null);
  const shown =
    draft ?? (grouped ? safe.toLocaleString("en-US", { maximumFractionDigits: 0 }) : String(safe));

  return (
    <div className="group">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <label className="min-w-0 truncate text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-focus-within:text-navy">
          {label}
        </label>
        <div className="flex shrink-0 items-center border border-border bg-white px-3 py-2 transition-colors duration-300 focus-within:border-gold">
          {prefix ? <span className="text-sm text-muted-foreground">{prefix}</span> : null}
          <input
            type="text"
            inputMode="decimal"
            aria-label={label}
            value={shown}
            onChange={(e) => {
              trackOnce("calculator_interact");
              const raw = e.target.value.replace(/[^0-9.]/g, "");
              setDraft(raw);
              if (raw !== "" && !raw.endsWith(".")) onChange(clamp(Number(raw)));
            }}
            onBlur={() => {
              setDraft(null);
              onChange(clamp(safe));
            }}
            className="w-20 bg-transparent text-right text-sm font-medium text-navy outline-none sm:w-24"
          />
          {suffix ? <span className="text-sm text-muted-foreground">{suffix}</span> : null}
        </div>
      </div>
      <input
        type="range"
        aria-label={`${label} slider`}
        value={safe}
        min={min}
        max={max}
        step={step}
        onChange={(e) => {
          trackOnce("calculator_interact");
          setDraft(null);
          onChange(Number(e.target.value));
        }}
        className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-[oklch(0.75_0.077_84)]"
      />
    </div>
  );
}


const DEFAULTS = {
  price: 450000,
  down: 90000,
  rate: 6.5,
  term: 30,
  taxes: 3600,
  insurance: 1500,
  hoa: 0,
};

export function Calculator({ bare = false }: { bare?: boolean } = {}) {
  const [price, setPrice] = useState(DEFAULTS.price);
  const [down, setDown] = useState(DEFAULTS.down);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [term, setTerm] = useState(DEFAULTS.term);
  const [taxes, setTaxes] = useState(DEFAULTS.taxes);
  const [insurance, setInsurance] = useState(DEFAULTS.insurance);
  const [hoa, setHoa] = useState(DEFAULTS.hoa);

  const reset = () => {
    setPrice(DEFAULTS.price);
    setDown(DEFAULTS.down);
    setRate(DEFAULTS.rate);
    setTerm(DEFAULTS.term);
    setTaxes(DEFAULTS.taxes);
    setInsurance(DEFAULTS.insurance);
    setHoa(DEFAULTS.hoa);
  };

  const safeDown = Math.min(Math.max(0, down), Math.max(0, price));
  const principal = Math.max(0, price - safeDown);
  const r = rate / 100 / 12;
  const n = term * 12;
  const pi = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
  const safePI = Number.isFinite(pi) ? pi : 0;
  const monthlyTax = taxes / 12;
  const monthlyIns = insurance / 12;
  const total = safePI + monthlyTax + monthlyIns + hoa;
  const downPct = price > 0 ? (safeDown / price) * 100 : 0;

  const animPI = useCountUp(safePI);
  const animTotal = useCountUp(total);

  const segments = [
    { k: "Principal & Interest", v: safePI, cls: "bg-gold" },
    { k: "Taxes", v: monthlyTax, cls: "bg-gold/60" },
    { k: "Insurance", v: monthlyIns, cls: "bg-white/45" },
    { k: "HOA", v: hoa, cls: "bg-white/20" },
  ].filter((s) => s.v > 0);

  return (
    <section className="bg-background py-24 lg:py-32" id="calculator">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        {bare ? null : (
        <Reveal>
          <Eyebrow>Mortgage Calculator</Eyebrow>
          <h2 className="display mt-6 text-[2.1rem] text-navy sm:text-[3rem]">See the numbers.</h2>
          <span className="gold-rule mt-8" />
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Adjust the inputs to see how price, down payment, rate and carrying costs shape an estimated
            monthly payment.
          </p>
        </Reveal>
        )}

        <div className={`${bare ? "" : "mt-14"}  grid gap-6 lg:grid-cols-[1.15fr_0.85fr]`}>
          <Reveal>
            <div className="space-y-7 border border-border bg-white p-7 shadow-[var(--shadow-card)] lg:p-10">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <p className="text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Your Numbers
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="-mr-2 px-2 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-gold"
                >
                  Reset
                </button>
              </div>
              <Field label="Home Price" value={price} onChange={setPrice} min={50000} max={3000000} step={5000} prefix="$" grouped />
              <div>
                <Field label="Down Payment" value={down} onChange={setDown} min={0} max={price} step={2500} prefix="$" grouped />
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-gold">
                  {downPct.toFixed(1)}% down
                </p>
              </div>
              <Field label="Interest Rate" value={rate} onChange={setRate} min={1} max={12} step={0.125} suffix="%" />
              <Field label="Loan Term (years)" value={term} onChange={setTerm} min={5} max={40} step={5} />
              <Field label="Property Taxes / yr" value={taxes} onChange={setTaxes} min={0} max={40000} step={100} prefix="$" grouped />
              <Field label="Homeowners Insurance / yr" value={insurance} onChange={setInsurance} min={0} max={20000} step={100} prefix="$" grouped />
              <Field label="HOA / mo" value={hoa} onChange={setHoa} min={0} max={2000} step={10} prefix="$" grouped />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="flex h-full flex-col bg-navy p-8 text-white shadow-[var(--shadow-luxe)] lg:p-10">
              <p className="eyebrow text-gold">Estimated Monthly Payment</p>
              <p className="display mt-5 text-[2.75rem] tabular-nums text-white lg:text-[3.5rem]">
                {money(animTotal)}
              </p>
              <span className="gold-rule mt-6" />

              <div className="mt-9">
                <div className="flex h-2 w-full overflow-hidden rounded-full bg-white/10">
                  {segments.map((s) => (
                    <span
                      key={s.k}
                      title={s.k}
                      className={`${s.cls} h-full transition-[width] duration-500 ease-out`}
                      style={{ width: `${total > 0 ? (s.v / total) * 100 : 0}%` }}
                    />
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[0.62rem] uppercase tracking-[0.14em] text-white/50">
                  {segments.map((s) => (
                    <span key={s.k} className="flex items-center gap-2">
                      <span className={`${s.cls} h-2 w-2 rounded-full`} />
                      {s.k}
                    </span>
                  ))}
                </div>
              </div>

              <dl className="mt-9 space-y-4 text-sm">
                {[
                  ["Estimated Principal & Interest", money(animPI)],
                  ["Estimated Taxes", money(monthlyTax)],
                  ["Estimated Insurance", money(monthlyIns)],
                  ["Estimated HOA", money(hoa)],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
                    <dt className="min-w-0 text-white/60">{k}</dt>
                    <dd className="shrink-0 font-medium tabular-nums">{v}</dd>
                  </div>
                ))}
                <div className="flex items-baseline justify-between gap-4 pt-2">
                  <dt className="text-white/60">Loan Amount</dt>
                  <dd className="shrink-0 font-medium tabular-nums">{money(principal)}</dd>
                </div>
              </dl>

              <p className="mt-8 text-xs leading-relaxed text-white/45">
                These figures are estimates for educational purposes only and are not a commitment to lend.
                Actual payments may include mortgage insurance and other costs.
              </p>
              <div className="mt-8 space-y-3">
                <CTA
                  to="/contact"
                  variant="gold"
                  className="w-full"
                  onClick={() => track("calculator_cta_click", { estimated_payment: Math.round(total) })}
                >
                  Discuss My Financing Options
                </CTA>
                <CTA
                  to="/contact"
                  variant="outlineLight"
                  arrow={false}
                  className="w-full"
                  onClick={() => track("hero_cta_prequal_click", { location: "calculator" })}
                >
                  Get Pre-Qualified
                </CTA>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
