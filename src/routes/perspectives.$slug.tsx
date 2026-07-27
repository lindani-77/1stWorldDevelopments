import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, getArticle } from "../lib/perspectives";

export const Route = createFileRoute("/perspectives/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Not found" }, { name: "robots", content: "noindex" }] };
    const a = loaderData.article;
    return {
      meta: [
        { title: `${a.title} — Perspectives | 1st World Developments` },
        { name: "description", content: a.excerpt },
        { property: "og:title", content: a.title },
        { property: "og:description", content: a.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/perspectives/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/perspectives/${params.slug}` }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 pt-12 md:pt-16 pb-8" data-reveal>
        <Link to="/perspectives" className="text-sm text-muted-foreground hover:text-navy">← All perspectives</Link>
        <p className="mt-8 eyebrow">{article.category}</p>
        <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-navy tracking-tight">{article.title}</h1>
        <p className="mt-5 text-base md:text-lg text-foreground/70">{article.excerpt}</p>
      </section>

      <div className="mx-auto max-w-5xl px-5 md:px-8" data-reveal>
        <div className="aspect-[16/8] rounded-2xl overflow-hidden gradient-hero" />
      </div>

      <article className="mx-auto max-w-3xl px-5 md:px-8 py-14 md:py-16 space-y-6 text-base leading-[1.82] text-foreground/85" data-reveal>
        {article.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
      </article>

      {/* More perspectives — BBD-style, scroll to next */}
      <section className="border-t border-border bg-mint-soft/40" data-reveal>
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="eyebrow">Continue reading</p>
              <h2 className="mt-2 text-xl md:text-2xl font-semibold text-navy">More perspectives</h2>
            </div>
            <Link to="/perspectives" className="hidden md:inline text-sm font-medium text-navy hover-arrow">
              View all <span className="arrow">→</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((a) => (
              <Link key={a.slug} to="/perspectives/$slug" params={{ slug: a.slug }}
                className="group block rounded-2xl bg-white border border-border p-6 hover-pop hover-arrow">
                <span className="eyebrow">{a.category}</span>
<h3 className="mt-3 font-semibold text-navy group-hover:text-green-support transition-colors">{a.title}</h3>
                <p className="mt-2 text-sm text-foreground/70 line-clamp-3">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy">
                  Read <span className="arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
