export function AuthorBio() {
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
        recipes in home kitchens on home equipment. Every Nutrition Ledger
        is USDA FoodData Central-sourced. Every time we publish includes the
        dishes. We don&apos;t pretend to be a single chef &mdash; we&apos;re
        the people behind the plates.
      </p>
    </section>
  );
}
