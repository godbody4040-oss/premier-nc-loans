import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Footer } from "./Footer";
import { MobileBar } from "./MobileBar";

export function SiteLayout({
  children,
  transparentNav = false,
}: {
  children: ReactNode;
  transparentNav?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav transparent={transparentNav} />
      <main>{children}</main>
      <Footer />
      <MobileBar />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  crumbs,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="bg-navy pb-14 pt-24 lg:pb-20 lg:pt-32">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        {crumbs ? (
          <div className="mb-7">
            <Breadcrumbs crumbs={crumbs} />
          </div>
        ) : null}
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="display mt-6 max-w-4xl text-[2.25rem] text-white sm:text-[3rem] lg:text-[4rem]">
          {title}
        </h1>
        {body ? <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65">{body}</p> : null}
        <span className="gold-rule mt-10" />
      </div>
    </section>
  );
}
