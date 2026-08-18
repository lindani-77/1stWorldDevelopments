import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { articles } from "../lib/perspectives";
import perspectivesHero from "../assets/custom/wmremove-transformed.jpeg";
import article1 from "../assets/custom/article-1.jpg";
import article2 from "../assets/custom/article-2.jpg";
import article3 from "../assets/custom/article-3.jpg";
import article4 from "../assets/custom/article-4.jpg";
import article5 from "../assets/custom/article-5.jpg";
import article6 from "../assets/custom/article-6.jpg";
import article7 from "../assets/custom/article-7.jpg";
import article8 from "../assets/custom/article-8.jpg";

// Map images explicitly to slugs so images remain correct even if ordering changes.
const imageMap: Record<string, string> = {
  "beyond-the-numbers": article1,
  "survey-fatigue": article2,
  "psychographic-segmentation": article3,
  "shelf-ready-testing": article4,
  "roi-tracking": article5,
  "supply-chain-resilience": article6,
  "compliance-first": article7,
  "writing-to-win": article8,
};

export const Route = createFileRoute("/perspectives")({
  head: () => ({
    meta: [
      { title: "Perspectives — 1st World Developments" },
      { name: "description", content: "Trend forecasts, framework deconstruction, opinion pieces and impactful case studies." },
      { property: "og:title", content: "Perspectives" },
      { property: "og:description", content: "Insight that is practical, thought-provoking and built for action." },
      { property: "og:url", content: "/perspectives" },
    ],
    links: [{ rel: "canonical", href: "/perspectives" }],
  }),
  component: PerspectivesLayout,
});

function PerspectivesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/perspectives/$slug");
  if (isChild) return <Outlet />;
  return <PerspectivesIndex />;
}

function PerspectivesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Perspectives"
        title={<>Insight that is practical, thought-provoking and built for action.</>}
        description="The latest trend forecasts, framework deconstruction and opinion pieces, as well as impactful case studies are available. The exploration of Cross-Industry Partnerships and Co-Branded Projects between reputable and well-known brands."
        image={perspectivesHero}
        imageAlt="Urban architecture and contemporary office buildings"
      />

      <section className="w-full px-6 pb-20 md:px-12 md:pb-24 lg:px-16" data-reveal>
        <div className="mx-auto grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, index) => (
            <Link
              key={a.slug}
              to="/perspectives/$slug"
              params={{ slug: a.slug }}
              className="group block overflow-hidden rounded-[2rem] border border-divider bg-white shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={imageMap[a.slug] ?? perspectivesHero} alt={a.title} className="h-full w-full object-cover object-center" />
              </div>
              <div className="px-6 py-6">
                <h3 className="text-lg font-semibold text-black transition-colors group-hover:text-green-support">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{a.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                  Read <span className="arrow">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
