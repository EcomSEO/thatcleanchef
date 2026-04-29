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

      {/* Meal plans — 3 RD-reviewed weekly plans (Stitch design) */}
      <section
        id="meal-plans"
        className="border-y border-hairline bg-cream-deep"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="text-center mb-10 md:mb-14">
            <span className="caps-label text-terracotta tracking-[0.18em]">
              Meal plans
            </span>
            <h2 className="mt-3 font-serif italic text-3xl md:text-4xl text-charcoal leading-tight">
              Free PDFs, RD-reviewed.
            </h2>
            <p className="mt-4 text-[15.5px] text-ink-2 max-w-2xl mx-auto leading-relaxed">
              Structured weekly eating, grocery list by section, macros totalled
              per day. Three plans live — anti-inflammatory, Mediterranean, and
              high-protein.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {mealPlans.map((p) => (
              <Link
                key={p.slug}
                href={`/meal-plans/${p.slug}`}
                className="group block bg-cream rounded-[16px] overflow-hidden ring-1 ring-hairline hover:ring-terracotta/40 hover:shadow-card transition"
              >
                {p.imageUrl && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.imageUrl}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <div className="p-6 md:p-7">
                  <span className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-terracotta">
                    {p.durationLabel}
                  </span>
                  <h3 className="font-serif text-[20px] md:text-[22px] text-charcoal leading-[1.2] mt-2.5 group-hover:text-terracotta transition">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] text-ink-2 leading-[1.55] line-clamp-3">
                    {p.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-mono uppercase tracking-[0.14em] text-terracotta group-hover:text-charcoal transition">
                    Get the PDF →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip — Stitch design: 3-column, eyebrow + serif italic + body */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            <div className="text-center md:text-left">
              <span className="caps-label text-sage-700 tracking-[0.18em]">
                Tested
              </span>
              <h3 className="mt-3 font-serif italic text-[22px] md:text-[24px] text-charcoal leading-tight">
                3+ tests in our kitchen
              </h3>
              <p className="mt-3 text-[14.5px] text-ink-2 leading-[1.6] max-w-md mx-auto md:mx-0">
                No recipe ships before it works on home equipment three separate
                times. We publish what we changed between tests.
              </p>
              <div className="mt-4 flex md:justify-start justify-center">
                <TestKitchenStamp testCount={3} />
              </div>
            </div>
            <div className="text-center md:text-left">
              <span className="caps-label text-sage-700 tracking-[0.18em]">
                Reviewed
              </span>
              <h3 className="mt-3 font-serif italic text-[22px] md:text-[24px] text-charcoal leading-tight">
                Reviewed by a registered dietitian
              </h3>
              <p className="mt-3 text-[14.5px] text-ink-2 leading-[1.6] max-w-md mx-auto md:mx-0">
                Every recipe is read by a credentialed RDN before it goes live.
                Their name and registration are on the page.
              </p>
              <div className="mt-4 flex md:justify-start justify-center">
                <DietitianReviewedBadge />
              </div>
            </div>
            <div className="text-center md:text-left">
              <span className="caps-label text-sage-700 tracking-[0.18em]">
                Cited
              </span>
              <h3 className="mt-3 font-serif italic text-[22px] md:text-[24px] text-charcoal leading-tight">
                USDA-cited Nutrition Ledger
              </h3>
              <p className="mt-3 text-[14.5px] text-ink-2 leading-[1.6] max-w-md mx-auto md:mx-0">
                Per-serving values calculated from ingredients against the USDA
                FoodData Central reference. We disclose where each number comes
                from.
              </p>
              <div className="mt-4 flex md:justify-start justify-center">
                <Link
                  href="/methodology"
                  className="text-[12.5px] font-mono uppercase tracking-[0.14em] text-terracotta hover:text-charcoal underline decoration-terracotta/40 hover:decoration-charcoal underline-offset-4"
                >
                  Read the methodology →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5">
        <NewsletterInline />
      </div>
    </main>
  );
}
