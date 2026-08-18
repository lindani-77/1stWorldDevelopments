import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/media-hub", label: "Media Hub" },
  { to: "/perspectives", label: "Perspectives" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-border bg-white text-navy shadow-sm">
      <div className="w-full px-5 py-3 sm:px-8 lg:px-12">
        <div className="nav-shell relative flex items-center justify-between gap-2 px-0 py-1 sm:gap-3 md:gap-4">
          <div className="shrink min-w-0 overflow-visible">
            <Link to="/" className="block w-[140px] sm:w-[180px] md:w-[210px] lg:w-[220px] max-w-[calc(100vw-5.8rem)] sm:max-w-full overflow-visible" aria-label="1st World Developments">
              <img
                src="/site-logo.png"
                alt="1st World Developments"
                className="block h-auto w-full object-contain"
                loading="eager"
              />
            </Link>
          </div>

          <button
            type="button"
            className="ml-auto inline-flex items-center justify-center rounded-lg border border-border bg-white/78 p-2 text-navy lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <nav className="nav-track hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-2 p-0 lg:flex" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="nav-link text-[0.8rem] sm:text-[0.85rem]"
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {menuOpen ? (
            <nav className="absolute left-0 right-0 top-full mt-2 rounded-xl border border-border bg-white/97 p-3 shadow-[var(--shadow-soft)] lg:hidden" aria-label="Mobile Primary">
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
