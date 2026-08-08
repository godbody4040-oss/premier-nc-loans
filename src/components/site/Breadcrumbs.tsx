import { SiteLink } from "./SiteLink";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ crumbs, light = true }: { crumbs: Crumb[]; light?: boolean }) {
  const base = light ? "text-white/50" : "text-muted-foreground";
  return (
    <nav aria-label="Breadcrumb" className={`text-[0.66rem] uppercase tracking-[0.16em] ${base}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className={light ? "text-gold" : "text-navy"}>
                  {c.name}
                </span>
              ) : (
                <SiteLink to={c.path} className="transition-colors hover:text-gold">
                  {c.name}
                </SiteLink>
              )}
              {last ? null : <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
