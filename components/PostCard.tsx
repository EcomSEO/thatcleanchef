import Link from "next/link";
import type { Post } from "@/lib/content/posts";
import { getHub } from "@/lib/content/hubs";

const typeLabel: Record<Post["postType"], string> = {
  pillar: "Guide",
  comparison: "Comparison",
  cluster: "Recipe",
  recipe: "Recipe",
  listicle: "Roundup",
};

function isRecipeLike(p: Post) {
  return p.postType === "recipe" || p.nutritionLedger != null;
}

export function PostCard({
  post,
  variant = "compact",
}: {
  post: Post;
  variant?: "compact" | "feature";
}) {
  const hub = getHub(post.hub);
  const recipe = isRecipeLike(post);

  if (variant === "feature") {
    return (
      <Link
        href={`/${post.slug}`}
        className="block bg-paper border border-olive/12 rounded-sm hover:border-terracotta/40 shadow-soft hover:shadow-card transition overflow-hidden"
      >
        {recipe && (
          <div
            className="photo-slot aspect-[16/9] border-b border-olive/10"
            role="presentation"
            aria-hidden="true"
          />
        )}
        <div className="p-7">
          <span className="caps-label text-terracotta">
            {hub?.shortName} &middot; {typeLabel[post.postType]}
          </span>
          <h3 className="font-serif text-2xl text-olive mt-2 mb-3 leading-snug">
            {post.title}
          </h3>
          <p className="text-charcoal/80 text-[15px] leading-relaxed">
            {post.description}
          </p>
          {recipe && post.nutritionLedger && (
            <div className="mt-4 flex flex-wrap gap-4 font-mono text-[13px] text-olive">
              {post.totalTimeMinutes && (
                <span>
                  <b className="text-terracotta">{post.totalTimeMinutes}m</b>
                </span>
              )}
              <span>
                <b className="text-terracotta">
                  {post.nutritionLedger.calories}
                </b>{" "}
                kcal
              </span>
              <span>
                <b className="text-terracotta">
                  {post.nutritionLedger.proteinG}g
                </b>{" "}
                protein
              </span>
            </div>
          )}
          <span className="mt-5 inline-block text-terracotta text-sm font-medium">
            Open the recipe card &rarr;
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/${post.slug}`}
      className="block p-5 bg-paper border border-olive/10 rounded-sm hover:border-terracotta/40 transition"
    >
      <span className="caps-label text-terracotta">
        {hub?.shortName} &middot; {typeLabel[post.postType]}
      </span>
      <h3 className="font-serif text-lg text-olive mt-2 mb-2 leading-snug">
        {post.title}
      </h3>
      <p className="text-sm text-charcoal/70 line-clamp-2">{post.description}</p>
      <div className="mt-3 flex items-center gap-3 font-mono text-[12px] text-stone">
        {post.totalTimeMinutes ? (
          <span>
            <b className="text-terracotta">{post.totalTimeMinutes}m</b>
          </span>
        ) : (
          <span>{post.readingTime} min read</span>
        )}
        {post.nutritionLedger && (
          <span>
            <b className="text-terracotta">
              {post.nutritionLedger.proteinG}g
            </b>{" "}
            protein
          </span>
        )}
      </div>
    </Link>
  );
}
