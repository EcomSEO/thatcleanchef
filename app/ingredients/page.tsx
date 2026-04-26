import type { Metadata } from "next";
import { ChapterDivider } from "@/components/editorial/ChapterDivider";
import { IngredientIndex } from "@/components/editorial/IngredientIndex";
import { ingredientIndex } from "@/lib/content/cookbook";

export const metadata: Metadata = {
  title: "Ingredient Index",
  description:
    "The back-of-book ingredient index. A-to-Z, with the recipes each ingredient appears in. Cook by what you have.",
};

export default function IngredientsPage() {
  return (
    <main>
      <ChapterDivider
        number={99}
        name="Ingredient Index"
        epigraph="Cook by what you have. The book bends toward your shelf."
        mark="leaf"
        compact
      />
      <IngredientIndex
        entries={ingredientIndex}
        heading="The Index"
        intro="Eighty entries to start. The recipe count is the number of pages in the cookbook that lean on that ingredient — the ones we would actually open the book to find."
      />
    </main>
  );
}
