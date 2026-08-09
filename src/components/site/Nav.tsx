import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CTA } from "./ui";

const links = [
  { to: "/", label: "Home" },
  { to: "/mortgage-solutions", label: "Mortgage Solutions" },
  { to: "/loan-programs", label: "Loan Programs" },
  { to: "/home-buyers", label: "Home Buyers" },
  { to: "/investors", label: "Investors" },
  { to: "/locations", label: "Service Areas" },
  { to: "/about", label: "About Jorge" },
  { to: "/calculator", label: "Calculator" },
  { to: "/resources", label: "Resources" },
];

export function Nav({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(!transparent);
  const [open, setOpen] = useState(false);

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
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10 lg:py-5">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 shrink-0 place-items-center border border-gold/60 font-display text-sm text-gold">
            P
          </span>
          <span className="min-w-0 leading-none">
            <span className="block whitespace-nowrap font-display text-[0.95rem] tracking-[0.14em] text-white">PREMIER</span>
            <span className="block whitespace-nowrap text-[0.6rem] tracking-[0.34em] text-gold">LENDING NC</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white/75 transition-colors hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <CTA to="/contact" variant="gold" className="!px-5 !py-2.5">
            Free Mortgage Quote
          </CTA>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center border border-white/25 text-white xl:hidden"
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

      <div
        className={`overflow-hidden bg-navy transition-[max-height] duration-500 xl:hidden ${
          open ? "max-h-[32rem]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3.5 text-sm uppercase tracking-[0.14em] text-white/80"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="border-b border-white/10 py-3.5 text-sm uppercase tracking-[0.14em] text-white/80"
          >
            Contact
          </Link>
          <CTA to="/contact" variant="gold" className="mt-4">
            Free Mortgage Quote
          </CTA>
        </nav>
      </div>
    </header>
  );
}
