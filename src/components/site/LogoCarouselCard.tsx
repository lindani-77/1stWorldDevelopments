import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

interface Logo {
  name: string;
  src: string;
}

interface LogoCarouselCardProps {
  categoryTitle: string;
  mainHeading: string;
  logos: Logo[];
}

export function LogoCarouselCard({
  categoryTitle,
  mainHeading,
  logos,
}: LogoCarouselCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
    containScroll: "trimSnaps",
  });

  const scroll = useCallback(
    (direction: "left" | "right") => {
      if (!emblaApi) return;
      direction === "left" ? emblaApi.scrollPrev() : emblaApi.scrollNext();
    },
    [emblaApi],
  );

  const loopedLogos = logos.length > 1 ? [...logos, ...logos] : logos;

  return (
    <div className="mx-auto w-full max-w-[1600px] rounded-lg border border-slate-200 bg-[#f3f4f6] p-3 shadow-sm sm:rounded-[22px] sm:p-4 md:p-5 lg:p-6">
      <div className="mb-3 sm:mb-4 md:mb-5 flex flex-col gap-1.5 sm:gap-2">
        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em] text-slate-800">
          {categoryTitle}
        </span>
        <h2 className="text-lg sm:text-xl font-medium leading-snug tracking-tight text-slate-900 md:text-2xl">
          {mainHeading}
        </h2>
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
        <button
          onClick={() => scroll("left")}
          className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition-colors hover:bg-slate-50"
          aria-label="Previous logos"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
        </button>

        <div ref={emblaRef} className="min-w-0 flex-1 overflow-hidden">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 py-1">
            {loopedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-16 w-32 shrink-0 items-center justify-center rounded-none bg-transparent px-1 transition-all duration-200 hover:-translate-y-0.5 sm:h-20 sm:w-44 md:h-24 md:w-56 lg:w-64"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-full w-full max-h-10 sm:max-h-12 md:max-h-14 lg:max-h-16 object-contain opacity-95"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll("right")}
          className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white shadow-sm transition-colors hover:bg-slate-50"
          aria-label="Next logos"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
        </button>
      </div>
    </div>
  );
}
