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
    slug: "beyond-the-numbers",
    category: "Research",
    title: "Beyond the numbers: Why surveys fail without qualitative in-depth interviews",
    excerpt: "South African organizations need qualitative IDIs alongside surveys to explain the why behind the data.",
    date: "June 2026",
    body: [
      "Every year, South African organizations spend millions of Rands on quantitative surveys. Retail giants track Net Promoter Scores (NPS), government agencies deploy community questionnaires, and filling station franchises collect digital customer feedback. Yet, despite mountains of data, strategies still miss the mark. Products launch and fail, public programs face community resistance, and small business funding models yield underwhelming returns. The reason is simple: surveys tell you what is happening, but they cannot tell you why.",
      "To truly understand the South African consumer, citizen, and entrepreneur, quantitative surveys must be paired with qualitative In-Depth Interviews (IDIs). Without this human layer, data is not just incomplete—it is dangerous.",
      "Surveys are popular because they offer a sense of security. A pie chart showing that '85% of respondents face cash flow issues' looks actionable on an executive slide. However, structured questionnaires force respondents into rigid boxes. In South Africa’s highly nuanced socio-economic landscape, multiple-choice questions strip away the crucial context required to make sound investments. Surveys capture superficial compliance or top-of-mind reactions, but they miss underlying drivers, cultural nuances, and systemic bottlenecks. Relying solely on them leads to expensive missteps based on assumptions rather than reality.",
      "For public sector departments and municipalities, surveys are often used to gauge community satisfaction or service delivery needs. But standard forms create a distance between the state and the citizen. When a government entity relies on a checkbox format, citizens often provide answers shaped by frustration or a lack of trust. A survey might highlight that a community wants a new clinic, leading to a massive infrastructure spend. Had the agency conducted qualitative interviews, they might have discovered that the existing clinic is structurally sound, but residents cannot access it due to unsafe walking paths or poor public transport links. Qualitative conversations prevent governments from building the wrong solutions to the right problems.",
      "To eliminate the blind spots that lead to wasted capital, organizations must treat qualitative research not as an optional luxury, but as a strategic necessity. Adopt a sequential research design: run exploratory IDIs first to discover real issues, use those insights to write precise survey questions, then follow up with IDIs to explain anomalies. Prioritize the 'why' over the 'how many' and contextualize research for the South African landscape. Finally, bridge the gap between data and empathy by ensuring decision-makers hear raw interview transcripts or audio snippets so that strategy is grounded in lived experience.",
    ],
  },
  {
    slug: "survey-fatigue",
    category: "Research",
    title: "Survey fatigue: Proven strategies to increase response rates in B2B markets",
    excerpt: "B2B surveys need to be shorter, smarter, and tied to clear operational value.",
    date: "May 2026",
    body: [
      "In the competitive South African marketplace, data drives strategy. Whether you are a government agency measuring the impact of funding on small businesses, a retail giant optimizing supply chains, or a fuel retailer evaluating dealer satisfaction, decision-makers are overwhelmed by survey requests. This leads to survey fatigue — non-response and in-survey fatigue that degrade data quality.",
      "To capture actionable insights, organizations must evolve past generic questionnaires and adopt high-utility, targeted feedback strategies. Shift to micro-surveys and transactional triggers, personalize survey logic using dynamic skip-rules, and communicate the 'closed loop'—show respondents how their input will produce change.",
      "Operational tactics include optimizing for mobile and low-data environments, offering value-first incentives (like anonymized benchmark reports for B2B partners), and deploying conversational channels such as WhatsApp. Implement a survey governance policy to track who is surveyed and how often, and deploy escalation processes that ensure account managers respond to critical negative feedback within 48 hours.",
    ],
  },
  {
    slug: "psychographic-segmentation",
    category: "Marketing",
    title: "Psychographic segmentation: Moving past demographics to build high-converting ad campaigns",
    excerpt: "Psychographic segmentation explains the why behind consumer behaviour and lifts campaign performance.",
    date: "April 2026",
    body: [
      "Demographics tell you who a customer is. Psychographics tell you why they behave the way they do. Two consumers in the same income bracket can have opposing values; understanding motivations unlocks higher-converting campaigns.",
      "Move beyond age and location by gathering first-party behavioral data, building multi-dimensional buyer personas, and aligning creative directly to psychological drivers. Use interest and behavioral targeting on platforms like Meta and LinkedIn, and apply search-intent segmentation on Google to tailor messaging precisely.",
      "Run psychographic A/B tests where the demographic target stays constant but the emotional hook varies. Monitor conversion rates and cost-per-acquisition to identify which persona-driven messages perform best.",
    ],
  },
  {
    slug: "shelf-ready-testing",
    category: "Validation",
    title: "Shelf-ready testing: How to validate a new retail product before manufacturing",
    excerpt: "Shelf-ready testing reduces risk by validating compliance, packaging, and market fit before scale-up.",
    date: "March 2026",
    body: [
      "Launching a new retail product in South Africa carries financial risk. Shelf-ready testing bridges the gap between prototype and commercial success by validating compliance, packaging durability, and market fit before manufacturing at scale.",
      "Key steps include compliance and certification testing (SABS, NRCS, SAHPRA where applicable), packaging and durability validation (transit/drop testing and barcode verification), consumer and sensory panels, and digital micro-prototyping such as A/B landing pages and limited pre-orders.",
      "Strategic programs for retailers should include micro-testing stores and incubation shelves. For government funders, tie disbursements to validation milestones. For small businesses, prioritize MVP-driven testing and secure buyer LOIs before large production commitments.",
    ],
  },
  {
    slug: "roi-tracking",
    category: "Measurement",
    title: "ROI tracking: The exact metrics needed to prove your marketing campaign is working",
    excerpt: "Use the right ROI metrics for retail, UAE and public sector campaigns.",
    date: "February 2026",
    body: [
      "Marketing budgets are under greater scrutiny. To prove value, align ROI metrics with operational outcomes—basket size and average transaction value for retail, loyalty app conversion rates for digital programs, and cost-per-acquisition that ties directly to measurable actions.",
      "Define stakeholder-driven metrics, build dashboards that show the direct link from spend to business outcomes, and provide short, actionable reports rather than long narrative summaries.",
      "Use precise measurement frameworks that reflect sector-specific realities and focus on the metrics that enable confident investment decisions.",
    ],
  },
  {
    slug: "supply-chain-resilience",
    category: "Operations",
    title: "Supply chain resilience: Balancing product innovation with manufacturing constraints",
    excerpt: "Innovation must be balanced with manufacturability and supply chain resilience.",
    date: "January 2026",
    body: [
      "New product ideas are only valuable when they can be produced reliably. Resilience begins with honest conversations about design, sourcing and capacity.",
      "We help clients design products that are not only compelling, but also feasible, affordable and resilient under real supply constraints.",
      "The strongest solutions are the ones that are easy to deliver consistently, even when the market shifts.",
    ],
  },
  {
    slug: "compliance-first",
    category: "Governance",
    title: "Compliance First: The hidden paperwork errors that disqualify small businesses from public projects",
    excerpt: "Small businesses must fix hidden administrative compliance gaps before they can win public or corporate contracts.",
    date: "December 2025",
    body: [
      "Public sector and corporate procurement processes are unforgiving. Small businesses often lose opportunities not because of product quality, but because of avoidable paperwork mistakes.",
      "Expired tax clearance, mismatched CIPC details, or an invalid B-BBEE affidavit are common forms of disqualification. These errors show up long before evaluators review the substance of a proposal.",
      "For funding agencies and retail procurement teams, the easiest way to widen the supplier pool is to help applicants pre-vet these documents and update them proactively.",
      "When compliance becomes part of the proposal process, small businesses can compete on their strengths rather than being eliminated by administrative oversight.",
    ],
  },
  {
    slug: "writing-to-win",
    category: "Strategy",
    title: "Writing to Win: How to structure a public sector proposal that beats larger competitors",
    excerpt: "A winning public sector bid focuses on local impact, compliance and clear risk management.",
    date: "November 2025",
    body: [
      "Large competitors may have scale, but smaller businesses can win by making a proposal that is precise, localized and risk-aware.",
      "The executive summary should speak to outcomes and agility, not corporate size. The technical section should show how the business will deliver on time, with the minimum operational disruption.",
      "Include socio-economic impact, B-BBEE alignment, and a clear risk mitigation matrix to prove the proposal is practical and trustworthy.",
      "This approach turns proposal writing into a competitive advantage for nimble suppliers, especially when public and private buyers want authentic local participation.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
