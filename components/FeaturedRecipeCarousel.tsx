import type { Post } from "@/lib/content/posts";
import { RecipeCard } from "./editorial/RecipeCard";
import Link from "next/link";

/**
 * FeaturedRecipeCarousel — re-skinned 2026-04-29 against Stitch design.
 *
 * On Stitch, "Editor's picks this week" lives on the cream paper as a
 * 4-up grid (desktop) / horizontal scroll-snap (mobile). Each card is a
 * 1:1 food photo + serif title + mono macros (handled by RecipeCard).
 * Centered editorial heading, terracotta caps-label eyebrow, italic dek.
 */
export function FeaturedRecipeCarousel({
  posts,
  heading = "Editor's picks this week",
  dek,
}: {
  posts: Post[];
  heading?: string;
  dek?: string;
}) {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <span className="caps-label text-terracotta tracking-[0.18em]">
            Featured
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

        {/* Desktop: 4-up grid. Mobile: horizontal scroll-snap. */}
        <ul className="hidden md:grid md:grid-cols-4 gap-6 lg:gap-8">
          {posts.slice(0, 4).map((p) => (
            <li key={p.slug}>
              <RecipeCard post={p} />
            </li>
          ))}
        </ul>

        <ul
          className="md:hidden -mx-5 px-5 pb-2 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "thin" }}
        >
          {posts.map((p) => (
            <li
              key={p.slug}
              className="snap-start shrink-0 w-[68vw] sm:w-[280px]"
            >
              <RecipeCard post={p} />
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/recipes"
            className="inline-flex items-center gap-1.5 text-[13px] font-mono uppercase tracking-[0.18em] text-terracotta hover:text-charcoal underline decoration-terracotta/40 hover:decoration-charcoal underline-offset-4"
          >
            All recipes →
          </Link>
        </div>
      </div>
    </section>
  );
}
