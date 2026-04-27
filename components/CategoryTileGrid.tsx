import Link from "next/link";

export type CategoryTile = {
  eyebrow: string;
  title: string;
  dek: string;
  href: string;
  recipeCount: number;
};

/**
 * 4 → 2 → 1 column tile grid. Each tile: 16:10 photo placeholder + eyebrow
 * + H3 + 2-line dek + recipe count. Hover lifts.
 */
export function CategoryTileGrid({
  tiles,
  heading = "Browse recipes by goal",
  dek,
}: {
  tiles: CategoryTile[];
  heading?: string;
  dek?: string;
}) {
  return (
    <section className="bg-surface-tint border-y border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-16">
        <div className="flex items-end justify-between mb-8 gap-6">
          <div>
            <span className="caps-label">Categories</span>
            <h2 className="mt-1 text-h2 font-semibold text-ink leading-tight">{heading}</h2>
            {dek && <p className="mt-2 text-body-md text-ink-2 max-w-2xl">{dek}</p>}
          </div>
          <Link href="/recipes" className="hidden md:inline text-body-sm text-sage-700 hover:underline whitespace-nowrap">
            See all categories →
          </Link>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                className="card card-lift block h-full bg-surface overflow-hidden"
              >
                <div className="photo-slot aspect-[16/10] w-full" />
                <div className="p-4">
                  <div className="caps-label mb-1.5">{t.eyebrow}</div>
                  <h3 className="text-h3 font-semibold text-ink leading-snug">{t.title}</h3>
                  <p className="mt-1.5 text-body-sm text-ink-2 leading-snug line-clamp-2">{t.dek}</p>
                  <div className="mt-3 text-label-sm text-ink-3 font-mono tnum">
                    {t.recipeCount} recipe{t.recipeCount === 1 ? "" : "s"}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
