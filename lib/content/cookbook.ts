/**
 * Cookbook content scaffold — chapters, ingredient index, the front-matter
 * structure that drives the home page TOC and the /ingredients route.
 *
 * Chapters here mirror the magazine "hubs" but with the cookbook framing:
 * Roman-numeralled, named the way a printed cookbook would name them, and
 * paired with a hand-drawn herb mark rather than a rank numeral.
 */

import type { ChapterEntry } from "@/components/editorial/ChapterTOC";
import type { IndexEntry } from "@/components/editorial/IngredientIndex";

export const chapters: ChapterEntry[] = [
  {
    number: 1,
    title: "The Fundamentals",
    blurb:
      "Salt, fat, acid, heat — and how a kitchen thinks. The reasoning behind the rest of the book.",
    href: "/guides/technique",
    page: 11,
    mark: "knife",
  },
  {
    number: 2,
    title: "Vegetables",
    blurb:
      "Greens, roots, alliums, brassicas. Roasted, blanched, charred. The biggest chapter on purpose.",
    href: "/guides/diet-specific",
    page: 47,
    mark: "leaf",
  },
  {
    number: 3,
    title: "Grains & Beans",
    blurb:
      "Lentils, chickpeas, farro, rice. The pantry chapter. Cheap, slow, generous.",
    href: "/guides/seasonal",
    page: 119,
    mark: "wheat",
  },
  {
    number: 4,
    title: "Proteins",
    blurb:
      "Chicken thighs, salmon, eggs, beans counted again. Cooked thirty minutes or three hours, never in between.",
    href: "/guides/protein-forward",
    page: 173,
    mark: "fish",
  },
  {
    number: 5,
    title: "Sauces & Dressings",
    blurb:
      "What the rest of the book leans on. Vinaigrettes, herb oils, yogurt sauces, the brown butter.",
    href: "/guides/meal-types",
    page: 241,
    mark: "spoon",
  },
  {
    number: 6,
    title: "Preserving & Pantry",
    blurb:
      "Quick pickles, slow ferments, the salt-cured lemon. Pantry as foundation, not afterthought.",
    href: "/guides/seasonal",
    page: 287,
    mark: "lemon",
  },
];

/**
 * The back-of-book ingredient index. A-Z, with placeholder recipe counts.
 * Reading-targeted: an ingredient an actual cook would scan for. Hrefs
 * resolve to the diet/technique hubs for now and will deepen as recipes
 * publish.
 */
export const ingredientIndex: IndexEntry[] = [
  { name: "Almond, blanched", href: "/guides/protein-forward", recipeCount: 4 },
  { name: "Anchovy, salt-packed", href: "/guides/diet-specific", recipeCount: 6 },
  { name: "Apple, tart", href: "/guides/seasonal", recipeCount: 5 },
  { name: "Asparagus", href: "/guides/seasonal", recipeCount: 7 },
  { name: "Aubergine (eggplant)", href: "/guides/diet-specific", recipeCount: 9 },
  { name: "Avocado oil", href: "/guides/technique", recipeCount: 11 },
  { name: "Basil, sweet", href: "/guides/seasonal", recipeCount: 8 },
  { name: "Bay leaf, fresh", href: "/guides/technique", recipeCount: 12 },
  { name: "Bean, white (cannellini)", href: "/guides/diet-specific", recipeCount: 10 },
  { name: "Black pepper, Tellicherry", href: "/guides/technique", recipeCount: 22 },
  { name: "Bone broth, chicken", href: "/guides/protein-forward", recipeCount: 14 },
  { name: "Brassica (broccoli, cauliflower)", href: "/guides/diet-specific", recipeCount: 18 },
  { name: "Butter, cultured", href: "/guides/technique", recipeCount: 9 },
  { name: "Caper, salt-packed", href: "/guides/diet-specific", recipeCount: 5 },
  { name: "Cardamom, green", href: "/guides/technique", recipeCount: 3 },
  { name: "Carrot", href: "/guides/seasonal", recipeCount: 13 },
  { name: "Chicken, bone-in thigh", href: "/guides/protein-forward", recipeCount: 17 },
  { name: "Chickpea", href: "/guides/diet-specific", recipeCount: 11 },
  { name: "Chile, dried", href: "/guides/technique", recipeCount: 8 },
  { name: "Cilantro, stems and all", href: "/guides/seasonal", recipeCount: 9 },
  { name: "Citrus zest", href: "/guides/technique", recipeCount: 16 },
  { name: "Coconut milk, full-fat", href: "/guides/diet-specific", recipeCount: 7 },
  { name: "Coriander seed", href: "/guides/technique", recipeCount: 6 },
  { name: "Cucumber, Persian", href: "/guides/seasonal", recipeCount: 4 },
  { name: "Cumin seed", href: "/guides/technique", recipeCount: 9 },
  { name: "Dill, fresh", href: "/guides/seasonal", recipeCount: 5 },
  { name: "Egg, pastured", href: "/guides/protein-forward", recipeCount: 19 },
  { name: "Endive, Belgian", href: "/guides/seasonal", recipeCount: 3 },
  { name: "Farro, semi-pearled", href: "/guides/diet-specific", recipeCount: 6 },
  { name: "Fennel, bulb", href: "/guides/seasonal", recipeCount: 8 },
  { name: "Fenugreek, dried", href: "/guides/technique", recipeCount: 2 },
  { name: "Fish sauce", href: "/guides/diet-specific", recipeCount: 4 },
  { name: "Garlic, spring", href: "/guides/technique", recipeCount: 25 },
  { name: "Ghee", href: "/guides/diet-specific", recipeCount: 7 },
  { name: "Ginger, knob", href: "/guides/technique", recipeCount: 14 },
  { name: "Greens, hearty (kale, chard)", href: "/guides/seasonal", recipeCount: 16 },
  { name: "Halibut, line-caught", href: "/guides/protein-forward", recipeCount: 4 },
  { name: "Hazelnut", href: "/guides/seasonal", recipeCount: 3 },
  { name: "Honey, raw", href: "/guides/technique", recipeCount: 8 },
  { name: "Kale, lacinato", href: "/guides/diet-specific", recipeCount: 12 },
  { name: "Kefir", href: "/guides/protein-forward", recipeCount: 5 },
  { name: "Kohlrabi", href: "/guides/seasonal", recipeCount: 2 },
  { name: "Labneh", href: "/guides/protein-forward", recipeCount: 6 },
  { name: "Leek", href: "/guides/seasonal", recipeCount: 5 },
  { name: "Lemon, Meyer", href: "/guides/technique", recipeCount: 18 },
  { name: "Lentil, French green", href: "/guides/diet-specific", recipeCount: 10 },
  { name: "Lime, key", href: "/guides/technique", recipeCount: 9 },
  { name: "Mackerel, oily", href: "/guides/protein-forward", recipeCount: 3 },
  { name: "Miso, white", href: "/guides/diet-specific", recipeCount: 7 },
  { name: "Mushroom, mixed wild", href: "/guides/seasonal", recipeCount: 8 },
  { name: "Mustard, Dijon", href: "/guides/technique", recipeCount: 11 },
  { name: "Nigella seed", href: "/guides/technique", recipeCount: 3 },
  { name: "Nori", href: "/guides/diet-specific", recipeCount: 2 },
  { name: "Oat, steel-cut", href: "/guides/protein-forward", recipeCount: 4 },
  { name: "Olive oil, finishing", href: "/guides/technique", recipeCount: 28 },
  { name: "Onion, red", href: "/guides/seasonal", recipeCount: 14 },
  { name: "Parsley, flat-leaf", href: "/guides/seasonal", recipeCount: 21 },
  { name: "Pepper, bell, charred", href: "/guides/seasonal", recipeCount: 6 },
  { name: "Pistachio, Sicilian", href: "/guides/diet-specific", recipeCount: 4 },
  { name: "Pomegranate molasses", href: "/guides/technique", recipeCount: 5 },
  { name: "Quinoa, tri-color", href: "/guides/diet-specific", recipeCount: 6 },
  { name: "Radicchio", href: "/guides/seasonal", recipeCount: 4 },
  { name: "Rosemary, fresh", href: "/guides/technique", recipeCount: 9 },
  { name: "Saffron, Iranian", href: "/guides/technique", recipeCount: 3 },
  { name: "Salmon, wild king", href: "/guides/protein-forward", recipeCount: 8 },
  { name: "Sardine, oil-packed", href: "/guides/protein-forward", recipeCount: 5 },
  { name: "Sea salt, flake", href: "/guides/technique", recipeCount: 32 },
  { name: "Sesame seed, toasted", href: "/guides/technique", recipeCount: 9 },
  { name: "Shallot", href: "/guides/seasonal", recipeCount: 12 },
  { name: "Sherry vinegar", href: "/guides/technique", recipeCount: 6 },
  { name: "Soy sauce, naturally brewed", href: "/guides/diet-specific", recipeCount: 7 },
  { name: "Spinach, baby", href: "/guides/seasonal", recipeCount: 8 },
  { name: "Squash, butternut", href: "/guides/seasonal", recipeCount: 7 },
  { name: "Sumac", href: "/guides/technique", recipeCount: 5 },
  { name: "Tahini, Soom", href: "/guides/diet-specific", recipeCount: 9 },
  { name: "Tamari", href: "/guides/diet-specific", recipeCount: 4 },
  { name: "Thyme, fresh", href: "/guides/technique", recipeCount: 11 },
  { name: "Tomato, vine-ripe", href: "/guides/seasonal", recipeCount: 19 },
  { name: "Turmeric, fresh root", href: "/guides/diet-specific", recipeCount: 8 },
  { name: "Vinegar, apple cider", href: "/guides/technique", recipeCount: 7 },
  { name: "Walnut, raw", href: "/guides/diet-specific", recipeCount: 5 },
  { name: "White bean, cannellini", href: "/guides/diet-specific", recipeCount: 6 },
  { name: "Yogurt, whole-milk", href: "/guides/protein-forward", recipeCount: 13 },
  { name: "Zucchini", href: "/guides/seasonal", recipeCount: 9 },
];
