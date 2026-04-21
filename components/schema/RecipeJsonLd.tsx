import type { Post } from "@/lib/content/posts";
import { SITE } from "@/lib/content/site";
import { canonical } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

/**
 * Recipe schema (schema.org/Recipe) — MANDATORY on every recipe post.
 * Google's recipe SERP features (rich cards, star ratings, image, time)
 * depend on complete schema. This component renders the full payload.
 */
export function RecipeJsonLd({ post }: { post: Post }) {
  if (!post.nutritionLedger && !post.totalTimeMinutes) return null;

  const totalMin = post.totalTimeMinutes ?? 0;
  const prepMin = post.prepTimeMinutes ?? 0;
  const cookMin = post.cookTimeMinutes ?? 0;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: post.h1,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical(`/${post.slug}`) },
    author: {
      "@type": "Organization",
      name: SITE.author,
      url: SITE.url,
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
    };
  }

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
