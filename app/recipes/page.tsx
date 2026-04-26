import type { Metadata } from "next";
import Link from "next/link";
import { ChapterDivider } from "@/components/editorial/ChapterDivider";
import { CookbookRecipePage } from "@/components/editorial/CookbookRecipePage";
import { posts } from "@/lib/content/posts";
import { Roman, toRoman } from "@/components/editorial/Roman";

export const metadata: Metadata = {
  title: "Recipes",
  description:
    "Every recipe in the cookbook, listed by chapter. Method-first, ingredient-led, written the way you would read a printed page.",
};

export default function RecipesPage() {
  // Pull the first recipe-like post and render it as a sample CookbookRecipePage,
  // then list the rest as a cookbook contents-style table.
  const recipeLike = posts.filter(
    (p) => p.postType === "recipe" || p.nutritionLedger
  );
  const sample = recipeLike[0];
  const others = recipeLike.slice(1);

  return (
    <main>
      <ChapterDivider
        number={4}
        name="Recipes"
        epigraph="A page for each. Read the ingredients. Then the method. Then cook."
        mark="spoon"
        compact
      />

      {sample && (
        <CookbookRecipePage
          number={1}
          title={sample.title}
          intro={sample.description}
          yield={sample.servings ? `${sample.servings} servings` : undefined}
          time={
            sample.totalTimeMinutes
              ? `${sample.totalTimeMinutes} minutes`
              : undefined
          }
          difficulty="Weeknight, with patience"
          ingredients={[
            { qty: "2 tbsp", item: "avocado oil" },
            { qty: "2 lb", item: "bone-in, skin-on chicken thighs" },
            { qty: "1", item: "yellow onion, diced" },
            { qty: "4 cloves", item: "garlic, smashed" },
            { qty: "2 tbsp", item: "fresh ginger, grated" },
            { qty: "1 tbsp", item: "ground turmeric" },
            { qty: "1 tsp", item: "black pepper, cracked" },
            { qty: "8 cups", item: "chicken bone broth" },
            { qty: "1 tbsp", item: "coconut aminos" },
            { qty: "1/2", item: "lime, juiced" },
            { qty: "1 handful", item: "cilantro, stems and all" },
            { qty: "to taste", item: "flaky sea salt" },
          ]}
          steps={[
            "Heat the avocado oil in a 6-quart Dutch oven over medium-high. Pat the thighs dry, season both sides with salt, and lay them in skin-side down. Walk away for six minutes — the fond is being built.",
            "Turn the thighs, brown the second side for two more minutes, then move them to a plate. The pan should be slick with rendered fat and amber stickiness.",
            "Drop the onion into the pan and let it sweat for four minutes, stirring once. Add the garlic and ginger; thirty seconds. Add the turmeric and pepper directly to the fat — toast until the kitchen smells like a spice market, no more than forty-five seconds.",
            "Pour in the broth, scrape up everything stuck to the bottom, and slide the thighs back in. Bring to a low simmer, cover loosely, and cook thirty minutes.",
            "Lift the thighs out, shred the meat with two forks, return it to the pot. Discard the skin. Stir in the coconut aminos. Taste for salt.",
            "Off-heat, finish with the lime juice and the cilantro. Rest ten minutes before serving — the soup keeps cooking, the flavors keep settling.",
          ]}
          notes={[
            "If the broth tastes flat, the issue is almost always salt rather than seasoning. A pinch of flake at the end goes further than another teaspoon of turmeric.",
            "Bone-in thighs are not negotiable. The bones are 80% of why this soup tastes like a soup and not a watered-down stew.",
          ]}
          variations={[
            "For a Whole30-compliant version, check your coconut aminos label and skip the lime if citrus is excluded that week.",
            "A handful of baby spinach stirred in at minute 28 makes this a complete bowl. Kale wants two more minutes; lacinato is the better choice.",
          ]}
          mark="rosemary"
        />
      )}

      {/* The rest, listed as a cookbook contents page. */}
      <section className="border-t border-olive/15 bg-cream-deep/20">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="text-center mb-10">
            <div className="caps-label !tracking-[0.32em] text-stone mb-3">
              Continued
            </div>
            <h2 className="font-serif italic text-olive text-3xl md:text-4xl leading-tight">
              The rest of the recipes.
            </h2>
          </div>
          <ol className="space-y-1 list-none">
            {others.map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="toc-row group block py-4 border-b border-olive/12 hover:border-terracotta/50 transition"
                >
                  <div className="flex items-baseline gap-5">
                    <span
                      aria-hidden
                      className="font-serif italic text-terracotta/80 group-hover:text-terracotta tnum text-lg shrink-0 w-12"
                    >
                      {toRoman(i + 2)}.
                    </span>
                    <span className="font-serif text-olive group-hover:text-terracotta transition text-lg tracking-tight">
                      {p.title}
                    </span>
                    <span
                      aria-hidden
                      className="toc-leader flex-1 mx-3 border-b border-dotted border-olive/30 translate-y-[-4px]"
                    />
                    <span className="font-serif italic text-stone tnum text-sm shrink-0">
                      {p.totalTimeMinutes ? `${p.totalTimeMinutes}m` : `${p.readingTime}min`}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
