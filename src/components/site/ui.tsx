import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Arrow() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M9 1l4 4-4 4M13 5H0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Variant = "gold" | "navy" | "outlineLight" | "outlineDark" | "ghost";

const base =
  "arrow-cta justify-center min-h-12 px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 rounded-[2px]";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-navy hover:bg-gold-light",
  navy: "bg-navy text-white hover:bg-navy-deep",
  outlineLight: "border border-white/35 text-white hover:border-gold hover:text-gold",
  outlineDark: "border border-navy/25 text-navy hover:border-gold hover:text-navy",
  ghost: "text-navy hover:text-gold",
};

export function CTA({
  to,
  href,
  children,
  variant = "gold",
  className = "",
  arrow = true,
  onClick,
  type,
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow ? <Arrow /> : null}
    </>
  );
  if (to) {
    return (
      <Link to={to} onClick={onClick} className={cls}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export function Eyebrow({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "muted" }) {
  return (
    <p className={`eyebrow ${tone === "gold" ? "text-gold" : "text-muted-foreground"}`}>{children}</p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={`display mt-5 text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p className={`mt-5 text-base leading-relaxed ${light ? "text-white/65" : "text-muted-foreground"}`}>
          {body}
        </p>
      ) : null}
      <span className={`gold-rule ${center ? "mx-auto" : ""} mt-8`} />
    </div>
  );
}
