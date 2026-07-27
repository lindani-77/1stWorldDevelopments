import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 gradient-hero text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-14 grid gap-8 md:gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-flex w-[230px] sm:w-[270px] md:w-[320px] items-center transition-transform hover:-translate-y-0.5" aria-label="1st World Developments">
              <img
                src="/company-logo.svg"
                alt="1st World Developments"
                className="block h-auto w-full"
                loading="lazy"
              />
            </Link>
          </div>
          <p className="mt-4 text-white/80 max-w-md text-sm leading-relaxed">
            A versatile consulting firm rendering adhoc and long-term solutions. We assess, analyze,
            propose and execute decisive actions.
          </p>
          <p className="mt-4 text-xs text-white/60">BBBEE Level 1 &nbsp;|&nbsp; CK No: 2016/210802/07</p>
        </div>
        <div>
          <div className="text-white/60 text-xs uppercase tracking-widest mb-3">Navigate</div>
          <ul className="space-y-2 text-sm">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/media-hub", "Media Hub"],
              ["/perspectives", "Perspectives"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="text-white/85 hover:text-white">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-white/60 text-xs uppercase tracking-widest mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-white/85">
            <li>4 Barium Street, Alrode, 1451</li>
            <li>Phone: 010 109 2074</li>
            <li>Cell: 079 135 9089</li>
            <li><a className="hover:text-white" href="mailto:info@1stworlddevelopments.co.za">info@1stworlddevelopments.co.za</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-col md:flex-row gap-2 justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} 1st World Developments. All rights reserved.</p>
          <p>Adhoc Projects · Consulting · Research</p>
        </div>
      </div>
    </footer>
  );
}
