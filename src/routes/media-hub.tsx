import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import mediaSectionImage from "../assets/custom/office-boardroom-1864084-fotor-20260719191757.jpg";

export const Route = createFileRoute("/media-hub")({
  head: () => ({
    meta: [
      { title: "Media Hub - Policies & Digital Assets | 1st World Developments" },
      { name: "description", content: "Corporate governance, policies and digital assets." },
      { property: "og:title", content: "Media Hub" },
    ],
    links: [{ rel: "canonical", href: "/media-hub" }],
  }),
  component: MediaHubPage,
});

const policies = [
  {
    t: "Code of Business Conduct",
    d: "Standards of professional conduct and ethical behaviour.",
    type: "PDF",
    href: "/downloads/code-of-business-conduct.pdf",
  },
  {
    t: "Community Hiring Policy",
    d: "Community hiring and inclusive recruitment practices.",
    type: "PDF",
    href: "/downloads/community-hiring-policy.pdf",
  },
  {
    t: "Environmental Responsibility Policy",
    d: "Environmental impact reduction and sustainability.",
    type: "PDF",
    href: "/downloads/environmental-responsibility-policy.pdf",
  },
  {
    t: "Global Quality Policy",
    d: "Quality management principles and expectations.",
    type: "PDF",
    href: "/downloads/global-quality-policy.pdf",
  },
  {
    t: "Information Security Policy",
    d: "Information asset protection and controls.",
    type: "PDF",
    href: "/downloads/information-security-policy.pdf",
  },
  {
    t: "New Product Development Policy",
    d: "New product development and launch governance.",
    type: "PDF",
    href: "/downloads/new-product-development-policy.pdf",
  },
  {
    t: "Privacy & Copyright Policy",
    d: "Personal data and intellectual property treatment.",
    type: "PDF",
    href: "/downloads/privacy-and-copyright-policy.pdf",
  },
];

const digitalAssets = [
  {
    t: "Company Profile",
    d: "Capabilities and service delivery model.",
    href: "/downloads/1st World Developments_profile 2026.pdf",
    type: "PDF",
  },
  {
    t: "Product Catalogues",
    d: "Product guides of premier names we carry.",
    href: "/downloads/1st World Developments - Promotional Items Catalogue (2026).pdf",
    type: "PDF",
  },
];

function MediaHubPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#dfe4eb] text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:px-12 md:py-16 lg:px-16">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-[11px] font-bold text-[var(--green-support)] uppercase tracking-widest mb-3 block">
              MEDIA HUB
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Corporate Governance and Policies.
            </h1>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl shadow-sm h-[200px] md:h-[280px]">
              <img
                src={mediaSectionImage}
                alt="Corporate boardroom"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mb-8 mt-8 max-w-6xl space-y-8">
          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            At 1st World Developments, our deep connection to ethics and compliance is embraced and practiced. We embrace personal and professional integrity and never compromise our business principles. We remain devoted to good governance, transparent accounting, and the delivery of long-term stakeholder value.
          </p>

          {isExpanded && (
            <div className="space-y-8 pt-2">
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                  Integrity and Anti-Corruption
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">
                  Strict adherence to international anti-bribery laws, including the South African Prevention and Combating of Corrupt Activities Act (PRECCA), the UK Bribery Act, the US Foreign Corrupt Practices Act (FCPA), and UAE federal anti-corruption laws. When bidding for ad-hoc supply and delivery contracts we remain completely transparent, eliminating any conflicts of interest, collusive bidding, or kickbacks. Our clear internal policies governing the acceptance and offering of corporate gifts to ensure they are never perceived as leverage for business favors.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                  Confidentiality, Data Protection, and Intellectual Property
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">
                  Strict data management aligned with regional legislation, specifically the Protection of Personal Information Act (POPIA) in South Africa, the General Data Protection Regulation (GDPR) in England, various state-level privacy laws in the US (such as CCPA), and the UAE Federal Decree-Law on Personal Data Protection. We enforcing comprehensive Non-Disclosure Agreements (NDAs) to protect government strategies and private corporate intelligence. We honor and protect the intellectual property rights of clients while ensuring research methodologies remain rigorous, unbiased, and ethically sourced.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                  Supply Chain Transparency and Ethical Sourcing
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-4">
                  Ensuring all global suppliers verify that their materials and labor do not involve exploitation, human trafficking, or modern slavery, in compliance with the UK Modern Slavery Act and equivalent global standards. Disclosing any potential overlapping interests immediately if a research project or consulting assignment overlaps with a competitor or a conflicting government agency. Refusing engagements where the firm lacks the technical capacity, ensuring that clients are only billed for achievable, high-value outcomes.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                  Financial Transparency and Fair Competition
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed mb-6">
                  Adhering to the specific corporate tax frameworks of SARS (South Africa), HMRC (UK), the IRS (US), and the Federal Tax Authority (UAE), while avoiding aggressive, unethical tax avoidance schemes also including all other countries of operation. Ensuring ad-hoc procurement pricing remains fair and competitive, preventing price-gouging during high-demand or emergency supply scenarios. Implementing strict "Know Your Customer" (KYC) protocols to vet private clients and partners, ensuring the firm is never utilized to facilitate illicit financial flows.
                </p>
              </div>
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-slate-900 md:text-xl">
                  Conclusion
                </h3>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                  By embedding these ethical principles into daily operations, the firm safeguards its global reputation, mitigates cross-border legal risks, and fosters enduring partnerships. True business excellence lies at the intersection of regulatory compliance, cultural respect, and an unyielding commitment to doing what is right across every jurisdiction.
                </p>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-white border border-slate-300 text-slate-800 text-xs font-medium shadow-sm hover:bg-slate-50 transition-colors"
          >
            {isExpanded ? "Read less" : "Read more"}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <p className="text-[11px] font-bold text-[var(--green-support)] uppercase tracking-widest mb-6 mt-12">
          POLICIES
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {policies.map(({ t, d, type, href }) => (
            <article
              key={t}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                {type}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{d}</p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
                <a
                  href={href}
                  className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-slate-700"
                >
                  <ArrowUpRight className="h-4 w-4" />
                  Open
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#dfe4eb]">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-20 lg:px-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-[11px] font-bold text-[var(--green-support)] uppercase tracking-widest mb-3">
              DIGITAL ASSETS
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Digital assets and resources
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {digitalAssets.map(({ t, d, href, type }) => (
              <article
                key={t}
                className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm"
              >
                <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                  {type}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{d}</p>
                <a
                  href={href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                >
                  Open asset <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
