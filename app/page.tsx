import { Hero } from "@/components/Hero";
import { CategoryTileGrid } from "@/components/CategoryTileGrid";
import { FeaturedRecipeCarousel } from "@/components/FeaturedRecipeCarousel";
import { NewsletterInline } from "@/components/editorial/NewsletterInline";
import { TestKitchenStamp } from "@/components/editorial/TestKitchenStamp";
import { DietitianReviewedBadge } from "@/components/editorial/DietitianReviewedBadge";
import { posts } from "@/lib/content/posts";
import { hubs } from "@/lib/content/hubs";
import Link from "next/link";

const categoryEyebrows: Record<string, string> = {
  "glp1-friendly": "GLP-1 therapy",
  "muscle-preservation": "Muscle preservation",
  "anti-inflammatory-recovery": "Recovery protocols",
  "bone-tendon-health": "Connective tissue",
  "cycle-nutrition": "Cycle windows",
};

export default function HomePage() {
  const featured = posts.filter((p) => p.featured || p.nutritionLedger).slice(0, 8);

  const tiles = hubs.map((h) => ({
    eyebrow: categoryEyebrows[h.slug] ?? "Category",
    title: h.name,
    dek: h.oneLiner,
    href: `/guides/${h.slug}`,
    recipeCount: posts.filter((p) => p.hub === h.slug).length,
  }));

  return (
    <main>
      <Hero />

      <CategoryTileGrid
        tiles={tiles}
        heading="Browse recipes by peptide context"
        dek="Five lenses on the same kitchen, organized for peptide therapy. GLP-1 friendly, muscle preservation, anti-inflammatory recovery, bone and tendon support, and cycle-window nutrition."
      />

      <FeaturedRecipeCarousel
        posts={featured}
        heading="Editor's picks this week"
        dek="Each recipe is tested at least three times and reviewed by a registered dietitian with peptide-therapy expertise."
      />

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
