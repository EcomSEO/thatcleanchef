import Link from "next/link";

export type RelatedRecipeCard = {
  slug: string;
  title: string;
  blurb?: string;
  totalMin?: number;
  proteinG?: number;
  chapter?: string;
};

/**
 * 3-up clean card grid at the end of a recipe.
 */
export function RelatedRecipes({
  recipes,
  heading = "Related recipes",
}: {
  recipes: RelatedRecipeCard[];
  heading?: string;
}) {
  if (!recipes?.length) return null;
  return (
    <section className="mt-14 border-t border-hairline pt-10">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-h2-mid font-semibold text-ink">{heading}</h2>
        <Link href="/recipes" className="text-body-sm text-sage-700 hover:underline">
          See all →
        </Link>
      </div>
      <ul className="grid md:grid-cols-3 gap-5">
        {recipes.map((r) => (
          <li key={r.slug}>
            <Link
              href={`/${r.slug}`}
              className="card card-lift block p-4 h-full"
            >
              <div className="photo-slot aspect-[16/10] w-full mb-3" />
              {r.chapter && (
                <div className="caps-label mb-1.5">{r.chapter}</div>
              )}
              <h3 className="text-body-md font-semibold text-ink leading-snug line-clamp-2">
                {r.title}
              </h3>
              {r.blurb && (
                <p className="mt-1 text-body-sm text-ink-2 leading-snug line-clamp-2">
                  {r.blurb}
                </p>
              )}
              {(r.totalMin != null || r.proteinG != null) && (
                <div className="mt-3 nutri-chip">
                  {r.totalMin != null && <span><b>{r.totalMin}</b>m</span>}
                  {r.totalMin != null && r.proteinG != null && <span aria-hidden> · </span>}
                  {r.proteinG != null && <span><b>{r.proteinG}</b>g protein</span>}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
