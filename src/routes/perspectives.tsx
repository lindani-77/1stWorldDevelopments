import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { articles } from "../lib/perspectives";
import perspectivesHero from "../assets/perspectives-hero.jpg";

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
        description="Evocative, cultivating and astonishing — our collection of ideas and developments across South Africa and the international community."
        image={perspectivesHero}
        imageAlt="Abstract flowing topographic lines in teal"
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20 md:pb-24" data-reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to="/perspectives/$slug"
              params={{ slug: a.slug }}
              className="group block hover-arrow"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden hover-zoom bg-mint-soft">
                <div className="h-full w-full gradient-hero flex items-end p-6">
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/85">{a.category}</span>
                </div>
              </div>
<h3 className="mt-5 text-xl font-semibold text-navy group-hover:text-green-support transition-colors">{a.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{a.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy">
                Read perspective <span className="arrow">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
