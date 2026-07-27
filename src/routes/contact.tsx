import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero } from "../components/site/PageHero";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import contactHero from "../assets/contact-hero.jpg";

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

function EnquiryForm({ kind, submitLabel, messageLabel, placeholder }: {
  kind: FormKind; submitLabel: string; messageLabel: string; placeholder: string;
}) {
  const [submitting, setSubmitting] = useState(false);
  return (
    <form
      className="grid gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
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
        setTimeout(() => {
          setSubmitting(false);
          toast.success("Thank you — the right team member will get back to you shortly.");
          (e.target as HTMLFormElement).reset();
        }, 700);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor={`${kind}-name`}>Full name *</Label>
          <Input id={`${kind}-name`} name="name" required placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor={`${kind}-email`}>Email *</Label>
          <Input id={`${kind}-email`} name="email" type="email" required placeholder="you@example.com" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`${kind}-org`}>Organization</Label>
        <Input id={`${kind}-org`} name="organization" placeholder="Company name" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor={`${kind}-msg`}>{messageLabel} *</Label>
        <Textarea id={`${kind}-msg`} name="message" rows={5} required placeholder={placeholder} />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center rounded-full gradient-hero text-white font-semibold px-6 py-3 text-sm hover:brightness-110 disabled:opacity-70 transition"
      >
        {submitting ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={<>Each interaction transforms raw information into retained knowledge.</>}
        description="Your interaction supports a continuously improving process and client experience. Complete the right form and the appropriate team member will respond. Required fields are marked with an asterisk (*)."
        image={contactHero}
        imageAlt="Consultant in a modern office"
      />

      {/* Pathways */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20" data-reveal>
        <div className="max-w-2xl">
          <p className="eyebrow">Opportunity pathways</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy">Choose the right category and submit your enquiry.</h2>
          <p className="mt-3 text-foreground/70">
            
            <a href="mailto:info@1stworlddevelopments.co.za" className="ml-1 font-medium text-navy hover:text-green-support"></a>.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-border bg-white p-4 md:p-8 shadow-[var(--shadow-soft)]">
          <Tabs defaultValue="consultant" className="w-full">
            <TabsList className="w-full h-auto flex flex-wrap justify-start rounded-xl p-1">
              <TabsTrigger value="consultant" className="data-[state=active]:gradient-hero data-[state=active]:text-white rounded-lg text-sm py-2 px-4">
                Connect with a consultant
              </TabsTrigger>
              <TabsTrigger value="opportunities" className="data-[state=active]:gradient-hero data-[state=active]:text-white rounded-lg text-sm py-2 px-4">
                Project opportunities
              </TabsTrigger>
              <TabsTrigger value="getting-started" className="data-[state=active]:gradient-hero data-[state=active]:text-white rounded-lg text-sm py-2 px-4">
                Getting started
              </TabsTrigger>
            </TabsList>

            <TabsContent value="consultant" className="pt-8">
              <p className="text-foreground/70 mb-6 max-w-2xl">Structured advisory support, decision-making guidance or a consultation on a pressing challenge.</p>
              <EnquiryForm kind="consultant" submitLabel="Send enquiry" messageLabel="Your message" placeholder="Describe your consulting need." />
            </TabsContent>

            <TabsContent value="opportunities" className="pt-8">
              <p className="text-foreground/70 mb-6 max-w-2xl">Projects that require adhoc supply, operational consulting and research execution support. Share scope, timeline and expected outcomes.</p>
              <EnquiryForm kind="opportunities" submitLabel="Submit opportunity" messageLabel="Project scope" placeholder="Outline scope, timeline and expected outcomes." />
            </TabsContent>

            <TabsContent value="getting-started" className="pt-8">
              <p className="text-foreground/70 mb-6 max-w-2xl">Our onboarding process keeps requirements clear and implementation practical. Tell us where you are and where you want to go.</p>
              <EnquiryForm kind="getting-started" submitLabel="Start the conversation" messageLabel="What are you looking to start?" placeholder="Tell us about the challenge, project or support you need." />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
}
