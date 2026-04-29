import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/content/posts";

/**
 * RecipeCard — re-skinned 2026-04-29 against Stitch design.
 *
 * Square 1:1 photo (food-led, not landscape), serif italic title under,
 * one-line italic description, mono macro badges in a tidy row.
 * Used in CategoryTileGrid, FeaturedRecipeCarousel, RelatedRecipes.
 *
 * The cream paper card has just a hairline outline and a soft shadow on
 * hover — no heavy borders, no grey shading. The photo gets the rounded
 * corners; the rest is plain serif type on cream.
 */
export function RecipeCard({
  post,
  className = "",
}: {
  post: Post;
  className?: string;
}) {
  const n = post.nutritionLedger;
  return (
    <Link
      href={`/${post.slug}`}
      className={`group block bg-cream overflow-hidden h-full transition ${className}`}
      aria-label={post.h1}
    >
      {/* 1:1 food photo with rounded corners */}
      {post.imageUrl ? (
        <div className="relative aspect-square w-full overflow-hidden rounded-[16px] ring-1 ring-hairline">
          <Image
            src={post.imageUrl}
            alt={post.h1}
            fill
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div
          className="photo-slot aspect-square w-full rounded-[16px] ring-1 ring-hairline"
          role="img"
          aria-label="Photography placeholder"
        />
      )}

      <div className="pt-4 px-1">
        {/* Eyebrow caps-label */}
        <div className="text-[10.5px] font-mono uppercase tracking-[0.16em] text-terracotta">
          {post.hub.replace(/-/g, " ")}
        </div>

        {/* Serif italic title */}
        <h3 className="mt-1.5 font-serif text-[18px] md:text-[19px] text-charcoal leading-[1.2] group-hover:text-terracotta transition line-clamp-2">
          {post.h1}
        </h3>

        {/* Mono macros + time row */}
        {n ? (
          <div className="mt-3 flex items-center gap-x-4 gap-y-1 flex-wrap text-[11.5px] font-mono uppercase tracking-[0.1em] text-ink-3">
            {post.totalTimeMinutes != null && (
              <span>
                <span className="tnum text-charcoal">
                  {post.totalTimeMinutes}m
                </span>
              </span>
            )}
            <span>
              <span className="tnum text-charcoal">{n.proteinG}g</span>{" "}
              <span>P</span>
            </span>
            <span>
              <span className="tnum text-charcoal">{n.calories}</span>{" "}
              <span>kcal</span>
            </span>
          </div>
        ) : (
          <p className="mt-2 text-[13px] text-ink-2 leading-snug line-clamp-2">
            {post.description}
          </p>
        )}
      </div>
    </Link>
  );
}
