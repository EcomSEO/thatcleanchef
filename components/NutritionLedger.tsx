// Re-export of the canonical editorial Nutrition Ledger plus the small
// recipe-meta helpers used by older templates. Keeps import paths stable
// while the signature lives under components/editorial/.
import type { Post } from "@/lib/content/posts";

export { NutritionLedger } from "./editorial/NutritionLedger";

export function RecipeMeta({ post }: { post: Post }) {
  const total = post.totalTimeMinutes ?? 0;
  const prep = post.prepTimeMinutes ?? 0;
  const cook = post.cookTimeMinutes ?? 0;
  const servings = post.servings ?? 0;
  if (!total && !servings) return null;

  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4 text-sm text-charcoal/80 font-mono">
      {total > 0 && (
        <div>
          <span className="text-terracotta font-semibold tnum">
            {formatTime(total)}
          </span>
          <span className="ml-1 text-stone">total</span>
        </div>
      )}
      {prep > 0 && (
        <div>
          <span className="text-olive tnum">{formatTime(prep)}</span>
          <span className="ml-1 text-stone">prep</span>
        </div>
      )}
      {cook > 0 && (
        <div>
          <span className="text-olive tnum">{formatTime(cook)}</span>
          <span className="ml-1 text-stone">cook</span>
        </div>
      )}
      {servings > 0 && (
        <div>
          <span className="text-olive tnum">{servings}</span>
          <span className="ml-1 text-stone">
            serving{servings === 1 ? "" : "s"}
          </span>
        </div>
      )}
    </div>
  );
}

export function DietTags({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {tags.map((tag) => (
        <span key={tag} className="diet-chip diet-chip--outline">
          {tag}
        </span>
      ))}
    </div>
  );
}

function formatTime(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}
