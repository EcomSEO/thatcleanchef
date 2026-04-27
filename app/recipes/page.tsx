import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/content/posts";
import { hubs } from "@/lib/content/hubs";
import { RecipeCard } from "@/components/editorial/RecipeCard";
import { BreadcrumbNav } from "@/components/editorial/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Every recipe in the test kitchen — clean-eating, anti-inflammatory, Mediterranean, high-protein. Tested, dietitian-reviewed, USDA-cited.",
};

export default function RecipesPage() {
  const recipeLike = posts.filter(
    (p) => p.postType === "recipe" || p.nutritionLedger
  );

  return (
    <main>
      <section className="bg-surface border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
          <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Recipes" }]} />
          <div className="mt-5 max-w-3xl">
            <span className="caps-label">Recipes</span>
            <h1 className="h1-editorial mt-2 text-[36px] md:text-[44px] leading-[1.1] text-ink">
              Every recipe in the test kitchen.
            </h1>
            <p className="mt-3 text-body-md text-ink-2 leading-relaxed">
              Tested 3+ times in our kitchen. Reviewed by a registered dietitian.
              Per-serving Nutrition Ledger calculated from USDA FoodData Central.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-tint border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <ul className="flex flex-wrap gap-2">
            <li><Link href="/recipes" className="diet-chip">All</Link></li>
            {hubs.map((h) => (
              <li key={h.slug}>
                <Link href={`/guides/${h.slug}`} className="diet-chip diet-chip--outline">
                  {h.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-12">
          {recipeLike.length === 0 ? (
            <p className="text-body-md text-ink-2">No published recipes yet — check back soon.</p>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {recipeLike.map((p) => (
                <li key={p.slug}><RecipeCard post={p} /></li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
