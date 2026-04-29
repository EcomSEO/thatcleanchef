import type { Post } from "@/lib/content/posts";
import { SITE } from "@/lib/content/site";
import { canonical } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/**
 * Recipe schema (schema.org/Recipe) — MANDATORY on every recipe page.
 *
 * Per the 2026-04-29 Wave-4 prompt §"Hard rules":
 *  - `image` is emitted as the per-recipe array — when `multiAspectComplete`
 *    is true, three aspect ratios (16:9 + 4:3 + 1:1) per Google's recipe
 *    image-carousel inclusion rule. Until then, a single 16:9 entry.
 *  - `aggregateRating` is FORBIDDEN until real ratings exist (network
 *    hard rule + Google Rich Results penalty). Component never emits it.
 *  - `author` resolves to the named author entity, not a generic Org.
 *  - `nutrition.servingSize` is included when servings is set.
 */
export function RecipeJsonLd({ post }: { post: Post }) {
  if (!post.nutritionLedger && !post.totalTimeMinutes) return null;

  const totalMin = post.totalTimeMinutes ?? 0;
  const prepMin = post.prepTimeMinutes ?? 0;
  const cookMin = post.cookTimeMinutes ?? 0;

  // Build the image array. The 16:9 path is the legacy single-aspect file
  // shipped per commit 648afa5. When `SITE.multiAspectComplete` flips
  // (Path B kie.ai run lands), the 4:3 + 1:1 variants become predictable
  // sibling paths under the same stem, satisfying the 3-aspect rule.
  const imageArr = buildImageArray(post.slug, post.imageUrl);

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: post.h1,
    description: post.description,
    image: imageArr,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical(`/${post.slug}`) },
    author: {
      "@type": "Person",
      "@id": `${SITE.url}/team/lena-marsh#person`,
      name: "Lena Marsh",
      url: `${SITE.url}/team/lena-marsh`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/logo.png`,
      },
    },
    recipeCategory: inferCategory(post.dietTags),
    recipeCuisine: inferCuisine(post.dietTags),
    keywords: (post.dietTags ?? []).join(", "),
  };

  if (totalMin > 0) data.totalTime = `PT${totalMin}M`;
  if (prepMin > 0) data.prepTime = `PT${prepMin}M`;
  if (cookMin > 0) data.cookTime = `PT${cookMin}M`;
  if (post.servings) data.recipeYield = `${post.servings} serving${post.servings === 1 ? "" : "s"}`;

  if (post.nutritionLedger) {
    const n = post.nutritionLedger;
    data.nutrition = {
      "@type": "NutritionInformation",
      calories: `${n.calories} kcal`,
      proteinContent: `${n.proteinG}g`,
      fiberContent: `${n.fiberG}g`,
      sodiumContent: `${n.sodiumMg}mg`,
      saturatedFatContent: `${n.satFatG}g`,
      sugarContent: `${n.addedSugarG}g`,
      ...(post.servings && {
        servingSize: `1 serving (recipe yields ${post.servings})`,
      }),
    };
  }

  // NOTE: aggregateRating is INTENTIONALLY OMITTED. The 2026-04-29 hard
  // rule + Google Rich Results penalty for fake ratings means the field
  // gets added only when real ratings ship from a real ratings system.
  // Adding it conditionally on `post.aggregateRating` data (which doesn't
  // exist on the Post type) is the future contract — for now: zero risk.

  if (post.items && post.items.length > 0) {
    data.recipeIngredient = post.items.map((i) => i.name);
    data.recipeInstructions = post.items.map((i) => ({
      "@type": "HowToStep",
      position: i.rank,
      text: i.summary || i.name,
    }));
  }

  return <JsonLd data={data} />;
}

/**
 * Build the recipe image array. Until the 4:3 + 1:1 batch lands (Path B
 * in the 2026-04-29 prompt §3.2), only the legacy 16:9 file exists. We
 * still emit the array shape — Google's parser accepts a single-element
 * array, and the Path B flip is a config change (`SITE.multiAspectComplete`).
 */
function buildImageArray(slug: string, imageUrl?: string): string[] {
  const base = imageUrl?.replace(/\.(jpg|jpeg|png|webp)$/i, "") ?? `/images/recipes/${slug}`;
  const ext = imageUrl?.match(/\.(jpg|jpeg|png|webp)$/i)?.[0] ?? ".jpg";

  const sixteenNine = `${SITE.url}${base}${ext}`;
  if (!SITE.multiAspectComplete) {
    return [sixteenNine];
  }
  return [
    sixteenNine,
    `${SITE.url}${base}-4x3${ext}`,
    `${SITE.url}${base}-1x1${ext}`,
  ];
}

function inferCategory(tags?: string[]): string {
  if (!tags) return "Main Course";
  const lower = tags.map((t) => t.toLowerCase());
  if (lower.some((t) => t.includes("breakfast"))) return "Breakfast";
  if (lower.some((t) => t.includes("dessert"))) return "Dessert";
  if (lower.some((t) => t.includes("snack"))) return "Snack";
  return "Main Course";
}

function inferCuisine(tags?: string[]): string {
  if (!tags) return "American";
  const lower = tags.map((t) => t.toLowerCase());
  if (lower.some((t) => t.includes("mediterranean"))) return "Mediterranean";
  if (lower.some((t) => t.includes("whole30") || t.includes("paleo"))) return "Paleo";
  return "American";
}
