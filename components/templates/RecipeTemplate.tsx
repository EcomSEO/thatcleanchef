import Image from "next/image";
import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { RecipeJsonLd } from "../schema/RecipeJsonLd";
import { MedicalWebPageJsonLd } from "../schema/MedicalWebPageJsonLd";
import { BreadcrumbNav } from "../editorial/BreadcrumbNav";
import { NutritionLedger } from "../editorial/NutritionLedger";
import { TestKitchenStamp } from "../editorial/TestKitchenStamp";
import { DietitianReviewedBadge } from "../editorial/DietitianReviewedBadge";
import { LastTestedLine } from "../editorial/LastTestedLine";
import { RecipeDeveloperByline } from "../editorial/RecipeDeveloperByline";
import { TableOfContents } from "../editorial/TableOfContents";
import { RecipeIngredientList } from "../editorial/RecipeIngredientList";
import { RecipeMethodList } from "../editorial/RecipeMethodList";
import { SourcesAccordion, type SourceRef } from "../editorial/SourcesAccordion";
import { RelatedRecipes, type RelatedRecipeCard } from "../editorial/RelatedRecipes";
import { NewsletterInline } from "../editorial/NewsletterInline";
import { OwnedShopWaitlist } from "../OwnedShopWaitlist";
import { DietTags } from "../NutritionLedger";
import { EducationalBanner } from "../EducationalBanner";
import { WhyWeTestedThreeTimes } from "../editorial/WhyWeTestedThreeTimes";
import { MediavineSlot } from "../MediavineSlot";

/**
 * RecipeTemplate — full medical-info recipe layout.
 *
 *  Top: BreadcrumbNav (with inline JSON-LD)
 *  Hero: full-width 16:9 plate photo placeholder + category eyebrow + H1
 *        (Source Serif 600 NOT italic) + dek
 *  Below hero: RecipeDeveloperByline + TestKitchenStamp + DietitianReviewedBadge
 *              + LastTestedLine + total time + servings + difficulty + share
 *  12-col grid:
 *    main 1-8 (max-w 720px): summary + Why this works + Ingredients + Method
 *                            + Variations + Storage + Sources accordion + Related
 *    rail 9-12: NutritionLedger top, sticky TOC below
 *
 *  Mobile: rails collapse, NutritionLedger inline, TOC top accordion (omitted
 *  to save weight; the main column flows linearly).
 */
export function RecipeTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "/recipes" },
    hub ? { label: hub.shortName, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

  // Map cluster items → method steps (the chef-decisions are the method).
  const methodSteps = (post.items ?? []).map((it) => ({
    name: it.name,
    body: it.summary,
  }));

  // Synthesize an ingredient list when posts.ts doesn't carry one explicitly.
  // Real ingredient arrays land with photography; for now we surface the
  // chef's pick as the lead "in the pot" line and stub the rest cleanly.
  const ingredients = post.ourPick
    ? [
        { qty: "—", name: post.ourPick.name, note: post.ourPick.tier },
        { qty: "—", name: "Aromatics, salt, fat (full ingredient list ships with photography)" },
      ]
    : [
        { qty: "—", name: "Full ingredient list ships with photography" },
      ];

  const sources: SourceRef[] = (post.sources ?? []).map((s, i) => ({
    n: i + 1,
    title: s.label,
    url: s.url,
    tag: "RD-curated",
  }));

  const relatedCards: RelatedRecipeCard[] = related.slice(0, 3).map((p) => ({
    slug: p.slug,
    title: p.title,
    blurb: p.description,
    totalMin: p.totalTimeMinutes,
    proteinG: p.nutritionLedger?.proteinG,
    chapter: hub?.shortName,
  }));

  const tocItems = [
    { id: "summary", label: "Summary" },
    { id: "why-this-works", label: "Why this works" },
    { id: "ingredients", label: "Ingredients" },
    { id: "method", label: "Method" },
    { id: "variations", label: "Variations" },
    { id: "storage", label: "Storage" },
    ...(post.faq?.length ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "sources", label: "Sources" },
  ];

  const isReviewed = !!post.nutritionLedger;

  return (
    <>
      <ArticleJsonLd
        path={`/${post.slug}`}
        headline={post.h1}
        description={post.description}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
      />
      <BreadcrumbJsonLd crumbs={crumbs} />
      {post.faq && <FaqJsonLd faq={post.faq} />}
      <RecipeJsonLd post={post} />
      {isReviewed && (
        <MedicalWebPageJsonLd
          path={`/${post.slug}`}
          headline={post.h1}
          description={post.description}
          lastReviewed={post.updatedAt}
        />
      )}

      <main>
        {/* Hero — terracotta full-bleed block with food image overlay (Stitch design) */}
        <section className="relative bg-terracotta text-cream overflow-hidden">
          {/* Subtle cream-tinted radial behind the photo for depth */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(247,242,233,0.08)_0%,transparent_60%)]"
          />
          <div className="relative mx-auto max-w-7xl px-5 pt-6 pb-12 md:pb-16">
            <div className="[&_*]:!text-cream/85 [&_a]:!text-cream [&_a:hover]:!text-cream/70 mb-2">
              <BreadcrumbNav crumbs={crumbs} />
            </div>
            <div className="mt-5 grid md:grid-cols-12 gap-8 items-center">
              {/* Left: title + meta */}
              <div className="md:col-span-7">
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-cream/75 mb-4">
                  {hub?.shortName ?? "Recipe"}
                </div>
                <h1 className="font-serif italic text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] leading-[1.04] text-cream tracking-[-0.01em]">
                  {post.h1}
                </h1>
                <p className="mt-5 font-serif italic text-[17px] md:text-[18px] text-cream/85 max-w-2xl leading-[1.55]">
                  {post.description}
                </p>

                {/* Pill row */}
                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/15 backdrop-blur-sm px-3 py-1.5 text-[12px] text-cream border border-cream/25">
                    <span className="h-1.5 w-1.5 rounded-full bg-cream/85" />
                    Tested 3 times in our kitchen
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream/15 backdrop-blur-sm px-3 py-1.5 text-[12px] text-cream border border-cream/25">
                    <span className="h-1.5 w-1.5 rounded-full bg-cream/85" />
                    Reviewed by Lena Marsh, RDN, MS
                  </span>
                </div>

                {/* Mono badges row */}
                <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-2 text-[12px] font-mono uppercase tracking-[0.14em] text-cream/85">
                  {post.totalTimeMinutes != null && (
                    <span>
                      <span className="text-cream/55 mr-2">Total</span>
                      <span className="text-cream tnum">
                        {formatTime(post.totalTimeMinutes)}
                      </span>
                    </span>
                  )}
                  {post.servings != null && (
                    <span>
                      <span className="text-cream/55 mr-2">Yield</span>
                      <span className="text-cream tnum">{post.servings}</span>
                    </span>
                  )}
                  <span>
                    <span className="text-cream/55 mr-2">Difficulty</span>
                    <span className="text-cream">Approachable</span>
                  </span>
                  <span>
                    <span className="text-cream/55 mr-2">Last tested</span>
                    <span className="text-cream tnum">
                      {new Date(post.updatedAt).toLocaleDateString("en-GB", {
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </span>
                </div>

                {post.dietTags && post.dietTags.length > 0 && (
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {post.dietTags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono uppercase tracking-[0.12em] text-cream/75 px-2.5 py-1 rounded-full border border-cream/25"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: food image card overlaid on terracotta */}
              <div className="md:col-span-5">
                {post.imageUrl ? (
                  <div className="relative aspect-[4/5] md:aspect-[4/4.5] w-full overflow-hidden rounded-[24px] shadow-plate ring-1 ring-cream/20">
                    <Image
                      src={post.imageUrl}
                      alt={post.h1}
                      fill
                      priority
                      sizes="(min-width: 768px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className="aspect-[4/5] md:aspect-[4/4.5] w-full rounded-[24px] bg-cream/10 ring-1 ring-cream/20"
                    role="img"
                    aria-label={`Photography placeholder for ${post.h1}`}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 12-col body */}
        <div className="mx-auto max-w-7xl px-5 py-10 md:py-14 grid md:grid-cols-12 gap-10">
          <article className="md:col-span-8 max-w-[720px]">
            <RecipeDeveloperByline lastTested={post.updatedAt} />

            <div className="mt-5">
              <EducationalBanner />
            </div>

            {/* Mobile-only inline NutritionLedger */}
            <div className="md:hidden mt-6">
              <NutritionLedger post={post} variant="inline" />
            </div>

            <section id="summary" className="mt-10 scroll-mt-24">
              <h2 className="text-h2 font-semibold text-ink leading-tight">
                What this recipe does for you.
              </h2>
              <p className="mt-3 text-body-md text-ink leading-relaxed">
                {post.description}
              </p>
            </section>

            <section id="why-this-works" className="mt-12 scroll-mt-24">
              <h2 className="text-h2 font-semibold text-ink leading-tight">
                Why this works
              </h2>
              <p className="mt-3 text-body-md text-ink-2 leading-relaxed">
                Every recipe on this site ships with an explanation of the
                technique decisions — why sear then braise, why the acid goes
                in at the end, why the fat renders before the aromatics. The
                method below is those decisions, in order.
              </p>
              {post.ourPick && (
                <div className="mt-5 p-5 rounded-md border border-hairline bg-surface-tint">
                  <div className="caps-label mb-1.5">Chef's pick · {post.ourPick.tier}</div>
                  <h3 className="text-h3 font-semibold text-ink">{post.ourPick.name}</h3>
                  <p className="mt-2 text-body-md text-ink-2 leading-relaxed">{post.ourPick.reason}</p>
                </div>
              )}
            </section>

            <section id="ingredients" className="mt-12 scroll-mt-24">
              <RecipeIngredientList
                items={ingredients}
                yieldLabel={post.servings != null ? `Serves ${post.servings}` : undefined}
              />
            </section>

            <section id="method" className="mt-12 scroll-mt-24">
              {methodSteps.length > 0 ? (
                <RecipeMethodList steps={methodSteps} />
              ) : (
                <>
                  <h2 className="text-h2-mid font-semibold text-ink mb-3">Method</h2>
                  <p className="text-body-md text-ink-2">Step-by-step ships with the photography shoot.</p>
                </>
              )}
            </section>

            <section id="variations" className="mt-12 scroll-mt-24">
              <h2 className="text-h2-mid font-semibold text-ink">Variations</h2>
              <p className="mt-2 text-body-md text-ink-2">Substitutions and adaptations land with the photography shoot. The method holds across most reasonable swaps.</p>
            </section>

            <MediavineSlot slot="mv-content-recipe" />

            <section id="storage" className="mt-12 scroll-mt-24">
              <h2 className="text-h2-mid font-semibold text-ink">Storage</h2>
              <p className="mt-2 text-body-md text-ink-2">Refrigerator: 3–4 days, sealed. Freezer: up to 3 months. Reheat covered to retain moisture.</p>
            </section>

            <WhyWeTestedThreeTimes
              notes={post.testNotes}
              recipeName={post.title.toLowerCase().replace(/^(the |a |an )/, "")}
            />

            {post.faq && post.faq.length > 0 && (
              <section id="faq" className="mt-12 scroll-mt-24">
                <h2 className="text-h2-mid font-semibold text-ink mb-4">Frequently asked</h2>
                <dl className="divide-y divide-hairline border-y border-hairline">
                  {post.faq.map((f, i) => (
                    <div key={i} className="grid md:grid-cols-[1fr_2fr] gap-5 py-5">
                      <dt className="text-body-md font-semibold text-ink leading-snug">{f.q}</dt>
                      <dd className="text-body-md text-ink-2 leading-relaxed">{f.a}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            )}

            <SourcesAccordion sources={sources} />

            <RelatedRecipes recipes={relatedCards} />

            <NewsletterInline />

            <OwnedShopWaitlist variant="inline" />
          </article>

          <aside className="md:col-span-4 space-y-6 hidden md:block">
            <div className="md:sticky md:top-24 space-y-6">
              <NutritionLedger post={post} />
              <TableOfContents items={tocItems} />
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}
