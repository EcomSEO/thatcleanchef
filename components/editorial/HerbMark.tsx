/**
 * Hand-drawn-feel ingredient marks. Single-stroke SVGs, ~24px target,
 * meant to read like a pen-and-ink margin sketch in a printed cookbook.
 * Stroke uses currentColor so callers can tint to terracotta or olive.
 *
 * These are the chapter-divider and section-marker ornaments. Pair with
 * <ChapterDivider> and <RecipePage> for the cookbook treatment.
 */
type Kind =
  | "rosemary"
  | "garlic"
  | "pepper"
  | "lemon"
  | "knife"
  | "mortar"
  | "spoon"
  | "leaf"
  | "wheat"
  | "fish";

export function HerbMark({
  kind = "rosemary",
  size = 28,
  className = "",
  title,
}: {
  kind?: Kind;
  size?: number;
  className?: string;
  title?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
    className,
  };

  switch (kind) {
    case "rosemary":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <path d="M24 6 C24 14, 22 22, 20 30 C18 36, 17 40, 16 44" />
          <path d="M22 12 C20 12, 18 11, 17 9" />
          <path d="M21 18 C18.5 18.5, 16 18, 14 16.5" />
          <path d="M20 24 C17 24.5, 14.5 24, 12.5 22.5" />
          <path d="M19 30 C16 30.5, 13.5 30, 11 28.5" />
          <path d="M18 36 C15 36.5, 12 36, 10 34" />
          <path d="M22.5 14 C24 14, 26 13, 27.5 11" />
          <path d="M22 20 C24.5 20.5, 27 20, 29 18.5" />
          <path d="M21 26 C24 26.5, 26.5 26, 28.5 24.5" />
          <path d="M20 32 C23 32.5, 25.5 32, 27.5 30" />
        </svg>
      );
    case "garlic":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <path d="M24 8 C20 8, 17 12, 16 18 C15 24, 16 32, 20 38 C22 41, 26 41, 28 38 C32 32, 33 24, 32 18 C31 12, 28 8, 24 8 Z" />
          <path d="M24 8 L22 4 L26 4 Z" />
          <path d="M24 14 C24 22, 24 30, 24 38" />
          <path d="M19 18 C20 24, 21 32, 22 38" />
          <path d="M29 18 C28 24, 27 32, 26 38" />
        </svg>
      );
    case "pepper":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <path d="M16 14 C14 18, 14 26, 18 34 C22 42, 30 42, 34 36 C38 30, 36 22, 32 18 C30 16, 26 15, 22 16 Z" />
          <path d="M22 16 C22 12, 20 8, 16 6" />
          <path d="M22 14 L26 10" />
        </svg>
      );
    case "lemon":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <ellipse cx="24" cy="24" rx="14" ry="10" transform="rotate(-22 24 24)" />
          <path d="M11 19 L7 15" />
          <path d="M37 29 L41 33" />
          <path d="M19 24 C22 22, 26 22, 29 24" />
        </svg>
      );
    case "knife":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <path d="M6 30 L30 8 C32 6, 36 6, 38 8 C40 10, 38 14, 34 16 L10 34 Z" />
          <path d="M10 34 L4 40" />
          <path d="M10 34 L16 28 M14 30 L20 24 M18 26 L24 20" />
        </svg>
      );
    case "mortar":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <path d="M10 22 L14 38 C14 40, 16 42, 24 42 C32 42, 34 40, 34 38 L38 22" />
          <path d="M8 22 L40 22" />
          <path d="M28 22 L36 6" />
          <path d="M34 8 C36 6, 38 6, 40 8" />
        </svg>
      );
    case "spoon":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <ellipse cx="14" cy="14" rx="8" ry="6" transform="rotate(-35 14 14)" />
          <path d="M19 18 L42 40" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <path d="M8 40 C8 22, 22 8, 40 8 C40 26, 26 40, 8 40 Z" />
          <path d="M8 40 L40 8" />
          <path d="M14 32 L24 26 M18 36 L30 30" />
        </svg>
      );
    case "wheat":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <path d="M24 6 L24 42" />
          <path d="M24 12 C20 14, 18 16, 16 20 M24 12 C28 14, 30 16, 32 20" />
          <path d="M24 20 C20 22, 18 24, 16 28 M24 20 C28 22, 30 24, 32 28" />
          <path d="M24 28 C20 30, 18 32, 16 36 M24 28 C28 30, 30 32, 32 36" />
        </svg>
      );
    case "fish":
      return (
        <svg {...common}>
          {title ? <title>{title}</title> : null}
          <path d="M6 24 C12 16, 24 14, 32 18 C36 20, 40 24, 42 24 C40 24, 36 28, 32 30 C24 34, 12 32, 6 24 Z" />
          <path d="M42 24 L46 20 M42 24 L46 28" />
          <circle cx="34" cy="22" r="0.8" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}
