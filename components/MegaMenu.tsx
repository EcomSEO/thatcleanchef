"use client";

import Link from "next/link";

/**
 * 720px MegaMenu panel — 3-col category list + 1 featured-recipe tile.
 * Driven by the active nav item kind.
 */
type Kind = "Recipes" | "Techniques" | "Ingredients" | "Nutrition" | "Test kitchen";

const COLUMNS: Record<
  Kind,
  Array<{ heading: string; items: Array<{ label: string; href: string }> }>
> = {
  Recipes: [
    {
      heading: "By hub",
      items: [
        { label: "Diet-specific", href: "/guides/diet-specific" },
        { label: "Meal types", href: "/guides/meal-types" },
        { label: "Protein-forward", href: "/guides/protein-forward" },
        { label: "Technique & reference", href: "/guides/technique" },
        { label: "Seasonal & meal plans", href: "/guides/seasonal-menus" },
      ],
    },
    {
      heading: "By meal",
      items: [
        { label: "Breakfast", href: "/guides/meal-types" },
        { label: "Lunch", href: "/guides/meal-types" },
        { label: "Dinner", href: "/guides/meal-types" },
        { label: "Snacks", href: "/guides/meal-types" },
      ],
    },
    {
      heading: "By approach",
      items: [
        { label: "Anti-inflammatory", href: "/guides/diet-specific" },
        { label: "Mediterranean", href: "/guides/diet-specific" },
        { label: "High-protein", href: "/guides/protein-forward" },
        { label: "Whole30", href: "/guides/diet-specific" },
        { label: "Low-FODMAP", href: "/guides/diet-specific" },
      ],
    },
  ],
  Techniques: [
    {
      heading: "Cooking technique",
      items: [
        { label: "Roasting", href: "/guides/technique" },
        { label: "Braising", href: "/guides/technique" },
        { label: "Searing", href: "/guides/technique" },
        { label: "Bone broth", href: "/guides/technique" },
      ],
    },
    {
      heading: "Method explainers",
      items: [
        { label: "Salt, fat, acid, heat", href: "/guides/technique" },
        { label: "Sous-vide vs. oven low-and-slow", href: "/guides/technique" },
        { label: "Reading a recipe before you cook", href: "/methodology" },
      ],
    },
    {
      heading: "By equipment",
      items: [
        { label: "Sheet pan", href: "/guides/technique" },
        { label: "Dutch oven", href: "/guides/technique" },
        { label: "Cast iron", href: "/guides/technique" },
      ],
    },
  ],
  Ingredients: [
    {
      heading: "Vegetables",
      items: [
        { label: "Greens", href: "/ingredients" },
        { label: "Roots", href: "/ingredients" },
        { label: "Alliums", href: "/ingredients" },
      ],
    },
    {
      heading: "Proteins",
      items: [
        { label: "Chicken", href: "/ingredients" },
        { label: "Salmon", href: "/ingredients" },
        { label: "Beans & lentils", href: "/ingredients" },
        { label: "Eggs", href: "/ingredients" },
      ],
    },
    {
      heading: "Pantry",
      items: [
        { label: "Olive oils", href: "/ingredients" },
        { label: "Vinegars", href: "/ingredients" },
        { label: "Whole grains", href: "/ingredients" },
        { label: "Spices", href: "/ingredients" },
      ],
    },
  ],
  Nutrition: [
    {
      heading: "Methodology",
      items: [
        { label: "How we calculate", href: "/methodology" },
        { label: "USDA-cited values", href: "/methodology" },
        { label: "Sourcing", href: "/editorial-standards" },
      ],
    },
    {
      heading: "Reviewed by RDNs",
      items: [
        { label: "Editorial board", href: "/about" },
        { label: "Review process", href: "/editorial-standards" },
        { label: "What 'reviewed' means", href: "/editorial-standards" },
      ],
    },
    {
      heading: "Disclaimer",
      items: [
        { label: "Medical disclaimer", href: "/editorial-standards" },
        { label: "Affiliate disclosure", href: "/affiliate-disclosure" },
      ],
    },
  ],
  "Test kitchen": [
    {
      heading: "What we're testing",
      items: [
        { label: "On the stove this week", href: "/pipeline" },
        { label: "Queued for next month", href: "/pipeline#queued" },
        { label: "Recipe ideas inbox", href: "/contact" },
      ],
    },
    {
      heading: "How we work",
      items: [
        { label: "Editorial standards", href: "/editorial-standards" },
        { label: "Methodology", href: "/methodology" },
        { label: "Newsletter", href: "/newsletter" },
      ],
    },
    {
      heading: "About",
      items: [
        { label: "About the test kitchen", href: "/about" },
        { label: "The team", href: "/team" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
};

const FEATURED: Record<Kind, { eyebrow: string; title: string; dek: string; href: string }> = {
  Recipes: {
    eyebrow: "Anti-inflammatory · 55 min",
    title: "Anti-inflammatory golden chicken soup",
    dek: "Bone broth, turmeric bloomed in fat, 32g protein per bowl — the bowl we cook most weeks in winter.",
    href: "/anti-inflammatory-golden-chicken-soup",
  },
  Techniques: {
    eyebrow: "Method",
    title: "How to roast a whole chicken",
    dek: "Five things that matter: dry brine, position, temperature, rest, carve.",
    href: "/guides/technique",
  },
  Ingredients: {
    eyebrow: "Ingredient",
    title: "Lentils, all four kinds",
    dek: "Brown, green, red, black beluga. Cook times, swaps, the recipes that lean on each.",
    href: "/ingredients",
  },
  Nutrition: {
    eyebrow: "Methodology",
    title: "How our Nutrition Ledger is calculated",
    dek: "USDA FoodData Central reference; per-ingredient values; sourcing disclosed.",
    href: "/methodology",
  },
  "Test kitchen": {
    eyebrow: "Test kitchen",
    title: "Recipes we're testing this month",
    dek: "What's on the stove right now, what's queued, where each one stands. The public side of the test process.",
    href: "/pipeline",
  },
};

export function MegaMenu({ kind, onClose }: { kind: Kind; onClose: () => void }) {
  const cols = COLUMNS[kind];
  const featured = FEATURED[kind];
  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 top-full mt-1 z-50 w-[720px] bg-surface border border-hairline rounded-md shadow-card p-6"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-12 gap-6">
        {cols.map((col) => (
          <div key={col.heading} className="col-span-3">
            <div className="caps-label mb-2">{col.heading}</div>
            <ul className="space-y-1.5">
              {col.items.map((it) => (
                <li key={it.label}>
                  <Link
                    href={it.href}
                    className="text-[14px] text-ink hover:text-sage-700"
                    onClick={onClose}
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-3">
          <Link
            href={featured.href}
            onClick={onClose}
            className="block group"
          >
            <div className="photo-slot aspect-[16/10] w-full rounded-md mb-2.5" />
            <div className="caps-label mb-1 !text-rust">{featured.eyebrow}</div>
            <h4 className="text-[15px] font-semibold leading-snug text-ink group-hover:text-sage-700">
              {featured.title}
            </h4>
            <p className="text-[13px] text-ink-2 leading-snug mt-1 line-clamp-2">
              {featured.dek}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
