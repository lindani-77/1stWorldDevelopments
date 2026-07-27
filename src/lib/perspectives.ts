export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  date: string;
};

export const articles: Article[] = [
  {
    slug: "strategic-context-matters",
    category: "Market outlook",
    title: "Why strategic context matters in a rapidly changing commercial environment",
    excerpt: "Understanding the forces shaping your market allows leaders to make better decisions with greater confidence.",
    date: "March 2026",
    body: [
      "Markets rarely change in a single direction. Regulation, supply patterns, buyer expectations and technology shifts move at different rates, and leaders who understand the pace of each are the ones who make timely decisions.",
      "Strategic context is what separates a reactive organisation from a proactive one. When teams share the same view of what's moving and why, they stop debating symptoms and start addressing causes.",
      "In our engagements we begin with a structured environmental scan — a compact, evidence-led review of the industry, the customer, the regulatory landscape and the competitive frontier. The scan is short by design; the value comes from what it enables the leadership team to decide next.",
      "The pattern we see repeatedly is this: when the context is clear, the choices become obvious. Investment gets easier, hiring gets sharper and the operating rhythm becomes calmer.",
    ],
  },
  {
    slug: "simpler-systems-sustainable-execution",
    category: "Operations",
    title: "Building simpler systems that support sustainable execution",
    excerpt: "Operational clarity improves delivery, reduces friction and helps teams focus on value.",
    date: "February 2026",
    body: [
      "Complexity accumulates quietly. A form here, an approval there, a workaround for a system nobody wants to replace — the sum is a team spending more time on process than on outcomes.",
      "Simplification is not the same as removal. It is the deliberate choice to keep what creates value and to retire what does not. The best operations teams treat simplification as an ongoing practice rather than a one-off project.",
      "In our operational reviews we look for three things: hand-offs that lose information, decisions that no one can explain, and reports that no one reads. Fix those and the rest of the operating model tends to look after itself.",
    ],
  },
  {
    slug: "collaboration-creates-stronger-solutions",
    category: "Partnerships",
    title: "How collaboration creates stronger solutions and better outcomes",
    excerpt: "Cross-sector partnerships bring fresh perspective, faster learning and more resilient strategies.",
    date: "January 2026",
    body: [
      "The most durable partnerships we see are grounded in shared outcomes, not shared logos. Each side brings a specific capability, and each side is measured against the same result.",
      "Cross-sector partnerships expose organisations to fresh perspective. A retailer working with a public-sector body learns about accountability at scale; the public-sector body learns about pace and customer focus. Both improve.",
      "Structure the partnership so that responsibilities are legible, decisions have owners and reviews happen on cadence. Everything else — trust, tempo, momentum — grows from there.",
    ],
  },
  {
    slug: "adhoc-supply-in-critical-projects",
    category: "Operations",
    title: "Why reliable adhoc supply is a competitive advantage in critical projects",
    excerpt: "When timing is everything, the ability to procure and deliver accurately becomes strategic.",
    date: "December 2025",
    body: [
      "In critical projects — exam paper distribution, government roll-outs, urgent enterprise deployments — the difference between success and failure is often measured in hours, not weeks.",
      "Adhoc supply is treated as tactical, but at scale it is strategic. Reliable supply partners protect timelines, protect reputations and unlock outcomes that would otherwise be impossible.",
      "Our approach to adhoc supply combines vetted brand partnerships, category-based sourcing discipline and a delivery model designed for immediate needs.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
