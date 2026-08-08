import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Typed-route escape hatch for data-driven links (services, locations, articles).
 * The paths come from content files, so they are template literals at compile time.
 */
export function SiteLink({
  to,
  className = "",
  children,
  onClick,
  ariaLabel,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  return (
    <Link to={to as never} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
