import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, getArticle } from "../lib/perspectives";

export const Route = createFileRoute("/perspectives/$slug")({
  loader: ({ params }) => {
    const slug = typeof params.slug === 'string' ? decodeURIComponent(params.slug) : params.slug;
    const article = getArticle(slug as string);
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
      <section className="w-full px-6 pb-8 pt-12 md:px-12 md:pt-16 lg:px-16" data-reveal>
        <div className="mx-auto w-full max-w-7xl">
          <Link to="/perspectives" className="text-sm text-muted-foreground hover:text-navy">← All perspectives</Link>
          <p className="mt-8 eyebrow">{article.category}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">{article.title}</h1>
          <p className="mt-5 text-base text-foreground/70 md:text-lg">{article.excerpt}</p>
        </div>
      </section>

      <div className="w-full px-6 md:px-12 lg:px-16" data-reveal>
        <div className="mx-auto aspect-[16/8] w-full max-w-7xl overflow-hidden rounded-2xl gradient-hero" />
      </div>

      <article className="mx-auto w-full max-w-5xl px-6 py-14 text-base leading-[1.82] text-foreground/85 md:px-12 md:py-16 lg:px-16" data-reveal>
        {article.body.map((p: string, i: number) => <p key={i} className="space-y-6">{p}</p>)}
      </article>

      {/* More perspectives — BBD-style, scroll to next */}
      <section className="border-t border-border bg-mint-soft/40" data-reveal>
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 lg:px-16">
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
