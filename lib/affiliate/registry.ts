/**
 * Affiliate-link registry — single source of truth for every paid link on
 * thatcleanchef.com. Per `MONETIZATION-MODEL.md` (2026-04-29 lock):
 *
 *   The owned shop is the long-term destination. When the shop opens,
 *   `ownedShopUrl` is populated per SKU, and components reading from this
 *   registry automatically swap third-party affiliate URLs for first-party
 *   shop URLs — no MDX rewrites needed.
 *
 * Hard rules baked into this registry:
 *
 *   1. Every link uses `rel="sponsored nofollow"` via <AffiliateLink>.
 *   2. Every link is preceded visually by <AffiliateLabel>.
 *   3. Affiliate revenue does NOT influence which recipes we recommend.
 *      The methodology page says so. The reviewer's no-conflict statement
 *      says so. This registry just stores the URLs.
 *   4. Forbidden categories (do NOT add): peptide vendors, GLP-1 telehealth,
 *      MLM brands (Beachbody / Herbalife / Plexus / etc.), weight-loss
 *      supplements, anything that would feel slimy when the shop opens.
 *
 * Amazon Associates tag is read at component render via env var
 * `NEXT_PUBLIC_AMAZON_TAG` (default `thatcleanchef-20` placeholder until
 * Fabian provisions the real one — see docs/launch-blockers.md).
 */

export type AffiliateCategory = "cookware" | "pantry" | "tools" | "books";

export type AffiliateLink = {
  productKey: string;
  brand: string;
  productName: string;
  /** Amazon ASIN-based URL (or brand-direct). Replace `{TAG}` at render. */
  thirdPartyUrl: string;
  thirdPartyLabel: "Amazon" | "Direct";
  /** Set when the owned shop has the SKU live — preferred over thirdPartyUrl. */
  ownedShopUrl?: string;
  ownedShopAvailableFromDate?: string;
  category: AffiliateCategory;
  /** Optional 1-line note rendered below the affiliate label. */
  why?: string;
};

export const AFFILIATES: Record<string, AffiliateLink> = {
  // ─── Cookware ──────────────────────────────────────────────────────────
  "le-creuset-signature-5-5qt": {
    productKey: "le-creuset-signature-5-5qt",
    brand: "Le Creuset",
    productName: "Signature 5.5-quart Dutch oven",
    thirdPartyUrl: "https://www.amazon.com/dp/B0076NOGPY?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
    why: "The braiser we cook chicken-and-bean weeknights in. Tested across 9 years — outlived two stoves.",
  },
  "lodge-12-cast-iron": {
    productKey: "lodge-12-cast-iron",
    brand: "Lodge",
    productName: "12-inch cast-iron skillet",
    thirdPartyUrl: "https://www.amazon.com/dp/B00006JSUA?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
    why: "The salmon-searing pan. £25 once and you're done.",
  },
  "caraway-non-toxic-set": {
    productKey: "caraway-non-toxic-set",
    brand: "Caraway",
    productName: "Non-toxic ceramic cookware set",
    thirdPartyUrl: "https://www.carawayhome.com/products/cookware-set/?ref=thatcleanchef",
    thirdPartyLabel: "Direct",
    category: "cookware",
    why: "PFAS-free, ceramic-coated, pretty enough to leave on the hob.",
  },
  "made-in-carbon-steel-12": {
    productKey: "made-in-carbon-steel-12",
    brand: "Made In",
    productName: "12-inch carbon-steel pan",
    thirdPartyUrl: "https://madeincookware.com/products/carbon-steel-frying-pan?ref=thatcleanchef",
    thirdPartyLabel: "Direct",
    category: "cookware",
    why: "The crepes-and-eggs pan. Lighter than cast iron, sears like cast iron.",
  },
  "oxo-9x13-sheet-pan": {
    productKey: "oxo-9x13-sheet-pan",
    brand: "OXO",
    productName: "Non-stick Pro 9×13 sheet pan",
    thirdPartyUrl: "https://www.amazon.com/dp/B0029JQEIC?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
    why: "The default sheet pan. Five of these in our kitchen rotation.",
  },
  "vitamix-5200": {
    productKey: "vitamix-5200",
    brand: "Vitamix",
    productName: "5200 standard blender",
    thirdPartyUrl: "https://www.amazon.com/dp/B008H4SLV6?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
    why: "The smoothie-and-soup machine. The only big-ticket appliance we replace before it dies.",
  },
  "kitchenaid-5qt-mixer": {
    productKey: "kitchenaid-5qt-mixer",
    brand: "KitchenAid",
    productName: "Artisan 5-quart stand mixer",
    thirdPartyUrl: "https://www.amazon.com/dp/B00005UP2P?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
  },
  "wusthof-classic-8": {
    productKey: "wusthof-classic-8",
    brand: "Wüsthof",
    productName: "Classic 8-inch chef's knife",
    thirdPartyUrl: "https://www.amazon.com/dp/B00009ZK08?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
  },
  "victorinox-fibrox-8": {
    productKey: "victorinox-fibrox-8",
    brand: "Victorinox",
    productName: "Fibrox Pro 8-inch chef's knife",
    thirdPartyUrl: "https://www.amazon.com/dp/B0000CF94U?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
    why: "The £40 knife we'd put up against any £200 knife on a weeknight.",
  },
  "microplane-zester": {
    productKey: "microplane-zester",
    brand: "Microplane",
    productName: "Premium classic zester / grater",
    thirdPartyUrl: "https://www.amazon.com/dp/B00MVCQNNQ?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
  },
  "oxo-instant-thermometer": {
    productKey: "oxo-instant-thermometer",
    brand: "OXO",
    productName: "Chef's precision instant-read thermometer",
    thirdPartyUrl: "https://www.amazon.com/dp/B00YTGPIGI?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
    why: "The £30 tool that ends 'is the chicken done' arguments.",
  },
  "kitchencraft-12-muffin-tin": {
    productKey: "kitchencraft-12-muffin-tin",
    brand: "KitchenCraft",
    productName: "12-cup non-stick muffin tin (deep wells)",
    thirdPartyUrl: "https://www.amazon.co.uk/dp/B000QV8LJE?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "cookware",
    why: "The egg-bites pan we tested three brands of. Deep wells are non-negotiable.",
  },

  // ─── Pantry ────────────────────────────────────────────────────────────
  "frantoia-evoo": {
    productKey: "frantoia-evoo",
    brand: "Frantoia",
    productName: "Sicilian extra-virgin olive oil",
    thirdPartyUrl: "https://www.amazon.com/dp/B000R8O2JK?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "pantry",
    why: "The finishing oil we drizzle on the savoury cottage-cheese bowl. Keep it dark and cool.",
  },
  "castillo-de-canena": {
    productKey: "castillo-de-canena",
    brand: "Castillo de Canena",
    productName: "Family-reserve Picual EVOO",
    thirdPartyUrl: "https://www.amazon.com/dp/B009Q9BJ1Y?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "pantry",
  },
  "diaspora-co-pragati-turmeric": {
    productKey: "diaspora-co-pragati-turmeric",
    brand: "Diaspora Co.",
    productName: "Pragati turmeric (single-origin, fresh-ground)",
    thirdPartyUrl: "https://www.diasporaco.com/products/pragati-turmeric?ref=thatcleanchef",
    thirdPartyLabel: "Direct",
    category: "pantry",
    why: "The turmeric the anti-inflammatory chicken soup is built around. Most supermarket turmeric is 18 months old before it hits the shelf.",
  },
  "steenbergs-organic-spices": {
    productKey: "steenbergs-organic-spices",
    brand: "Steenbergs",
    productName: "Organic spice rack",
    thirdPartyUrl: "https://www.amazon.co.uk/stores/Steenbergs/page/12345?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "pantry",
  },
  "bragg-acv": {
    productKey: "bragg-acv",
    brand: "Bragg",
    productName: "Organic apple cider vinegar (with the mother)",
    thirdPartyUrl: "https://www.amazon.com/dp/B00B0OO34U?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "pantry",
  },
  "maldon-flaky-salt": {
    productKey: "maldon-flaky-salt",
    brand: "Maldon",
    productName: "Sea salt flakes",
    thirdPartyUrl: "https://www.amazon.com/dp/B003U6T5CG?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "pantry",
    why: "The finishing salt on every recipe in the protein-forward hub.",
  },
  "good-culture-cottage-cheese": {
    productKey: "good-culture-cottage-cheese",
    brand: "Good Culture",
    productName: "Organic 4% cottage cheese",
    thirdPartyUrl: "https://goodculture.com/products/4-percent-classic?ref=thatcleanchef",
    thirdPartyLabel: "Direct",
    category: "pantry",
    why: "The cottage cheese the flatbread + pancakes + savoury bowl recipes are tested against. Cultured longer, holds curd shape under heat.",
  },
  "fage-total-5": {
    productKey: "fage-total-5",
    brand: "Fage",
    productName: "Total 5% Greek yoghurt",
    thirdPartyUrl: "https://www.amazon.com/dp/B005EEDMFW?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "pantry",
  },
  "kettle-and-fire-broth": {
    productKey: "kettle-and-fire-broth",
    brand: "Kettle & Fire",
    productName: "Bone broth (chicken)",
    thirdPartyUrl: "https://www.kettleandfire.com/products/chicken-bone-broth?ref=thatcleanchef",
    thirdPartyLabel: "Direct",
    category: "pantry",
    why: "The bought broth we'd actually buy on a Tuesday — gels at the fridge, simmered 20+ hours.",
  },
  "kirkland-organic-eggs": {
    productKey: "kirkland-organic-eggs",
    brand: "Kirkland",
    productName: "Organic pasture-raised eggs (24-pack)",
    thirdPartyUrl: "https://www.costco.com/kirkland-eggs?ref=thatcleanchef",
    thirdPartyLabel: "Direct",
    category: "pantry",
  },
  "bobs-red-mill-rolled-oats": {
    productKey: "bobs-red-mill-rolled-oats",
    brand: "Bob's Red Mill",
    productName: "Old-fashioned rolled oats (gluten-free)",
    thirdPartyUrl: "https://www.amazon.com/dp/B0019LRY5I?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "pantry",
  },
  "hodmedods-british-lentils": {
    productKey: "hodmedods-british-lentils",
    brand: "Hodmedod's",
    productName: "British green lentils",
    thirdPartyUrl: "https://hodmedods.co.uk/products/british-green-lentils?ref=thatcleanchef",
    thirdPartyLabel: "Direct",
    category: "pantry",
    why: "British-grown green lentils that hold their shape through a 35-minute simmer. The lentil-and-sweet-potato stew is tested against this brand.",
  },

  // ─── Tools ─────────────────────────────────────────────────────────────
  "escali-primo-scale": {
    productKey: "escali-primo-scale",
    brand: "Escali",
    productName: "Primo digital kitchen scale",
    thirdPartyUrl: "https://www.amazon.com/dp/B0007GAWRS?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "tools",
    why: "The £20 scale every Nutrition Ledger on this site is calibrated against.",
  },
  "oxo-measuring-set": {
    productKey: "oxo-measuring-set",
    brand: "OXO",
    productName: "Good Grips angled measuring cup set",
    thirdPartyUrl: "https://www.amazon.com/dp/B0006G2T2K?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "tools",
  },
  "souper-cubes-1c": {
    productKey: "souper-cubes-1c",
    brand: "Souper Cubes",
    productName: "1-cup silicone freezer trays (4-pack)",
    thirdPartyUrl: "https://www.soupercubes.com/products/1-cup-tray?ref=thatcleanchef",
    thirdPartyLabel: "Direct",
    category: "tools",
    why: "The bone-broth freezer move. 250ml portions, freezes flat, pops out clean.",
  },
  "pyrex-meal-prep-glass": {
    productKey: "pyrex-meal-prep-glass",
    brand: "Pyrex",
    productName: "Glass meal-prep containers (10-piece)",
    thirdPartyUrl: "https://www.amazon.com/dp/B07VTM3GZF?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "tools",
  },
  "glasslock-oven-safe": {
    productKey: "glasslock-oven-safe",
    brand: "Glasslock",
    productName: "Oven-safe glass storage (18-piece)",
    thirdPartyUrl: "https://www.amazon.com/dp/B0033Z4ZAQ?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "tools",
  },
  "ankarsrum-bread-tin": {
    productKey: "ankarsrum-bread-tin",
    brand: "Ankarsrum",
    productName: "1lb loaf tin",
    thirdPartyUrl: "https://www.amazon.com/dp/B07NLKWJVX?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "tools",
  },

  // ─── Books ─────────────────────────────────────────────────────────────
  "salt-fat-acid-heat": {
    productKey: "salt-fat-acid-heat",
    brand: "Samin Nosrat",
    productName: "Salt, Fat, Acid, Heat (book)",
    thirdPartyUrl: "https://www.amazon.com/dp/1476753830?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "books",
    why: "The book every recipe we publish is downstream of.",
  },
  "six-seasons": {
    productKey: "six-seasons",
    brand: "Joshua McFadden",
    productName: "Six Seasons (book)",
    thirdPartyUrl: "https://www.amazon.com/dp/1579656315?tag={TAG}",
    thirdPartyLabel: "Amazon",
    category: "books",
  },
};

/**
 * Resolve a product to a render-ready link. Owned-shop URL wins when
 * present; otherwise the Amazon Associates tag is interpolated into the
 * third-party URL at runtime.
 */
export function getAffiliate(productKey: string): {
  url: string;
  label: "Shop direct" | "Amazon" | "Direct";
  brand: string;
  productName: string;
  isOwned: boolean;
  why?: string;
} {
  const link = AFFILIATES[productKey];
  if (!link) {
    throw new Error(`unknown affiliate: ${productKey}`);
  }
  if (link.ownedShopUrl) {
    return {
      url: link.ownedShopUrl,
      label: "Shop direct",
      brand: link.brand,
      productName: link.productName,
      isOwned: true,
      why: link.why,
    };
  }
  const tag = process.env.NEXT_PUBLIC_AMAZON_TAG ?? "thatcleanchef-20";
  return {
    url: link.thirdPartyUrl.replace("{TAG}", tag),
    label: link.thirdPartyLabel,
    brand: link.brand,
    productName: link.productName,
    isOwned: false,
    why: link.why,
  };
}

/** Filter SKUs by category — for hub-page collections. */
export function affiliatesByCategory(category: AffiliateCategory): AffiliateLink[] {
  return Object.values(AFFILIATES).filter((a) => a.category === category);
}

/** Total SKU count — used by the verification grep. */
export const AFFILIATE_COUNT = Object.keys(AFFILIATES).length;
