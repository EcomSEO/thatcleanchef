"use client";

import { useState } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

type Scale = 1 | 2 | 3 | 4;

/**
 * ScaleButton — client toggles for 1× / 2× / 3× / 4× serving multiplier.
 *
 * Renders its own label and announces the active multiplier via a hidden
 * live region. When the `onChange` callback is provided, the parent can
 * recompute ingredient quantities. When it isn't, the button is purely
 * presentational (useful in static preview contexts).
 *
 * The "effective servings" readout animates between values on pick, so
 * 1× → 2× feels like a scale recalibrating rather than a hard swap.
 */
export function ScaleButton({
  baseServings,
  onChange,
}: {
  baseServings: number;
  onChange?: (scale: Scale, effectiveServings: number) => void;
}) {
  const [scale, setScale] = useState<Scale>(1);
  const scales: Scale[] = [1, 2, 3, 4];

  function pick(s: Scale) {
    setScale(s);
    onChange?.(s, baseServings * s);
  }

  const effective = baseServings * scale;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="caps-label text-stone">Scale</span>
      <div
        role="group"
        aria-label="Scale servings"
        className="inline-flex rounded-sm border border-olive/25 overflow-hidden"
      >
        {scales.map((s) => {
          const active = s === scale;
          return (
            <button
              key={s}
              type="button"
              onClick={() => pick(s)}
              className={
                "scale-btn px-3 py-1.5 text-[13px] font-mono tnum " +
                (active
                  ? "bg-terracotta text-cream"
                  : "bg-paper text-olive hover:bg-cream-deep")
              }
              aria-pressed={active}
            >
              {s}&times;
            </button>
          );
        })}
      </div>
      <span className="text-sm text-stone font-mono tnum" aria-live="polite">
        <AnimatedNumber value={effective} /> serving
        {effective === 1 ? "" : "s"}
      </span>
    </div>
  );
}
