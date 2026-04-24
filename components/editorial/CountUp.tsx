"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Final numeric value. */
  value: number;
  /** Appended unit, e.g. "g", "mg". Ignored when `kind="time"`. */
  unit?: string;
  /** Animation duration, ms. Default 800. */
  duration?: number;
  /**
   * Output format.
   *  - `"int"` (default): round to integer.
   *  - `"time"`: treat value as minutes, render as "Nm" or "Hh Mm".
   */
  kind?: "int" | "time";
  className?: string;
};

/**
 * CountUp — animates a number from 0 → value once it enters the viewport.
 * Uses an ease-out cubic curve. Respects reduced-motion (renders value
 * immediately). Intended for the Nutrition Ledger macro readouts — the
 * "the kitchen weighed this" moment.
 */
export function CountUp({
  value,
  unit = "",
  duration = 800,
  kind = "int",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      started.current = true;
      return;
    }

    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setDisplay(value);
      started.current = true;
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const from = 0;
            const to = value;

            function tick(now: number) {
              const elapsed = now - start;
              const t = Math.min(1, elapsed / duration);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(from + (to - from) * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(to);
            }

            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  let rendered: string;
  if (kind === "time") {
    const m = Math.round(display);
    if (m < 60) rendered = `${m}m`;
    else {
      const h = Math.floor(m / 60);
      const rem = m % 60;
      rendered = rem === 0 ? `${h}h` : `${h}h ${rem}m`;
    }
  } else {
    rendered = `${Math.round(display)}${unit}`;
  }

  return (
    <span ref={ref} className={className}>
      {rendered}
    </span>
  );
}
