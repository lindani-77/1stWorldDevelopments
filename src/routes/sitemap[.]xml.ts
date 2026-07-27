import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles } from "../lib/perspectives";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" as const },
          { path: "/about", priority: "0.8", changefreq: "monthly" as const },
          { path: "/services", priority: "0.9", changefreq: "monthly" as const },
          { path: "/media-hub", priority: "0.7", changefreq: "monthly" as const },
          { path: "/perspectives", priority: "0.8", changefreq: "weekly" as const },
          { path: "/contact", priority: "0.7", changefreq: "yearly" as const },
          ...articles.map((a) => ({
            path: `/perspectives/${a.slug}`,
            priority: "0.6",
            changefreq: "monthly" as const,
          })),
        ];
        const urls = entries.map((e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
