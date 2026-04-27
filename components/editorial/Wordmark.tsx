import Link from "next/link";

/**
 * thatcleanchef wordmark — clean medical-info register.
 * Source Serif 4 weight 600, sage-700, NOT italic. Roman, not Cormorant.
 */
export function Wordmark({
  size = "md",
  asLink = true,
}: {
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
}) {
  const sizeClass =
    size === "sm" ? "text-base" : size === "lg" ? "text-2xl" : "text-lg";

  const inner = (
    <span
      className={`font-serif font-semibold text-sage-700 ${sizeClass} tracking-tight leading-none`}
    >
      thatcleanchef
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link
      href="/"
      aria-label="thatcleanchef — home"
      className="inline-flex items-baseline gap-2"
    >
      {inner}
    </Link>
  );
}
