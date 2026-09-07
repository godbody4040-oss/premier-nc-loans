import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CTA } from "./ui";
import { LanguageSwitcher } from "./LanguageSwitcher";


const sections = [
  { hash: "itin-home-loans", label: "ITIN Home Buying" },
  { hash: "bank-statement-home-loans", label: "Bank Statement Home Loans" },
  { hash: "rental-property-financing", label: "Rental Property Investing" },
  { hash: "fix-and-flip-financing", label: "Fix-and-Flip Investing" },
  { hash: "refinancing-cash-out", label: "Refinancing" },
  { hash: "non-permanent-resident-mortgages", label: "Non-Permanent Resident Mortgages" },
];

export function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparent);
  const [open, setOpen] = useState(false);
  const isHome = useRouterState({ select: (s) => s.location.pathname === "/" });


  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-navy/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(200,169,107,0.18)]" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 lg:px-10 ${
          solid ? "py-2 lg:py-2.5" : "py-3 lg:py-4"
        }`}
      >
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 shrink-0 place-items-center border border-gold/60 font-display text-sm text-gold">
            P
          </span>
          <span className="min-w-0 leading-none">
            <span className="block whitespace-nowrap font-display text-[0.95rem] tracking-[0.14em] text-white">PREMIER</span>
            <span className="block whitespace-nowrap text-[0.6rem] tracking-[0.28em] text-gold">LENDING NC</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-3 xl:flex 2xl:gap-5">
          <Link
            to="/"
            activeOptions={{ exact: true, includeHash: false }}
            activeProps={{ className: "text-gold" }}
            className="whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.08em] text-white/75 transition-colors hover:text-gold 2xl:text-[0.7rem] 2xl:tracking-[0.13em]"
          >
            Home
          </Link>
          {sections.map((s) => (
            <Link
              key={s.hash}
              to="/"
              hash={s.hash}
              className="whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.08em] text-white/75 transition-colors hover:text-gold 2xl:text-[0.7rem] 2xl:tracking-[0.13em]"
            >
              {s.label}
            </Link>
          ))}
          {isHome ? <LanguageSwitcher compact className="shrink-0" /> : null}
          <CTA
            to="/contact"
            variant="gold"
            className="!min-h-9 shrink-0 whitespace-nowrap !px-3.5 !py-2 !text-[0.62rem] !tracking-[0.08em] 2xl:!px-5 2xl:!text-[0.7rem] 2xl:!tracking-[0.14em]"
            arrow={false}
          >
            Free Quote
          </CTA>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          {isHome ? <LanguageSwitcher compact /> : null}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center border border-white/25 text-white xl:hidden"
        >


          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-5 bg-current transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
        </div>
      </div>

      <div
        className={`overflow-y-auto overscroll-contain bg-navy transition-[max-height] duration-500 xl:hidden ${
          open ? "max-h-[calc(100svh-4rem)]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-2">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.14em] text-white/80"
          >
            Home
          </Link>
          {sections.map((s) => (
            <Link
              key={s.hash}
              to="/"
              hash={s.hash}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-sm uppercase leading-snug tracking-[0.14em] text-white/80"
            >
              {s.label}
            </Link>
          ))}
          <CTA to="/contact" variant="gold" className="mt-4">
            Free Mortgage Quote
          </CTA>
        </nav>
      </div>
    </header>
  );
}
