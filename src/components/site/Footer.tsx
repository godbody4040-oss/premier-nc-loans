import { Link } from "@tanstack/react-router";
import { Placeholder } from "./ui";

const nav = [
  { to: "/", label: "Home" },
  { to: "/mortgage-solutions", label: "Mortgage Solutions" },
  { to: "/home-buyers", label: "Home Buyers" },
  { to: "/investors", label: "Investors" },
  { to: "/about", label: "About" },
  { to: "/calculator", label: "Calculator" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy pb-28 pt-20 text-white/70 lg:pb-16">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl tracking-[0.14em] text-white">PREMIER LENDING NC</p>
            <span className="gold-rule mt-5" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Mortgage financing with a strategy-first approach.
            </p>
            <div className="mt-6 flex gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((s) => (
                <span
                  key={s}
                  title="Link a verified account before launch"
                  className="border border-white/15 px-3 py-2 text-[0.65rem] uppercase tracking-[0.16em] text-white/50"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow text-gold">Navigate</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">Contact</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Placeholder>[PHONE]</Placeholder>
              </li>
              <li>
                <Placeholder>[EMAIL]</Placeholder>
              </li>
              <li>
                <Placeholder>[OFFICE ADDRESS]</Placeholder>
              </li>
            </ul>
            <p className="eyebrow mt-8 text-gold">Compliance</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Placeholder>[NMLS #]</Placeholder>
              </li>
              <li>
                <Placeholder>[LICENSE INFORMATION]</Placeholder>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/45">
          <p>
            Premier Lending NC is a mortgage brokerage operating in North Carolina. Information on this
            website is for general educational purposes only and is not a commitment to lend, an offer of
            credit, or financial advice. All loan programs, terms and availability are subject to lender
            approval, verification of information, credit review, property review and applicable law. Rates
            and figures shown by any calculator on this site are illustrative estimates only. Licensing
            details: <Placeholder>[LICENSE INFORMATION]</Placeholder>{" "}
            <Placeholder>[NMLS #]</Placeholder>. Equal Housing Opportunity.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span>© {new Date().getFullYear()} Premier Lending NC</span>
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/disclosures" className="hover:text-gold">
              Terms
            </Link>
            <Link to="/disclosures" className="hover:text-gold">
              Licensing &amp; Disclosures
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
