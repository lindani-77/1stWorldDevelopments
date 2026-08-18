import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import servicesHero from "../assets/custom/dreamstime_xxl_35077024-fotor-202607200139.jpg";
import adhocImage from "../assets/custom/200261236_xl.jpg";
import consultingImageB from "../assets/custom/246058001_xl.jpg";
import researchImage from "../assets/custom/dreamstime_xxl_407085366 (1).jpg";

const adhocIconModules = import.meta.glob(
  "../assets/service-icons/Icons for 1st World Developments Website/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const adhocIconMap = Object.fromEntries(
  Object.entries(adhocIconModules).map(([path, src]) => {
    const filename = path.split("/").pop()?.replace(/\.(png|jpe?g|webp|svg)$/i, "") ?? "";
    return [filename, src];
  }),
) as Record<string, string>;

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

// Exact services list provided by user — only these are used.
const adhoc = [
  { iconSrc: adhocIconMap["Accessories"], t: "Accessories", d: "Essential peripherals and add-on items for workplace setups." },
  { iconSrc: adhocIconMap["Corporate Gifts"], t: "Corporate Gifts", d: "Branded gifts for stakeholder engagement and events." },
  { iconSrc: adhocIconMap["Desktop"], t: "Desktop Displays", d: "Monitors and display solutions for workstations and meeting rooms." },
  { iconSrc: adhocIconMap["Desktop PC's"], t: "Desktop PCs", d: "Business-grade desktop computers for office environments." },
  { iconSrc: adhocIconMap["Embroidery"], t: "Embroidery", d: "Custom embroidered branding for uniforms and merchandise." },
  { iconSrc: adhocIconMap["Janitorial Supplies"], t: "Janitorial Supplies", d: "Cleaning and hygiene consumables for safe workplaces." },
  { iconSrc: adhocIconMap["Logistics"], t: "Logistics", d: "Delivery and supply chain logistics for critical operations." },
  { iconSrc: adhocIconMap["Mobile PC's (Laptops)"], t: "Mobile PCs", d: "Laptops, notebooks and tablets for flexible working." },
  { iconSrc: adhocIconMap["Office Consumables"], t: "Office Consumables", d: "Consumables such as paper, cartridges and maintenance items." },
  { iconSrc: adhocIconMap["Office stationery"], t: "Office Stationery", d: "Daily stationery items for desks and offices." },
  { iconSrc: adhocIconMap["printers and scanners"], t: "Printers & Scanners", d: "Printing and scanning equipment for document management." },
  { iconSrc: adhocIconMap["projector"], t: "Projectors", d: "Projection and display equipment for presentations and training." },
  { iconSrc: adhocIconMap["Promotional Items"], t: "Promotional Items", d: "Branded promotional items for marketing and events." },
  { iconSrc: adhocIconMap["software"], t: "Software", d: "Licensed software solutions tailored to operational needs." },
  { iconSrc: adhocIconMap["storage-device"], t: "Storage Devices", d: "External and internal storage solutions for backup and transfer." },
  { iconSrc: adhocIconMap["wellness-program"], t: "Wellness Day Events & Management", d: "Wellness events, coordination and employee wellbeing programs." },
];


const consulting: [string, string][] = [
  ["+Capital advisory", "Navigating complex and challenging situations often involves finances. Our Capital Advisory specialists simplify the capital raising process through careful assessment, devising of strategies and sourcing."],
  ["+Copywriting", "We conduct industry analysis to measure the perception and needs. A well measured audience analysis drives the correct communication and increases the engagement and ROI (Return On Investment)."],
  ["+Customer Acquisition", "Providing an accurate and structured roadmap to creating long-term customers for your business. We provide guidance from awareness to conversion."],
  ["+Customer Growth Strategy", "Optimizing your customer life cycle is what generates revenue. A data-driven approach is implemented to optimize customer retention and acquisition - concurrently."],
  ["+Cybersecurity & Server Integration", "The safeguarding of information and the procedures to ensure minimal to none breaches of networks, damage, disruption and theft are our core objectives. We also specialize in the connection of disparate IT environments and systems to communicate effectively for seamless workflow."],
  ["+Deal brokering", "Transaction advisory services that not only support your current and future deals but identify potential risks. Due diligence, valuation analysis, deal structuring are many tasks undertaken by us."],
  ["+Omnichannel strategy", "Each industry experiences macroenvironment factors, which require a proactive strategy. Omnichannel strategist services aim to provide ideas to clients that will increase sales and physical site visits. The objectives are to create promotional strategies to increase foot traffic and custom bundling programs with rewards."],
  ["+Strategic Sourcing", "The optimizing of Purchase Power and aligning it with supply chain activities requires a rigorous and proactive approach. By defining category spend, profile and supply markets we are able to tailor a strategy for each category."],
  ["+Structural Editing", "Our extensive experience in evaluating and improving a document's architecture arranges aspects such as organization, sequence, proportion, transitions. This verifies that the document fits the purpose for its intended recipient."],
];

const consultingIntroText = [
  "- Connecting you to knowledge - when you need it most",
  "Each phase of your business from Conception to Expansion needs sound, and structured information to assist in decision making. Our specialists use their knowledge to extend your business longevity and build long term business value.",
  "",
  "+Capital advisory",
  "Navigating complex and challenging situations often involves finances. Our Capital Advisory specialists simplify the capital raising process through careful assessment, devising of strategies and sourcing.",
  "",
  "+Copywriting",
  "We conduct industry analysis to measure the perception and needs. A well measured audience analysis drives the correct communication and increases the engagement and ROI (Return On Investment).",
  "",
  "+Customer Acquisition",
  "Providing an accurate and structured roadmap to creating long-term customers for your business. We provide guidance from awareness to conversion.",
  "",
  "+Customer Growth Strategy",
  "Optimizing your customer life cycle is what generates revenue. A data-driven approach is implemented to optimize customer retention and acquisition - concurrently.",
  "",
  "+Cybersecurity & Server Integration",
  "The safeguarding of information and the procedures to ensure minimal to none breaches of networks, damage, disruption and theft are our core objectives. We also specialize in the connection of disparate IT environments and systems to communicate effectively for seamless workflow.",
  "",
  "+Deal brokering",
  "Transaction advisory services that not only support your current and future deals but identify potential risks. Due diligence, valuation analysis, deal structuring are many tasks undertaken by us.",
  "",
  "+Omnichannel strategy",
  "Each industry experiences macroenvironment factors, which require a proactive strategy. Omnichannel strategist services aim to provide ideas to clients that will increase sales and physical site visits. The objectives are to create promotional strategies to increase foot traffic and custom bundling programs with rewards.",
  "",
  "+Strategic Sourcing",
  "The optimizing of Purchase Power and aligning it with supply chain activities requires a rigorous and proactive approach. By defining category spend, profile and supply markets we are able to tailor a strategy for each category.",
  "",
  "+Structural Editing",
  "Our extensive experience in evaluating and improving a document's architecture arranges aspects such as organization, sequence, proportion, transitions. This verifies that the document fits the purpose for its intended recipient.",
];

const research: [string, string][] = [
  ["Case studies & longitudinal studies", "Tracking consumer changes, behaviours, market conditions and strategy effectiveness over time."],
  ["Focus groups", "One-way, two-way, dual-moderator and mini focus groups reveal attitudes, opinions and motivations."],
  ["In-depth expert interviews (IDI)", "Exploring complex topics, understanding context and generating refined data across education, public sector and retail industries."],
  ["Syndicated research reports", "Fast, cost-effective access to market size, consumer patterns, industry trends and forecast direction."],
];

function AccordionBlock({
  items,
}: {
  items: [string, string][];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="h-full rounded-3xl bg-white p-6 shadow-sm">
      {items.map(([title, description], index) => {
        const open = openIndex === index;
        return (
          <div
            key={title}
            className={`overflow-hidden ${index < items.length - 1 ? "border-b border-green-300" : ""}`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-3 py-4 text-left transition hover:bg-slate-50"
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-green-700 text-lg font-semibold leading-none">
                  +
                </span>
                <span className="text-lg font-medium text-gray-900">{title}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              />
            </button>
            <div className={`overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-[24rem]" : "max-h-0"}`}>
              <p className="px-14 pb-4 pt-1 text-base leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
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
        imageAlt="Consulting team in a strategic workshop session"
      />


      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-16" data-reveal>
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-2 sm:gap-3 pt-4 sm:pt-6">
          {[["#adhoc", "Adhoc"], ["#consulting", "Consulting"], ["#research", "Research"]].map(([h, l]) => (
            <a key={h} href={h} className="service-page-link px-3 sm:px-4 py-1.5 text-xs sm:text-sm">{l}</a>
          ))}
        </div>
      </div>

      {/* ADHOC */}
      <section id="adhoc" className="w-full px-4 sm:px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20" data-reveal>
        <div className="mx-auto grid w-full max-w-7xl items-stretch gap-6 sm:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex h-full flex-col lg:pt-2">
            <p className="eyebrow text-xs">Adhoc Services</p>
            <h2 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-black">
              For immediate needs. Products and services that unlock daily productivity.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base text-foreground/78">
              Critical products and services are supplied from reputable brands to support urgent, customized workplace needs without slowing down operations.
            </p>
            <div className="mt-4 sm:mt-5 h-full min-h-[200px] sm:min-h-[260px] md:min-h-[280px] overflow-hidden rounded-lg sm:rounded-[1.5rem] border border-divider bg-white shadow-[var(--shadow-soft)] self-end lg:mt-5">
              <img src={adhocImage} alt="Warehouse and logistics support for adhoc services" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="grid h-full grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {adhoc.map(({ iconSrc, t }) => (
              <article key={t} className="h-full rounded-lg border border-divider bg-white p-3 sm:p-4 shadow-[var(--shadow-soft)] transition-all duration-200 hover:-translate-y-1 hover:border-green-support/50 hover:shadow-[0_18px_48px_-26px_rgba(45,107,82,0.36)]">
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-md border border-divider bg-white text-navy">
                    {iconSrc ? <img src={iconSrc} alt={`${t} icon`} className="h-4 w-4 sm:h-5 sm:w-5 object-contain" loading="lazy" /> : null}
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-black leading-tight">{t}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING — accordion */}
      <section id="consulting" className="w-full border-t border-divider px-6 py-16 md:px-12 md:py-20 lg:px-16" data-reveal>
        <div className="mx-auto grid w-full max-w-7xl items-stretch gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
          <div className="grid gap-3">
            <div>
              <p className="eyebrow">Consulting Services</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-black">
                Objective perspectives and complex problem solving within your industry.
              </h2>
              <div className="mt-4 space-y-4 text-foreground/78">
                <p className="font-semibold text-black">- Connecting you to knowledge - when you need it most</p>
                <p>
                  Each phase of your business from Conception to Expansion needs sound, and structured information to assist in decision making. Our specialists use their knowledge to extend your business longevity and build long term business value.
                </p>
                {consulting.map(([title, description]) => (
                  <div key={title} className="space-y-2">
                    <p className="font-semibold text-black">{title}</p>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-divider bg-white shadow-[var(--shadow-soft)] min-h-[32rem] lg:min-h-[40rem]">
              <img src={consultingImageB} alt="Team planning with notes" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="h-full">
            <div className="service-bubble h-full p-4 md:p-6 flex flex-col justify-between">
              <AccordionBlock items={consulting} />
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research" className="w-full border-t border-divider bg-gray-100 px-6 py-16 md:px-12 md:py-20 lg:px-16" data-reveal>
        <div className="mx-auto grid w-full max-w-7xl items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <div className="grid gap-4">
            <div>
              <p className="eyebrow">Research Services</p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-black">
                Building knowledge and uncovering new competitive advantages.
              </h2>
              <p className="mt-4 text-foreground/78">
                Focused, proactive and continuous monitoring — unveiling opportunities, anticipating change and forecasting direction for your organization.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-divider bg-white shadow-[var(--shadow-soft)]">
              <img src={researchImage} alt="Microscope representing research services" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="h-full">
            <div className="service-bubble h-full p-4 md:p-6 flex flex-col justify-between">
              <AccordionBlock items={research} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
