import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import contactHero from "../assets/contact-image.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — 1st World Developments" },
      { name: "description", content: "Connect with a consultant, share project opportunities or get started. All enquiries are routed via info@1stworlddevelopments.co.za." },
      { property: "og:title", content: "Contact 1st World Developments" },
      { property: "og:description", content: "Three enquiry pathways: consultant, project opportunity, getting started. All sent to info@1stworlddevelopments.co.za." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const baseSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  organization: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please add a little more detail").max(2000),
});

type FormKind = "consultant" | "opportunities" | "getting-started";

const tabOptions: { value: FormKind; label: string; description: string; messageLabel: string; placeholder: string }[] = [
  {
    value: "consultant",
    label: "Connect with a consultant",
    description: "Structured advisory support, decision-making guidance or a consultation on a pressing challenge.",
    messageLabel: "Your message",
    placeholder: "Describe your consulting need.",
  },
  {
    value: "opportunities",
    label: "Project opportunities",
    description: "Projects that require adhoc supply, operational consulting and research execution support. Share scope, timeline and expected outcomes.",
    messageLabel: "Project scope",
    placeholder: "Outline scope, timeline and expected outcomes.",
  },
  {
    value: "getting-started",
    label: "Getting started",
    description: "Our onboarding process keeps requirements clear and implementation practical. Tell us where you are and where you want to go.",
    messageLabel: "What are you looking to start?",
    placeholder: "Tell us about the challenge, project or support you need.",
  },
];

function ContactPage() {
  const [selectedTab, setSelectedTab] = useState<FormKind>("consultant");
  const [submitting, setSubmitting] = useState(false);
  const activeTab = tabOptions.find((tab) => tab.value === selectedTab)!;

  return (
    <div className="w-full bg-[#dfe4eb]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-8 sm:py-12 md:px-12 md:py-16 lg:px-16">
        <section className="mb-8 sm:mb-12 md:mb-16 grid grid-cols-1 items-center gap-6 sm:gap-8 md:gap-10 md:gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[var(--green-support)] mb-2 sm:mb-3">
              CONTACT US
            </p>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight leading-snug mb-3 sm:mb-4">
              Each interaction transforms raw information into retained knowledge.
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Your interaction supports a continuously improving process and client experience. Complete the right form and the appropriate team member will respond. Required fields are marked with an asterisk (*).
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[28px] bg-white shadow-sm aspect-[4/3]">
            <img
              src={contactHero}
              alt="Contact hero image"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mb-6 sm:mb-8">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[var(--green-support)] mb-1.5 sm:mb-2">
            OPPORTUNITY PATHWAYS
          </p>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 tracking-tight mb-1.5 sm:mb-2">
            Choose the right category and submit your enquiry.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Select the best-fit path below and provide your details so the right team can assist you.
          </p>
        </section>

        <section className="rounded-xl sm:rounded-2xl md:rounded-[28px] bg-white p-4 sm:p-6 md:p-8 shadow-md sm:shadow-lg shadow-black/5">
          <div className="bg-[#e5e7eb] rounded-full p-0.5 sm:p-1 flex flex-wrap gap-0.5 sm:gap-1 mb-4 sm:mb-5 md:mb-6">
            {tabOptions.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setSelectedTab(tab.value)}
                className={`rounded-full px-2 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium transition-all ${
                  selectedTab === tab.value
                    ? "bg-[var(--green-support)] text-white"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="text-xs sm:text-[13px] text-slate-600 mb-4 sm:mb-6">
            {activeTab.description}
          </p>

          <form
            className="grid gap-3 sm:gap-4"
            onSubmit={(event) => {
              event.preventDefault();
              const form = new FormData(event.currentTarget);
              const parsed = baseSchema.safeParse({
                name: form.get("name"),
                email: form.get("email"),
                organization: form.get("organization") ?? "",
                message: form.get("message"),
              });

              if (!parsed.success) {
                toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
                return;
              }

              setSubmitting(true);

              const payload = {
                name: parsed.data.name,
                email: parsed.data.email,
                organization: parsed.data.organization || "Not provided",
                message: parsed.data.message,
                category: activeTab.label,
              };

              const subject = encodeURIComponent(`${payload.category}: Enquiry from ${payload.name}`);
              const body = encodeURIComponent(
                [
                  `Name: ${payload.name}`,
                  `Email: ${payload.email}`,
                  `Organization: ${payload.organization}`,
                  `Enquiry type: ${payload.category}`,
                  "",
                  "Message:",
                  payload.message,
                ].join("\n")
              );

              window.location.href = `mailto:info@1stworlddevelopments.co.za?subject=${subject}&body=${body}`;

              setTimeout(() => {
                setSubmitting(false);
                toast.success("Your email client has been opened with the enquiry details ready to send.");
                (event.target as HTMLFormElement).reset();
              }, 700);
            }}
          >
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 mb-3 sm:mb-4">
              <div className="grid gap-1.5 sm:gap-2">
                <label htmlFor="full-name" className="text-xs font-semibold text-slate-900 block">
                  Full name*
                </label>
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs text-slate-800 outline-none focus:border-[var(--green-support)] focus:ring-1 focus:ring-[var(--green-support)] placeholder:text-slate-400"
                />
              </div>
              <div className="grid gap-1.5 sm:gap-2">
                <label htmlFor="email" className="text-xs font-semibold text-slate-900 block">
                  Email*
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs text-slate-800 outline-none focus:border-[var(--green-support)] focus:ring-1 focus:ring-[var(--green-support)] placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="grid gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <label htmlFor="organization" className="text-xs font-semibold text-slate-900 block">
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                placeholder="Company name"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-[var(--green-support)] focus:ring-1 focus:ring-[var(--green-support)] placeholder:text-slate-400"
              />
            </div>

            <div className="grid gap-2 mb-6">
              <label htmlFor="message" className="text-xs font-semibold text-slate-900 block">
                {activeTab.messageLabel}*
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder={activeTab.placeholder}
                className="min-h-[10rem] w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 outline-none focus:border-[var(--green-support)] focus:ring-1 focus:ring-[var(--green-support)] placeholder:text-slate-400"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-[var(--green-support)] py-3 text-xs font-medium text-white transition-colors hover:brightness-110 disabled:opacity-70"
            >
              {submitting ? "Sending…" : "Send enquiry"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
