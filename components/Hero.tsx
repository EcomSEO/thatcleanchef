import Link from "next/link";
import { DietitianReviewedBadge } from "./editorial/DietitianReviewedBadge";
import { TestKitchenStamp } from "./editorial/TestKitchenStamp";

/**
 * Home hero — 12-col grid: H1 + dek left, featured-recipe card right.
 */
export function Hero({
  eyebrow = "Clean-eating recipes, dietitian reviewed",
  h1 = "Recipes that respect your time, your kitchen, and your nutrition.",
  dek = "Independent test kitchen. Every recipe is cooked at least three times in our kitchen and nutritionally reviewed by a registered dietitian. USDA-cited Nutrition Ledger on every page.",
  featured = {
    eyebrow: "Anti-inflammatory · 55 min",
    title: "Anti-inflammatory golden chicken soup",
    dek: "Bone broth, turmeric bloomed in fat, 32g protein per bowl. Reviewed by an RD.",
    href: "/anti-inflammatory-golden-chicken-soup",
    author: "The ThatCleanChef Kitchen",
    minutes: 55,
  },
  trending = [
    { label: "Anti-inflammatory dinners", href: "/guides/diet-specific" },
    { label: "High-protein breakfasts", href: "/guides/protein-forward" },
    { label: "30-minute weeknights", href: "/guides/meal-types" },
  ],
}: {
  eyebrow?: string;
  h1?: string;
  dek?: string;
  featured?: {
    eyebrow: string;
    title: string;
    dek: string;
    href: string;
    author: string;
    minutes: number;
  };
  trending?: Array<{ label: string; href: string }>;
}) {
  return (
    <section className="bg-surface border-b border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <div className="caps-label mb-4">{eyebrow}</div>
          <h1 className="h1-editorial text-[36px] sm:text-[44px] md:text-[48px] lg:text-[56px] leading-[1.05] text-ink">
            {h1}
          </h1>
          <p className="mt-5 text-body-md text-ink-2 max-w-xl leading-relaxed">{dek}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <DietitianReviewedBadge />
            <TestKitchenStamp testCount={3} />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-body-sm">
            <span className="text-ink-3">Trending:</span>
            {trending.map((t) => (
              <Link key={t.href + t.label} href={t.href} className="text-sage-700 hover:underline">
                {t.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <Link
            href={featured.href}
            className="card card-lift block bg-surface overflow-hidden"
          >
            <div className="photo-slot aspect-[16/10] w-full" role="img" aria-label="Featured recipe photo placeholder" />
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="reviewed-pill !text-[11px] !py-0.5 !px-2"><span className="reviewed-pill__dot" />RD reviewed</span>
                <span className="caps-label !text-rust">{featured.eyebrow}</span>
              </div>
              <h3 className="text-h3 font-semibold text-ink leading-snug">{featured.title}</h3>
              <p className="mt-1 text-body-sm text-ink-2 leading-snug">{featured.dek}</p>
              <div className="mt-3 flex items-center justify-between gap-3 text-label-sm text-ink-3">
                <span>{featured.author}</span>
                <span className="font-mono tnum">{featured.minutes} min</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
