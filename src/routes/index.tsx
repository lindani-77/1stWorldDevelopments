import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import homeHero from "../assets/custom/308352821_xl.jpg";
import missionHero from "../assets/custom/319652692_xl.jpg";
import valuesHero from "../assets/custom/dreamstime_xxl_87641786-fotor-202607200727.jpg";
import impactFinancial from "../assets/custom/thedigitalartist-ai-generated-8366613.jpg";
import impactStrategic from "../assets/custom/dreamstime_xxl_378025700-fotor-202607200317.jpg";
import impactKnowledge from "../assets/custom/stocksnap-books-2596809.jpg";
import { buildUniqueLogoAssets } from "@/lib/logo-assets";
import { LogoCarouselCard } from "@/components/site/LogoCarouselCard";

const brandLogoModules = import.meta.glob("../assets/brand-logos/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const clientLogoModules = import.meta.glob("../assets/companies/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "1st World Developments — Consulting, Research & Adhoc Solutions" },
      { name: "description", content: "A versatile consulting firm. 100+ brands, 110+ delivered projects, 10+ years of adhoc, consulting and research work." },
      { property: "og:title", content: "1st World Developments" },
      { property: "og:description", content: "Consulting, research and adhoc solutions that empower organizations." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const values = [
  { title: "Integrity", desc: "Acting ethically and with transparency. We prioritize doing the right thing, over personal gain." },
  { title: "Innovation", desc: "Pushing past the status quo, with bold and progressive ideas and actions." },
  { title: "Adaptability", desc: "No matter the challenge, we will modify a solution for it." },
  { title: "Commitment", desc: "The willingness to put the time, effort and energy to accomplish results." },
];

const brandDisplayNameOverrides: Record<string, string> = {
  "adobe ai": "Adobe",
  "adobe corporate": "Adobe",
  "lenovo new": "Lenovo",
  "nettrace enterprise asset management idnr75xc51 0": "NetTrace",
  "meeco 2": "Meeco",
  "epson logo vector": "Epson",
  "karcher logo png svg vector 01": "Kärcher",
  "karcher logo png1": "Kärcher",
  "logitech logo vector": "Logitech",
  "polaroid logo vector": "Polaroid",
  "sophos logo": "Sophos",
  "sophos logo 1200x130 52da4c4": "Sophos",
  "targus logo vector": "Targus",
  "wintel logo": "Wintel",
  "treeline logo whitr": "Treeline",
};

const clientDisplayNameOverrides: Record<string, string> = {
  broadreach: "Broadreach",
  "central jhb tvet college": "Central Johannesburg TVET College",
  "commission on restitution of land rights": "Commission on Restitution of Land Rights",
  "commission_on_rcommission_on_restitution_of_land_rights": "Commission on Restitution of Land Rights",
  companiestribunal: "Companies Tribunal",
  csos: "CSOS",
  "department trade and industry republic of south africa": "Department of Trade, Industry and Competition",
  "dept of forestry fisheries the environment": "Department of Forestry, Fisheries and the Environment",
  "gfleet management": "G-Fleet Management",
  "gpg education": "Gauteng Department of Education",
  "gpg social development": "Gauteng Social Development",
  "gpg human settlements": "Gauteng Human Settlements",
  hda: "HDA",
  nbcrfi: "NBCRFI",
  "national regulator for compulsory specifications": "NRCS",
  "ngl attorneys": "NGL Attorneys",
  nhls: "NHLS",
  raf: "Road Accident Fund",
  "rand water": "Rand Water",
  sacap: "SACAP",
  sadpmr: "SADPMR",
  samrc: "SAMRC",
  sanral: "SANRAL",
  saps: "SAPS",
  sassa: "SASSA",
  "sa tourism": "SA Tourism",
  tck: "TCK",
  "tshikondo projects": "Tshikondo Projects",
  xds: "XDS",
};

const brandLogos = buildUniqueLogoAssets(brandLogoModules, brandDisplayNameOverrides);
const clientLogos = buildUniqueLogoAssets(clientLogoModules, clientDisplayNameOverrides);

const brandLogoKeys = new Set(brandLogos.map((logo) => logo.name.trim().toLowerCase()));
const clientLogosFiltered = clientLogos.filter(
  (logo) =>
    !/netrace|nettrace|dell/i.test(logo.name) &&
    !brandLogoKeys.has(logo.name.trim().toLowerCase()),
);

function HomePage() {
  return (
    <>
      <section className="relative w-full overflow-hidden pb-0">
        <div
          className="relative min-h-[480px] sm:min-h-[600px] md:min-h-[720px] w-full overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${homeHero})` }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,20,29,0.24),rgba(15,20,29,0.52))]" />
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 py-16 sm:py-24 md:py-28 lg:px-16 lg:py-32">
            <div className="w-full">
              <div className="max-w-3xl text-white relative z-10">
                <p className="eyebrow text-white/80 text-xs sm:text-[0.7rem]">Who we are</p>
                <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                  A versatile consulting firm rendering <span className="text-[var(--green-support)]" style={{ fontSize: 'inherit' }}>adhoc</span> & <span className="text-[var(--green-support)]" style={{ fontSize: 'inherit' }}>long term</span> solutions.
                </h1>
                <p className="mt-4 sm:mt-5 max-w-xl text-xs sm:text-sm leading-relaxed text-white/85 md:text-base">
                  We assess, analyze, propose and execute decisive actions that enable complex business outcomes. Partnering with client organisations to help them fulfil daily, monthly and yearly targets.
                </p>
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
                  <Link to="/services" className="btn-brand shadow-[var(--shadow-elegant)] px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm">
                    Explore services <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                  <Link to="/contact" className="btn-outline-brand-light px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm">
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-12 sm:-mt-16 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-16">
          <div className="overflow-hidden rounded-lg sm:rounded-2xl bg-white shadow-md sm:shadow-lg shadow-gray-200/50">
            <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {[
                ["100+", "Brands"],
                ["110+", "Delivered Projects"],
                ["10+", "Years of industry experience"],
              ].map(([value, label]) => (
                <div key={label} className="flex h-full min-h-[110px] sm:min-h-[134px] flex-col items-center justify-center px-4 sm:px-6 py-4 sm:py-5 text-center md:min-h-[150px]">
                  <div className="mb-1.5 sm:mb-2 text-2xl sm:text-3xl font-bold leading-none text-[var(--green-support)] md:text-4xl">{value}</div>
                  <div className="text-xs font-medium leading-snug text-gray-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 pb-12 sm:pb-16 pt-16 sm:pt-20 md:pb-20 lg:px-16 lg:pt-24" data-reveal>
        <div className="max-w-3xl">
          <p className="mb-3 sm:mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--green-support)]/80">OUR MISSION</p>
          <h2 className="mb-4 sm:mb-6 max-w-2xl text-xl sm:text-2xl font-bold leading-[1.15] text-gray-900 md:text-3xl">
            To provide prompt and <span className="text-[var(--green-support)] text-[1.08em]">specialized expertise</span> that empowers organizations.
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-gray-600 md:text-lg">
            We help organisations move from uncertainty to action through reliable consulting, practical delivery and informed research.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-[0.62fr_0.38fr] items-end">
          <div className="overflow-hidden rounded-lg sm:rounded-[2rem] bg-white shadow-[var(--shadow-soft)] h-[180px] sm:h-[250px] md:h-[300px] lg:h-[340px] self-end">
            <img
              src={missionHero}
              alt="Boardroom prepared for a strategy session"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex h-full flex-col justify-end gap-3 sm:gap-4 md:-translate-y-2 lg:-translate-y-3">
            <article className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-black">Who we are</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our mandate is clear. We provide information and services that elevate the ability of companies to deliver on promises to their clients.
              </p>
            </article>

            <article className="rounded-2xl sm:rounded-3xl bg-white p-4 sm:p-5 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold text-black">Our mission</h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                Companies face a vast number of challenges with limited time to address them. Partnering with us makes these challenges clearer to understand and simpler to address.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-t border-divider" data-reveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:px-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-xs">Our values</p>
            <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-black tracking-tight leading-tight">
              Integrity, <span className="highlight-green">innovation</span>, adaptability and commitment.
            </h2>
          </div>

          <div className="mt-6 sm:mt-8 grid items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
            <div className="overflow-hidden rounded-lg sm:rounded-[2rem] border border-border bg-white shadow-[var(--shadow-soft)] h-full">
              <img
                src={valuesHero}
                alt="Abstract creative light bulbs representing values and ideas"
                className="h-full min-h-[200px] sm:min-h-[300px] md:min-h-[340px] w-full object-cover"
              />
            </div>

            <div className="space-y-3 sm:space-y-4 lg:pt-4">
              {values.map(({ title, desc }) => (
                <article key={title} className="rounded-xl sm:rounded-2xl border border-border bg-white p-3 sm:p-4 shadow-sm">
                  <h3 className="font-semibold text-sm sm:text-base text-black">{title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT — BBD image-bubble style */}
      <section className="w-full border-t border-divider px-6 py-20 md:px-12 md:py-24 lg:px-16" data-reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">Our impact</p>
          <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-black tracking-tight">
            Driving growth and <span className="highlight-green">sustaining value</span>.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { t: "Financial & Operational Impact", d: "Addressing immediate, urgent issues faster than traditional methods, for increased function and profitability.", img: impactFinancial, alt: "Business analytics dashboard supporting financial and operational decisions" },
            { t: "Strategic & Competitive Impact", d: "Providing an objective third-party view by analyzing trends, acting with agility and mitigating risks.", img: impactStrategic, alt: "Market research information displayed on a phone" },
            { t: "Knowledge Impact", d: "We equip employees with methodologies and insights to ensure improvements continue after the engagement ends.", img: impactKnowledge, alt: "Library shelves representing institutional knowledge and continuous learning" },
          ].map(({ t, d, img, alt }) => (
            <article key={t} className="group hover-pop hover-zoom rounded-3xl border border-border bg-white overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={img} alt={alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-black">{t}</h3>
                <p className="mt-3 text-sm text-foreground/78">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#dfe4eb] px-4 sm:px-6 py-8 sm:py-12 md:px-8 md:py-16 lg:px-12" data-reveal>
        <div className="mx-auto w-full max-w-[1300px] space-y-6 sm:space-y-8">
          <LogoCarouselCard
            categoryTitle="Brand Partners"
            mainHeading="Authorised distributors of 100+ brands throughout South Africa and Sub Saharan Africa."
            logos={brandLogos}
          />

          <LogoCarouselCard
            categoryTitle="Clients & Institutions"
            mainHeading="Join the top global brands that count on our expertise"
            logos={clientLogosFiltered}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full px-4 sm:px-6 pb-12 sm:pb-16 md:px-12 md:pb-20 lg:px-16 lg:pb-24" data-reveal>
        <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl sm:rounded-3xl bg-[var(--green-support)] p-6 sm:p-10 text-white shadow-[var(--shadow-elegant)] md:p-16">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/92">Ready to transform an immediate problem into a decisive outcome?</h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/94">Get in touch with our team — describe your challenge and we'll propose a solution.</p>
            <Link to="/contact" className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-white text-navy font-semibold px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm hover-arrow">
              Start a conversation <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
