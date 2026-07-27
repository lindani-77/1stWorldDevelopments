import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import aboutHero from "../assets/about-hero.jpg";
import hpLogo from "../assets/companies/hp.webp";
import dellLogo from "../assets/companies/dell.webp";
import lenovoLogo from "../assets/companies/lenovo.webp";
import logitechLogo from "../assets/companies/logitech.webp";
import netraceLogo from "../assets/companies/netrace.jpg";
import targusLogo from "../assets/companies/targus.webp";
import epsonBrotherLogo from "../assets/companies/epson-brother.png";

const servicedCompanies = [
  { name: "HP", src: hpLogo },
  { name: "Lenovo", src: lenovoLogo },
  { name: "Dell", src: dellLogo },
  { name: "Logitech", src: logitechLogo },
  { name: "Targus", src: targusLogo },
  { name: "Netrace", src: netraceLogo },
  { name: "Epson and Brother", src: epsonBrotherLogo },
] as const;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — 1st World Developments" },
      { name: "description", content: "We bring structure, expertise and calm execution to complex business challenges — from consulting-first origins to a full-service model." },
      { property: "og:title", content: "About 1st World Developments" },
      { property: "og:description", content: "Consulting-first origins, now a full-service consulting, research and adhoc partner." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>We bring structure, expertise and calm execution to complex business challenges.</>}
        description="1st World Developments was founded to help organisations move from uncertainty to action through professional consulting, reliable delivery and informed research."
        image={aboutHero}
        imageAlt="Aerial view of a modern city district in teal tones"
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-14 grid gap-6 md:grid-cols-2" data-reveal>
        {[
          ["Our story", "1st World Developments started as a consulting-focused company serving government and private entities. As market realities shifted, we expanded into adhoc supply and delivery services to maintain dependable cashflow and client continuity."],
          ["How we deliver", "Our work combines consulting, research and operational execution. We define the problem, map risks, align resources and implement practical actions that can be measured and improved over time."],
        ].map(([t, d]) => (
          <article key={t} className="rounded-2xl border border-border bg-white p-8 hover-pop">
            <h3 className="text-xl font-semibold text-navy">{t}</h3>
            <p className="mt-3 text-foreground/70">{d}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-14 md:pb-16" data-reveal>
        <div className="rounded-2xl border border-border bg-white p-7 md:p-10 shadow-[var(--shadow-soft)]">
          <p className="eyebrow">Companies we've serviced</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy">Trusted by leading technology and supply brands.</h2>
          <p className="mt-3 max-w-3xl text-foreground/70">
            We deliver across procurement, consulting and operational support with a network of established manufacturers and distributors.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {servicedCompanies.map((company) => (
              <div key={company.name} className="rounded-xl border border-border bg-white/85 px-4 py-3 hover-pop">
                <img
                  src={company.src}
                  alt={`${company.name} logo`}
                  className="h-16 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border" data-reveal>
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
          <div className="max-w-2xl">
            <p className="eyebrow">What changed over time</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy">From consulting-only to a full-service model.</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              ["Adhoc evolution", "Adhoc services now include stationery, promotional items, corporate gifts, laptops, desktops and accessories. In 2025, the company successfully delivered exam papers for Gauteng Province as a major adhoc project."],
              ["Brand partnerships", "To support consistent quality, we are registered as a distributor or reseller with 100+ reputable brands including HP, Lenovo, Dell, Logitech, Brother, Epson, Targus and Netrace."],
            ].map(([t, d]) => (
              <article key={t} className="rounded-2xl bg-white border border-border p-8 hover-pop">
                <h3 className="text-xl font-semibold text-navy">{t}</h3>
                <p className="mt-3 text-foreground/70">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
