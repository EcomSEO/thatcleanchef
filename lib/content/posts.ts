export type PostType = "pillar" | "comparison" | "cluster" | "listicle" | "recipe";

/**
 * Peptide-therapy context for a recipe page — drives the
 * <PeptideContextCallout> rendered above the ingredient list.
 */
export type PeptideContext =
  | "glp1-friendly"
  | "muscle-preservation"
  | "anti-inflammatory"
  | "bone-tendon"
  | "cycle-nutrition";

export type Post = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  hub: string;
  postType: PostType;
  /** Peptide-therapy framing for the recipe (default 'glp1-friendly'). */
  peptideContext?: PeptideContext;
  /** When 'required', a medical disclaimer block is rendered above the article body. */
  medicalDisclaimer?: "required" | "optional";
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
  /** "Why we tested this 3 times" entries — flagship recipes only. */
  testNotes?: Array<{
    test: 1 | 2 | 3 | 4;
    triedThis: string;
    whatHappened: string;
    changedThis: string;
  }>;
  /** Slug of the team member who reviewed this page (defaults to lena-marsh). */
  reviewedBy?: string;
};

export const posts: Post[] = [
  {
    slug: "anti-inflammatory-golden-chicken-soup",
    title: "Anti-Inflammatory Golden Chicken Soup",
    h1: "Anti-inflammatory golden chicken soup",
    description:
      "Chef-tested anti-inflammatory chicken soup with turmeric, ginger, and bone broth. 55 min, 32g protein, Nutrition Ledger below.",
    hub: "anti-inflammatory-recovery",
    peptideContext: "anti-inflammatory",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 8,
    status: "published",
    featured: true,
    totalTimeMinutes: 55,
    prepTimeMinutes: 15,
    cookTimeMinutes: 40,
    servings: 4,
    dietTags: ["Anti-Inflammatory", "Whole30", "Dairy-Free", "Gluten-Free"],
    nutritionLedger: { calories: 380, proteinG: 32, fiberG: 4, sodiumMg: 620, satFatG: 3, addedSugarG: 2 },
    reviewedBy: "lena-marsh",
    testNotes: [
      {
        test: 1,
        triedThis: "Boneless chicken breasts, turmeric stirred into the broth at the boil, no black pepper, sliced ginger.",
        whatHappened: "Stringy chicken by minute 30, dusty turmeric flavour (no fat to bloom into), fibrous ginger bites in every spoonful.",
        changedThis: "Switched to bone-in skin-on thighs, bloomed turmeric in the rendered fat, added cracked black pepper, swapped sliced ginger for grated.",
      },
      {
        test: 2,
        triedThis: "Bone-in thighs, bloomed turmeric and pepper in chicken fat, microplaned ginger, regular table salt at the start.",
        whatHappened: "Flavour was right — soup tasted like a soup, not a tonic. Sodium ran high (790 mg per bowl) and the broth was a touch dull from early salting.",
        changedThis: "Moved salt to the end of cooking, dropped the quantity by a third, finished with lemon juice instead.",
      },
      {
        test: 3,
        triedThis: "Final method as published — bone-in thighs, bloomed turmeric and pepper, grated ginger, salt at the end, lemon to finish.",
        whatHappened: "620 mg sodium per bowl (within target), 32g protein, gel from the thigh bones in the leftover broth. Repeated three times across two weeks with the same result.",
        changedThis: "This is the published recipe. The lemon-at-the-end change was the one that lifted the whole bowl.",
      },
    ],
    ourPick: {
      name: "Kettle & Fire Chicken Bone Broth",
      tier: "Base of the pot",
      reason:
        "I cook this soup most weeks in winter and the broth is 80% of the result. Kettle & Fire simmers bones 20+ hours, which reads on the palate as body, not just salt. If you make your own, do. If you buy, buy this one — and season at the end, not the start.",
    },
    items: [
      {
        rank: 1,
        name: "Use bone-in, skin-on thighs",
        summary:
          "Breasts go stringy by minute 30. Thighs stay silky, the skin renders fat that carries the turmeric, and the bones add gelatin. This is the single choice that makes the difference between a good soup and one you cook again.",
      },
      {
        rank: 2,
        name: "Bloom the turmeric in fat, don't dump it in broth",
        summary:
          "Curcumin is fat-soluble. Toast a tablespoon in the rendered chicken fat for 30-45 seconds — until it smells like a spice market, not dusty — before the broth goes in. You'll taste the difference immediately.",
      },
      {
        rank: 3,
        name: "A pinch of black pepper isn't optional",
        summary:
          "Piperine increases curcumin bioavailability roughly 20-fold (Shoba 1998). A generous half-teaspoon, cracked, bloomed with the turmeric. This is also why golden-milk recipes always include pepper.",
      },
      {
        rank: 4,
        name: "Grate the ginger, don't slice",
        summary:
          "Sliced ginger gives you fibrous bites. A microplane over the pot gives you flavor distributed through every spoonful and none of the chewing. 2 tablespoons of finely grated ginger is the sweet spot for 8 cups of broth.",
      },
      {
        rank: 5,
        name: "Sear the thighs skin-side down for 6 minutes, undisturbed",
        summary:
          "This is where the fond comes from — the sticky browned bits the soup scrapes up when the broth goes in. Move the thighs too early and you leave flavor on the pan. Set a timer.",
      },
      {
        rank: 6,
        name: "Finish with lime, not lemon",
        summary:
          "Lime and ginger are built for each other; lemon fights the turmeric. Half a lime, juiced off-heat at the very end. Acid always goes in last — heat dulls it.",
      },
      {
        rank: 7,
        name: "Coconut aminos if you want Whole30, soy if you don't",
        summary:
          "A tablespoon of coconut aminos (Coconut Secret is the standard) adds the sweet-umami backbone the soup needs. Non-Whole30? Tamari works and tastes fuller. Either way, 1 tablespoon, no more.",
      },
      {
        rank: 8,
        name: "Shred the chicken back into the pot",
        summary:
          "Pull the thighs at 30 minutes, shred with two forks, return them. You want chicken in every spoon, not a slab on top. Discard the skin — it's done its job.",
      },
      {
        rank: 9,
        name: "Cilantro at the end, stems and all",
        summary:
          "If you're a cilantro person, chop a small handful, stems included, and stir in off-heat. Parsley is the swap if cilantro tastes like soap to you — it's genetic, no shame. Don't simmer herbs into the pot; they go gray.",
      },
      {
        rank: 10,
        name: "Rest 10 minutes before serving",
        summary:
          "The soup tastes louder at minute 50 than minute 40. The fat re-emulsifies, the ginger settles, the salt evens out. If you're making it for later, it's better on day two.",
      },
      {
        rank: 11,
        name: "Reheat gently, don't boil",
        summary:
          "Low heat, lid off, stir occasionally. A hard boil breaks the fat and the broth goes cloudy. Fridge for 4 days, freezer for 3 months in quart containers.",
      },
      {
        rank: 12,
        name: "Rice or no rice — your call",
        summary:
          "Whole30? Serve it alone, it's a complete meal. Not Whole30? A scoop of jasmine rice in the bowl first, broth ladled over, is one of the best ways to eat this. Cook the rice separately — it soaks up broth if stored together.",
      },
    ],
    faq: [
      {
        q: "Can I use chicken breasts instead of thighs?",
        a: "You can, but I wouldn't. Breasts dry out in the time it takes the broth to develop, and you lose the gelatin the bones contribute. If breasts are what's in the fridge, pull them at 15 minutes instead of 30 and they'll be okay. But next time, buy thighs — they're also cheaper.",
      },
      {
        q: "Does the turmeric really do anything for inflammation?",
        a: "The evidence for curcumin (the active compound in turmeric) and inflammation markers is reasonable — Hewlings and Kalman summarized it well in 2017. It's not a cure for anything. It's a pattern that looks helpful over time, especially paired with omega-3s and fiber. I cook with it because it tastes good and colors the pot; the research is a bonus.",
      },
      {
        q: "Can I make this in the slow cooker or Instant Pot?",
        a: "Yes to both. Instant Pot: sear on saute, pressure cook 15 minutes, natural release 10. Slow cooker: sear separately, then 4 hours on high or 7 on low. You lose a little of the fond complexity but gain convenience. Still bloom the turmeric in fat before anything else goes in.",
      },
      {
        q: "How spicy is this?",
        a: "Warm, not spicy. The ginger gives a gentle heat but there's no chili. If you want heat, add a sliced serrano when you saute the onions or finish each bowl with Fly By Jing chili crisp. My kids eat this as written without complaint.",
      },
      {
        q: "Can I freeze it?",
        a: "Yes — up to 3 months in quart containers with a half-inch of headspace. Thaw overnight in the fridge, reheat gently on the stove. If you added rice, freeze the broth separately; rice turns to mush after a freeze.",
      },
      {
        q: "What if I don't have bone broth?",
        a: "Regular low-sodium chicken broth works — you'll just lose a little body. Boost it with an extra tablespoon of fat (ghee or olive oil) and an extra 15 minutes of simmer with the bones in the pot. Not quite the same, but close.",
      },
    ],
    sources: [
      {
        label: "Hewlings SJ, Kalman DS. Curcumin: A review of its effects on human health. Foods. 2017.",
        url: "https://www.mdpi.com/journal/foods",
      },
      {
        label: "Shoba G, et al. Influence of piperine on the pharmacokinetics of curcumin. Planta Medica. 1998.",
        url: "https://pubmed.ncbi.nlm.nih.gov/",
      },
      {
        label: "López-Alt JK. The Food Lab: Better Home Cooking Through Science. Serious Eats.",
        url: "https://www.seriouseats.com/",
      },
      {
        label: "USDA FoodData Central — nutrient values per serving.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "Calder PC. Omega-3 fatty acids and inflammatory processes. Nutrients. 2010.",
        url: "https://www.mdpi.com/journal/nutrients",
      },
    ],
  },
  {
    slug: "cottage-cheese-flatbread",
    title: "Cottage Cheese Flatbread — 28g Protein, 20 Minutes",
    h1: "Cottage cheese flatbread",
    description:
      "The viral cottage cheese flatbread, chef-tested. 28g protein per serving, 20 minutes, 4 ingredients.",
    hub: "muscle-preservation",
    peptideContext: "muscle-preservation",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "published",
    totalTimeMinutes: 20,
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    servings: 2,
    dietTags: ["High-Protein", "Vegetarian"],
    nutritionLedger: { calories: 320, proteinG: 28, fiberG: 2, sodiumMg: 480, satFatG: 5, addedSugarG: 0 },
    ourPick: {
      name: "Good Culture 4% Whole Milk Cottage Cheese",
      tier: "The base",
      reason:
        "I tested this recipe with five cottage cheese brands. Good Culture 4% won — smaller curds blend smoother, and the higher fat content means it doesn't weep water onto the parchment. Nancy's organic is a fine second. Skip anything labeled 'low-fat' for this recipe; the fat is what holds the flatbread together.",
    },
    items: [
      {
        rank: 1,
        name: "Blend until completely smooth — at least 60 seconds",
        summary:
          "A Vitamix or a good immersion blender. If you see any curd texture, keep going. Lumpy batter bakes into a lumpy flatbread with weird pockets.",
      },
      {
        rank: 2,
        name: "4% fat, not 2% or fat-free",
        summary:
          "Lower-fat versions release water and the flatbread turns gummy. The 5g of sat fat per serving is non-negotiable for this recipe. If you need to trim fat, do it elsewhere in the day.",
      },
      {
        rank: 3,
        name: "Almond flour does the structural work",
        summary:
          "The 2-ingredient version (cottage cheese + eggs) trends online, but honestly it collapses. A quarter cup of almond flour gives it enough structure to hold a topping without adding real carbs. Oat flour works if you're avoiding nuts.",
      },
      {
        rank: 4,
        name: "Parchment, not foil, not sprayed pan",
        summary:
          "Parchment releases cleanly. Foil sticks. Sprayed pans stick and burn. Trust the parchment. A half-sheet pan is the right size for one flatbread.",
      },
      {
        rank: 5,
        name: "Spread thin — about a quarter inch",
        summary:
          "Thicker and the center stays wet. Offset spatula or the back of a spoon, work it into a rough 10x7 oval. Thickness matters more than shape.",
      },
      {
        rank: 6,
        name: "375°F, not higher",
        summary:
          "At 400°F+ the edges burn before the center sets. 375°F for 22-25 minutes is the tested range. I pull mine at 23 minutes when the edges are golden and the center springs back.",
      },
      {
        rank: 7,
        name: "Everything bagel seasoning on top, pre-bake",
        summary:
          "Trader Joe's or Whole Foods house brand. Sprinkle generously before it goes in the oven so the seasoning adheres. Post-bake sprinkles slide off.",
      },
      {
        rank: 8,
        name: "Cool 5 minutes on the pan before moving",
        summary:
          "Out of the oven it's still setting. Five minutes and it's ready to lift. Try to move it too early and the center tears.",
      },
      {
        rank: 9,
        name: "The hot honey + prosciutto version",
        summary:
          "Mike's Hot Honey drizzled, prosciutto draped, arugula on top, squeeze of lemon. This is the one the kids ask for. Adds another 10g of protein from the prosciutto.",
      },
      {
        rank: 10,
        name: "The avocado + tomato version",
        summary:
          "Smashed avocado, cherry tomatoes, Maldon salt, olive oil. Simpler, vegan if you swap the eggs in the base (you can't — eggs are load-bearing). But it's the best breakfast version.",
      },
      {
        rank: 11,
        name: "Store flat, not stacked",
        summary:
          "Fridge, three days, on a plate covered loosely with foil. Stacked slices stick to each other. Reheat in a 350°F oven for 4 minutes — not the microwave, which makes it rubbery.",
      },
      {
        rank: 12,
        name: "Double the batch, freeze the second",
        summary:
          "Once it's cool, wrap a whole flatbread in parchment then foil, freeze flat. Thaw in the fridge overnight, reheat in the oven. Three months max.",
      },
    ],
    faq: [
      {
        q: "Can I make this with 2% cottage cheese?",
        a: "I've tested it. The flatbread is noticeably wetter and doesn't hold its structure as well — you'll taste the difference if you compare them side by side. If 2% is what you have, add an extra tablespoon of almond flour and bake for 2 extra minutes. 4% is the recipe.",
      },
      {
        q: "Do I have to blend it? Can I just whisk?",
        a: "You have to blend. Whisking leaves curds, curds bake into rubbery pockets, and the flatbread feels wrong. A Vitamix, a Ninja, a cheap immersion blender — any of them work. This is a 60-second step that matters.",
      },
      {
        q: "Is this actually a bread? Can I use it for sandwiches?",
        a: "It's a bread in the flatbread sense — think pita, not a slice of sourdough. It folds, it holds a topping, it tears cleanly. For a sandwich it works better cut in half and used as an open-face, because it's thin. For a wrap, make it a little thinner and bake it 2 minutes less so it stays flexible.",
      },
      {
        q: "Can I add protein powder for more protein?",
        a: "I've tested this. Unflavored whey (Momentous or Legion) works; plant-based protein makes it gritty. A scoop adds about 20g of protein but you'll want an extra egg to balance the dryness. I usually skip it — 28g per serving is already a lot.",
      },
      {
        q: "Does it taste like cottage cheese?",
        a: "Not really. Once it's blended and baked, the cottage cheese reads as savory and mild, almost like a thin focaccia. My kids ask for seconds and neither of them will eat cottage cheese straight. That's the trick of this recipe.",
      },
      {
        q: "Can I make it gluten-free?",
        a: "It already is — almond flour isn't gluten. If you're avoiding nuts, oat flour works (certified GF oats if you need strict). Regular all-purpose flour does not work the same way; it makes it more bready and less flatbread.",
      },
      {
        q: "Why are mine wet in the middle?",
        a: "Three usual reasons: spread too thick, used low-fat cottage cheese, or pulled it too early. Check all three. A sharp knife tip in the middle should come out mostly clean — if it's wet, give it 3 more minutes.",
      },
    ],
    sources: [
      {
        label: "USDA FoodData Central — cottage cheese 4% milkfat nutrient profile.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "Serious Eats — The Food Lab on high-protein baking chemistry (Kenji López-Alt).",
        url: "https://www.seriouseats.com/",
      },
      {
        label: "Cook's Illustrated — testing methodology for egg-and-dairy flatbreads.",
        url: "https://www.americastestkitchen.com/cooksillustrated",
      },
      {
        label: "Good Culture — product specifications and fat content by line.",
        url: "https://goodculture.com/",
      },
    ],
  },
  {
    slug: "anti-inflammatory-diet",
    title: "The Anti-Inflammatory Diet — A Cook's Version",
    h1: "The anti-inflammatory diet",
    description:
      "Evidence brief, ingredient inventory, weekly framework, and the 7-day meal plan. Pillar for the Anti-Inflammatory hub.",
    hub: "anti-inflammatory-recovery",
    peptideContext: "anti-inflammatory",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 16,
    status: "published",
    items: [
      {
        rank: 1,
        name: "Fatty fish twice a week — the non-negotiable",
        summary:
          "Salmon, sardines, mackerel, trout. The EPA and DHA in fatty fish are the most studied anti-inflammatory nutrients we have (Calder 2010). Twice a week is the Mediterranean-pattern target. Vital Choice or wild-caught from the fish counter. Sardines are the weekday cheat — Wild Planet tin, olive oil, crusty sourdough, done.",
      },
      {
        rank: 2,
        name: "Extra-virgin olive oil as your everyday fat",
        summary:
          "Oleocanthal in EVOO has genuine anti-inflammatory activity, at the dose Mediterranean populations actually consume — 2-4 tablespoons a day. Graza for drizzling, California Olive Ranch for cooking. Budget matters here; the difference is real on salad, less on seared fish.",
      },
      {
        rank: 3,
        name: "Leafy greens every day, in quantity",
        summary:
          "Spinach, arugula, kale, chard. A big handful per meal is the target, not a garnish. Kate's version: prewashed baby spinach from the box, tossed into everything — eggs, soup, rice bowls, pasta. Don't overthink the variety, overthink the frequency.",
      },
      {
        rank: 4,
        name: "Berries, the everyday fruit",
        summary:
          "Blueberries, strawberries, raspberries, blackberries. The polyphenol profile is the highest of any common fruit. Frozen is fine — the nutrition holds. Half a cup on oats, yogurt, cottage cheese. The trick is consistency, not volume.",
      },
      {
        rank: 5,
        name: "Walnuts, flax, chia for plant omega-3s",
        summary:
          "A small handful of walnuts (ALA) and a tablespoon of ground flax or chia most days. Flax must be ground to be usable. Keep it in the freezer or it goes rancid — the oxidation cancels the benefit. Costco bulk walnuts are the unglamorous-correct answer.",
      },
      {
        rank: 6,
        name: "Turmeric + black pepper, daily in small doses",
        summary:
          "Not supplements — culinary. A teaspoon in scrambled eggs, a tablespoon in a soup, a dash in a marinade. Always with black pepper (piperine multiplies curcumin absorption). Simply Organic turmeric is fine; Diaspora Co is better if you cook with it often.",
      },
      {
        rank: 7,
        name: "Legumes 3-4 times a week",
        summary:
          "Lentils, chickpeas, black beans, white beans. Fiber + plant protein + polyphenols. Jovial or Bush's canned for speed — drain and rinse. Dried and cooked in a Dutch oven on a Sunday is better, but canned is not inferior for weeknight eating.",
      },
      {
        rank: 8,
        name: "Green tea or matcha, most days",
        summary:
          "EGCG is the star compound. One to three cups is the studied range. Matcha once in the morning covers it. Bigelow, Harney & Sons, Ippodo if you're ceremonial. Coffee is fine too — polyphenol-rich and well-studied for its own benefits — it's not either-or.",
      },
      {
        rank: 9,
        name: "Cruciferous vegetables 3+ times a week",
        summary:
          "Broccoli, cauliflower, Brussels sprouts, cabbage. Roasted at 425°F on a Nordic Ware sheet pan, olive oil and salt, charred edges. Sulforaphane (NIH ODS has a good summary) is the compound of interest. Twenty minutes, twice a week, standard side.",
      },
      {
        rank: 10,
        name: "Dial back ultra-processed, not all processed",
        summary:
          "Ultra-processed food is what the literature consistently associates with inflammation — not cheese, not bread, not olive oil (those are processed but not ultra-processed). The NOVA classification is the useful frame. Less cookies, more real food. Don't get precious about it.",
      },
      {
        rank: 11,
        name: "Watch refined omega-6 seed oils in quantity",
        summary:
          "The ratio of omega-6 to omega-3 matters more than the absolute omega-6. Cooking dinner at home in olive oil, using some canola in baking, eating restaurant food that uses soybean oil — this is fine. Where it adds up is ultra-processed snacks where the oil is the base. Same solution as #10.",
      },
      {
        rank: 12,
        name: "Sleep and movement are diet, functionally",
        summary:
          "This is a cook's version — I'm not a doctor — but the literature is clear that inflammation markers move on sleep and exercise. A good plate of food is half of the answer. The rest is 7 hours of sleep and a walk after dinner. Worth saying out loud.",
      },
    ],
    faq: [
      {
        q: "Is the anti-inflammatory diet a real diet or just a trend?",
        a: "It's a pattern, not a branded diet. The evidence supports a Mediterranean-style eating pattern with omega-3s and polyphenols as a way to modulate chronic inflammation markers — Calder's 2010 review is a good entry point. It won't cure anything. It's a lever, one of several, and it's a nice lever because the food is good.",
      },
      {
        q: "How long before I feel a difference?",
        a: "Honest answer: it depends, and inflammation is hard to self-report. Studies measure markers (CRP, IL-6) that you can't feel. If you have joint stiffness, energy slumps, or autoimmune flare patterns, 6-8 weeks of consistent eating is the typical window where people notice something. If you notice nothing, the long-game cardiovascular benefits are still real.",
      },
      {
        q: "Can I do this if I don't eat fish?",
        a: "Yes, but pay attention to omega-3s. Walnuts, flax, chia, and hemp seeds give you ALA; your body converts some of that to EPA/DHA, not a lot. An algae-based omega-3 supplement (Nordic Naturals makes one) is a reasonable backstop. Don't skip this step if you're fully plant-based.",
      },
      {
        q: "Do I need to go organic?",
        a: "Where it matters most: leafy greens, berries, and the outer layers of things you eat whole. The EWG Dirty Dozen list is a reasonable filter. Olive oil — yes, quality matters, not always the 'organic' label specifically. Meat and fish — grass-fed and wild-caught if you can. But organic-as-a-binary is not the lever; consistent whole-food eating is.",
      },
      {
        q: "Is gluten inflammatory?",
        a: "For people with celiac or diagnosed non-celiac gluten sensitivity, yes, meaningfully. For the general population, the evidence that gluten independently drives inflammation is weak. If you feel better without it, great. If you don't have a reason to avoid it, don't treat it as a flag.",
      },
      {
        q: "What about dairy?",
        a: "Fermented dairy (yogurt, kefir, aged cheese) is consistently neutral-to-positive in the literature. Full-fat dairy is not the problem it was framed as in the 90s. Where people get into trouble: sugary yogurts marketed as health food. Plain Greek yogurt (Fage, Icelandic Provisions) with berries, not strawberry-flavored sweetened yogurt.",
      },
      {
        q: "Where do I actually start?",
        a: "Two things this week: fish twice, and a green on every dinner plate. That's it. Build from there. The Clean Chef Starter Kit is a 14-day meal plan that sequences the rest — grocery list, prep, macros — if you want the whole frame on one page.",
      },
    ],
    sources: [
      {
        label: "Calder PC. Omega-3 fatty acids and inflammatory processes. Nutrients. 2010.",
        url: "https://www.mdpi.com/journal/nutrients",
      },
      {
        label: "Willett W, et al. Food in the Anthropocene: the EAT-Lancet Commission. The Lancet. 2019.",
        url: "https://www.thelancet.com/",
      },
      {
        label: "Galland L. Diet and inflammation. Nutrition in Clinical Practice. 2010.",
        url: "https://aspenjournals.onlinelibrary.wiley.com/journal/19412452",
      },
      {
        label: "NIH Office of Dietary Supplements — Omega-3 Fatty Acids Fact Sheet.",
        url: "https://ods.od.nih.gov/",
      },
      {
        label: "USDA FoodData Central — reference database for nutrient values.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "Hewlings SJ, Kalman DS. Curcumin: A review of its effects on human health. Foods. 2017.",
        url: "https://www.mdpi.com/journal/foods",
      },
    ],
  },
  {
    slug: "high-protein-breakfast-bowl",
    title: "High-Protein Breakfast Bowl — 42g Protein, 15 Minutes",
    h1: "High-protein breakfast bowl",
    description:
      "Eggs, spinach, quinoa or sweet potato, salsa, avocado — 42g protein in a 15-minute bowl. Swappable base protein.",
    hub: "muscle-preservation",
    peptideContext: "muscle-preservation",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "published",
    totalTimeMinutes: 15,
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    servings: 1,
    dietTags: ["High-Protein", "Gluten-Free"],
    nutritionLedger: { calories: 480, proteinG: 42, fiberG: 8, sodiumMg: 520, satFatG: 7, addedSugarG: 0 },
    ourPick: {
      name: "Vital Farms Pasture-Raised Eggs",
      tier: "The foundation",
      reason:
        "Two large pasture-raised eggs give you about 14g of complete protein and the kind of yolk that actually tastes like something. Vital Farms is widely available and consistent. Kirkland organic is the Costco alternative. This is the base; every swap below assumes good eggs.",
    },
    items: [
      {
        rank: 1,
        name: "Start the quinoa first — or use pre-cooked",
        summary:
          "Quinoa takes 12-15 minutes and that's your cooking window. Rinse it first (bitter saponins), 1:2 ratio with water, simmer covered. Or keep a jar of cooked quinoa in the fridge — Sunday batch, all week bowls.",
      },
      {
        rank: 2,
        name: "Sweet potato is the swap when quinoa is out",
        summary:
          "One medium sweet potato, microwave-pierced, 6 minutes on high. Cube and crisp in the egg pan while the eggs rest. Different bowl, same protein target, more beta-carotene.",
      },
      {
        rank: 3,
        name: "Cook the eggs in the spinach pan, not separately",
        summary:
          "A 10-inch nonstick or carbon steel. Wilt two handfuls of baby spinach in a teaspoon of olive oil, push to one side, crack two eggs in the cleared space. Flavor transfers. Also: one pan.",
      },
      {
        rank: 4,
        name: "Room-temp eggs, every time",
        summary:
          "Cold eggs steam before they fry. Ten minutes on the counter while you rinse quinoa and chop scallions. Runnier yolk, tenderer white, same effort.",
      },
      {
        rank: 5,
        name: "Over easy, not scrambled, for the yolk factor",
        summary:
          "A soft yolk is the dressing of this bowl. It runs into the quinoa, mixes with the salsa, makes the whole thing cohere. If you scramble, you lose that; add a tablespoon of Greek yogurt to the scramble to bring some creaminess back.",
      },
      {
        rank: 6,
        name: "Half an avocado, not a whole one",
        summary:
          "Half gives you the fat and fiber you need without pushing calories over 600. A whole avocado is a Wednesday indulgence, not a daily default. Slice, don't smash — cleaner bowl.",
      },
      {
        rank: 7,
        name: "Salsa does the seasoning work",
        summary:
          "A good jarred salsa — Trader Joe's double roasted, Siete cashew-based, Frontera — covers acid, salt, and heat in one spoon. Two tablespoons. Don't over-salt on top of it.",
      },
      {
        rank: 8,
        name: "Bump to 50g protein with 3oz chicken",
        summary:
          "Leftover rotisserie chicken, sliced, tossed in with the spinach. Roughly 8-10g more protein. This is the Sunday-prep-bowl version: cooked chicken in the fridge, breakfast in 8 minutes flat.",
      },
      {
        rank: 9,
        name: "Vegetarian 35g version: eggs + cottage cheese",
        summary:
          "Skip the chicken, add a half-cup of 4% cottage cheese on the side or stirred in. Good Culture is my default. The protein math still works and you get the creamy counterpoint.",
      },
      {
        rank: 10,
        name: "Dairy-free swap: nutritional yeast + hemp seeds",
        summary:
          "Two tablespoons of hemp seeds (another 6g of protein) and a tablespoon of nutritional yeast on top. The cheesy-nutty flavor replaces the dairy creaminess. A small pour of tahini if the bowl needs more fat.",
      },
      {
        rank: 11,
        name: "Meal prep four bowls in 25 minutes",
        summary:
          "Cook quinoa (15 min). Roast two sweet potatoes instead for variety. Store components separately — cooked quinoa, chopped scallion, halved avocado flesh-side-down in lime juice. Fry eggs fresh each morning. 8 minutes to plate.",
      },
      {
        rank: 12,
        name: "Finish with lime and flaky salt, not more salt",
        summary:
          "A squeeze of lime wakes the whole bowl up and the Maldon adds texture, not just sodium. Half a teaspoon of Maldon on all the components once plated. This is the last 5% that makes it taste chef-made instead of assembled.",
      },
    ],
    faq: [
      {
        q: "Can I really get 42g of protein without protein powder?",
        a: "Yes. Two large eggs (14g) + quinoa (8g per cup cooked) + 3 tablespoons hemp or a half-cup cottage cheese add-on gets you there. Add chicken and you're over 50. The bowl format makes the math doable because you're stacking protein sources. Powder is optional, not required.",
      },
      {
        q: "How do I hit 40g protein if I don't eat eggs?",
        a: "Swap the eggs for a half-cup of cottage cheese (13g) plus 3oz of leftover chicken or salmon (22g), or use Two Good Greek yogurt (12g per serving) with cooked chicken and hemp seeds. The structure of the bowl is what matters; the proteins are modular.",
      },
      {
        q: "Is quinoa really necessary?",
        a: "No. It's the default because it adds 8g of protein and fiber, but rice, sweet potato, or farro all work. For the lowest-carb version, skip the grain entirely and double the greens plus add a quarter-cup of black beans. You'll still clear 35g protein.",
      },
      {
        q: "Can I make this ahead for the whole week?",
        a: "Components yes, finished bowl no. The yolk doesn't survive reheating and the avocado browns. Prep cooked quinoa, roasted sweet potato, and washed spinach on Sunday; the fresh cooking is just the eggs and assembly, 5 minutes on a weekday.",
      },
      {
        q: "Will it keep me full till lunch?",
        a: "For most people, yes — the fat and protein combination is built for a 4-5 hour gap. If you're hungry by 10am, add the chicken bump (item 8), an extra tablespoon of hemp seeds, or a cup of cottage cheese on the side. The bowl is modular on purpose.",
      },
      {
        q: "What if I don't like runny yolks?",
        a: "Over medium or over hard both work. The bowl is less saucy so I'd add a tablespoon of tahini or Greek yogurt stirred into the salsa to keep that creamy-tangy note. Don't scramble hard eggs into this bowl; it turns into a mash.",
      },
    ],
    sources: [
      {
        label: "USDA FoodData Central — egg, quinoa, avocado, spinach nutrient values.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "NIH Office of Dietary Supplements — Protein fact sheet.",
        url: "https://ods.od.nih.gov/",
      },
      {
        label: "Serious Eats — egg cookery fundamentals (Kenji López-Alt).",
        url: "https://www.seriouseats.com/",
      },
      {
        label: "Cook's Illustrated — quinoa cooking method tests.",
        url: "https://www.americastestkitchen.com/cooksillustrated",
      },
    ],
  },
  {
    slug: "mediterranean-meal-prep-week-1",
    title: "Mediterranean Meal Prep — Week 1",
    h1: "Mediterranean meal prep — week 1",
    description:
      "A 7-day Mediterranean meal plan with shopping list, Sunday prep sequence, cost estimate, and weekly macros.",
    hub: "cycle-nutrition",
    peptideContext: "cycle-nutrition",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 14,
    status: "published",
    items: [
      {
        rank: 1,
        name: "Sunday prep — 60 minutes, whole week sorted",
        summary:
          "This is the move. One hour on Sunday afternoon, and the weekday cooking turns into assembly. My Sunday goes: roast vegetables, cook grains, marinate chicken, make one dressing. Timer starts at 3pm, done by 4.",
      },
      {
        rank: 2,
        name: "The sheet-pan vegetables — once, eats all week",
        summary:
          "Two sheet pans at 425°F. Pan 1: broccoli, cauliflower, red onion, olive oil, salt. Pan 2: sweet potato, zucchini, bell pepper. Twenty-five minutes, rotate at 15. These become side dishes, grain bowl components, and leftovers lunch.",
      },
      {
        rank: 3,
        name: "Cook the grains in batch — farro, quinoa, or brown rice",
        summary:
          "Two cups dry, cooked in broth (Kettle & Fire or Imagine), salted. Stored in a glass container — lasts 5 days in the fridge. Farro is the Mediterranean default; quinoa bumps the protein.",
      },
      {
        rank: 4,
        name: "Make the Greek-lemon marinade, use it three ways",
        summary:
          "Half a cup olive oil, juice of two lemons, 4 cloves garlic grated, 2 tablespoons oregano, salt. Use it to marinate chicken thighs Monday night (Greek lemon chicken recipe), dress the grain bowls Wednesday, drizzle over Friday's cod.",
      },
      {
        rank: 5,
        name: "One dressing covers every salad",
        summary:
          "Lemon-tahini or red wine vinaigrette. In a mason jar, shaken. Holds a week in the fridge. Dressing prep is the sneaky reason salads collapse — if yours is made, salad is a 3-minute side.",
      },
      {
        rank: 6,
        name: "Monday night: Greek lemon chicken + grains + sheet-pan vegetables",
        summary:
          "Marinated chicken thighs, 6 minutes a side in a cast iron (Lodge is fine). 40 minutes, 4 servings, 36g protein. Leftovers become Tuesday and Wednesday's lunch.",
      },
      {
        rank: 7,
        name: "Tuesday: grain bowl lunch, white bean soup dinner",
        summary:
          "Lunch: Monday's leftover chicken, grains, sheet-pan vegetables, feta, dressing. Dinner: white bean and kale soup (30 min, Dutch oven, crusty bread). Soup makes 6 servings, covers Thursday lunch.",
      },
      {
        rank: 8,
        name: "Wednesday: Mediterranean grain bowl, cold or warm",
        summary:
          "Grains, chickpeas from a can (Jovial or Bush's), roasted vegetables, cucumber, olives, feta, dressing. Ten minutes assembly. 22g protein cold, 35g if you add another protein.",
      },
      {
        rank: 9,
        name: "Thursday: sardine pasta, 20 minutes, under 500 calories",
        summary:
          "Jovial chickpea pasta, one tin Wild Planet sardines, garlic, chili flakes, lemon zest, breadcrumbs. This is a weeknight Alison-Roman-ish move. Under 20 minutes. 32g protein. Nobody at my table objects.",
      },
      {
        rank: 10,
        name: "Friday: sheet-pan Greek cod",
        summary:
          "Cod fillets, lemon, olive oil, oregano, cherry tomatoes, olives, sheet pan at 400°F, 12 minutes. Serve with whatever roasted vegetables are left from Sunday's batch. End-of-week clean-out dinner.",
      },
      {
        rank: 11,
        name: "Weekend: shakshuka, bigger breakfast",
        summary:
          "Saturday or Sunday breakfast. Rao's marinara (the shortcut — theirs is legit good), cumin, paprika, eggs cracked in, covered till the whites set. Feta, parsley, crusty bread. 10-inch skillet.",
      },
      {
        rank: 12,
        name: "Shopping list by section — $95-125 for two adults",
        summary:
          "Protein ~$45 (chicken thighs, cod, sardines, feta). Produce ~$30 (greens, tomatoes, cucumber, lemons, herbs). Pantry ~$25 (grains, canned beans, pasta, olive oil top-up). Dairy ~$15 (feta, Greek yogurt). Costco trims this to about $95; regular grocery runs closer to $125.",
      },
    ],
    faq: [
      {
        q: "What if I don't want to do the full Sunday prep?",
        a: "The 30-minute version: just roast two sheet pans of vegetables and cook one pot of grains. That alone covers three of the five weekday lunches. Skip the pre-made marinade and dressing, and make them fresh as you go. You'll spend 10 more minutes on weeknights but it's still a workable system.",
      },
      {
        q: "Is this actually Mediterranean or just 'Mediterranean-inspired'?",
        a: "It's Mediterranean in the scientific-pattern sense — olive oil, legumes, fish, whole grains, vegetables at every meal, moderate dairy, limited red meat. It's not regionally authentic Greek or Italian cooking. If you want regional depth, Yasmin Khan's Zaitoun and Diane Kochilas are my bookshelf picks.",
      },
      {
        q: "Can I do this if I don't eat fish?",
        a: "Yes. Swap Thursday's sardine pasta for a white bean and tomato pasta (same bones of the recipe, no sardines). Swap Friday's cod for sheet-pan chicken with the same vegetables. You'll lose the omega-3 contribution — plan for walnuts and flax on other days to partially cover it.",
      },
      {
        q: "How much does this actually cost?",
        a: "Two adults, full week, all meals: $95-125 depending on where you shop. Costco trims protein and olive oil by 20-30%. Trader Joe's is solid middle ground. Whole Foods runs high. Date sensitive — prices here reflect mid-2026 US averages. [VERIFY cost ranges against current receipts]",
      },
      {
        q: "What's the macro total for the week?",
        a: "Roughly: 1,600-1,900 calories/day per person, 90-110g protein/day, 35-45g fiber/day, sodium in the 2,000-2,400mg range (controllable by how much feta and olives you finish with). Full Nutrition Ledger per recipe is on each recipe page.",
      },
      {
        q: "Can I scale this to a family of four?",
        a: "Yes — roughly 1.5x everything; not 2x, because kids tend to eat less than adult men. The grain bowl lunches scale linearly. The sardine pasta is the outlier — kids are picky about sardines. That's the night to make regular pesto pasta for them and sardine pasta for the adults.",
      },
      {
        q: "Where's the dessert?",
        a: "Mediterranean pattern treats dessert as a sometimes food — fruit, a small piece of dark chocolate, a yogurt with honey. The cottage cheese ice cream recipe fits perfectly; two of those bars a week are in my household's rotation.",
      },
    ],
    sources: [
      {
        label: "Willett W, et al. Mediterranean diet pyramid: a cultural model. Am J Clin Nutr. 1995.",
        url: "https://academic.oup.com/ajcn",
      },
      {
        label: "Estruch R, et al. PREDIMED trial — Mediterranean diet and CVD outcomes. NEJM. 2018.",
        url: "https://www.nejm.org/",
      },
      {
        label: "USDA FoodData Central — reference database for weekly macro calculation.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "Diane Kochilas — The Mediterranean Diet Cookbook and related work.",
        url: "https://www.dianekochilas.com/",
      },
      {
        label: "Serious Eats — Mediterranean cooking foundations and technique library.",
        url: "https://www.seriouseats.com/",
      },
    ],
  },
  {
    slug: "whole30-breakfast-hash",
    title: "Whole30 Breakfast Hash",
    h1: "Whole30 breakfast hash",
    description:
      "Sweet potato, sausage, peppers, eggs — a 25-minute Whole30 breakfast with 28g protein.",
    hub: "glp1-friendly",
    peptideContext: "glp1-friendly",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "published",
    totalTimeMinutes: 25,
    prepTimeMinutes: 10,
    cookTimeMinutes: 15,
    servings: 2,
    dietTags: ["Whole30", "Paleo", "Dairy-Free", "Gluten-Free"],
    nutritionLedger: { calories: 420, proteinG: 28, fiberG: 6, sodiumMg: 580, satFatG: 6, addedSugarG: 0 },
    ourPick: {
      name: "Applegate Organic Chicken & Sage Breakfast Sausage",
      tier: "The sausage",
      reason:
        "Whole30-compatible sausage is a minefield — most brands sneak in sugar or carrageenan. Applegate Organic Chicken & Sage is clean, widely stocked, and browns beautifully. The Pederson's No Sugar Added line is the other reliable choice. Always read the panel; formulations change.",
    },
    items: [
      {
        rank: 1,
        name: "Small dice the sweet potato — quarter-inch, not bigger",
        summary:
          "This is the make-or-break step. Quarter-inch cubes hit tender-crisp in 10 minutes. Half-inch takes 18 and by then your sausage is overdone. Sharp chef's knife, take the extra minute, thank yourself.",
      },
      {
        rank: 2,
        name: "Sausage goes in first, cold pan, medium heat",
        summary:
          "Crumble the raw sausage into a cold 10-inch cast iron or carbon steel. Render the fat out slowly for the first 3-4 minutes. That fat is what cooks the sweet potato. Don't drain it.",
      },
      {
        rank: 3,
        name: "Sweet potato in the rendered fat, single layer",
        summary:
          "If it's piled up, it steams. Spread the diced sweet potato in a single layer, press down lightly with a spatula, leave it alone for 4 minutes. Flip, 4 more, stir, 2 more.",
      },
      {
        rank: 4,
        name: "Peppers and onion go in last, not first",
        summary:
          "They cook fast. If you start them with the sweet potato, they're mush by the end. Add diced red bell pepper and yellow onion at the 8-minute mark — they want 5-6 minutes, max.",
      },
      {
        rank: 5,
        name: "Eggs — nestled in, lid on",
        summary:
          "Make two wells in the hash with the back of your spatula. Crack an egg into each. Lid on, 3-4 minutes for runny yolks, 5 for set. The trapped steam sets the whites without flipping.",
      },
      {
        rank: 6,
        name: "Cast iron or carbon steel, not nonstick",
        summary:
          "Lodge cast iron or a De Buyer carbon steel. Nonstick doesn't brown the sweet potato the same way. If all you have is nonstick, crank the heat a touch — you won't get the same crust but you'll get closer.",
      },
      {
        rank: 7,
        name: "Skip the potato starch trick",
        summary:
          "Some hash recipes have you toss the sweet potato in tapioca or potato starch for crispness. It's Whole30-compliant but unnecessary — dice small enough, give it heat, and you don't need it. Fewer ingredients, same result.",
      },
      {
        rank: 8,
        name: "Avocado on top, not inside",
        summary:
          "Sliced avocado on top of the finished hash, not cooked in. Half a medium avocado per serving. Adds fat, fiber, and the creamy counterpoint to the crispy base.",
      },
      {
        rank: 9,
        name: "Cilantro and hot sauce finish",
        summary:
          "Chopped cilantro (or parsley if you're in the soap-tasting camp) and Siete hot sauce or Frank's RedHot for Whole30. Tessemae's is another clean option. A generous shake per serving.",
      },
      {
        rank: 10,
        name: "Double the batch, meal prep the base",
        summary:
          "The hash base (no eggs) keeps 4 days in the fridge. Reheat in a skillet, 3 minutes, then crack fresh eggs. This is the Monday-morning-5:45am move: 6 minutes from fridge to plate.",
      },
      {
        rank: 11,
        name: "Breakfast or dinner — it works both ways",
        summary:
          "This is also one of my favorite post-workout Whole30 dinners. Same recipe, add a second egg, serve with a side of roasted broccoli. 38g protein, under 600 calories.",
      },
      {
        rank: 12,
        name: "The non-Whole30 upgrades",
        summary:
          "Once you're off Whole30: crumbled feta, a drizzle of labneh, or a spoonful of Fage Greek yogurt on top. A slice of sourdough on the side. All of these improve the dish — noted because Whole30 isn't forever, and the recipe transitions well.",
      },
    ],
    faq: [
      {
        q: "Can I use regular potato instead of sweet potato?",
        a: "Whole30 allows white potatoes as of the 2020 rules update. Yukon Gold or russets both work — small dice, same method. Expect a slightly different browning pattern and less sweetness. The recipe is equally good; pick what's in the pantry.",
      },
      {
        q: "Is pre-diced sweet potato from the store a reasonable shortcut?",
        a: "Sometimes yes. Trader Joe's sells diced sweet potato in a bag that cooks well. The frozen cubed versions usually don't — they steam more than they fry. Fresh pre-diced is the middle ground. Dicing takes 3 minutes if the knife is sharp; that's the real answer.",
      },
      {
        q: "What sausage brands are actually Whole30?",
        a: "Applegate Organic (most varieties), Pederson's No Sugar Added, Teton Waters Ranch, and Butcher Box's house sausage. Read the panel every time — formulations update. Look for no sugar, no carrageenan, no seed-oil-heavy marinades. If it says 'natural flavor' with no clarification, skip it during the strict 30 days.",
      },
      {
        q: "How long does the leftover hash keep?",
        a: "Base (no egg) keeps 4 days in an airtight container. Reheat in a skillet with a teaspoon of avocado oil — don't microwave, it turns the sweet potato gummy. Freeze for up to 2 months in meal-prep containers; thaw overnight, reheat in a skillet.",
      },
      {
        q: "Can I do this without eggs?",
        a: "Yes. Swap in more sausage — 6oz total instead of 4oz — and add a handful of spinach or kale at the end. You'll be under the 28g protein target unless you bump the sausage. For dairy-tolerant Whole30-adjacent eating, a dollop of labneh covers the creamy role eggs would have played.",
      },
      {
        q: "Does it really hit 28g protein?",
        a: "Per serving, with 2 eggs (14g) and 2oz sausage (14g), yes. If the sausage is light or the eggs are small, you're closer to 24g. Bump to 3 eggs or add an extra ounce of sausage if macros are load-bearing. USDA FoodData Central is where I pull the numbers.",
      },
    ],
    sources: [
      {
        label: "USDA FoodData Central — sweet potato, egg, chicken sausage nutrient values.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "Whole30 — Official program rules and compatible ingredients.",
        url: "https://whole30.com/",
      },
      {
        label: "Serious Eats — hash and egg cookery methodology (Kenji López-Alt).",
        url: "https://www.seriouseats.com/",
      },
      {
        label: "Cook's Illustrated — cast iron and carbon steel pan testing.",
        url: "https://www.americastestkitchen.com/cooksillustrated",
      },
    ],
  },
  {
    slug: "ginger-turmeric-salmon",
    title: "Ginger-Turmeric Salmon",
    h1: "Ginger-turmeric salmon",
    description:
      "A 20-minute anti-inflammatory salmon with turmeric, ginger, garlic, and coconut aminos. 38g protein per fillet.",
    hub: "anti-inflammatory-recovery",
    peptideContext: "anti-inflammatory",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "published",
    totalTimeMinutes: 20,
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    servings: 2,
    dietTags: ["Anti-Inflammatory", "Paleo", "Whole30", "Gluten-Free", "Dairy-Free"],
    nutritionLedger: { calories: 340, proteinG: 38, fiberG: 1, sodiumMg: 420, satFatG: 2, addedSugarG: 0 },
    ourPick: {
      name: "Vital Choice Wild Sockeye Salmon",
      tier: "The fish",
      reason:
        "If you have a fish counter you trust, buy there. If you don't, Vital Choice ships wild Alaskan portioned fillets that thaw well and cook better than most grocery-store salmon. Sockeye has the richest omega-3 profile. Butcher Box's wild salmon add-on is the subscription alternative. Farmed Atlantic is fine if you go with ASC-certified, but wild is the upgrade.",
    },
    items: [
      {
        rank: 1,
        name: "Pat the fillets dry — completely",
        summary:
          "Wet fish steams. Dry fish sears. Paper towels, press firmly, both sides. Do this even if you think it looks dry. The difference in crust is enormous.",
      },
      {
        rank: 2,
        name: "Salt 15 minutes before cooking, not at the last minute",
        summary:
          "Kosher salt, half a teaspoon per fillet, on the counter while you make the glaze. This firms the flesh and seasons it through. Salting right before cooking pulls water to the surface — the opposite of what you want.",
      },
      {
        rank: 3,
        name: "Bloom the turmeric and ginger in oil, off the heat",
        summary:
          "Warm the oil, grated ginger, minced garlic, ground turmeric, and pepper in a small pan. When it sizzles softly (about 45 seconds), pull it from the heat. Let it sit while you preheat. This is your glaze base.",
      },
      {
        rank: 4,
        name: "Coconut aminos, not soy (if you want Whole30)",
        summary:
          "Coconut Secret coconut aminos is the default. Tablespoon into the glaze. If you're not on Whole30, tamari works — deeper flavor, slightly saltier. Don't skip this step; it's where umami comes from.",
      },
      {
        rank: 5,
        name: "400°F oven, skin-side down, parchment-lined sheet pan",
        summary:
          "Not 425, not 375. 400°F for 10-12 minutes depending on fillet thickness. Skin-side down on parchment — it releases cleanly and the skin crisps against the paper. A Nordic Ware sheet pan is what I use.",
      },
      {
        rank: 6,
        name: "Thickness dictates time, not the recipe",
        summary:
          "One-inch thick at the thickest point is the baseline. Thinner fillets come out at 8 minutes. Thicker (like a cold-water king) goes 13-14. Pull at 125°F internal — carryover cooks it to 130°F, which is where good salmon peaks.",
      },
      {
        rank: 7,
        name: "Brush the glaze on twice — once before, once after",
        summary:
          "Brush half the glaze on the fillets before they go in. Brush the remaining half on when they come out. Pre-bake glaze sets and concentrates; post-bake glaze stays bright. Both matter.",
      },
      {
        rank: 8,
        name: "Finish with lime, always",
        summary:
          "A wedge per plate, squeezed over just before serving. Acid cuts the richness of the salmon and brightens the turmeric. Lemon works too, but lime is more ginger-friendly.",
      },
      {
        rank: 9,
        name: "Cilantro on top, stems included",
        summary:
          "A small handful, chopped. Stems have the same flavor as the leaves and they're not wrong to eat. If cilantro tastes like soap to you, parsley or basil work — basil is the underrated swap here.",
      },
      {
        rank: 10,
        name: "Serve over jasmine rice or cauliflower rice",
        summary:
          "The glaze pools on the plate and wants a starch to soak it up. Jasmine if you're not restricting; cauliflower rice (frozen is fine — Trader Joe's works) if you're Whole30 or low-carb. The rice is the vehicle, not the star.",
      },
      {
        rank: 11,
        name: "Make the glaze 3 days ahead",
        summary:
          "The glaze holds in a jar in the fridge for 3 days. Weeknight version: salmon out at 5:30, glaze from the fridge, oven on, 20 minutes later you're eating. Batch the glaze if you cook salmon weekly.",
      },
      {
        rank: 12,
        name: "Flake leftovers over salad the next day",
        summary:
          "Salmon doesn't reheat gracefully. What it does do: flake beautifully, cold, over a bed of greens with a spoon of the glaze thinned with olive oil. Better than reheated. Plan for this explicitly.",
      },
    ],
    faq: [
      {
        q: "Can I use frozen salmon?",
        a: "Yes, if you thaw it properly. Overnight in the fridge, or 30 minutes under cold running water in sealed plastic. Never thaw on the counter. Pat it extra dry — frozen fish holds more water. The cook time is the same once thawed.",
      },
      {
        q: "Skin on or off?",
        a: "Skin on, always. It protects the flesh from overcooking, crisps against the parchment, and you can peel it off at the plate if you don't want to eat it. The omega-3s and flavor are in the fat right under the skin, so removing it early costs you both.",
      },
      {
        q: "How do I know when it's done without a thermometer?",
        a: "Press the top of the thickest part with the back of a fork. If it flakes easily and the flakes separate cleanly, it's done. If you see any translucent pink in the flake lines, give it 2 more minutes. A $25 instant-read thermometer (Thermapen One is the premium pick, ThermoPop is the budget one) saves you the guesswork.",
      },
      {
        q: "Can I grill this instead of baking?",
        a: "Yes — medium-high, skin-side down, 6 minutes, flip, 2 minutes. The glaze will char quickly, so brush before and after, not during. Use a well-oiled grate. Cast iron grill pan indoors works the same way.",
      },
      {
        q: "What's the sodium story?",
        a: "About 420mg per serving as written, with the coconut aminos doing most of the work. If you're sodium-restricted, cut the added salt and rely on the aminos alone — that drops it closer to 290mg. USDA FDC is the source for the unsalted salmon numbers.",
      },
      {
        q: "Does the turmeric actually do anything?",
        a: "The curcumin evidence for inflammation modulation is reasonable (Hewlings & Kalman 2017) at culinary doses over time, especially paired with black pepper. One meal is not therapy. Twice a week for a year, as part of a broader pattern, is where the signal shows up. I cook with it because it tastes good; the research is a tailwind.",
      },
    ],
    sources: [
      {
        label: "USDA FoodData Central — wild sockeye salmon nutrient profile.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "NIH Office of Dietary Supplements — Omega-3 Fatty Acids.",
        url: "https://ods.od.nih.gov/",
      },
      {
        label: "Hewlings SJ, Kalman DS. Curcumin: A review of its effects on human health. Foods. 2017.",
        url: "https://www.mdpi.com/journal/foods",
      },
      {
        label: "Serious Eats — salmon cookery deep-dive (Kenji López-Alt).",
        url: "https://www.seriouseats.com/",
      },
      {
        label: "Cook's Illustrated — pan-seared and roasted salmon testing.",
        url: "https://www.americastestkitchen.com/cooksillustrated",
      },
    ],
  },
  {
    slug: "greek-lemon-chicken",
    title: "Greek Lemon Chicken",
    h1: "Greek lemon chicken",
    description:
      "Bone-in thighs, lemon, oregano, garlic — a Mediterranean pillar recipe, 45 minutes, 36g protein.",
    hub: "muscle-preservation",
    peptideContext: "muscle-preservation",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 5,
    status: "published",
    totalTimeMinutes: 45,
    prepTimeMinutes: 10,
    cookTimeMinutes: 35,
    servings: 4,
    dietTags: ["Mediterranean", "Gluten-Free", "Dairy-Free"],
    nutritionLedger: { calories: 380, proteinG: 36, fiberG: 1, sodiumMg: 480, satFatG: 6, addedSugarG: 0 },
    ourPick: {
      name: "Lodge 12-inch Cast Iron Skillet",
      tier: "The pan",
      reason:
        "A 12-inch cast iron skillet is the right pan for this recipe — enough surface area for 8 thighs to sear without crowding, and it goes from stovetop to oven. Lodge is the unpretentious correct answer; the Smithey is beautiful but 3x the price and not better for this. A Staub braiser does the same job if you've already got one.",
    },
    items: [
      {
        rank: 1,
        name: "Bone-in, skin-on thighs. Always.",
        summary:
          "Boneless skinless will dry out in the time it takes for the Greek flavors to penetrate. The bone adds moisture, the skin renders and bastes. This is a 30-year technique in Greek home cooking for a reason.",
      },
      {
        rank: 2,
        name: "Dry brine 30 minutes (or 24 hours)",
        summary:
          "Kosher salt on both sides, 30 minutes on a rack in the fridge. If you have overnight, even better — the salt works into the flesh and the skin dries out, which means crispier sear. Twenty-four hours is the ceiling; beyond that it gets cured.",
      },
      {
        rank: 3,
        name: "Oregano — dried, not fresh",
        summary:
          "This is one of the few dishes where dried herb beats fresh. Dried oregano (Greek if you can find it — Krinos or Burlap & Barrel both make it) has the concentrated, slightly minty profile the dish wants. Fresh oregano is too grassy.",
      },
      {
        rank: 4,
        name: "Lemon, two ways — zest and juice",
        summary:
          "Zest of two lemons rubbed into the chicken along with the oregano and garlic. Juice of those same lemons added to the pan after the sear. Zest carries oil-soluble flavor, juice adds acid. Both, not one.",
      },
      {
        rank: 5,
        name: "Grate the garlic, don't mince",
        summary:
          "Microplane 4 cloves directly into the oil. Microplaned garlic distributes evenly, burns less, and melts into the marinade. Minced garlic has hot pockets that burn when the thighs go in the pan.",
      },
      {
        rank: 6,
        name: "Sear skin-side down, 7 minutes, undisturbed",
        summary:
          "Cold cast iron, medium-high heat, thighs in skin-side down. Do not move them. Set a timer. The skin won't release until it's ready — around 7 minutes — and when it does, it's golden, not beige.",
      },
      {
        rank: 7,
        name: "Finish in a 400°F oven, 20 minutes",
        summary:
          "After the sear, flip the thighs, pour the lemon juice and a half-cup of chicken broth around them, slide the whole pan into the oven. 20 minutes. Internal temp 175°F — thighs are forgiving; up to 185°F is still juicy.",
      },
      {
        rank: 8,
        name: "Rest 10 minutes before plating",
        summary:
          "Pull the pan, tent foil loosely over it, walk away. The juices redistribute, the skin stays crisp because the foil is tented not pressed. This step alone is the difference between juicy and okay.",
      },
      {
        rank: 9,
        name: "Spoon the pan sauce over, don't skip it",
        summary:
          "The fond, lemon juice, and rendered chicken fat in the pan becomes the sauce. Whisk in a tablespoon of olive oil off-heat to emulsify. Pour over the chicken. This is 30 seconds of work and half the flavor on the plate.",
      },
      {
        rank: 10,
        name: "Serve with rice, potatoes, or a Greek salad",
        summary:
          "Traditional: lemon-oregano potatoes roasted alongside. Weeknight: rice pilaf or farro. Lighter: just a Greek salad — tomatoes, cucumber, red onion, feta, olive oil, red wine vinegar. All work; pick the one that fits the week.",
      },
      {
        rank: 11,
        name: "Leftovers shine in three forms",
        summary:
          "Chicken + rice + pan juices reheated for lunch. Pulled and tossed in a grain bowl. Shredded into Greek-style chicken salad — yogurt, dill, lemon, cucumber. Plan for the leftovers explicitly; this recipe gives you two more meals.",
      },
      {
        rank: 12,
        name: "Not just cast iron — Dutch oven works too",
        summary:
          "A Le Creuset or Staub Dutch oven (5-7qt) does the same job. Slightly less crispy on the skin because the walls are taller, but the pan sauce is deeper. This is my winter version; cast iron is my summer version.",
      },
    ],
    faq: [
      {
        q: "Can I use boneless skinless thighs?",
        a: "You can, but the recipe loses something. Cut the total cooking time to 22-25 minutes. Dry brine for only 15 minutes. Add an extra tablespoon of olive oil to compensate for no rendered skin fat. It's still good — just not the same dish. Bone-in is worth the 20 extra minutes.",
      },
      {
        q: "What if I only have ground oregano?",
        a: "Use two-thirds the amount called for. Ground oregano is more concentrated and can taste dusty if overused. The leafier dried oregano is the first choice. If you can find Greek oregano specifically (Krinos), the flavor is noticeably brighter.",
      },
      {
        q: "Can I make this in an air fryer?",
        a: "Yes. 380°F for 22-25 minutes, skin-side up. You lose the fond-based pan sauce, so make a quick version by simmering lemon juice, garlic, oregano, and 2 tablespoons olive oil in a small pan for 3 minutes. Not identical but quite good.",
      },
      {
        q: "How do I keep the skin crispy?",
        a: "Three things: dry brine so the skin loses moisture, sear it long enough for real color (7 minutes), and rest the chicken tented loosely with foil — not wrapped tight. If you're serving in 20 minutes instead of 10, tent even more loosely.",
      },
      {
        q: "Does this freeze well?",
        a: "Cooked thighs freeze fine — 2 months in an airtight container. Freeze them in the pan sauce; it protects the meat from freezer burn. Thaw overnight in the fridge, reheat in a 325°F oven for 15 minutes. Skin won't re-crisp, so plan to eat them shredded rather than as whole thighs.",
      },
      {
        q: "Can I scale for a crowd?",
        a: "Yes — this doubles cleanly. Two pans, rotate them halfway through oven time. Triple gets unwieldy in most home kitchens; at that scale, switch to sheet pans at 425°F (less pan sauce, faster). Figures are in the recipe.",
      },
    ],
    sources: [
      {
        label: "USDA FoodData Central — chicken thigh, bone-in, skin-on nutrient values.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "Serious Eats — dry-brining poultry methodology (Kenji López-Alt).",
        url: "https://www.seriouseats.com/",
      },
      {
        label: "Cook's Illustrated — cast-iron chicken thigh testing.",
        url: "https://www.americastestkitchen.com/cooksillustrated",
      },
      {
        label: "Diane Kochilas — Greek home cooking traditions and recipe references.",
        url: "https://www.dianekochilas.com/",
      },
    ],
  },
  {
    slug: "cottage-cheese-ice-cream-vanilla",
    title: "Cottage Cheese Ice Cream — Vanilla",
    h1: "Cottage cheese ice cream — vanilla",
    description:
      "Blended cottage cheese, honey, vanilla, a pinch of salt — frozen in a loaf pan. 22g protein per serving.",
    hub: "glp1-friendly",
    peptideContext: "glp1-friendly",
    postType: "cluster",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 4,
    status: "published",
    totalTimeMinutes: 240,
    prepTimeMinutes: 10,
    cookTimeMinutes: 230,
    servings: 4,
    dietTags: ["High-Protein", "Vegetarian", "Gluten-Free"],
    nutritionLedger: { calories: 180, proteinG: 22, fiberG: 0, sodiumMg: 320, satFatG: 3, addedSugarG: 10 },
    ourPick: {
      name: "Vitamix E310 Explorian",
      tier: "The blender",
      reason:
        "For a smooth cottage cheese base, a high-power blender matters more than for almost any other protein recipe. A Vitamix turns cottage cheese into something that tastes like soft-serve. Ninja Foodi Power Blender is the $150 alternative. A cheap immersion blender won't get you there — don't try to save money on this one if you plan to make it often.",
    },
    items: [
      {
        rank: 1,
        name: "4% cottage cheese only",
        summary:
          "Low-fat cottage cheese gets icy. You want the fat for creaminess and the structural lipids that prevent crystal formation. Good Culture whole milk, Nancy's organic, or Daisy 4% are the brands that work.",
      },
      {
        rank: 2,
        name: "Blend for 2 full minutes, not 30 seconds",
        summary:
          "Under-blended cottage cheese has curd texture that freezes into grittiness. Two full minutes on high, scraping down once, until the mixture looks like thick cream. Take the time.",
      },
      {
        rank: 3,
        name: "Honey, maple, or date syrup — not sugar",
        summary:
          "Liquid sweeteners dissolve fully in the base and stay fluid at freezing temperatures, which keeps the texture softer. Honey is my default. Pure maple syrup is the vegan swap (though cottage cheese already rules out strict vegan). Cane sugar granules stay grainy.",
      },
      {
        rank: 4,
        name: "Real vanilla, not imitation",
        summary:
          "Two teaspoons of real vanilla extract, or the seeds from half a vanilla pod if you're feeling it. Imitation vanilla tastes one-note in this base. Nielsen-Massey or Singing Dog are reliable brands.",
      },
      {
        rank: 5,
        name: "A pinch of salt — don't skip it",
        summary:
          "A quarter teaspoon of Maldon or kosher salt in the blender. It doesn't make it salty; it sharpens the vanilla and the cottage cheese tang. This is standard ice cream technique; don't break from it.",
      },
      {
        rank: 6,
        name: "Loaf pan + parchment, not a container",
        summary:
          "Line a standard loaf pan with parchment, leave overhang. Spoon the blended base in, smooth the top. When frozen, the parchment lets you lift the block out cleanly and cut it with a warm knife.",
      },
      {
        rank: 7,
        name: "Freeze 4 hours minimum, 6 is better",
        summary:
          "At 4 hours it's scoopable; at 6 it's sliceable like a semifreddo. If it freezes overnight and gets rock-hard, let it sit on the counter 10 minutes before cutting.",
      },
      {
        rank: 8,
        name: "Scoopable rescue — microwave the block",
        summary:
          "If it's too hard to scoop, microwave the whole loaf (out of the pan, on a plate) for 20 seconds. Not longer. This softens the surface without melting the interior.",
      },
      {
        rank: 9,
        name: "Mix-ins go in at the half-freeze mark",
        summary:
          "At the 2-hour mark, pull the pan. Fold in chocolate chips, berries, crumbled graham. If you blend them in, they sink or blend into sludge. Fold at 2 hours, refreeze.",
      },
      {
        rank: 10,
        name: "The chocolate swirl version",
        summary:
          "Melt 2 tablespoons of high-quality dark chocolate (Guittard 70% or similar) with a teaspoon of coconut oil. Drizzle over the base in the loaf pan, swirl with a knife. Freezes into ribbons. This is the version that disappears first at my house.",
      },
      {
        rank: 11,
        name: "Don't skip the 10-minute temper",
        summary:
          "Before serving, 10 minutes on the counter. Cold cottage cheese ice cream served frozen-solid tastes less sweet and less vanilla — the flavors are muted by the cold. Let it warm slightly and the flavor doubles.",
      },
      {
        rank: 12,
        name: "Stores 2 weeks, then texture degrades",
        summary:
          "Two weeks in the freezer is the clean window. After that, ice crystals start forming and the texture gets closer to shaved ice. Make in batches you'll eat inside 10 days for the best version.",
      },
    ],
    faq: [
      {
        q: "Does it really taste like ice cream?",
        a: "It tastes like a high-protein frozen yogurt, not Häagen-Dazs. The texture is closer to soft-serve than scoop ice cream — creamy, slightly tangy, very satisfying. If you're expecting a straight substitute for Ben & Jerry's, you'll be disappointed. If you're expecting a protein-dense dessert that actually works, you won't.",
      },
      {
        q: "Can I use low-fat cottage cheese?",
        a: "I don't recommend it. Low-fat freezes into a much icier texture — noticeably gritty. The fat in 4% is structural here, not just flavor. If dairy fat is a concern, have a smaller portion of the full-fat version rather than a larger portion of the low-fat.",
      },
      {
        q: "How much actual added sugar is in it?",
        a: "About 10g per serving as written (with 3 tablespoons honey across 4 servings). Compared to commercial ice cream at 20-30g per serving, it's a meaningful reduction, especially given the 22g of protein you're getting. You can cut the honey to 2 tablespoons and it's still pleasantly sweet.",
      },
      {
        q: "Can I make this dairy-free?",
        a: "Not with this recipe — cottage cheese is the load-bearing ingredient. For a dairy-free protein ice cream, you'd need a different base (silken tofu + plant protein powder + coconut cream) and it's a different recipe. I haven't tested a version I'd publish.",
      },
      {
        q: "What's the best mix-in combination?",
        a: "My short list: dark chocolate chunks + tart cherries, graham crackers + honey + cinnamon (key lime pie adjacent), strawberries + balsamic reduction (summer version), or salted peanut butter swirl. All fold-in, not blend-in — that's the rule.",
      },
      {
        q: "Why is mine grainy?",
        a: "Three common reasons: you didn't blend long enough (two full minutes), you used low-fat cottage cheese, or you froze it too fast and too long without tempering before serving. The first is the most common fix. Run the blender longer.",
      },
    ],
    sources: [
      {
        label: "USDA FoodData Central — cottage cheese 4% and honey nutrient values.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "Serious Eats — the science of ice cream texture (Kenji López-Alt, Stella Parks).",
        url: "https://www.seriouseats.com/",
      },
      {
        label: "Cook's Illustrated — testing no-churn frozen dessert methods.",
        url: "https://www.americastestkitchen.com/cooksillustrated",
      },
      {
        label: "Good Culture — fat content specifications for 4% cottage cheese.",
        url: "https://goodculture.com/",
      },
    ],
  },
  {
    slug: "how-to-roast-a-whole-chicken",
    title: "How to Roast a Whole Chicken",
    h1: "How to roast a whole chicken",
    description:
      "The technique pillar — dry brine, spatchcock, high heat, sheet pan. 2 hours total, 6 servings.",
    hub: "bone-tendon-health",
    peptideContext: "bone-tendon",
    postType: "pillar",
    publishedAt: "2026-04-21",
    updatedAt: "2026-04-21",
    readingTime: 12,
    status: "published",
    totalTimeMinutes: 120,
    prepTimeMinutes: 15,
    cookTimeMinutes: 70,
    servings: 6,
    dietTags: ["Anti-Inflammatory", "Mediterranean", "Gluten-Free", "Dairy-Free"],
    nutritionLedger: { calories: 420, proteinG: 48, fiberG: 0, sodiumMg: 520, satFatG: 6, addedSugarG: 0 },
    ourPick: {
      name: "Wüsthof Classic 8-inch Chef's Knife + Kitchen Shears",
      tier: "The spatchcock tools",
      reason:
        "To spatchcock a chicken well, you need real kitchen shears and a sharp chef's knife. Wüsthof Come-Apart shears are my default — they take the backbone out cleanly. The 8-inch Wüsthof Classic breaks the breastbone in one press. Victorinox is the budget alternative that does the same job at half the price; I'd go Victorinox first, upgrade later.",
    },
    items: [
      {
        rank: 1,
        name: "Start with a good bird — 4 to 4.5 lbs",
        summary:
          "Smaller roasts faster and more evenly. Over 5 lbs, the breast overcooks before the thighs hit temp. Mary's air-chilled, Bell & Evans, or a farmer's-market bird if you have one. Organic matters less than air-chilled and small.",
      },
      {
        rank: 2,
        name: "Dry brine 24 hours, minimum 12",
        summary:
          "Kosher salt (Diamond Crystal), one teaspoon per pound, rubbed all over including the cavity. Uncovered on a rack in the fridge for 24 hours. The skin dries out, the salt penetrates, the meat seasons all the way through. This is the single biggest upgrade you can make.",
      },
      {
        rank: 3,
        name: "Spatchcock — remove the backbone",
        summary:
          "Bird breast-side down, shears down either side of the spine, remove it. Flip, press the breastbone flat. Twenty seconds of work. The bird now cooks in 45 minutes instead of 75 and cooks evenly — breast and thigh finish at the same time.",
      },
      {
        rank: 4,
        name: "Keep the backbone — don't throw it out",
        summary:
          "The backbone goes into a freezer bag with any other chicken scraps. When you have two pounds, make stock. This is where your bone broth pipeline starts. Labeled, dated, freezer.",
      },
      {
        rank: 5,
        name: "Sheet pan + rack, not roasting pan",
        summary:
          "A half-sheet pan with a wire rack set inside. The bird sits on the rack, air circulates below. The drippings collect in the pan for gravy. A rimmed Nordic Ware sheet pan and any wire rack that fits.",
      },
      {
        rank: 6,
        name: "High heat, 425°F — not low and slow",
        summary:
          "Spatchcocked birds take high heat beautifully. 425°F for 45-55 minutes. The skin crisps hard, the meat stays juicy because the cook time is short. Low-and-slow roast chicken gives you soggy skin and dry breast.",
      },
      {
        rank: 7,
        name: "Butter and herbs under the skin, not on top",
        summary:
          "Compound butter — softened butter (Kerrygold, room temp) with thyme, garlic, lemon zest. Slide your fingers between the skin and the breast, push the butter in. This bastes the meat from the inside as it cooks. On top, it just melts off.",
      },
      {
        rank: 8,
        name: "Vegetables under the rack, not touching the bird",
        summary:
          "Halved shallots, carrots, lemon wedges, garlic heads in the sheet pan below the rack. They catch the drippings and roast into a side dish. Don't crowd — a single layer or they steam.",
      },
      {
        rank: 9,
        name: "Instant-read thermometer — 155°F breast, 175°F thigh",
        summary:
          "A Thermapen or any $25 instant-read. Breast at 155°F (carryover to 160-162°F resting), thigh at 175°F. This is the only reliable way to know. Time-and-visual-check is how people overcook birds for decades.",
      },
      {
        rank: 10,
        name: "Rest 15 minutes, tented loosely",
        summary:
          "The bird keeps cooking on the rack for 15 minutes. Tent with foil loose enough that steam escapes — tight tenting softens the skin. Juices redistribute, carving is cleaner, and the dinner is better.",
      },
      {
        rank: 11,
        name: "Pan sauce in 5 minutes while it rests",
        summary:
          "Pour off excess fat (save it — chicken fat is gold for frying eggs). Deglaze the sheet pan with half a cup of white wine or broth, scrape up the fond, reduce by half, whisk in a tablespoon of cold butter off-heat. Season. That's dinner-tier gravy in five minutes.",
      },
      {
        rank: 12,
        name: "Carve warm, not hot — and use the carcass",
        summary:
          "Breast off the bone, slice against the grain. Thighs and drumsticks whole or pulled. The carcass goes into the stockpot with that saved backbone (item 4) and whatever vegetable scraps you have. You get three meals: dinner, next-day leftovers, and a quart of stock.",
      },
    ],
    faq: [
      {
        q: "Do I really need to dry brine?",
        a: "You don't need to, but you should. A dry-brined chicken and an un-brined chicken side by side is a real comparison — the brined one seasons all the way through, the skin crisps dramatically better, and the meat holds moisture. Twelve hours is the minimum useful window; 24 is the sweet spot. Skip this step and every other step matters less.",
      },
      {
        q: "Spatchcock or roast whole?",
        a: "Spatchcock. I've tested both enough times to stop having the argument. Spatchcocked birds cook faster, more evenly, and have more crispy skin surface area. The only case for whole-roasting is presentation for a holiday table, and even then, the carved bird on a platter doesn't need to arrive whole.",
      },
      {
        q: "What if I don't have kitchen shears?",
        a: "You can spatchcock with a sharp chef's knife — cut down either side of the spine, press hard. It's harder and messier. Victorinox kitchen shears are $20 and they pay for themselves in the first use. Worth the small investment.",
      },
      {
        q: "Can I do this in a cast iron skillet instead?",
        a: "Yes — a 12-inch Lodge or Staub braiser. The bird won't spatchcock fully flat in a 10-inch, so size up. Drippings concentrate more, skin is slightly less crispy on the sides that touch the pan. Still a good roast; sheet pan is the default because the skin gets more uniform exposure.",
      },
      {
        q: "What's the fail mode to watch for?",
        a: "Two: bird too big (over 5 lbs — breast overcooks), and pulling it at the wrong temp. A $25 thermometer fixes the second. Buy the right size bird and you avoid the first. Other than that, high heat and time take care of themselves.",
      },
      {
        q: "How do I get really crispy skin?",
        a: "Three things, in order: dry brine 24 hours uncovered (skin dries out), pat the bird dry right before roasting, 425°F heat. Some people swear by a blast of 475°F for the last 10 minutes — I don't find it necessary if the first three are done well. Never tent foil during roasting; that steams the skin soft.",
      },
      {
        q: "What do I do with all the leftovers?",
        a: "Three meals plan: roast chicken for dinner (1), shredded chicken over grain bowls or in chicken salad for lunch (2), carcass into stock for a soup or risotto later in the week (3). A 4-lb bird feeds a family of four for one full dinner, gives you 2-3 servings of leftovers, and yields about a quart of stock. It's one of the best use-to-effort ratios in home cooking.",
      },
    ],
    sources: [
      {
        label: "López-Alt JK. The Food Lab — spatchcocked roast chicken technique. Serious Eats.",
        url: "https://www.seriouseats.com/",
      },
      {
        label: "Cook's Illustrated — high-heat roast chicken and dry-brining methodology.",
        url: "https://www.americastestkitchen.com/cooksillustrated",
      },
      {
        label: "USDA FoodData Central — whole roasted chicken nutrient values.",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "USDA Food Safety and Inspection Service — safe minimum internal temperatures.",
        url: "https://www.fsis.usda.gov/",
      },
      {
        label: "Samin Nosrat — Salt, Fat, Acid, Heat (technique reference).",
        url: "https://www.saltfatacidheat.com/",
      },
    ],
  },
  {
    slug: "cottage-cheese-pancakes",
    title: "Cottage Cheese Pancakes — 28g Protein, 12 Minutes",
    h1: "Cottage cheese pancakes",
    description:
      "Three-ingredient cottage cheese pancakes — 28g protein per stack of three, 12 minutes start to plate. Tested for GLP-1 patients front-loading morning protein.",
    hub: "muscle-preservation",
    peptideContext: "muscle-preservation",
    postType: "cluster",
    publishedAt: "2026-04-23",
    updatedAt: "2026-04-23",
    readingTime: 6,
    status: "published",
    featured: true,
    totalTimeMinutes: 12,
    prepTimeMinutes: 4,
    cookTimeMinutes: 8,
    servings: 1,
    dietTags: ["High-Protein", "Gluten-Free Optional", "Vegetarian"],
    nutritionLedger: { calories: 340, proteinG: 28, fiberG: 3, sodiumMg: 380, satFatG: 4, addedSugarG: 0 },
    reviewedBy: "lena-marsh",
    testNotes: [
      {
        test: 1,
        triedThis: "Whisked-by-hand batter, 1:1:1 ratio of cottage cheese to eggs to oats, cooked on medium heat in olive oil.",
        whatHappened: "Visible curd in the pancake (texture issue, but acceptable), pancake browned before centre set, oil flavour fought with the dairy.",
        changedThis: "Switched to a stick-blender batter, dropped heat to medium-low, swapped olive oil for butter.",
      },
      {
        test: 2,
        triedThis: "Blended batter, medium-low heat, butter, single large pancake (8-inch).",
        whatHappened: "Single pancake was fragile to flip — broke twice in three attempts. Centre was correct but presentation was poor.",
        changedThis: "Switched to three small pancakes (1 heaped tablespoon each), kept everything else.",
      },
      {
        test: 3,
        triedThis: "Three small pancakes, blended batter rested 4 minutes, medium-low heat, butter.",
        whatHappened: "Flipped cleanly on a thin fish slice, set in 90 seconds a side, stacked into a 28g-protein portion. Repeated successfully on day 5 from a fridge-stored batter.",
        changedThis: "This is the published version. The 4-minute rest was the variable that locked the texture in.",
      },
    ],
    ourPick: {
      name: "Good Culture 4% Cottage Cheese",
      tier: "The protein engine",
      reason:
        "I've made these with five brands. Good Culture's curd structure holds together when whisked into the egg-and-oat base — supermarket-own often goes watery. The 4% fat version makes a richer pancake and the lactose drops slightly with the longer culture time. UK readers: Longley Farm cottage cheese is the closest equivalent.",
    },
    items: [
      {
        rank: 1,
        name: "The ratio is half cup cottage cheese, two eggs, quarter cup oats",
        summary:
          "Half a cup of 4% cottage cheese, two large eggs, a quarter cup of rolled oats. Pinch of salt. That is the entire batter. No flour, no milk, no baking powder. The eggs lift the pancake, the oats give it structure, the cottage cheese carries the flavour and 14g of the protein.",
      },
      {
        rank: 2,
        name: "Blend it — don't whisk it",
        summary:
          "A whisk leaves curd visible in the pancake, which is fine for texture but means the protein is less evenly distributed. A 30-second blitz in a small blender (or a stick blender in a jug) gives you a smooth pourable batter. Either works; pick by mood.",
      },
      {
        rank: 3,
        name: "Rest the batter for 4 minutes while the pan heats",
        summary:
          "The oats need to hydrate. 4 minutes is the sweet spot — longer and the pancake feels gummy, shorter and the oat fragments stay sandy. Heat the pan to medium-low while you wait. This is also when you crack out the toppings.",
      },
      {
        rank: 4,
        name: "Medium-low heat, butter not oil",
        summary:
          "Cottage cheese has more water than buttermilk. On high heat, the pancake browns before the centre sets. Medium-low — about 3 on a typical induction hob — and a teaspoon of butter (not oil) per batch. Butter browns slower than oil and adds flavour the bland batter wants.",
      },
      {
        rank: 5,
        name: "Three pancakes per portion, not one large one",
        summary:
          "A single big pancake is hard to flip without breaking. Three small ones (a heaped tablespoon each) cook in 90 seconds a side, flip cleanly, and stack into the protein target you actually want — three pancakes is 28g.",
      },
      {
        rank: 6,
        name: "Wait for the bubbles to set before flipping",
        summary:
          "Standard pancake rule applies: bubbles on the surface, edges look matte not wet. About 90 seconds. Flip with a thin fish slice — the cottage cheese makes the underside slightly more delicate than a flour pancake.",
      },
      {
        rank: 7,
        name: "Berry compote in 90 seconds — no sugar needed",
        summary:
          "Half a cup of frozen blueberries or raspberries in a small pan, 90 seconds on high while the pancakes cook. The berries break down and release enough natural sugar to taste like jam. A squeeze of lemon at the end. Skip the maple syrup — the compote is doing that job.",
      },
      {
        rank: 8,
        name: "GLP-1 portion: stop at two, save the third for later",
        summary:
          "If you're on Mounjaro, Ozempic, Wegovy, or Zepbound and morning appetite collapses around the second pancake — eat the two, plate the third with a tablespoon of cottage cheese on the side, cling-film it, treat it as your 10am snack. The protein target still lands.",
      },
      {
        rank: 9,
        name: "Bump to 38g protein with a soft-boiled egg",
        summary:
          "One soft-boiled egg on the side adds 6-7g of protein and breaks up the sweet profile. 6 minutes from cold tap to soft yolk. Crack and tip onto the pancakes; the yolk runs and replaces any need for syrup.",
      },
      {
        rank: 10,
        name: "Make-ahead: blend the batter Sunday, store 5 days",
        summary:
          "The batter holds in the fridge for 5 days in a sealed jar. Pour, cook, eat — 5 minutes weekday morning. The eggs can curdle slightly on day 5; a 10-second re-blitz fixes it. This is the GLP-1-friendly version: zero decision-making at 7am.",
      },
    ],
    faq: [
      {
        q: "Why cottage cheese instead of protein powder?",
        a: "Real food. Cottage cheese gives you slow-digesting casein and fast-digesting whey in the natural ratio dairy ships them in, plus calcium, plus a little sodium. Protein powders work — they're just not better than cottage cheese for this recipe, and the texture is materially worse. Save the powder for shakes.",
      },
      {
        q: "I'm on Wegovy and morning is the only time I'm hungry. Is this a good fit?",
        a: "Yes. We chose cottage-cheese pancakes specifically for the Wegovy / Mounjaro / Ozempic / Zepbound morning slot. They sit warm-but-not-fragrant, the protein density is high (28g in 340 kcal), and the texture is soft. If you can manage three, you've banked the day's first protein floor before evening appetite collapses.",
      },
      {
        q: "Can I use blender oats / flour / no oats?",
        a: "Rolled oats are the version we tested most. Quick oats blitz finer and produce a slightly denser pancake — fine. Plain flour (40g) works structurally but loses the fibre. No oats at all is fine if you blend longer; pancakes are thinner but still hold. Don't substitute almond flour 1:1, it absorbs too little water.",
      },
      {
        q: "What's the children-friendly version?",
        a: "Same recipe, swap the salt pinch for a teaspoon of vanilla, and serve with the berry compote. The pancakes are mild-flavoured by default — the only dial is sweetness, and the compote handles that without added sugar.",
      },
    ],
    sources: [
      {
        label: "USDA FoodData Central — Cottage cheese, low-fat, 2% milkfat (FDC ID 174261).",
        url: "https://fdc.nal.usda.gov/fdc-app.html#/food-details/174261/nutrients",
      },
      {
        label: "Phillips SM, Chevalier S, Leidy HJ. Protein 'requirements' beyond the RDA: implications for optimizing health. Appl Physiol Nutr Metab. 2017.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26960445/",
      },
      {
        label: "Morton RW, Murphy KT, McKellar SR, et al. A systematic review and meta-analysis of resistance training on protein supplementation. Br J Sports Med. 2018.",
        url: "https://pubmed.ncbi.nlm.nih.gov/28698222/",
      },
      {
        label: "Cook's Illustrated — pancake batter rest time and bubble-set test (technique reference).",
        url: "https://www.americastestkitchen.com/cooksillustrated",
      },
    ],
  },
  {
    slug: "bone-broth",
    title: "Bone Broth — Slow Method, Real Gel, Sippable",
    h1: "Bone broth, the slow method",
    description:
      "A 24-hour bone broth recipe that gels at the fridge — collagen-rich, low-sodium, sippable from a mug. Tested for connective-tissue support alongside BPC-157 and TB-500 protocols.",
    hub: "bone-tendon-health",
    peptideContext: "bone-tendon",
    postType: "cluster",
    publishedAt: "2026-04-23",
    updatedAt: "2026-04-23",
    readingTime: 7,
    status: "published",
    featured: true,
    totalTimeMinutes: 1480,
    prepTimeMinutes: 40,
    cookTimeMinutes: 1440,
    servings: 8,
    dietTags: ["Whole30", "Paleo", "Dairy-Free", "Gluten-Free"],
    nutritionLedger: { calories: 60, proteinG: 9, fiberG: 0, sodiumMg: 240, satFatG: 1, addedSugarG: 0 },
    reviewedBy: "lena-marsh",
    testNotes: [
      {
        test: 1,
        triedThis: "Stockpot on the lowest hob setting, 18 hours, unroasted bones, salted at the start.",
        whatHappened: "Pale, weak broth that didn't gel at the fridge. Sodium was too high by hour 16. Aromatics had over-extracted and turned bitter.",
        changedThis: "Roasted the bones at 220°C for 30 minutes first, dropped the salt entirely, moved aromatics to hour 2 instead of hour 0.",
      },
      {
        test: 2,
        triedThis: "Roasted bones, slow cooker on low for 20 hours, ACV cold-water start, no salt, aromatics added hour 2.",
        whatHappened: "Strong flavour, partial fridge gel (jiggle but not solid), aromatics held cleanly. Bones still had structure — collagen extraction wasn't complete.",
        changedThis: "Extended cook to a full 24 hours and added a 30-minute pre-soak with ACV before the heat went on.",
      },
      {
        test: 3,
        triedThis: "Full method as published — roast 30 min, 30-min cold ACV soak, 24 hours on low, aromatics hour 2, salt at the mug.",
        whatHappened: "Full fridge gel — the broth shook in the jar like jelly. Bones crumbled when poked. 8 cups yield from a 2.5kg bone batch.",
        changedThis: "This is the published recipe. Two further runs with the same parameters gave the same gel and the same yield.",
      },
    ],
    ourPick: {
      name: "A 6-quart slow cooker with a low setting",
      tier: "The vessel",
      reason:
        "We tested this in a stockpot, an Instant Pot, and three slow cookers. The slow cooker wins for one reason: 24 hours hands-off. The Instant Pot takes 3 hours but the gel structure is slightly weaker — the longer low-and-slow extracts more collagen. A 6-quart Crock-Pot or Hamilton Beach is fine; you don't need a fancy one.",
    },
    items: [
      {
        rank: 1,
        name: "Roast the bones first — 30 minutes at 220C",
        summary:
          "2.5 kg of mixed bones — beef knuckles, marrow bones, and one or two oxtail pieces — on a tray, 30 minutes at 220°C / 425°F until deep brown. This is the single biggest flavour decision. Unroasted bones make a pale, weak broth. Roasted bones make a broth that tastes like a roast dinner.",
      },
      {
        rank: 2,
        name: "Cold-water start — never boil",
        summary:
          "Bones into the slow cooker, cover with cold filtered water (around 3 litres), add 2 tablespoons of apple cider vinegar and let sit for 30 minutes before turning the heat on. The acid pulls calcium and collagen out of the bone matrix. Cold-start prevents albumin scumming the surface.",
      },
      {
        rank: 3,
        name: "Aromatics in the second hour, not at the start",
        summary:
          "Onion (skin on, halved), 4 cloves of garlic (smashed, skin on), a leek green, two bay leaves, a small handful of black peppercorns. Add them after the broth has come up to temperature and skimmed once — adding aromatics to cold water means they over-extract and turn the broth slightly bitter by hour 18.",
      },
      {
        rank: 4,
        name: "24 hours on low for beef, 12 for chicken",
        summary:
          "Beef bones need the full 24 to break down properly. Chicken bones (whole carcass + a couple of feet if your butcher has them) only need 12. After 24 hours on a beef broth, you can crush the knuckle bones with the back of a spoon — that's the texture you're after.",
      },
      {
        rank: 5,
        name: "No salt during the cook",
        summary:
          "Salt during a 24-hour reduction concentrates beyond what you'll want at the end. Cook salt-free, salt at the mug. A pinch of Maldon and a squeeze of lemon when you sip — that's the seasoning. This is also why our broth is 240mg sodium per cup vs. 600mg+ in supermarket versions.",
      },
      {
        rank: 6,
        name: "Strain twice — fine sieve, then cheesecloth",
        summary:
          "Sieve the broth into a large bowl through a fine-mesh sieve first to catch the bones and aromatic debris. Then strain a second time through cheesecloth or a clean tea towel into your storage jars. Two strains is the difference between a cloudy broth and one you'd serve in a glass.",
      },
      {
        rank: 7,
        name: "The fridge gel test",
        summary:
          "Cool the broth to room temperature, transfer to wide-mouth jars, and refrigerate overnight. By morning, a properly extracted broth should jiggle when you shake the jar — that's collagen. If it's liquid, you didn't roast hot enough or didn't simmer long enough. Either way it's still drinkable; it's just less rich.",
      },
      {
        rank: 8,
        name: "Skim the fat cap, don't discard it",
        summary:
          "Beef tallow on top of a 24-hour broth is a useful cooking fat. Lift it off in one piece, store it in a small jar — it keeps for months in the fridge and roasts vegetables better than olive oil. Don't throw it away; it's free.",
      },
      {
        rank: 9,
        name: "Sip a mug at the start of the day, not as a meal",
        summary:
          "A cup of broth is 60 calories and 9g of protein. It's a bridge, not a meal. We drink it before breakfast on cycle days, with a pinch of salt, lemon, and parsley. Treat it as a hydration vehicle that happens to carry collagen, not as a dinner.",
      },
      {
        rank: 10,
        name: "Freeze in 250ml portions",
        summary:
          "Once the broth has gelled, ladle it into freezer-safe 250ml deli containers or silicone moulds. Freezes for 6 months. Defrost overnight in the fridge or pour straight into a hot pan from frozen. A 2.5kg bone batch yields 8-10 cups — enough for two weeks of daily sips.",
      },
    ],
    faq: [
      {
        q: "Does bone broth actually do anything for tendons?",
        a: "The evidence is suggestive, not conclusive. A small body of literature (Clark 2008, Shaw 2017) shows gelatin/collagen consumed an hour before exercise can increase collagen synthesis at the tendon — the mechanism plausibly extends to bone broth, which is essentially long-cooked gelatin. We treat it as an inexpensive food with reasonable mechanistic support, not as a guaranteed therapy.",
      },
      {
        q: "Is shop-bought bone broth as good?",
        a: "Some are, most aren't. Look for brands that gel in the fridge (Kettle & Fire, Bonafide), simmer 20+ hours, and cite their bone source. Most supermarket cartons labelled 'bone broth' are stock with marketing — they pour straight from the carton and never gel. The home version is materially cheaper.",
      },
      {
        q: "Can I drink this on Mounjaro / Ozempic / Wegovy?",
        a: "Yes. Bone broth is one of the few warm sippable formats that consistently goes down well on a GLP-1, and the protein density (9g per 60 kcal) is excellent for low-appetite days. Keep the salt at the mug, not in the pot, so you can adjust per-cup if you're being co-managed for blood pressure.",
      },
      {
        q: "What if I don't have a slow cooker?",
        a: "A heavy stockpot on a low simmer for 12-18 hours works — needs occasional skimming and a watchful eye that the heat is genuinely low. An Instant Pot under high pressure for 3 hours produces a good broth with slightly thinner gel. The slow cooker is the lazy default, not the only option.",
      },
      {
        q: "How long does it keep?",
        a: "5 days in the fridge, 6 months in the freezer. We freeze in 250ml portions because that's our daily sip. Once thawed, use within 48 hours — don't refreeze.",
      },
    ],
    sources: [
      {
        label: "Clark KL, Sebastianelli W, et al. 24-Week study on the use of collagen hydrolysate as a dietary supplement in athletes with activity-related joint pain. Curr Med Res Opin. 2008.",
        url: "https://pubmed.ncbi.nlm.nih.gov/18416885/",
      },
      {
        label: "Shaw G, Lee-Barthel A, Ross ML, Wang B, Baar K. Vitamin C-enriched gelatin supplementation before intermittent activity augments collagen synthesis. Am J Clin Nutr. 2017.",
        url: "https://pubmed.ncbi.nlm.nih.gov/27852613/",
      },
      {
        label: "USDA FoodData Central — Beef bone broth, homemade (FDC ID 173242).",
        url: "https://fdc.nal.usda.gov/",
      },
      {
        label: "Cook's Illustrated — Bone broth and stock methodology, 24-hour low simmer test.",
        url: "https://www.americastestkitchen.com/cooksillustrated",
      },
    ],
  },
  {
    slug: "natural-mounjaro-recipes",
    title: "Natural Mounjaro Recipes — What the Drink Actually Is, and 8 Better Alternatives",
    h1: "Natural Mounjaro recipes — and what the drink actually is.",
    description:
      "A registered-dietitian-reviewed roundup of so-called 'natural Mounjaro' drinks (lemon, ginger, honey, ACV) and 8 evidence-led recipes that actually do what the trend claims to.",
    hub: "glp1-friendly",
    peptideContext: "glp1-friendly",
    postType: "listicle",
    publishedAt: "2026-04-23",
    updatedAt: "2026-04-23",
    readingTime: 9,
    status: "published",
    featured: false,
    medicalDisclaimer: "required",
    items: [
      {
        rank: 1,
        name: "First — what is the 'natural Mounjaro' drink?",
        summary:
          "A TikTok trend: warm water, half a lemon, a teaspoon of grated ginger, a teaspoon of honey, a tablespoon of apple cider vinegar. The claim is that it mimics tirzepatide. It does not. There is no natural compound that activates the GIP and GLP-1 receptors the way tirzepatide does. The drink is a perfectly fine warm sour beverage; it is not a drug substitute. We are not against the recipe — we are against the marketing.",
      },
      {
        rank: 2,
        name: "What the drink might actually do",
        summary:
          "Apple cider vinegar before a meal has weak evidence for blunting post-meal glucose rise (Johnston 2010). Ginger has weak evidence for slowing gastric emptying (Wu 2008). Lemon and warm water are pleasant. Honey is sugar. None of this is comparable to a 5-15% body-weight reduction over 72 weeks. If the drink helps you feel more full before a meal, drink it — just don't skip your prescribing clinician.",
      },
      {
        rank: 3,
        name: "Cottage-cheese flatbread, 25g protein",
        summary:
          "If you're chasing satiety, protein does the heavy lifting. The cottage-cheese flatbread on this site clears 25g of protein in a 280-kcal serving and takes 12 minutes. Independent guidance (Phillips 2017) puts the protein floor for muscle preservation at 1.2-1.6 g per kg per day — this recipe gets you there one meal at a time without any drug or trend.",
      },
      {
        rank: 4,
        name: "Bone broth, sippable hydration",
        summary:
          "9g of protein per 60 kcal. A warm mug 20 minutes before a main meal preloads protein and warms the stomach in a way that mirrors what GLP-1 patients describe as helpful. The 24-hour bone broth recipe in our Bone & Tendon hub gels at the fridge and freezes in 250ml portions.",
      },
      {
        rank: 5,
        name: "Ginger-turmeric salmon, 32g protein",
        summary:
          "If the 'natural Mounjaro' drink is doing anything mechanistically, it's the ginger. We use the same ginger more usefully — grated into a soy-and-honey marinade for salmon. 32g protein, 380 kcal, 25 minutes. The omega-3 fats also push satiety markers (Parra 2008) more reliably than anything in a warm-lemon drink.",
      },
      {
        rank: 6,
        name: "Greek lemon chicken, batch-cookable",
        summary:
          "Lemon does end up in this list — just used the way chefs use it, as acid against fat and protein. The Greek lemon chicken on this site batch-cooks 6 portions in an hour, holds for 4 days in the fridge, and clears 38g of protein per serving. Drink the warm-lemon-ginger thing if you want; eat this for the actual outcome.",
      },
      {
        rank: 7,
        name: "Anti-inflammatory golden chicken soup, low-volume meal",
        summary:
          "When patients on actual GLP-1 therapy describe what works, low-volume warm meals come up repeatedly. Our anti-inflammatory chicken soup runs 380 kcal and 32g protein in a single bowl that takes 4-5 bites to feel full. This is the dish we'd cook on a 'natural Mounjaro' day — the same warm-stomach effect, far more nutritionally complete.",
      },
      {
        rank: 8,
        name: "High-protein breakfast bowl, front-loaded protein",
        summary:
          "If you're using the morning-drink ritual to feel like you're 'starting the day right,' do that with food. Our high-protein breakfast bowl runs 42g protein in 480 kcal and 15 minutes. Front-loaded morning protein is the single most useful eating habit on a GLP-1 — drug or no drug.",
      },
      {
        rank: 9,
        name: "Cottage-cheese pancakes, soft-texture mornings",
        summary:
          "Three pancakes, 28g protein, 12 minutes. We chose this for the same patient cohort that drinks lemon-ginger-honey water — people who want a soft, mild-flavoured morning that still does protein arithmetic. The pancakes do; the drink doesn't.",
      },
      {
        rank: 10,
        name: "What we'd say to anyone genuinely using this trend",
        summary:
          "The drink is fine. Drink it. Drink it warm in the morning, drink it before lunch, drink it with the cottage-cheese flatbread. What we'd push back on is the framing that it replaces a drug — it doesn't, and neither does any food. If a clinician has prescribed Mounjaro, Ozempic, Wegovy, or Zepbound, those drugs work because they activate GLP-1 (and GIP) receptors directly. If they haven't, the recipes above will out-perform any warm-water-and-lemon habit on every measurable axis.",
      },
    ],
    faq: [
      {
        q: "Can natural Mounjaro recipes replace the medication?",
        a: "No. There is no food, drink, or supplement that activates the GLP-1 (and GIP, in tirzepatide's case) receptors the way these medications do. Anyone telling you otherwise is selling something. Food can support the goals patients use these drugs for — fat loss, muscle preservation, glucose control — but not by mimicking the drug.",
      },
      {
        q: "Is apple cider vinegar dangerous?",
        a: "In small culinary amounts (1 tablespoon diluted in water), no. Drunk neat or in large quantities it can erode tooth enamel and irritate the oesophagus. The literature on its glucose effects is weak but not zero (Johnston 2010). Treat it as a pleasant ingredient, not a supplement.",
      },
      {
        q: "Should I be sceptical of TikTok recipes that claim drug effects?",
        a: "Yes. Reflexively. Any food trend that claims to reproduce a prescription drug's effect is overclaiming — by a lot. The recipes themselves may be fine; the marketing around them is the issue.",
      },
    ],
    sources: [
      {
        label: "Jastreboff AM, Aronne LJ, Ahmad NN, et al. Tirzepatide once weekly for the treatment of obesity (SURMOUNT-1). N Engl J Med. 2022.",
        url: "https://pubmed.ncbi.nlm.nih.gov/35658024/",
      },
      {
        label: "Wilding JPH, Batterham RL, Calanna S, et al. Once-weekly semaglutide in adults with overweight or obesity (STEP-1). N Engl J Med. 2021.",
        url: "https://pubmed.ncbi.nlm.nih.gov/33567185/",
      },
      {
        label: "Johnston CS, Steplewska I, Long CA, Harris LN, Ryals RH. Examination of the antiglycemic properties of vinegar in healthy adults. Ann Nutr Metab. 2010.",
        url: "https://pubmed.ncbi.nlm.nih.gov/20068289/",
      },
      {
        label: "Wu KL, Rayner CK, Chuah SK, et al. Effects of ginger on gastric emptying and motility in healthy humans. Eur J Gastroenterol Hepatol. 2008.",
        url: "https://pubmed.ncbi.nlm.nih.gov/18403946/",
      },
      {
        label: "Phillips SM, Chevalier S, Leidy HJ. Protein 'requirements' beyond the RDA. Appl Physiol Nutr Metab. 2017.",
        url: "https://pubmed.ncbi.nlm.nih.gov/26960445/",
      },
      {
        label: "UK NICE guidance — Tirzepatide for managing overweight and obesity. TA1026, 2024.",
        url: "https://www.nice.org.uk/guidance/ta1026",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined { return posts.find((p) => p.slug === slug); }
export function postsByHub(hubSlug: string): Post[] { return posts.filter((p) => p.hub === hubSlug); }
export function latestPosts(limit = 6): Post[] { return [...posts].sort((a,b) => (a.publishedAt < b.publishedAt ? 1 : -1)).slice(0, limit); }
export function featuredPost(): Post | undefined { return posts.find((p) => p.featured); }
export function relatedPosts(post: Post, limit = 3): Post[] { return posts.filter((p) => p.hub === post.hub && p.slug !== post.slug).slice(0, limit); }
