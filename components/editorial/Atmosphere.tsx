"use client";

import { useEffect, useRef } from "react";

/**
 * Atmosphere — warm film grain overlay + scroll-linked reading progress bar.
 * Grain is a fixed SVG noise texture at ~3.5% opacity (mix-blend-mode
 * multiply). The reading progress bar tracks document scroll as a thin
 * terracotta line at the top of the viewport. Both respect reduced-motion.
 */
export function Atmosphere() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function update() {
      const el = barRef.current;
      if (!el) return;
      const doc = document.documentElement;
      const scrolled = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? Math.min(100, (scrolled / height) * 100) : 0;
      el.style.width = pct.toFixed(2) + "%";
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="film-grain" aria-hidden />
      <div
        ref={barRef}
        className="reading-progress"
        aria-hidden
        role="presentation"
      />
    </>
  );
}
