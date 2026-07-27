import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { ScrollMouse } from "../components/site/ScrollMouse";

function NotFoundComponent() {
  return (
    <>
      <Header />
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-3 text-4xl font-semibold text-navy">Page not found</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-[#e9f8ea] to-[#cfeecf] text-navy px-5 py-2 text-sm font-semibold"
          >
            Go home
          </Link>
        </div>
      </div>
      <Footer />
      <ScrollMouse />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-navy">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-to-r from-[#e9f8ea] to-[#cfeecf] text-navy px-4 py-2 text-sm font-semibold"
          >Try again</button>
          <a href="/" className="rounded-full border border-input px-4 py-2 text-sm font-medium">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "1st World Developments — Consulting, Research & Adhoc Solutions" },
      { name: "description", content: "A versatile South African consulting firm delivering adhoc supply, consulting and research services. 100+ brands, 110+ delivered projects, 10+ years." },
      { name: "author", content: "1st World Developments" },
      { property: "og:site_name", content: "1st World Developments" },
      { property: "og:title", content: "1st World Developments" },
      { property: "og:description", content: "Consulting, research and adhoc solutions that empower organizations to be high-impactful and effective." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1"><Outlet /></main>
        <Footer />
        <ScrollMouse />
      </div>
    </QueryClientProvider>
  );
}
