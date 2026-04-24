import { Reveal } from "./Reveal";

/**
 * Ornamental rules. Each supports an optional `drawIn` prop that wraps it
 * in a Reveal and uses the `.rule-draw` CSS hook to draw the horizontal
 * lines from left to right when the rule scrolls into view. A tiny sage
 * tick appears at the end.
 */

export function DotRule({
  className = "",
  drawIn = false,
}: {
  className?: string;
  drawIn?: boolean;
}) {
  const node = (
    <div
      aria-hidden
      className={`flex items-center gap-3 text-sage/40 ${className}`}
    >
      <span className="h-px flex-1 bg-sage/30" />
      <span className="h-1 w-1 rounded-full bg-sage/70" />
      <span className="h-1 w-1 rounded-full bg-terracotta/70" />
      <span className="h-1 w-1 rounded-full bg-sage/70" />
      <span className="h-px flex-1 bg-sage/30" />
    </div>
  );
  if (!drawIn) return node;
  return <Reveal className="rule-draw">{node}</Reveal>;
}

export function ThinRule({
  className = "",
  drawIn = false,
}: {
  className?: string;
  drawIn?: boolean;
}) {
  const node = (
    <div aria-hidden className={`flex items-center ${className}`}>
      <span className="h-px flex-1 bg-olive/10" />
    </div>
  );
  if (!drawIn) return node;
  return <Reveal className="rule-draw">{node}</Reveal>;
}

export function KitchenRule({
  className = "",
  drawIn = false,
}: {
  className?: string;
  drawIn?: boolean;
}) {
  const node = (
    <div aria-hidden className={`flex items-center gap-4 ${className}`}>
      <span className="h-px w-8 bg-terracotta" />
      <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
      <span className="h-px flex-1 bg-olive/25" />
    </div>
  );
  if (!drawIn) return node;
  return <Reveal className="rule-draw rule-draw--tick">{node}</Reveal>;
}
