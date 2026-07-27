import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { FileText, Download, ShieldCheck, Leaf, Award, Users, Lock, Rocket, BookOpen, ArrowUpRight } from "lucide-react";
import mediaHero from "../assets/media-hero.jpg";

export const Route = createFileRoute("/media-hub")({
  head: () => ({
    meta: [
      { title: "Media Hub — Policies & Digital Assets | 1st World Developments" },
      { name: "description", content: "Corporate governance, policies and digital assets. Download our published documents." },
      { property: "og:title", content: "Media Hub" },
      { property: "og:description", content: "Corporate policies, governance documents and digital assets." },
      { property: "og:url", content: "/media-hub" },
    ],
    links: [{ rel: "canonical", href: "/media-hub" }],
  }),
  component: MediaHubPage,
});

const policies = [
  { icon: ShieldCheck, t: "Code of Business Conduct", d: "Standards of professional conduct and ethical behaviour across 1st World Developments.", type: "PDF", href: "/downloads/code-of-business-conduct.pdf" },
  { icon: Users, t: "Community Hiring Policy", d: "Our approach to community hiring and inclusive recruitment practices.", type: "PDF", href: "/downloads/community-hiring-policy.pdf" },
  { icon: Leaf, t: "Environmental Responsibility Policy", d: "Commitments and actions to reduce environmental impact and promote sustainability.", type: "PDF", href: "/downloads/environmental-responsibility-policy.pdf" },
  { icon: Award, t: "Global Quality Policy", d: "Quality management principles and expectations that guide our delivery.", type: "PDF", href: "/downloads/global-quality-policy.pdf" },
  { icon: Lock, t: "Information Security Policy", d: "Controls and responsibilities to protect client and company information assets.", type: "PDF", href: "/downloads/information-security-policy.pdf" },
  { icon: Rocket, t: "New Product Development Policy", d: "Processes and governance for developing and launching new products and services.", type: "PDF", href: "/downloads/new-product-development-policy.pdf" },
  { icon: BookOpen, t: "Privacy & Copyright Policy", d: "How we treat personal data and intellectual property across our activities.", type: "PDF", href: "/downloads/privacy-and-copyright-policy.pdf" },
];

const digitalAssets = [
  { t: "Company Profile", d: "Our capabilities, market focus and service delivery model in a polished, accessible format.", href: "/downloads/company-profile.txt", type: "TXT" },
  { t: "Product Catalogues", d: "Redesigned catalogues of reputable brands we distribute — HP, Lenovo, Dell, Logitech and more.", href: "/downloads/product-catalogues.txt", type: "TXT" },
  { t: "Reseller Certificates", d: "HP, Lenovo, Dell, Logitech, Brother, Epson, Targus and Netrace authorisations.", href: "/downloads/reseller-certificates.txt", type: "TXT" },
];

function MediaHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Hub"
        title={<>Corporate governance and policies.</>}
        description="Browse our official policies, governance documents and media assets in one structured hub built for transparency and trust."
        image={mediaHero}
        imageAlt="Abstract flowing white documents on a teal surface"
      />

      {/* Tabs */}
      <div className="mx-auto max-w-7xl px-5 md:px-8" data-reveal>
        <div className="stagger-children flex flex-wrap gap-2 border-t border-border pt-6">
          <a href="#policies" className="media-tab rounded-full gradient-hero text-white px-4 py-1.5 text-sm">Policies</a>
          <a href="#digital-assets" className="media-tab rounded-full border border-border px-4 py-1.5 text-sm hover:bg-mint-soft">Digital assets</a>
        </div>
      </div>

      {/* Policies — Stantec-style list */}
      <section id="policies" className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20" data-reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">Policies & downloads</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy">Our published policies.</h2>
        </div>
        <div className="stagger-children mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {policies.map(({ icon: Icon, t, d, type, href }) => (
            <article key={t} className="media-card hover-pop group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="absolute inset-x-0 top-0 h-1 gradient-hero opacity-80" />
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-mint-soft text-navy transition-colors group-hover:gradient-hero group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground">{type}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">{d}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Official policy</span>
                <a
                  href={href}
                  download
                  className="media-download-btn inline-flex items-center gap-2 text-sm font-medium text-navy hover-arrow"
                  aria-label={`Download ${t}`}
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Final policy PDFs are linked directly and ready for download.</p>
      </section>

      {/* Digital assets */}
      <section id="digital-assets" className="border-y border-border" data-reveal>
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow">Digital assets</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy">
              Professional materials that support presentations, onboarding and procurement.
            </h2>
          </div>
          <div className="stagger-children mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {digitalAssets.map(({ t, d, href, type }) => (
              <article key={t} className="media-card hover-pop group rounded-2xl bg-white border border-border p-6 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className="flex items-start justify-between gap-4">
                  <div className="h-11 w-11 grid place-items-center rounded-xl gradient-hero text-white"><FileText className="h-5 w-5" /></div>
                  <span className="inline-flex rounded-full border border-border px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted-foreground">{type}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{d}</p>
                <a href={href} download className="media-download-btn mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy hover-arrow">
                  Download asset <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
