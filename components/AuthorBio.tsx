import Link from "next/link";
import { team, PRIMARY_REVIEWER } from "@/lib/content/team";

export function AuthorBio() {
  const developer = team.find((m) => m.role === "Recipe developer");
  return (
    <section className="mt-12 p-6 md:p-7 border border-olive/12 rounded-sm bg-cream-deep/40">
      <div className="flex items-center gap-2 mb-3">
        <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
        <span className="caps-label text-olive">The kitchen</span>
      </div>
      <h3 className="font-serif text-xl text-olive mb-2">
        About the ThatCleanChef Kitchen
      </h3>
      <p className="text-charcoal/85 leading-relaxed text-[15px]">
        A small team of recipe developers and food photographers testing
        recipes in home kitchens on home equipment. Every Nutrition Ledger is
        USDA FoodData Central-sourced and reviewed by{" "}
        <Link
          href={`/team/${PRIMARY_REVIEWER.slug}`}
          className="text-terracotta underline decoration-terracotta/40 hover:decoration-terracotta"
        >
          {PRIMARY_REVIEWER.name}, {PRIMARY_REVIEWER.credentials}
        </Link>{" "}
        before publication. Recipes are developed by{" "}
        {developer ? (
          <Link
            href={`/team/${developer.slug}`}
            className="text-terracotta underline decoration-terracotta/40 hover:decoration-terracotta"
          >
            {developer.name}
          </Link>
        ) : (
          "our lead recipe developer"
        )}
        . We don&apos;t pretend to be a single chef &mdash; we&apos;re the
        people behind the plates.{" "}
        <Link
          href="/team"
          className="text-olive underline decoration-olive/30 hover:decoration-olive"
        >
          Meet the full team &rarr;
        </Link>
      </p>
    </section>
  );
}
