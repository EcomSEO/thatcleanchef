import type { Post } from "@/lib/content/posts";
import { RecipeCard } from "./editorial/RecipeCard";
import Link from "next/link";

/**
 * Horizontal scroll-snap row of RecipeCards.
 */
export function FeaturedRecipeCarousel({
  posts,
  heading = "Editor’s picks this week",
  dek,
}: {
  posts: Post[];
  heading?: string;
  dek?: string;
}) {
  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-16">
        <div className="flex items-end justify-between mb-6 gap-6">
          <div>
            <span className="caps-label">Featured</span>
            <h2 className="mt-1 text-h2 font-semibold text-ink leading-tight">{heading}</h2>
            {dek && <p className="mt-2 text-body-md text-ink-2 max-w-2xl">{dek}</p>}
          </div>
          <Link href="/recipes" className="hidden md:inline text-body-sm text-sage-700 hover:underline whitespace-nowrap">
            All recipes →
          </Link>
        </div>
        <ul
          className="-mx-5 px-5 pb-2 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "thin" }}
        >
          {posts.map((p) => (
            <li key={p.slug} className="snap-start shrink-0 w-[280px] sm:w-[320px]">
              <RecipeCard post={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
