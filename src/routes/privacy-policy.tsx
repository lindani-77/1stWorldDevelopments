import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — 1st World Developments" },
      { name: "description", content: "Privacy Policy for 1st World Developments. Learn how we handle your personal data." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="w-full px-6 py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700">
          <ChevronLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      <article className="prose prose-sm mx-auto max-w-5xl md:prose-base">
        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-8">Privacy Policy</h1>

        <p className="text-foreground/80 leading-relaxed mb-6">
          This Privacy Policy explains how 1st World Developments ("we," "us," or "our") collects, uses, protects, and processes personal data. We comply strictly with the Protection of Personal Information Act (POPIA) in South Africa and the General Data Protection Regulation (GDPR) for users in the UK, European Union, and global jurisdictions.
        </p>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Data Controller and Information Officer</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Data Controller:</strong> 1st World Developments is the responsible party for your personal information.</li>
          <li><strong>Information Officer:</strong> Our designated compliance officer oversees all data privacy queries and requests.</li>
          <li><strong>Contact:</strong> You can reach our information officer via our official contact page.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Information We Collect</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Identity Data:</strong> First name, last name, company name, and job title.</li>
          <li><strong>Contact Data:</strong> Email address, physical address, delivery address, and telephone numbers.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, location, and website usage statistics.</li>
          <li><strong>Transaction Data:</strong> Details about payments, service history, and product deliveries.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Purpose and Legal Basis for Processing</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Contract Performance:</strong> To process adhoc supply orders, deliveries, and consulting agreements.</li>
          <li><strong>Legitimate Interests:</strong> To improve website performance, secure our systems, and manage business relationships.</li>
          <li><strong>Legal Compliance:</strong> To meet tax, accounting, and corporate regulatory duties globally.</li>
          <li><strong>Consent:</strong> To send newsletters or marketing materials when you explicitly opt-in.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Data Sharing and Cross-Border Transfers</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Third Parties:</strong> We share data only with trusted logistics partners and IT service providers.</li>
          <li><strong>No Sale of Data:</strong> We never sell, rent, or trade your data to third parties.</li>
          <li><strong>Cross-Border Compliance:</strong> We transfer data across borders (e.g., SA, UK, USA, UAE, Lesotho, Nigeria) using secure, legally approved transfer mechanisms.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Data Retention</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          We store personal information only as long as necessary for business or legal purposes. Financial and transactional records are kept for the minimum legally mandated retention period. We securely destroy or permanently anonymise data when it is no longer required.
        </p>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Your Data Rights</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Access & Correction:</strong> You can request a copy of your data or update inaccurate information.</li>
          <li><strong>Erasure ("Right to be Forgotten"):</strong> You can ask us to delete your personal data.</li>
          <li><strong>Object to Processing:</strong> You can object to direct marketing or processing based on legitimate interest.</li>
          <li><strong>Data Portability:</strong> You can request your data in a structured, machine-readable format.</li>
          <li><strong>Withdraw Consent:</strong> You can withdraw your consent for future data processing at any time.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Security Measures</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          We use industry-standard encryption to protect data during transmission. Access to personal data is restricted strictly to authorized staff and contractors. We review our security protocols regularly to prevent unauthorized access or leaks.
        </p>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Cookies and Tracking</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li>We use necessary cookies to keep our website running smoothly.</li>
          <li>Analytics cookies help us study user habits to improve our professional services.</li>
          <li>You can block or clear cookies using your web browser settings.</li>
        </ul>
      </article>
    </main>
  );
}
