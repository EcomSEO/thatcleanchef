"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  /** Extra delay, ms, applied via inline style (transitionDelay). */
  delay?: number;
  /** One-shot: once it's in, stay in. */
  once?: boolean;
  /** Root-margin for IntersectionObserver (default "-10% 0px"). */
  rootMargin?: string;
};

/**
 * Reveal — scroll-triggered entrance. Pairs with the `.reveal` or `.rule-draw`
 * CSS hooks in globals.css. Sets `data-in="true"` when the element enters the
 * viewport. Respects `prefers-reduced-motion: reduce` (just marks in=true
 * immediately so content is visible without motion).
 */
export function Reveal({
  className = "",
  children,
  delay,
  once = true,
  rootMargin = "-10% 0px",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.disconnect();
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { rootMargin, threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once, rootMargin]);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      data-in={inView ? "true" : "false"}
      className={`reveal ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
