import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content/site";
import { hubs } from "@/lib/content/hubs";
import { posts } from "@/lib/content/posts";
import { mealPlans } from "@/lib/content/meal-plans";
import { recipeCategories } from "@/lib/content/recipe-categories";
import { team } from "@/lib/content/team";
import { LOCALES } from "@/lib/content/i18n";

const NON_EN = LOCALES.filter((l) => l !== "en");

/**
 * Emit each canonical English path plus its 11 non-English mirrors.
 * Hreflang is declared via per-page Metadata.alternates.languages — the
 * sitemap just lists every URL so crawlers find them. Static-asset and
 * legal-only paths (e.g. /contact, /newsletter) do not get localized
 * mirrors because the body content is not localized; they remain EN-only.
 */
function localizedExpand(
  paths: string[],
  lastModified: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const path of paths) {
    out.push({ url: `${SITE.url}${path}`, lastModified, changeFrequency, priority });
    for (const locale of NON_EN) {
      out.push({
        url: `${SITE.url}/${locale}${path}`,
        lastModified,
        changeFrequency,
        priority: Math.max(0.1, priority - 0.1),
      });
    }
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const entries: MetadataRoute.Sitemap = [
    // Home — canonical EN + 11 locale homes
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...NON_EN.map((locale) => ({
      url: `${SITE.url}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),

    // Pillars — 5 hubs × 12 locales
    ...localizedExpand(
      hubs.map((h) => `/guides/${h.slug}`),
      now,
      "weekly",
      0.9,
    ),

    // Meal plans — 3 RD-reviewed plans × 12 locales (lastModified per plan reviewedOn)
    ...mealPlans.flatMap((p) => {
      const path = `/meal-plans/${p.slug}`;
      return [
        { url: `${SITE.url}${path}`, lastModified: p.reviewedOn, changeFrequency: "monthly" as const, priority: 0.8 },
        ...NON_EN.map((locale) => ({
          url: `${SITE.url}/${locale}${path}`,
          lastModified: p.reviewedOn,
          changeFrequency: "monthly" as const,
          priority: 0.7,
        })),
      ];
    }),

    // Recipe-category SERP pages — 6 cats × 12 locales
    ...localizedExpand(
      recipeCategories.map((c) => `/recipes/${c.slug}`),
      now,
      "weekly",
      0.7,
    ),

    // Team — index + per-member (EN body only; localized index page exists)
    { url: `${SITE.url}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...NON_EN.map((locale) => ({
      url: `${SITE.url}/${locale}/team`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...team.map((m) => ({
      url: `${SITE.url}/team/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),

    // Recipes — every post × 12 locales (recipe bodies stay EN; 11 mirror
    // routes show the chrome in-locale + canonical-EN body w/ banner)
    ...posts.flatMap((p) => {
      const path = `/${p.slug}`;
      const priority = p.postType === "pillar" || p.postType === "comparison" ? 0.9 : 0.7;
      return [
        { url: `${SITE.url}${path}`, lastModified: p.updatedAt, changeFrequency: "monthly" as const, priority },
        ...NON_EN.map((locale) => ({
          url: `${SITE.url}/${locale}${path}`,
          lastModified: p.updatedAt,
          changeFrequency: "monthly" as const,
          priority: Math.max(0.3, priority - 0.1),
        })),
      ];
    }),

    // Editorial / static — about + editorial-standards × 12 locales
    ...localizedExpand(
      ["/about", "/editorial-standards"],
      now,
      "yearly",
      0.4,
    ),

    // Compliance — privacy / terms / cookies / impressum / affiliate-disclosure × 12
    ...localizedExpand(
      ["/privacy", "/terms", "/cookies", "/impressum", "/affiliate-disclosure"],
      now,
      "yearly",
      0.3,
    ),

    // EN-only utility pages (no localized mirrors)
    ...["/contact", "/newsletter", "/ingredients", "/recipes", "/methodology", "/methodology/v1-2", "/pipeline"].map(
      (path) => ({
        url: `${SITE.url}${path}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.3,
      }),
    ),
  ];
  return entries;
}
