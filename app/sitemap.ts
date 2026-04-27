import type { MetadataRoute } from "next";
import { SITE } from "@/lib/content/site";
import { hubs } from "@/lib/content/hubs";
import { posts } from "@/lib/content/posts";
import { medications } from "@/lib/content/medications";
import { mealPlans } from "@/lib/content/meal-plans";
import { recipeCategories } from "@/lib/content/recipe-categories";
import { team } from "@/lib/content/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const entries: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...hubs.map((h) => ({
      url: `${SITE.url}/guides/${h.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...medications.map((m) => ({
      url: `${SITE.url}/medications/${m.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...mealPlans.map((p) => ({
      url: `${SITE.url}/meal-plans/${p.slug}`,
      lastModified: p.reviewedOn,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...recipeCategories.map((c) => ({
      url: `${SITE.url}/recipes/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE.url}/team`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    ...team.map((m) => ({
      url: `${SITE.url}/team/${m.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...posts.map((p) => ({
      url: `${SITE.url}/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: "monthly" as const,
      priority: p.postType === "pillar" || p.postType === "comparison" ? 0.9 : 0.7,
    })),
    ...[
      "/about",
      "/editorial-standards",
      "/privacy",
      "/terms",
      "/affiliate-disclosure",
      "/contact",
      "/newsletter",
      "/ingredients",
      "/recipes",
      "/methodology",
      "/methodology/v1-2",
      "/pipeline",
    ].map((path) => ({
      url: `${SITE.url}${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
  return entries;
}
