"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  /** Animation duration on value changes, ms. Default 400. */
  duration?: number;
  unit?: string;
  className?: string;
};

/**
 * AnimatedNumber — animates between values whenever `value` changes.
 * Unlike CountUp (which fires once on viewport entry), this eases from the
 * previous value to the new one on every prop change. Used by ScaleButton to
 * make 2× / 3× / 4× feel like a real scale recalibrating. Respects
 * prefers-reduced-motion.
 */
export function AnimatedNumber({
  value,
  duration = 400,
  unit = "",
  className = "",
}: Props) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const from = prev.current;
    const to = value;
    if (from === to) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDisplay(to);
      prev.current = to;
      return;
    }

    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = from + (to - from) * eased;
      setDisplay(current);
      if (t < 1) {
        frame.current = requestAnimationFrame(tick);
      } else {
        setDisplay(to);
        prev.current = to;
      }
    }
    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current != null) cancelAnimationFrame(frame.current);
    };
  }, [value, duration]);

  return (
    <span className={className}>
      {Math.round(display)}
      {unit}
    </span>
  );
}
