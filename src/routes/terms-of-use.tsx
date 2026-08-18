import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export const Route = createFileRoute("/terms-of-use")({
  head: () => ({
    meta: [
      { title: "Terms of Use — 1st World Developments" },
      { name: "description", content: "Terms of Use for 1st World Developments consulting and services." },
      { property: "og:title", content: "Terms of Use" },
      { property: "og:url", content: "/terms-of-use" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-use" }],
  }),
  component: TermsOfUsePage,
});

function TermsOfUsePage() {
  return (
    <main className="w-full px-6 py-20 md:px-12 md:py-24 lg:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-green-600 hover:text-green-700">
          <ChevronLeft className="h-4 w-4" />
          Back to home
        </Link>
      </div>
      <article className="prose prose-sm mx-auto max-w-5xl md:prose-base">
        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-8">Terms of Use</h1>

        <p className="text-foreground/80 leading-relaxed mb-6">
          These Terms of Use govern your use of the website and services provided by 1st World Developments, based in South Africa with global operational prospects. By accessing our site or using our Adhoc Supply, Consulting, and Research Services, you agree to comply with these legally binding terms, our privacy policy, and standard disclaimers.
        </p>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Acceptance of Terms</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li>By using this website, you agree to follow these rules.</li>
          <li>If you do not agree, you must leave the site right now.</li>
          <li>We may change these terms at any time without notice.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Services Provided</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li>We offer adhoc product supply and delivery services.</li>
          <li>We provide business consulting and professional research services.</li>
          <li>Our main office is in South Africa.</li>
          <li>We may serve clients in the UK, USA, Lesotho, UAE, Nigeria, and other regions.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Use of the Website</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li>You must use this site only for lawful business and personal purposes.</li>
          <li>You must not damage, hack, or disrupt the website security.</li>
          <li>You must not use our content without our written permission.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Intellectual Property</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li>All text, logos, graphics, and data on this site belong to 1st World Developments.</li>
          <li>You cannot copy or reuse our company branding or materials.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Limitation of Liability</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li>We are not liable for any direct or indirect loss from using our site.</li>
          <li>Service delivery timelines may vary based on international logistics and local conditions.</li>
          <li>We do not promise the website will always work without errors or downtime.</li>
        </ul>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Governing Law</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          These terms follow the laws of the Republic of South Africa. International clients agree to resolve disputes under South African jurisdiction or mutual international arbitration.
        </p>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Disclaimer</h2>
        <p className="text-foreground/80 leading-relaxed mb-6">
          All information on this website is provided "as is" without formal guarantees. Product availability, consulting outcomes, and research data are subject to change. We are not responsible for third-party links or external website content.
        </p>

        <h2 className="text-xl font-semibold text-black mt-8 mb-4">Privacy Policy Summary</h2>
        <ul className="space-y-2 text-foreground/80 mb-6">
          <li><strong>Data Collection:</strong> We collect basic contact details when you fill out forms or email us.</li>
          <li><strong>Use of Info:</strong> We use your data only to reply to requests or deliver our services.</li>
          <li><strong>Data Protection:</strong> We keep your personal information safe and do not sell it to others.</li>
          <li><strong>Cookies:</strong> Our site may use basic cookies to track user visits and improve performance.</li>
        </ul>
      </article>
    </main>
  );
}
