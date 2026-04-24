import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";
import { relatedPosts } from "@/lib/content/posts";
import { Breadcrumbs } from "../Breadcrumbs";
import { ReviewStamp } from "../ReviewStamp";
import { AuthorBio } from "../AuthorBio";
import { RelatedPosts } from "../RelatedPosts";
import { SourcesList } from "../SourcesList";
import { EmailCapture } from "../EmailCapture";
import { ArticleJsonLd } from "../schema/ArticleJsonLd";
import { BreadcrumbJsonLd } from "../schema/BreadcrumbJsonLd";
import { FaqJsonLd } from "../schema/FaqJsonLd";
import { RecipeJsonLd } from "../schema/RecipeJsonLd";
import { WideArticleShell } from "./PageShell";
import { Eyebrow } from "../editorial/Eyebrow";
import { DotRule, KitchenRule } from "../editorial/DotRule";
import { MethodologyBlock } from "../editorial/MethodologyBlock";
import { NutritionLedger } from "../editorial/NutritionLedger";
import { RecipeCard } from "../editorial/RecipeCard";
import { KeyTakeaway } from "../editorial/KeyTakeaway";
import { DietTags } from "../NutritionLedger";

/**
 * RecipeTemplate — signature template of thatcleanchef.
 *
 * Layout (top-to-bottom): breadcrumbs, Nutrition Ledger (above the fold),
 * hero image slot, recipe metadata, RecipeCard (ingredients + numbered
 * technique), chef-technique-notes section, MethodologyBlock (adapted),
 * SourcesList, RelatedPosts.
 */
export function RecipeTemplate({ post }: { post: Post }) {
  const hub = getHub(post.hub);
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "/#hubs" },
    hub ? { label: hub.name, href: `/guides/${hub.slug}` } : { label: "" },
    { label: post.title },
  ];
  const related = relatedPosts(post);

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

      <WideArticleShell
        aside={
          <nav className="space-y-6">
            <div>
              <Eyebrow tone="stone">On this plate</Eyebrow>
              <ul className="mt-3 space-y-2 text-[14px]">
                <li>
                  <a href="#ledger" className="text-olive hover:text-terracotta">
                    Nutrition Ledger
                  </a>
                </li>
                <li>
                  <a href="#recipe-card" className="text-olive hover:text-terracotta">
                    The recipe card
                  </a>
                </li>
                <li>
                  <a href="#why-this-works" className="text-olive hover:text-terracotta">
                    Why this works
                  </a>
                </li>
                {post.faq && post.faq.length > 0 && (
                  <li>
                    <a href="#faq" className="text-olive hover:text-terracotta">
                      FAQ
                    </a>
                  </li>
                )}
                <li>
                  <a href="#methodology" className="text-olive hover:text-terracotta">
                    How we tested
                  </a>
                </li>
                <li>
                  <a href="#sources" className="text-olive hover:text-terracotta">
                    Sources
                  </a>
                </li>
              </ul>
            </div>
            <div className="pt-6 border-t border-olive/10">
              <Eyebrow tone="stone">The pass</Eyebrow>
              <dl className="mt-3 space-y-2.5 text-[13.5px]">
                {post.servings != null && (
                  <div className="flex justify-between">
                    <dt className="text-stone">Servings</dt>
                    <dd className="text-olive tnum font-mono">{post.servings}</dd>
                  </div>
                )}
                {post.totalTimeMinutes != null && (
                  <div className="flex justify-between">
                    <dt className="text-stone">Total time</dt>
                    <dd className="text-olive tnum font-mono">
                      {formatTime(post.totalTimeMinutes)}
                    </dd>
                  </div>
                )}
                {post.nutritionLedger && (
                  <div className="flex justify-between">
                    <dt className="text-stone">Protein</dt>
                    <dd className="text-terracotta tnum font-mono">
                      {post.nutritionLedger.proteinG}g
                    </dd>
                  </div>
                )}
                <div className="flex justify-between">
                  <dt className="text-stone">Cited</dt>
                  <dd className="text-olive tnum font-mono">
                    {(post.sources ?? []).length} sources
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone">Updated</dt>
                  <dd className="text-olive">
                    {new Date(post.updatedAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </dd>
                </div>
              </dl>
            </div>
          </nav>
        }
      >
        <Breadcrumbs crumbs={crumbs} />

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Eyebrow tone="terracotta">The Recipe</Eyebrow>
          {hub && (
            <span className="caps-label text-stone">&middot; {hub.shortName}</span>
          )}
        </div>

        <h1 className="display-headline text-olive mt-4 text-[2.35rem] md:text-[3.2rem] leading-[1.04]">
          {post.h1}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <ReviewStamp
            updatedAt={post.updatedAt}
            readingTime={post.readingTime}
          />
        </div>

        <DietTags tags={post.dietTags} />

        {/* Nutrition Ledger — above the fold */}
        <div id="ledger" className="scroll-mt-24">
          <NutritionLedger post={post} />
        </div>

        <KitchenRule className="mt-4" />

        {/* Lede / intro — 3 paragraphs max */}
        <p className="drop-cap mt-10 text-[1.09rem] md:text-[1.14rem] leading-[1.75] text-charcoal/90 max-w-[62ch]">
          {post.description}
        </p>

        <KeyTakeaway variant="chef-note" title="Chef's note">
          This recipe was tested multiple times in a home kitchen, timed
          honestly (dishes included), and the Nutrition Ledger above is
          calculated per serving from USDA FoodData Central &mdash; not
          manufacturer labels.
        </KeyTakeaway>

        {/* Hero photo slot — placeholder for real photography shoots */}
        <figure className="mt-10 photo-slot aspect-[16/9] rounded-sm relative overflow-hidden border border-olive/10">
          <figcaption className="absolute bottom-4 left-4">
            <span className="caps-label text-olive bg-paper/85 backdrop-blur px-2 py-1 rounded-sm">
              Hero photo &middot; {hub?.shortName ?? "Recipe"}
            </span>
          </figcaption>
        </figure>

        {/* Recipe card — the bordered printable block */}
        <RecipeCard post={post} />

        {/* Why this works — chef technique notes */}
        <section id="why-this-works" className="mt-14 scroll-mt-24">
          <Eyebrow tone="terracotta">Why this works</Eyebrow>
          <h2 className="font-serif text-3xl text-olive mt-2 mb-4 leading-tight">
            The 3&ndash;5 decisions that make the difference.
          </h2>
          <p className="text-[15.5px] text-charcoal/80 max-w-[62ch] leading-relaxed">
            Every recipe on this site ships with an explanation of the
            technique decisions &mdash; why sear then braise, why the acid goes
            in at the end, why the fat has to render before the aromatics hit
            the pan. The numbered notes in the card above are those decisions.
          </p>
          {post.ourPick && (
            <div className="mt-8 p-6 border border-terracotta/25 bg-terracotta/5 rounded-sm">
              <div className="caps-label text-terracotta mb-1">
                Chef&apos;s pick &middot; {post.ourPick.tier}
              </div>
              <h3 className="font-serif text-xl text-olive">
                {post.ourPick.name}
              </h3>
              <p className="chef-note mt-3 leading-relaxed">
                <span className="chef-note__leader">Note &mdash;</span>
                {post.ourPick.reason}
              </p>
            </div>
          )}
        </section>

        {/* FAQ */}
        {post.faq && post.faq.length > 0 && (
          <section id="faq" className="mt-14 scroll-mt-24">
            <Eyebrow tone="sage">The FAQ</Eyebrow>
            <h2 className="font-serif text-3xl text-olive mt-2 mb-6 leading-tight">
              What people ask us next.
            </h2>
            <dl className="divide-y divide-olive/10 border-y border-olive/10">
              {post.faq.map((f, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[1fr_2fr] gap-5 py-6 first:pt-0 last:pb-0"
                >
                  <dt className="font-serif text-lg text-olive leading-snug">
                    {f.q}
                  </dt>
                  <dd className="text-[15.5px] text-charcoal/85 leading-relaxed">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {/* Methodology — the wedge */}
        <div id="methodology" className="scroll-mt-24">
          <MethodologyBlock />
        </div>

        <DotRule className="my-14" />

        {/* Sources */}
        <div id="sources" className="scroll-mt-24">
          <SourcesList sources={post.sources ?? []} />
        </div>

        <AuthorBio />
        <RelatedPosts posts={related} />

        <div className="mt-14">
          <EmailCapture variant="end-of-article" />
        </div>
      </WideArticleShell>
    </>
  );
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}
