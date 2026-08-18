import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — 1st World Developments" },
      { name: "description", content: "Disclaimer for 1st World Developments services and website usage." },
      { property: "og:title", content: "Disclaimer" },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <main className="w-full px-6 py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700">
          <ChevronLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      <article className="prose prose-sm mx-auto max-w-5xl md:prose-base">
        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-8">Disclaimer</h1>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Introduction</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          The information provided on this website by 1st World Developments is for general informational and operational purposes only. By accessing, viewing, or using this website, you accept and agree to the terms of this disclaimer. If you disagree with any part of this disclaimer, you must discontinue use of the website immediately.
        </p>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Professional Consulting and Research Services</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>No Warranties:</strong> All business consulting and research services, reports, data, and recommendations are provided "as is" without warranty of any kind, express or implied.</li>
          <li><strong>Business Decisions:</strong> Clients use our insights at their own risk. 1st World Developments does not guarantee specific commercial outcomes, financial growth, or regulatory compliance resulting from our advice.</li>
          <li><strong>Independent Judgment:</strong> Clients must apply their own independent business judgment before acting on any research findings or strategic frameworks we provide.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Adhoc Supply and Product Delivery</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Product Availability:</strong> All adhoc supply and product delivery listings are subject to availability, market fluctuations, and logistical constraints.</li>
          <li><strong>Third-Party Goods:</strong> We disclaim liability for manufacturing defects, shipping delays, or customs holds originating from third-party suppliers, manufacturers, or international couriers.</li>
          <li><strong>Specifications:</strong> Product images and descriptions are for illustrative purposes and may vary slightly from actual delivered items.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Limitation of Liability</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Exclusion of Damages:</strong> 1st World Developments, its directors, employees, and partners shall not be held liable for any direct, indirect, incidental, or consequential damages.</li>
          <li><strong>Business Loss:</strong> This includes loss of profits, data, revenue, or business opportunities arising from the use of our website, products, or advisory services.</li>
          <li><strong>Maximum Extent of Law:</strong> Liability is limited to the maximum extent permitted under South African law and applicable international jurisdictions.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Global and Cross-Border Operations</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Jurisdictional Scope:</strong> While 1st World Developments is primarily based in South Africa, our operational scope includes prospective and active engagements in Lesotho, Nigeria, the United Kingdom, the United States, the United Arab Emirates, and other global markets.</li>
          <li><strong>Local Compliance:</strong> Users accessing this site from outside South Africa are responsible for compliance with their local laws.</li>
          <li><strong>Regulatory Variance:</strong> Regulatory standards and legal interpretations differ by country. Information on this site may not reflect the specific legal or commercial requirements of every international territory.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">External Links and Third-Party Content</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>No Endorsement:</strong> Our website may contain links to external websites or third-party resources for user convenience.</li>
          <li><strong>No Control:</strong> 1st World Developments has no control over the content, privacy policies, or reliability of these external sites.</li>
          <li><strong>Risk Assumption:</strong> We assume no responsibility or liability for any loss or damage caused by the use of third-party platforms.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Changes and Updates</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Right to Modify:</strong> 1st World Developments reserves the right to amend, update, or change this disclaimer at any time without prior notice.</li>
          <li><strong>Ongoing Compliance:</strong> Continued use of the website following any modifications constitutes formal acceptance of the updated disclaimer terms.</li>
        </ul>
      </article>
    </main>
  );
}
