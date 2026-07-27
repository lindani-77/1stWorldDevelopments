import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pen, Package, Printer, Monitor, Laptop, Tablet, Code, SprayCan,
  Gift, Coffee, Wallet, MessageSquare, Users, TrendingUp, ShieldCheck,
  Handshake, ShoppingBag, Truck, FileEdit, MessageCircle, Users2, LineChart, Newspaper,
} from "lucide-react";
import servicesHero from "../assets/services-hero.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Solutions — 1st World Developments" },
      { name: "description", content: "Adhoc supply, consulting and research services engineered to reduce inefficiencies without compromising your operations." },
      { property: "og:title", content: "Services & Solutions" },
      { property: "og:description", content: "Adhoc, consulting and research services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const adhoc = [
  { icon: Pen, t: "Office Stationery", d: "Daily writing, filing and desk essentials." },
  { icon: Package, t: "Office Consumables", d: "Reliable restocking for operational continuity." },
  { icon: Printer, t: "Ink & Toner", d: "Printer consumables for efficient office output." },
  { icon: Monitor, t: "Desktop PCs", d: "Business-grade computing for fixed workstations." },
  { icon: Laptop, t: "Laptops", d: "Portable computing for mobile productivity." },
  { icon: Tablet, t: "Tablets", d: "Lightweight mobile devices for field efficiency." },
  { icon: Code, t: "Software Licenses", d: "Licensed digital tools for operations and security." },
  { icon: SprayCan, t: "Cleaning Supplies", d: "Consumables that support healthy environments." },
  { icon: Gift, t: "Promotional Items", d: "Brand items and client-facing engagement tools." },
  { icon: Coffee, t: "Kitchen Consumables", d: "Hospitality and kitchen items for daily use." },
];

const consulting = [
  ["Capital advisory", "Navigating complex and challenging situations often involves finances. Our Capital Advisory specialists simplify the capital raising process through careful assessment, strategy and sourcing.", Wallet],
  ["Copywriting", "We conduct industry analysis to measure perception and needs. A well-measured audience analysis drives correct communication and increases engagement and ROI.", MessageSquare],
  ["Customer acquisition", "Providing an accurate and structured roadmap to creating long-term customers — from awareness to conversion.", Users],
  ["Customer growth strategy", "Optimizing your customer life cycle generates revenue. A data-driven approach optimizes retention and acquisition concurrently.", TrendingUp],
  ["Cybersecurity & server integration", "Safeguarding information and connecting disparate IT environments so they communicate effectively for seamless workflow.", ShieldCheck],
  ["Deal brokering", "Transaction advisory that supports current and future deals, identifies risks and covers due diligence, valuation analysis and deal structuring.", Handshake],
  ["Omnichannel strategy", "Proactive promotional strategies to increase foot traffic and custom bundling programs with rewards.", ShoppingBag],
  ["Strategic sourcing", "Optimizing purchase power and aligning it with supply chain activities through category-based, tailored strategies.", Truck],
  ["Structural editing", "Improving a document's architecture — organization, sequence, proportion and transitions — to fit its purpose and recipient.", FileEdit],
];

const research = [
  ["In-depth expert interviews (IDI)", "Exploring complex topics, understanding context and generating refined data across education, public sector and retail industries.", MessageCircle],
  ["Focus groups", "One-way, two-way, dual-moderator and mini focus groups reveal attitudes, opinions and motivations.", Users2],
  ["Case studies & longitudinal studies", "Tracking consumer changes, behaviours, market conditions and strategy effectiveness over time.", LineChart],
  ["Syndicated research reports", "Fast, cost-effective access to market size, consumer patterns, industry trends and forecast direction.", Newspaper],
];

function AccordionBlock({ items }: { items: [string, string, React.ComponentType<{ className?: string }>][] }) {
  return (
    <Accordion type="single" collapsible defaultValue={items[0][0]} className="w-full">
      {items.map(([t, d, Icon]) => (
        <AccordionItem key={t} value={t} className="border-b border-border">
          <AccordionTrigger className="text-left py-5 hover:no-underline group">
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 grid place-items-center rounded-lg bg-mint-soft text-navy group-hover:gradient-hero group-hover:text-white transition-colors">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold text-navy">{t}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-14 pr-4 text-foreground/70 text-[15px] leading-relaxed">
            {d}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & Solutions"
        title={<>Rapid problem-solving solutions with focused, action-oriented results.</>}
        description="Whether your organization is facing an immediate problem or wants to address a long-term predicament, our solutions reduce inefficiencies without compromising other functions in your business."
        image={servicesHero}
        imageAlt="Consulting team collaborating in an office"
      />

      {/* Quick jump */}
      <div className="mx-auto max-w-7xl px-5 md:px-8" data-reveal>
        <div className="flex flex-wrap gap-2 border-t border-border pt-6">
          {[["#adhoc", "Adhoc"], ["#consulting", "Consulting"], ["#research", "Research"]].map(([h, l]) => (
            <a key={h} href={h} className="rounded-full border border-border px-4 py-1.5 text-sm hover:bg-mint-soft">{l}</a>
          ))}
        </div>
      </div>

      {/* ADHOC — Stantec-style icon grid, two rows */}
      <section id="adhoc" className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20" data-reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">Adhoc Services</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy">
            Immediate needs. Products and services that unlock daily productivity.
          </h2>
          <p className="mt-4 text-foreground/70">
            Critical products such as stationery, consumables, personal computer devices, software and specialized daily
            operational items — from reputable brands to ensure consistent productivity.
          </p>
        </div>
        <div className="mt-12 grid gap-px bg-border rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-5">
          {adhoc.map(({ icon: Icon, t, d }) => (
            <div key={t} className="bg-white p-6 hover:bg-mint-soft transition-colors group">
              <span className="h-11 w-11 grid place-items-center rounded-lg gradient-hero text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-navy">{t}</h3>
              <p className="mt-1 text-sm text-foreground/60">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSULTING — accordion */}
      <section id="consulting" className="border-y border-border" data-reveal>
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20 grid gap-14 lg:grid-cols-[1fr_1.4fr] items-start">
          <div className="lg:sticky lg:top-24">
            <p className="eyebrow">Consulting Services</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy">
              Objective perspectives and complex problem solving within your industry.
            </h2>
            <p className="mt-4 text-foreground/70">
              Connecting you to knowledge when you need it most. Each phase of your business needs sound, structured
              information — our specialists extend your longevity and build long-term value.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-border p-2 md:p-4">
            <AccordionBlock items={consulting as [string, string, React.ComponentType<{ className?: string }>][]} />
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20 grid gap-14 lg:grid-cols-[1fr_1.4fr] items-start" data-reveal>
        <div className="lg:sticky lg:top-24">
          <p className="eyebrow">Research Services</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy">
            Building knowledge and uncovering new competitive advantages.
          </h2>
          <p className="mt-4 text-foreground/70">
            Focused, proactive and continuous monitoring — unveiling opportunities, anticipating change and forecasting
            direction for your organization.
          </p>
        </div>
        <div className="rounded-2xl bg-white border border-border p-2 md:p-4">
          <AccordionBlock items={research as [string, string, React.ComponentType<{ className?: string }>][]} />
        </div>
      </section>
    </>
  );
}
