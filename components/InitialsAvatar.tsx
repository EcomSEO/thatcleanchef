/**
 * InitialsAvatar — non-photographic, square-with-initials avatar for team
 * members. Shipped under the 2026-04-29 operator-isolation lock that
 * forbids AI-generated headshots network-wide. Keeps a real-person feel
 * (initials + accent ring) without the reverse-image-search exposure of an
 * AI portrait.
 *
 * Usage:
 *   <InitialsAvatar initials="LM" accent="sage" size="lg" />
 *
 * The accent maps to the team-member's brand-token tile colour so each
 * person reads as visually distinct on the team index.
 */

type Accent = "sage" | "terracotta" | "olive" | "stone";
type Size = "sm" | "md" | "lg" | "xl";

const ACCENT_BG: Record<Accent, string> = {
  sage: "bg-sage-100",
  terracotta: "bg-terracotta-100",
  olive: "bg-cream-deep",
  stone: "bg-cream-deep",
};

const ACCENT_INK: Record<Accent, string> = {
  sage: "text-sage-700",
  terracotta: "text-terracotta-600",
  olive: "text-olive",
  stone: "text-stone",
};

const ACCENT_BORDER: Record<Accent, string> = {
  sage: "border-sage-200",
  terracotta: "border-terracotta-200",
  olive: "border-hairline",
  stone: "border-hairline",
};

const SIZE_MAP: Record<Size, { box: string; type: string }> = {
  sm: { box: "w-10 h-10", type: "text-[14px]" },
  md: { box: "w-16 h-16", type: "text-[22px]" },
  lg: { box: "w-24 h-24", type: "text-[34px]" },
  xl: { box: "w-44 h-44 md:w-56 md:h-56", type: "text-[60px] md:text-[80px]" },
};

export function InitialsAvatar({
  initials,
  accent = "sage",
  size = "md",
  className = "",
  ariaLabel,
}: {
  initials: string;
  accent?: Accent;
  size?: Size;
  className?: string;
  ariaLabel?: string;
}) {
  const sz = SIZE_MAP[size];
  return (
    <div
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      className={`${sz.box} rounded-full border ${ACCENT_BORDER[accent]} ${ACCENT_BG[accent]} flex items-center justify-center font-serif font-medium tracking-[0.04em] ${ACCENT_INK[accent]} ${sz.type} ${className}`}
    >
      <span aria-hidden>{initials}</span>
    </div>
  );
}

/** Derive initials from a full name — "Lena Marsh" → "LM". */
export function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
