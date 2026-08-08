import { Link } from "@tanstack/react-router";
import { track } from "@/lib/analytics";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/25 bg-navy/95 backdrop-blur-md lg:hidden">
      <Link
        to="/calculator"
        onClick={() => track("hero_cta_calculator_click", { location: "mobile_bar" })}
        className="flex min-h-14 items-center justify-center border-r border-white/10 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white transition-colors active:text-gold"
      >
        Calculator
      </Link>
      <Link
        to="/contact"
        onClick={() => track("hero_cta_prequal_click", { location: "mobile_bar" })}
        className="flex min-h-14 items-center justify-center bg-gold text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy transition-colors active:bg-gold-light"
      >
        Get Pre-Qualified
      </Link>
    </div>
  );
}
