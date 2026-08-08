import { Link } from "@tanstack/react-router";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-gold/25 bg-navy/95 backdrop-blur-md lg:hidden">
      <a
        href="tel:"
        className="flex min-h-14 items-center justify-center border-r border-white/10 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white"
      >
        Call
      </a>
      <Link
        to="/contact"
        className="flex min-h-14 items-center justify-center bg-gold text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy"
      >
        Get Started
      </Link>
    </div>
  );
}
