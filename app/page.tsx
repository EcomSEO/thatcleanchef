import { Hero } from "@/components/Hero";
import { CategoryTileGrid } from "@/components/CategoryTileGrid";
import { FeaturedRecipeCarousel } from "@/components/FeaturedRecipeCarousel";
import { NewsletterInline } from "@/components/editorial/NewsletterInline";
import { TestKitchenStamp } from "@/components/editorial/TestKitchenStamp";
import { DietitianReviewedBadge } from "@/components/editorial/DietitianReviewedBadge";
import { posts } from "@/lib/content/posts";
import { hubs } from "@/lib/content/hubs";
import { mealPlans } from "@/lib/content/meal-plans";
import Image from "next/image";
import Link from "next/link";

const hubEyebrows: Record<string, string> = {
  "diet-specific": "Diet-specific",
  "meal-types": "By meal type",
  "protein-forward": "Protein-forward",
  technique: "Technique & reference",
  "seasonal-menus": "Seasonal & meal plans",
};

export default function HomePage() {
  const featured = posts.filter((p) => p.featured || p.nutritionLedger).slice(0, 8);

  const tiles = hubs.map((h) => ({
    eyebrow: hubEyebrows[h.slug] ?? "Category",
    title: h.name,
    dek: h.oneLiner,
    href: `/guides/${h.slug}`,
    recipeCount: posts.filter((p) => p.hub === h.slug).length,
    imageUrl: h.imageUrl,
  }));

  return (
    <main>
      <Hero />

      <CategoryTileGrid
        tiles={tiles}
        heading="Browse the kitchen"
        dek="Five hubs that map how the recipe library is organised. Diet-specific frameworks, meal types for the weeknight grid, protein-forward recipes, technique reference, and the seasonal menus + RD-reviewed weekly meal plans."
      />

      <FeaturedRecipeCarousel
        posts={featured}
        heading="Editor's picks this week"
        dek="Each recipe is tested at least three times in our kitchen and reviewed by a registered dietitian before it ships."
      />

      {/* Meal plans — 3 RD-reviewed weekly plans */}
      <section
        id="meal-plans"
        className="border-y border-hairline bg-cream-deep/30"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
          <div className="mb-8">
            <span className="caps-label text-sage">Meal plans</span>
            <h2 className="mt-1.5 font-serif text-3xl md:text-4xl text-olive leading-tight">
              Free PDFs, RD-reviewed.
            </h2>
            <p className="mt-2 text-body-md text-ink-2 max-w-xl">
              Structured weekly eating, grocery list by section, macros totalled
              per day. Three plans live: Anti-Inflammatory 14-day, Mediterranean
              7-day, High-Protein 7-day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mealPlans.map((p) => (
              <Link
                key={p.slug}
                href={`/meal-plans/${p.slug}`}
                className="card-lift group block bg-paper border border-olive/15 rounded-sm hover:border-terracotta/50 overflow-hidden"
              >
                {p.imageUrl && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-deep/40">
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-7">
                  <span className="caps-label text-terracotta">
                    {p.durationLabel}
                  </span>
                  <h3 className="font-serif text-xl text-olive leading-tight mt-3 group-hover:text-terracotta transition">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[15px] text-charcoal/80 leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-terracotta group-hover:text-olive transition text-sm font-medium">
                    Get the PDF &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-surface-tint border-y border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 grid md:grid-cols-3 gap-8">
          <div>
            <span className="caps-label">Tested</span>
            <h3 className="mt-1.5 text-h3 font-semibold text-ink">3+ tests in our kitchen</h3>
            <p className="mt-1 text-body-md text-ink-2">No recipe ships before it works on home equipment three separate times. We publish what we changed between tests.</p>
            <div className="mt-3"><TestKitchenStamp testCount={3} /></div>
          </div>
          <div>
            <span className="caps-label">Reviewed</span>
            <h3 className="mt-1.5 text-h3 font-semibold text-ink">Reviewed by a registered dietitian</h3>
            <p className="mt-1 text-body-md text-ink-2">Every recipe is read by a credentialed RDN before it goes live. Their name and license are on the page.</p>
            <div className="mt-3"><DietitianReviewedBadge /></div>
          </div>
          <div>
            <span className="caps-label">Cited</span>
            <h3 className="mt-1.5 text-h3 font-semibold text-ink">USDA-cited Nutrition Ledger</h3>
            <p className="mt-1 text-body-md text-ink-2">Per-serving values calculated from ingredients against the USDA FoodData Central reference. We disclose where each number comes from.</p>
            <div className="mt-3"><Link href="/methodology" className="text-body-sm text-sage-700 underline decoration-sage-100 underline-offset-2 hover:text-sage-700/80">Read the methodology →</Link></div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5">
        <NewsletterInline />
      </div>
    </main>
  );
}
