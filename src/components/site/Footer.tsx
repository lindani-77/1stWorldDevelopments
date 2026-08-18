import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="w-full bg-white text-black">
      <div className="grid w-full gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-10 md:grid-cols-[1.55fr_0.7fr_0.85fr_0.7fr] md:gap-4 md:px-8 md:py-12 lg:gap-6 lg:px-12 lg:py-14">
        <div>
          <div className="flex items-center gap-3 overflow-visible">
            <Link to="/" className="inline-flex w-[130px] sm:w-[150px] md:w-[160px] items-center overflow-visible transition-transform hover:-translate-y-0.5" aria-label="1st World Developments">
              <img
                src="/site-logo.png"
                alt="1st World Developments"
                className="block h-auto w-full max-w-full object-contain"
                loading="lazy"
              />
            </Link>
          </div>
          <p className="mt-3 sm:mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-black">
            A versatile consulting firm rendering adhoc and long-term solutions. We assess, analyze,
            propose and execute decisive actions.
          </p>
          <p className="mt-3 sm:mt-4 text-xs font-medium text-black">BBBEE Level 1 &nbsp;|&nbsp; CK No: 2016/210802/07</p>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-black">Navigate</div>
          <ul className="grid gap-1.5 sm:gap-2 text-xs sm:text-sm leading-relaxed">
            {[
              ["/services", "Services"],
              ["/media-hub", "Media Hub"],
              ["/perspectives", "Perspectives"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="text-black hover:text-black/70 transition">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 md:pl-1">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-black">Contact</div>
          <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-black">
            <li className="leading-snug">4 Barium Street, Alrode, 1451</li>
            <li>Phone: 010 109 2074</li>
            <li>Cell: 079 135 9089</li>
            <li><a className="hover:text-black/70 transition" href="mailto:info@1stworlddevelopments.co.za">info@1stworlddevelopments.co.za</a></li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-black">Legal</div>
          <ul className="space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-black">
            <li><Link to="/terms-of-use" className="hover:text-black/70 transition">Terms of use</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-black/70 transition">Privacy Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-black/70 transition">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="w-full px-4 py-4 sm:px-6 md:px-8 lg:px-12 md:py-6 flex flex-col gap-3 sm:gap-4 justify-between text-xs text-black/75 md:flex-row">
          <p>© {new Date().getFullYear()} 1st World Developments. All rights reserved.</p>
          <p>Adhoc Projects · Consulting · Research</p>
        </div>
      </div>
    </footer>
  );
}
