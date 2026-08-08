import type { ReactNode } from "react";
import { Nav } from "./Nav";
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
}: {
  eyebrow: string;
  title: ReactNode;
  body?: string;
}) {
  return (
    <section className="bg-navy pb-20 pt-36 lg:pb-28 lg:pt-44">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
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
