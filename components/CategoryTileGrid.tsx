import Image from "next/image";
import Link from "next/link";

export type CategoryTile = {
  eyebrow: string;
  title: string;
  dek: string;
  href: string;
  recipeCount: number;
  imageUrl?: string;
};

/**
 * Category Hubs — re-skinned 2026-04-29 against Stitch design.
 *
 * Five sage-tinted circular blob icons sitting on a cream band, each with
 * the hub headline below. The circular treatment is the Stitch direction
 * — replaces the previous square photo tile.
 *
 * If `imageUrl` is present, the food image is round-cropped inside the
 * sage circle. Without it, a small SVG glyph keyed off the hub slug
 * holds the spot — never an empty placeholder.
 */
export function CategoryTileGrid({
  tiles,
  heading = "Category Hubs",
  dek,
}: {
  tiles: CategoryTile[];
  heading?: string;
  dek?: string;
}) {
  return (
    <section className="bg-cream border-y border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <span className="caps-label text-terracotta tracking-[0.18em]">
            Browse the kitchen
          </span>
          <h2 className="mt-3 font-serif italic text-3xl md:text-4xl text-charcoal leading-tight">
            {heading}
          </h2>
          {dek && (
            <p className="mt-4 text-[15.5px] text-ink-2 max-w-2xl mx-auto leading-relaxed">
              {dek}
            </p>
          )}
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 max-w-5xl mx-auto">
          {tiles.map((t, i) => (
            <li key={t.href} className="text-center">
              <Link
                href={t.href}
                className="group flex flex-col items-center gap-3.5"
              >
                {/* Circular sage-tinted blob */}
                <div className="relative w-[112px] h-[112px] md:w-[128px] md:h-[128px] rounded-full bg-sage-100 ring-1 ring-sage-200 overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:ring-2 group-hover:ring-sage-300 group-hover:bg-sage-50">
                  {t.imageUrl ? (
                    <Image
                      src={t.imageUrl}
                      alt=""
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <HubGlyph slug={hubSlugFromHref(t.href)} />
                  )}
                </div>

                {/* Hub label */}
                <div>
                  <h3 className="font-serif text-[15px] md:text-[16px] text-charcoal leading-tight group-hover:text-terracotta transition">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-[11.5px] font-mono uppercase tracking-[0.12em] text-ink-3">
                    {t.recipeCount} {t.recipeCount === 1 ? "recipe" : "recipes"}
                  </p>
                </div>

                {/* Number badge — small mono */}
                <span
                  aria-hidden
                  className="text-[10px] font-mono text-ink-3"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Map a `/guides/{slug}` href to its slug for glyph lookup. */
function hubSlugFromHref(href: string): string {
  const m = href.match(/\/guides\/([a-z-]+)/);
  return m?.[1] ?? "";
}

/** Inline SVG glyphs per hub — no network request, no font load. */
function HubGlyph({ slug }: { slug: string }) {
  // sage-700 stroke, ~36px square, line-art style
  const common = "w-12 h-12 text-sage-700";
  switch (slug) {
    case "diet-specific":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
          <path d="M12 24c0-6 5-12 12-12s12 6 12 12-5 12-12 12S12 30 12 24Z" />
          <path d="M18 24h12M24 18v12" />
        </svg>
      );
    case "meal-types":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
          <circle cx="24" cy="24" r="11" />
          <path d="M24 16v8l5 3" />
        </svg>
      );
    case "protein-forward":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
          <path d="M14 20c0-4 3-7 10-7s10 3 10 7v8c0 4-3 7-10 7s-10-3-10-7v-8Z" />
          <path d="M14 24h20" />
        </svg>
      );
    case "technique":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
          <path d="M14 32V18l8-4 8 4v14" />
          <path d="M14 32h20M22 32v-8h4v8" />
        </svg>
      );
    case "seasonal-menus":
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
          <path d="M24 12c4 4 6 8 6 12s-2 8-6 12c-4-4-6-8-6-12s2-8 6-12Z" />
          <path d="M18 24h12" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" className={common}>
          <circle cx="24" cy="24" r="10" />
        </svg>
      );
  }
}
