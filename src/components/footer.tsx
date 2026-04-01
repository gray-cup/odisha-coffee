import Link from "next/link";
import { farms } from "@/data/farms";

const quickLinks = [
  { href: "/farms", label: "All Farms" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About OCGA" },
  { href: "/contact", label: "Contact & Wholesale" },
];

const infoLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/shipping", label: "Shipping Policy" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export default function Footer() {
  return (
    <footer className="border-t-2 border-odisha-black bg-odisha-black text-odisha-offwhite">
      {/* Top bar */}
      <div className="bg-odisha-red border-b-2 border-odisha-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-odisha-offwhite text-sm font-medium">
            Sourcing exceptional coffee from the Eastern Ghats of Odisha — available for wholesale &amp; export.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-odisha-offwhite text-odisha-black text-sm font-semibold border-2 border-odisha-offwhite hover:bg-odisha-yellow hover:border-odisha-yellow transition-colors whitespace-nowrap"
          >
            Wholesale Inquiry
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand block */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="text-lg font-serif font-bold text-odisha-offwhite tracking-wide mb-1">
                ODISHA COFFEE
              </div>
              <div className="text-xs uppercase tracking-widest text-odisha-offwhite/50 mb-3">
                Odisha Coffee Growers Association
              </div>
              <p className="text-xs text-odisha-offwhite/60 leading-relaxed">
                A grower collective representing 24 coffee estates across Koraput and surrounding districts of Odisha, India.
              </p>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <div className="h-2 w-2 bg-odisha-green rounded-full" />
              <span className="text-xs text-odisha-offwhite/50">Export Ready</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-odisha-offwhite/50 mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-odisha-offwhite/70 hover:text-odisha-yellow transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Member farms */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-odisha-offwhite/50 mb-4">
              Member Farms
            </h3>
            <ul className="space-y-1.5 columns-2">
              {farms.map((f) => (
                <li key={f.id} className="break-inside-avoid">
                  <Link
                    href={`/farms/${f.id}`}
                    className="text-xs text-odisha-offwhite/60 hover:text-odisha-yellow transition-colors leading-relaxed"
                  >
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-odisha-offwhite/50 mb-4">
              Legal &amp; Info
            </h3>
            <ul className="space-y-2 mb-6">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-odisha-offwhite/70 hover:text-odisha-yellow transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="text-xs text-odisha-offwhite/50 space-y-1">
              <p>Member: <a href="https://www.ocga.in" target="_blank" rel="noopener" className="hover:text-odisha-yellow transition-colors underline">ocga.in</a></p>
              <p>Koraput, Odisha — India</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-odisha-offwhite/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs text-odisha-offwhite/40">
          <p>© {new Date().getFullYear()} Odisha Coffee Growers Association (OCGA). All rights reserved.</p>
          <p>
            Koraput Arabica &amp; Robusta — Eastern Ghats, Odisha, India &nbsp;·&nbsp; FSSAI Licensed &nbsp;·&nbsp; APEDA Registered &nbsp;·&nbsp; IEC Certified
          </p>
        </div>
      </div>
    </footer>
  );
}
