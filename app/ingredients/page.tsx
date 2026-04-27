import type { Metadata } from "next";
import Link from "next/link";
import { ingredientIndex } from "@/lib/content/cookbook";
import { BreadcrumbNav } from "@/components/editorial/BreadcrumbNav";

export const metadata: Metadata = {
  title: "Ingredient index — A to Z",
  description:
    "Cook by what you have. The A-to-Z ingredient index, with the recipes each ingredient appears in.",
};

export default function IngredientsPage() {
  const grouped = ingredientIndex.reduce<Record<string, typeof ingredientIndex>>(
    (acc, e) => {
      const letter = e.name[0]?.toUpperCase() ?? "#";
      acc[letter] = acc[letter] || [];
      acc[letter].push(e);
      return acc;
    },
    {}
  );
  const letters = Object.keys(grouped).sort();

  return (
    <main>
      <section className="bg-surface border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
          <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Tools", href: "/pipeline" }, { label: "Ingredient index" }]} />
          <div className="mt-5 max-w-3xl">
            <span className="caps-label">Tools</span>
            <h1 className="h1-editorial mt-2 text-[36px] md:text-[44px] leading-[1.1] text-ink">
              Ingredient index — cook by what you have.
            </h1>
            <p className="mt-3 text-body-md text-ink-2 leading-relaxed">
              An A-to-Z lookup. Each entry shows the count of recipes in our
              test kitchen that lean on that ingredient. A secondary tool, not
              the primary nav.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <nav aria-label="Letter index" className="mb-8 flex flex-wrap gap-2">
            {letters.map((l) => (
              <a key={l} href={`#letter-${l}`} className="diet-chip diet-chip--outline font-mono tnum">
                {l}
              </a>
            ))}
          </nav>
          <div className="space-y-10">
            {letters.map((l) => (
              <div key={l} id={`letter-${l}`} className="scroll-mt-24">
                <h2 className="text-h2 font-semibold text-sage-700 mb-3">{l}</h2>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                  {grouped[l].map((e) => (
                    <li key={e.name} className="flex items-baseline gap-2 border-b border-hairline pb-1">
                      <Link href={e.href} className="text-body-md text-ink hover:text-sage-700 flex-1">
                        {e.name}
                      </Link>
                      <span className="font-mono tnum text-body-sm text-ink-3">
                        {e.recipeCount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
