import { useState } from "react";
import { track, trackOnce } from "@/lib/analytics";
import { Reveal } from "./Reveal";
import { CTA } from "./ui";

const money = (n: number) =>
  (Number.isFinite(n) ? n : 0).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

function ToolField({
  label,
  hint,
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
  hint?: string;
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
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
        <label className="min-w-0 text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground transition-colors group-focus-within:text-navy">
          {label}
        </label>
        <div className="flex shrink-0 items-center border border-border bg-white px-3 py-2 transition-colors focus-within:border-gold">
          {prefix ? <span className="text-sm text-muted-foreground">{prefix}</span> : null}
          <input
            type="text"
            inputMode="decimal"
            aria-label={label}
            value={shown}
            onChange={(e) => {
              trackOnce("tool_interact", { tool: label });
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
          trackOnce("tool_interact", { tool: label });
          setDraft(null);
          onChange(Number(e.target.value));
        }}
        className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-[oklch(0.75_0.077_84)]"
      />
      {hint ? <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

function ResultPanel({
  headline,
  value,
  rows,
  note,
  ctaLabel = "Discuss My Financing Options",
  tool,
}: {
  headline: string;
  value: string;
  rows: [string, string][];
  note: string;
  ctaLabel?: string;
  tool: string;
}) {
  return (
    <div className="flex h-full flex-col bg-navy p-8 text-white shadow-[var(--shadow-luxe)] lg:p-10">
      <p className="eyebrow text-gold">{headline}</p>
      <p className="display mt-5 text-[2.4rem] tabular-nums text-white lg:text-[3rem]">{value}</p>
      <span className="gold-rule mt-6" />
      <dl className="mt-8 space-y-4 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
            <dt className="min-w-0 text-white/60">{k}</dt>
            <dd className="shrink-0 font-medium tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-xs leading-relaxed text-white/45">
        Estimate for educational purposes only. Not a commitment to lend, an offer of credit or personalized
        financial advice. {note}
      </p>
      <div className="mt-8 space-y-3">
        <CTA
          to="/contact"
          variant="gold"
          className="w-full"
          onClick={() => track("tool_cta_click", { tool })}
        >
          {ctaLabel}
        </CTA>
        <CTA
          to="/calculator"
          variant="outlineLight"
          arrow={false}
          className="w-full"
          onClick={() => track("tool_cta_click", { tool, target: "calculator" })}
        >
          Open the Payment Calculator
        </CTA>
      </div>
    </div>
  );
}

function Shell({
  inputs,
  result,
  onReset,
}: {
  inputs: React.ReactNode;
  result: React.ReactNode;
  onReset: () => void;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="space-y-7 border border-border bg-white p-7 shadow-[var(--shadow-card)] lg:p-10">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
          <p className="text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground">Your Numbers</p>
          <button
            type="button"
            onClick={onReset}
            className="-mr-2 min-h-11 px-3 text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-gold"
          >
            Reset
          </button>
        </div>
        {inputs}
      </div>
      {result}
    </div>
  );
}

const pmt = (principal: number, annualRate: number, years: number) => {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (n <= 0) return 0;
  const v = r === 0 ? principal / n : (principal * r) / (1 - Math.pow(1 + r, -n));
  return Number.isFinite(v) ? v : 0;
};

/* ---------------- Affordability ---------------- */

function Affordability() {
  const D = { income: 110000, debts: 650, down: 60000, rate: 6.5, term: 30, dti: 43, costs: 1.5 };
  const [income, setIncome] = useState(D.income);
  const [debts, setDebts] = useState(D.debts);
  const [down, setDown] = useState(D.down);
  const [rate, setRate] = useState(D.rate);
  const [term, setTerm] = useState(D.term);
  const [dti, setDti] = useState(D.dti);
  const [costs, setCosts] = useState(D.costs);

  const monthlyIncome = income / 12;
  const budget = Math.max(0, monthlyIncome * (dti / 100) - debts);
  // Split the budget between P&I and estimated taxes/insurance carried as a % of value.
  const r = rate / 100 / 12;
  const n = term * 12;
  const factor = r === 0 ? 1 / n : r / (1 - Math.pow(1 + r, -n));
  // budget = (price - down) * factor + price * costs%/12  ->  solve for price
  const monthlyCostRate = costs / 100 / 12;
  const price = (budget + down * factor) / (factor + monthlyCostRate);
  const safePrice = Number.isFinite(price) && price > 0 ? price : 0;
  const loan = Math.max(0, safePrice - down);
  const pi = pmt(loan, rate, term);

  return (
    <Shell
      onReset={() => {
        setIncome(D.income);
        setDebts(D.debts);
        setDown(D.down);
        setRate(D.rate);
        setTerm(D.term);
        setDti(D.dti);
        setCosts(D.costs);
      }}
      inputs={
        <>
          <ToolField label="Annual Household Income" hint="Gross income before taxes." value={income} onChange={setIncome} min={20000} max={1000000} step={2500} prefix="$" grouped />
          <ToolField label="Monthly Debt Payments" hint="Car loans, student loans, minimum credit card payments." value={debts} onChange={setDebts} min={0} max={10000} step={25} prefix="$" grouped />
          <ToolField label="Down Payment Available" value={down} onChange={setDown} min={0} max={1000000} step={2500} prefix="$" grouped />
          <ToolField label="Interest Rate Assumption" hint="Enter a rate to model. This is not a quoted rate." value={rate} onChange={setRate} min={1} max={12} step={0.125} suffix="%" />
          <ToolField label="Loan Term (years)" value={term} onChange={setTerm} min={10} max={40} step={5} />
          <ToolField label="Debt-to-Income Assumption" hint="Guidelines vary by program and lender." value={dti} onChange={setDti} min={20} max={50} step={1} suffix="%" />
          <ToolField label="Taxes & Insurance (% of value / yr)" value={costs} onChange={setCosts} min={0.3} max={4} step={0.1} suffix="%" />
        </>
      }
      result={
        <ResultPanel
          tool="affordability"
          headline="Estimated Price Range"
          value={money(safePrice)}
          rows={[
            ["Monthly housing budget", money(budget)],
            ["Estimated loan amount", money(loan)],
            ["Estimated principal & interest", money(pi)],
            ["Estimated taxes & insurance", money((safePrice * costs) / 100 / 12)],
          ]}
          note="Actual qualifying amounts depend on full credit, income and program review."
        />
      }
    />
  );
}

/* ---------------- Down Payment ---------------- */

function DownPayment() {
  const D = { price: 450000, pct: 10, saved: 15000, monthly: 900 };
  const [price, setPrice] = useState(D.price);
  const [pct, setPct] = useState(D.pct);
  const [saved, setSaved] = useState(D.saved);
  const [monthly, setMonthly] = useState(D.monthly);

  const target = (price * pct) / 100;
  const gap = Math.max(0, target - saved);
  const months = monthly > 0 ? Math.ceil(gap / monthly) : 0;
  const closingLow = price * 0.02;
  const closingHigh = price * 0.05;

  return (
    <Shell
      onReset={() => {
        setPrice(D.price);
        setPct(D.pct);
        setSaved(D.saved);
        setMonthly(D.monthly);
      }}
      inputs={
        <>
          <ToolField label="Target Home Price" value={price} onChange={setPrice} min={50000} max={3000000} step={5000} prefix="$" grouped />
          <ToolField label="Down Payment Goal" hint="Minimums vary by program; some programs allow less." value={pct} onChange={setPct} min={0} max={50} step={0.5} suffix="%" />
          <ToolField label="Already Saved" value={saved} onChange={setSaved} min={0} max={1000000} step={1000} prefix="$" grouped />
          <ToolField label="Saving Per Month" value={monthly} onChange={setMonthly} min={0} max={20000} step={50} prefix="$" grouped />
        </>
      }
      result={
        <ResultPanel
          tool="down_payment"
          headline="Down Payment Target"
          value={money(target)}
          rows={[
            ["Still to save", money(gap)],
            ["Months at current pace", gap === 0 ? "Goal reached" : monthly > 0 ? `${months}` : "—"],
            ["Estimated closing costs", `${money(closingLow)} – ${money(closingHigh)}`],
            ["Estimated cash to close", `${money(target + closingLow)} – ${money(target + closingHigh)}`],
          ]}
          note="Closing costs vary by lender, county and transaction and are shown here as a general range."
        />
      }
    />
  );
}

/* ---------------- Rent vs Buy ---------------- */

function RentVsBuy() {
  const D = { rent: 2100, rentGrowth: 3, price: 450000, down: 45000, rate: 6.5, costs: 1.8, appreciation: 3, years: 7 };
  const [rent, setRent] = useState(D.rent);
  const [rentGrowth, setRentGrowth] = useState(D.rentGrowth);
  const [price, setPrice] = useState(D.price);
  const [down, setDown] = useState(D.down);
  const [rate, setRate] = useState(D.rate);
  const [costs, setCosts] = useState(D.costs);
  const [appreciation, setAppreciation] = useState(D.appreciation);
  const [years, setYears] = useState(D.years);

  const loan = Math.max(0, price - down);
  const pi = pmt(loan, rate, 30);
  const monthlyR = rate / 100 / 12;

  let rentPaid = 0;
  let rentNow = rent;
  for (let y = 0; y < years; y++) {
    rentPaid += rentNow * 12;
    rentNow *= 1 + rentGrowth / 100;
  }

  let balance = loan;
  let ownCost = down + price * 0.03; // down payment + estimated closing costs
  for (let m = 0; m < years * 12; m++) {
    const interest = balance * monthlyR;
    const principalPart = Math.max(0, pi - interest);
    balance = Math.max(0, balance - principalPart);
    ownCost += interest + (price * (costs / 100)) / 12;
  }
  const futureValue = price * Math.pow(1 + appreciation / 100, years);
  const equity = Math.max(0, futureValue - balance) - down;
  const netOwn = ownCost - down - equity;
  const difference = rentPaid - (ownCost - down - equity);

  return (
    <Shell
      onReset={() => {
        setRent(D.rent);
        setRentGrowth(D.rentGrowth);
        setPrice(D.price);
        setDown(D.down);
        setRate(D.rate);
        setCosts(D.costs);
        setAppreciation(D.appreciation);
        setYears(D.years);
      }}
      inputs={
        <>
          <ToolField label="Current Monthly Rent" value={rent} onChange={setRent} min={300} max={15000} step={25} prefix="$" grouped />
          <ToolField label="Annual Rent Increase" value={rentGrowth} onChange={setRentGrowth} min={0} max={10} step={0.5} suffix="%" />
          <ToolField label="Home Price" value={price} onChange={setPrice} min={50000} max={3000000} step={5000} prefix="$" grouped />
          <ToolField label="Down Payment" value={down} onChange={setDown} min={0} max={price} step={2500} prefix="$" grouped />
          <ToolField label="Interest Rate Assumption" hint="A rate you choose to model — not a quote." value={rate} onChange={setRate} min={1} max={12} step={0.125} suffix="%" />
          <ToolField label="Ownership Costs (% of value / yr)" hint="Taxes, insurance and maintenance combined." value={costs} onChange={setCosts} min={0.5} max={5} step={0.1} suffix="%" />
          <ToolField label="Home Appreciation Assumption" value={appreciation} onChange={setAppreciation} min={-3} max={8} step={0.5} suffix="%" />
          <ToolField label="Years in the Home" value={years} onChange={setYears} min={1} max={30} step={1} />
        </>
      }
      result={
        <ResultPanel
          tool="rent_vs_buy"
          headline={`Over ${years} year${years === 1 ? "" : "s"}`}
          value={difference >= 0 ? `${money(Math.abs(difference))} favors buying` : `${money(Math.abs(difference))} favors renting`}
          rows={[
            ["Total rent paid", money(rentPaid)],
            ["Net cost of owning", money(netOwn)],
            ["Estimated equity gained", money(equity)],
            ["Estimated monthly P&I", money(pi)],
          ]}
          note="Outcomes depend heavily on the assumptions you enter, especially appreciation and how long you stay."
        />
      }
    />
  );
}

/* ---------------- Refinance Break-Even ---------------- */

function RefiBreakEven() {
  const D = { balance: 320000, currentRate: 7.25, newRate: 6.25, term: 30, costs: 5500 };
  const [balance, setBalance] = useState(D.balance);
  const [currentRate, setCurrentRate] = useState(D.currentRate);
  const [newRate, setNewRate] = useState(D.newRate);
  const [term, setTerm] = useState(D.term);
  const [costs, setCosts] = useState(D.costs);

  const currentPayment = pmt(balance, currentRate, term);
  const newPayment = pmt(balance, newRate, term);
  const savings = currentPayment - newPayment;
  const months = savings > 0 ? Math.ceil(costs / savings) : 0;

  return (
    <Shell
      onReset={() => {
        setBalance(D.balance);
        setCurrentRate(D.currentRate);
        setNewRate(D.newRate);
        setTerm(D.term);
        setCosts(D.costs);
      }}
      inputs={
        <>
          <ToolField label="Current Loan Balance" value={balance} onChange={setBalance} min={10000} max={3000000} step={5000} prefix="$" grouped />
          <ToolField label="Current Rate" hint="The rate on your existing loan." value={currentRate} onChange={setCurrentRate} min={1} max={15} step={0.125} suffix="%" />
          <ToolField label="Rate to Model" hint="A hypothetical rate — not a quoted or available rate." value={newRate} onChange={setNewRate} min={1} max={15} step={0.125} suffix="%" />
          <ToolField label="New Loan Term (years)" value={term} onChange={setTerm} min={5} max={40} step={5} />
          <ToolField label="Estimated Refinance Costs" value={costs} onChange={setCosts} min={0} max={40000} step={250} prefix="$" grouped />
        </>
      }
      result={
        <ResultPanel
          tool="refinance_break_even"
          headline="Estimated Break-Even"
          value={savings > 0 ? `${months} month${months === 1 ? "" : "s"}` : "No monthly savings"}
          rows={[
            ["Current payment (P&I)", money(currentPayment)],
            ["Modeled payment (P&I)", money(newPayment)],
            ["Monthly difference", money(Math.max(0, savings))],
            ["Costs to recover", money(costs)],
          ]}
          note="Resetting the term can change total interest paid even when the monthly payment drops."
          ctaLabel="Review a Refinance"
        />
      }
    />
  );
}

const TOOLS = [
  { key: "affordability", label: "Affordability", blurb: "Estimate a price range from income, debts and down payment.", node: <Affordability /> },
  { key: "down-payment", label: "Down Payment", blurb: "See your savings target and how long it may take to reach it.", node: <DownPayment /> },
  { key: "rent-vs-buy", label: "Rent vs. Buy", blurb: "Compare renting against owning over a period you choose.", node: <RentVsBuy /> },
  { key: "refinance", label: "Refinance Break-Even", blurb: "Estimate how long it takes to recover refinance costs.", node: <RefiBreakEven /> },
];

export function MortgageTools({ initial = 0 }: { initial?: number }) {
  const [active, setActive] = useState(initial);
  const current = TOOLS[active]!;

  return (
    <section className="bg-background py-20 lg:py-28" id="tools">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <Reveal>
          <div
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0"
            role="tablist"
            aria-label="Mortgage tools"
          >
            {TOOLS.map((t, i) => {
              const selected = i === active;
              return (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setActive(i);
                    track("tool_open", { tool: t.key });
                  }}
                  className={`min-h-11 shrink-0 border px-5 py-3 text-[0.66rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    selected
                      ? "border-gold bg-navy text-white"
                      : "border-border bg-white text-muted-foreground hover:border-gold hover:text-navy"
                  }`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">{current.blurb}</p>
        </Reveal>

        <div className="mt-8 animate-fade-in" key={current.key}>
          {current.node}
        </div>
      </div>
    </section>
  );
}
