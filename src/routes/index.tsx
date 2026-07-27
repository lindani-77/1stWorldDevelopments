import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Shield, Sparkles, Repeat, Target } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";
import impactFinancial from "../assets/impact-financial.jpg";
import impactStrategic from "../assets/impact-strategic.jpg";
import impactKnowledge from "../assets/impact-knowledge.jpg";

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
  { icon: Shield, title: "Integrity", desc: "Acting ethically and with transparency. We prioritize doing the right thing, over personal gain." },
  { icon: Sparkles, title: "Innovation", desc: "Pushing past the status quo, with bold and progressive ideas and actions." },
  { icon: Repeat, title: "Adaptability", desc: "No matter the challenge, we will modify a solution for it." },
  { icon: Target, title: "Commitment", desc: "The willingness to put the time, effort and energy to accomplish results." },
];

function HomePage() {
  return (
    <>
      {/* HERO — deep gradient */}
      <section className="relative overflow-hidden" data-reveal>
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3f464b]/94 via-[#2f7a6b]/84 to-[#4a9e82]/46" />
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8 pt-16 md:pt-28 pb-18 md:pb-32 min-h-[66vh] md:min-h-[72vh] flex items-center">
          <div className="max-w-2xl text-white">
            <p className="text-[13px] uppercase tracking-[0.2em] text-mint font-medium">Who we are</p>
            <h1 className="mt-5 text-[2.55rem] leading-[1.04] md:text-5xl lg:text-6xl font-semibold">
              A versatile consulting firm rendering{" "}
              <span className="text-mint">adhoc &amp; long term</span> solutions.
            </h1>
            <p className="mt-4 text-[1rem] md:text-lg text-white/85 max-w-xl leading-relaxed">
              We assess, analyze, propose and execute decisive actions that solve complex business problems.
              Partnering with leading organizations to help them fulfill daily, monthly and yearly targets.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-support to-teal text-navy font-semibold px-6 py-3 text-sm shadow-[0_10px_30px_-10px_rgba(63,208,201,0.6)] hover:brightness-105 transition">
                Explore services <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 -mt-14 relative z-10" data-reveal>
        <div className="grid grid-cols-3 gap-px rounded-2xl overflow-hidden bg-border shadow-[var(--shadow-elegant)]">
          {[["100+", "Brands"], ["110+", "Delivered Projects"], ["10+", "Years"]].map(([n, l]) => (
            <div key={l} className="bg-white p-6 md:p-10 text-center">
              <div className="text-2xl md:text-4xl font-semibold gradient-hero-text">{n}</div>
              <div className="mt-2 text-sm md:text-base text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-24" data-reveal>
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr] items-start">
          <div>
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-navy tracking-tight">
              To provide prompt and <span className="highlight-green">specialized expertise</span> that empowers organizations.
            </h2>
          </div>
          <div className="grid gap-5">
            {[
              ["Who we are", "Our mandate is clear. We provide information and services that elevate the ability of companies to deliver on promises to their clients."],
              ["Our mission", "Companies face a vast number of challenges with limited time to address them. Partnering with us makes these challenges clearer to understand and simpler to address."],
              ["How we work", "We assess, analyze and execute decisive actions that align with the pace and pressure of daily business needs."],
            ].map(([t, d]) => (
              <article key={t} className="rounded-xl border border-border bg-white p-6 hover-pop">
                <h3 className="font-semibold text-navy">{t}</h3>
                <p className="mt-2 text-foreground/70 text-[15px]">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="border-y border-border" data-reveal>
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Our values</p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-navy tracking-tight">
              Integrity, <span className="highlight-green">innovation</span>, adaptability and commitment.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-2xl border border-border bg-white p-6 hover-pop">
                <div className="h-11 w-11 grid place-items-center rounded-lg gradient-hero text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-navy">{title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT — BBD image-bubble style */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-24" data-reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">Our impact</p>
          <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-navy tracking-tight">
            Driving growth and <span className="highlight-green">sustaining value</span>.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            { t: "Financial & Operational Impact", d: "Addressing immediate, urgent issues faster than traditional methods, for increased function and profitability.", img: impactFinancial },
            { t: "Strategic & Competitive Impact", d: "Providing an objective third-party view by analyzing trends, acting with agility and mitigating risks.", img: impactStrategic },
            { t: "Knowledge Impact", d: "We equip employees with methodologies and insights to ensure improvements continue after the engagement ends.", img: impactKnowledge },
          ].map(({ t, d, img }) => (
            <article key={t} className="group hover-pop hover-zoom rounded-3xl border border-border bg-white p-6 overflow-hidden">
              <h3 className="text-xl font-semibold text-navy">{t}</h3>
              <p className="mt-3 text-sm text-foreground/70 min-h-[72px]">{d}</p>
              <div className="mt-6 aspect-[4/3] rounded-2xl overflow-hidden">
                <img src={img} alt="" loading="lazy" className="h-full w-full object-cover" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20 md:pb-24" data-reveal>
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold">Ready to transform an immediate problem into a decisive outcome?</h2>
            <p className="mt-4 text-sm md:text-base text-white/85">Get in touch with our team — describe your challenge and we'll propose an engagement approach.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white text-navy font-semibold px-6 py-3 text-sm hover-arrow">
              Start a conversation <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
