/**
 * Roman numeral display. The cookbook's primary ordinal — used for chapter
 * numbers, recipe numbers, and table-of-contents entries. Replaces the
 * 01/02/03 rank-numeral pattern from the magazine system.
 */
const ROMAN: Array<[number, string]> = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function toRoman(n: number): string {
  if (n <= 0) return "";
  let v = n;
  let out = "";
  for (const [num, sym] of ROMAN) {
    while (v >= num) {
      out += sym;
      v -= num;
    }
  }
  return out;
}

export function Roman({
  n,
  className = "",
  size = "md",
}: {
  n: number;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "display";
}) {
  const sizeClass =
    size === "display"
      ? "text-7xl md:text-8xl"
      : size === "xl"
      ? "text-5xl md:text-6xl"
      : size === "lg"
      ? "text-3xl md:text-4xl"
      : size === "sm"
      ? "text-base"
      : size === "xs"
      ? "text-xs"
      : "text-xl";

  return (
    <span
      aria-hidden
      className={`font-serif italic text-terracotta tnum tracking-wide ${sizeClass} ${className}`}
    >
      {toRoman(n)}
    </span>
  );
}
