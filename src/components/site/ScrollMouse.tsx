import { useEffect, useState } from "react";

export function ScrollMouse() {
  const [direction, setDirection] = useState<"down" | "up">("down");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let scrollTimer: ReturnType<typeof setTimeout> | null = null;

    const updateScrollState = () => {
      const currentY = window.scrollY;

      setIsScrolling(true);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 360);

      if (currentY <= 120) {
        setDirection("down");
      } else if (currentY < lastY) {
        setDirection("up");
      } else if (currentY > lastY) {
        setDirection("down");
      }

      lastY = currentY;
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: direction === "up" ? 0 : window.scrollY + window.innerHeight * 0.9,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className="scroll-mouse"
      data-direction={direction}
      data-scrolling={isScrolling ? "true" : "false"}
      aria-label={direction === "up" ? "Scroll to top" : "Scroll down"}
      onClick={handleClick}
    >
      <span className="scroll-mouse__volume-line" aria-hidden="true">
        <span className="scroll-mouse__volume-track" />
        <span className="scroll-mouse__volume-fill" />
      </span>
      <span className="scroll-mouse__shell" aria-hidden="true">
        <span className="scroll-mouse__wheel" />
      </span>
    </button>
  );
}