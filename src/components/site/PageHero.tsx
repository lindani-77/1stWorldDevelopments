import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 pt-12 md:pt-16 pb-10 md:pb-14" data-reveal>
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
        <div className="space-y-0.5">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-semibold text-navy tracking-tight">
            {title}
          </h1>
          {description && <p className="mt-5 max-w-lg text-base md:text-[1.05rem] text-foreground/70 leading-relaxed">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>
        {image && (
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[5/4]" data-reveal>
            <img src={image} alt={imageAlt ?? ""} className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
