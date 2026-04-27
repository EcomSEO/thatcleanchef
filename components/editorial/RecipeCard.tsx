import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/content/posts";

/**
 * RecipeCard — landscape 16:10 thumbnail + category eyebrow + H3 + dek +
 * author + reading time + per-serving mini-row (cal/protein in mono).
 * Used in CategoryTileGrid, FeaturedRecipeCarousel, RelatedRecipes.
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
      className={`card card-lift block bg-surface overflow-hidden h-full ${className}`}
      aria-label={post.h1}
    >
      {post.imageUrl ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.h1}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="photo-slot aspect-[16/10] w-full"
          role="img"
          aria-label="Photography placeholder"
        />
      )}
      <div className="p-4">
        <div className="caps-label mb-1.5">{post.hub.replace(/-/g, " ")}</div>
        <h3 className="text-[16px] font-semibold text-ink leading-snug line-clamp-2">
          {post.h1}
        </h3>
        <p className="mt-1 text-body-sm text-ink-2 leading-snug line-clamp-2">
          {post.description}
        </p>
        <div className="mt-3 flex items-center justify-between gap-3 text-label-sm text-ink-3">
          <span>{post.readingTime} min read</span>
          {n && (
            <span className="nutri-chip">
              <b>{n.calories}</b>cal
              <span aria-hidden> · </span>
              <b>{n.proteinG}</b>g protein
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
