import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/media-hub", label: "Media Hub" },
  { to: "/perspectives", label: "Perspectives" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40 backdrop-blur-xl bg-background/80 text-navy">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-2.5 md:py-3">
        <div className="nav-shell relative flex items-center gap-2 px-0 py-1 sm:gap-3 sm:px-0 md:gap-5 md:py-1.5">
          <div className="shrink-0">
            <Link to="/" className="block w-[168px] sm:w-[208px] md:w-[250px] lg:w-[290px] max-w-full" aria-label="1st World Developments">
              <img
                src="/company-logo.svg"
                alt="1st World Developments"
                className="block h-auto w-full object-contain"
                loading="eager"
              />
            </Link>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex items-center justify-center rounded-lg border border-border bg-white/70 p-2 text-navy md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="nav-track hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-1 p-1 sm:gap-1.5 sm:p-1.5 md:flex md:justify-end md:p-0" aria-label="Primary">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="nav-link text-[0.92rem] font-medium text-navy/80 hover:text-navy"
                activeOptions={{ exact: l.to === "/" }}>
                {l.label}
              </Link>
            ))}
          </nav>

          {menuOpen ? (
            <nav className="absolute left-0 right-0 top-full mt-2 rounded-xl border border-border bg-white/95 p-3 shadow-[var(--shadow-soft)] md:hidden" aria-label="Mobile Primary">
              <div className="grid gap-2">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="nav-link justify-start text-[0.95rem] font-medium text-navy/85"
                    activeOptions={{ exact: l.to === "/" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
