export type PostType = "pillar" | "comparison" | "cluster" | "listicle";

export type Post = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  hub: string;
  postType: PostType;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  status: "draft" | "stub" | "published";
  ourPick?: { name: string; tier: string; reason: string };
  products?: Array<{ rank: number; name: string; tier: string; summary: string }>;
  items?: Array<{ rank: number; name: string; summary: string }>;
  faq?: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
  featured?: boolean;
  // Recipe-site specific
  totalTimeMinutes?: number;
  prepTimeMinutes?: number;
  cookTimeMinutes?: number;
  servings?: number;
  dietTags?: string[];
  nutritionLedger?: {
    calories: number;
    proteinG: number;
    fiberG: number;
    sodiumMg: number;
    satFatG: number;
    addedSugarG: number;
  };
};

export const posts: Post[] = [
  {
    slug: "anti-inflammatory-golden-chicken-soup",
    title: "Anti-Inflammatory Golden Chicken Soup",
    h1: "Anti-inflammatory golden chicken soup",
    description:
      "Chef-tested anti-inflammatory chicken soup with turmeric, ginger, and bone broth. 55 min, 32g protein, Nutrition Ledger below.",
    hub: "diet-specific",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 8,
    status: "stub",
    featured: true,
    totalTimeMinutes: 55,
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    servings: 4,
    dietTags: ["Anti-Inflammatory", "Whole30", "Dairy-Free", "Gluten-Free"],
    nutritionLedger: { calories: 380, proteinG: 32, fiberG: 4, sodiumMg: 620, satFatG: 3, addedSugarG: 2 },
  },
  {
    slug: "cottage-cheese-flatbread",
    title: "Cottage Cheese Flatbread — 28g Protein, 20 Minutes",
    h1: "Cottage cheese flatbread",
    description:
      "The viral cottage cheese flatbread, chef-tested. 28g protein per serving, 20 minutes, 4 ingredients.",
    hub: "protein-forward",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "stub",
    totalTimeMinutes: 20,
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    servings: 2,
    dietTags: ["High-Protein", "Vegetarian"],
    nutritionLedger: { calories: 320, proteinG: 28, fiberG: 2, sodiumMg: 480, satFatG: 5, addedSugarG: 0 },
  },
  {
    slug: "anti-inflammatory-diet",
    title: "The Anti-Inflammatory Diet — A Cook's Version",
    h1: "The anti-inflammatory diet",
    description:
      "Evidence brief, ingredient inventory, weekly framework, and the 7-day meal plan. Pillar for the Anti-Inflammatory hub.",
    hub: "diet-specific",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 16,
    status: "stub",
  },
  {
    slug: "high-protein-breakfast-bowl",
    title: "High-Protein Breakfast Bowl — 42g Protein, 15 Minutes",
    h1: "High-protein breakfast bowl",
    description:
      "Eggs, spinach, quinoa or sweet potato, salsa, avocado — 42g protein in a 15-minute bowl. Swappable base protein.",
    hub: "protein-forward",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "stub",
    totalTimeMinutes: 15,
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    servings: 1,
    dietTags: ["High-Protein", "Gluten-Free"],
    nutritionLedger: { calories: 480, proteinG: 42, fiberG: 8, sodiumMg: 520, satFatG: 7, addedSugarG: 0 },
  },
  {
    slug: "mediterranean-meal-prep-week-1",
    title: "Mediterranean Meal Prep — Week 1",
    h1: "Mediterranean meal prep — week 1",
    description:
      "A 7-day Mediterranean meal plan with shopping list, Sunday prep sequence, cost estimate, and weekly macros.",
    hub: "seasonal",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "stub",
  },
  {
    slug: "whole30-breakfast-hash",
    title: "Whole30 Breakfast Hash",
    h1: "Whole30 breakfast hash",
    description:
      "Sweet potato, sausage, peppers, eggs — a 25-minute Whole30 breakfast with 28g protein.",
    hub: "diet-specific",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "stub",
    totalTimeMinutes: 25,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    dietTags: ["Whole30", "Paleo", "Dairy-Free", "Gluten-Free"],
    nutritionLedger: { calories: 420, proteinG: 28, fiberG: 6, sodiumMg: 580, satFatG: 6, addedSugarG: 0 },
  },
  {
    slug: "ginger-turmeric-salmon",
    title: "Ginger-Turmeric Salmon",
    h1: "Ginger-turmeric salmon",
    description:
      "A 20-minute anti-inflammatory salmon with turmeric, ginger, garlic, and coconut aminos. 38g protein per fillet.",
    hub: "diet-specific",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "stub",
    totalTimeMinutes: 20,
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    servings: 2,
    dietTags: ["Anti-Inflammatory", "Paleo", "Whole30", "Gluten-Free", "Dairy-Free"],
    nutritionLedger: { calories: 340, proteinG: 38, fiberG: 1, sodiumMg: 420, satFatG: 2, addedSugarG: 0 },
  },
  {
    slug: "greek-lemon-chicken",
    title: "Greek Lemon Chicken",
    h1: "Greek lemon chicken",
    description:
      "Bone-in thighs, lemon, oregano, garlic — a Mediterranean pillar recipe, 45 minutes, 36g protein.",
    hub: "diet-specific",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "stub",
    totalTimeMinutes: 45,
    prepTimeMinutes: 10,
    cookTimeMinutes: 35,
    servings: 4,
    dietTags: ["Mediterranean", "Gluten-Free", "Dairy-Free"],
    nutritionLedger: { calories: 380, proteinG: 36, fiberG: 1, sodiumMg: 480, satFatG: 6, addedSugarG: 0 },
  },
  {
    slug: "cottage-cheese-ice-cream-vanilla",
    title: "Cottage Cheese Ice Cream — Vanilla",
    h1: "Cottage cheese ice cream — vanilla",
    description:
      "Blended cottage cheese, honey, vanilla, a pinch of salt — frozen in a loaf pan. 22g protein per serving.",
    hub: "protein-forward",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 4,
    status: "stub",
    totalTimeMinutes: 240,
    prepTimeMinutes: 10,
    cookTimeMinutes: 230,
    servings: 4,
    dietTags: ["High-Protein", "Vegetarian", "Gluten-Free"],
    nutritionLedger: { calories: 180, proteinG: 22, fiberG: 0, sodiumMg: 320, satFatG: 3, addedSugarG: 10 },
  },
  {
    slug: "how-to-roast-a-whole-chicken",
    title: "How to Roast a Whole Chicken",
    h1: "How to roast a whole chicken",
    description:
      "The technique pillar — dry brine, spatchcock, high heat, sheet pan. 2 hours total, 6 servings.",
    hub: "technique",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "stub",
    totalTimeMinutes: 120,
    prepTimeMinutes: 15,
    cookTimeMinutes: 70,
    servings: 6,
    dietTags: ["Anti-Inflammatory", "Mediterranean", "Gluten-Free", "Dairy-Free"],
    nutritionLedger: { calories: 420, proteinG: 48, fiberG: 0, sodiumMg: 520, satFatG: 6, addedSugarG: 0 },
  },
];

export function getPost(slug: string): Post | undefined { return posts.find((p) => p.slug === slug); }
export function postsByHub(hubSlug: string): Post[] { return posts.filter((p) => p.hub === hubSlug); }
export function latestPosts(limit = 6): Post[] { return [...posts].sort((a,b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, limit); }
export function featuredPost(): Post | undefined { return posts.find((p) => p.featured); }
export function relatedPosts(post: Post, limit = 3): Post[] { return posts.filter((p) => p.hub === post.hub && p.slug !== post.slug).slice(0, limit); }
