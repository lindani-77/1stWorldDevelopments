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
    <section className="w-full px-4 pb-8 pt-10 sm:px-6 md:pb-12 md:pt-14 lg:px-16 lg:pb-14 lg:pt-16" data-reveal>
      <div className="mx-auto w-full max-w-[1800px]">
        <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="order-1 space-y-0.5 md:order-1">
            <p className="eyebrow text-xs sm:text-[0.7rem]">{eyebrow}</p>
            <h1 className="mt-3 sm:mt-4 max-w-3xl text-2xl sm:text-3xl font-semibold tracking-tight text-navy md:text-4xl lg:text-5xl">
              {title}
            </h1>
            {description && <p className="mt-4 sm:mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-foreground/70 md:text-[1.05rem]">{description}</p>}
            {children && <div className="mt-6 sm:mt-8">{children}</div>}
          </div>
          {image && (
            <div className="order-2 w-full max-w-[calc(100vw-2rem)] sm:max-w-[44rem] justify-self-center overflow-hidden rounded-xl sm:rounded-[2rem] shadow-[var(--shadow-soft)] md:order-2 md:max-w-[54rem] md:justify-self-end">
              <img
                src={image}
                alt={imageAlt ?? ""}
                className="h-full min-h-[280px] sm:min-h-[340px] w-full object-cover"
                loading="eager"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
