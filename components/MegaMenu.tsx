"use client";

import Link from "next/link";

/**
 * 720px MegaMenu panel — 3-col category list + 1 featured-recipe tile.
 * Driven by the active nav item kind.
 */
type Kind = "Recipes" | "Techniques" | "Ingredients" | "Nutrition" | "Tools";

const COLUMNS: Record<
  Kind,
  Array<{ heading: string; items: Array<{ label: string; href: string }> }>
> = {
  Recipes: [
    {
      heading: "Peptide context",
      items: [
        { label: "GLP-1 friendly", href: "/guides/glp1-friendly" },
        { label: "Muscle preservation", href: "/guides/muscle-preservation" },
        { label: "Anti-inflammatory recovery", href: "/guides/anti-inflammatory-recovery" },
        { label: "Bone & tendon health", href: "/guides/bone-tendon-health" },
        { label: "Pre/post-cycle nutrition", href: "/guides/cycle-nutrition" },
      ],
    },
    {
      heading: "On a GLP-1",
      items: [
        { label: "Small-portion dinners", href: "/guides/glp1-friendly" },
        { label: "High-protein breakfasts", href: "/guides/muscle-preservation" },
        { label: "Easy-on-the-stomach snacks", href: "/guides/glp1-friendly" },
        { label: "Anti-nausea pairings", href: "/guides/glp1-friendly" },
      ],
    },
    {
      heading: "Recovery & cycles",
      items: [
        { label: "BPC-157 / TB-500 anti-inflammatory", href: "/guides/anti-inflammatory-recovery" },
        { label: "Bone broth & collagen", href: "/guides/bone-tendon-health" },
        { label: "Pre-cycle priming", href: "/guides/cycle-nutrition" },
        { label: "Post-cycle recovery", href: "/guides/cycle-nutrition" },
      ],
    },
  ],
  Techniques: [
    {
      heading: "Cooking technique",
      items: [
        { label: "Roasting", href: "/guides/bone-tendon-health" },
        { label: "Braising", href: "/guides/bone-tendon-health" },
        { label: "Searing", href: "/guides/bone-tendon-health" },
        { label: "Fermenting", href: "/guides/bone-tendon-health" },
      ],
    },
    {
      heading: "Method explainers",
      items: [
        { label: "Salt, fat, acid, heat", href: "/guides/bone-tendon-health" },
        { label: "Sous-vide vs. oven low-and-slow", href: "/guides/bone-tendon-health" },
        { label: "Reading a recipe before you cook", href: "/methodology" },
      ],
    },
    {
      heading: "By equipment",
      items: [
        { label: "Sheet pan", href: "/guides/bone-tendon-health" },
        { label: "Dutch oven", href: "/guides/bone-tendon-health" },
        { label: "Cast iron", href: "/guides/bone-tendon-health" },
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
  Tools: [
    {
      heading: "Planning",
      items: [
        { label: "Pipeline (recipes in test)", href: "/pipeline" },
        { label: "Newsletter", href: "/newsletter" },
        { label: "Editorial standards", href: "/editorial-standards" },
      ],
    },
    {
      heading: "About",
      items: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Sister sites",
      items: [
        { label: "larderlab — pantry", href: "https://larderlab-ecom-seo.vercel.app/" },
        { label: "Health network", href: "/about" },
      ],
    },
  ],
};

const FEATURED: Record<Kind, { eyebrow: string; title: string; dek: string; href: string }> = {
  Recipes: {
    eyebrow: "Anti-inflammatory recovery",
    title: "Anti-inflammatory golden chicken soup",
    dek: "Bone broth, turmeric bloomed in fat, 32g protein per bowl. Built for peptide-cycle recovery days.",
    href: "/anti-inflammatory-golden-chicken-soup",
  },
  Techniques: {
    eyebrow: "Method",
    title: "How to roast a whole chicken",
    dek: "Five things that matter: dry brine, position, temperature, rest, carve.",
    href: "/guides/bone-tendon-health",
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
  Tools: {
    eyebrow: "Pipeline",
    title: "Recipes in test this month",
    dek: "What's on the stove right now, what's queued, where each one stands.",
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
