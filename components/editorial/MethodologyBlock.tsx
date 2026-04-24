type Item = { label: string; detail: string };

const defaultItems: Item[] = [
  {
    label: "Times we tested",
    detail:
      "Every recipe on this site runs through a home kitchen at least three times before it publishes. We note what failed, what we adjusted, and what equipment mattered.",
  },
  {
    label: "Home kitchen equipment used",
    detail:
      "Home gas range, 10-inch carbon steel or cast iron, 6-quart Dutch oven, half-sheet pan, Vitamix, digital thermometer, kitchen scale. No restaurant shortcuts.",
  },
  {
    label: "Nutrition verified against USDA",
    detail:
      "Every Nutrition Ledger value comes from USDA FoodData Central per-serving calculations, not packaging labels or AI estimates. Sodium includes added salt.",
  },
  {
    label: "Where technique notes come from",
    detail:
      "Serious Eats, Cook's Illustrated, Salt Fat Acid Heat, Six Seasons, and peer-reviewed food-science when a claim needs backing. Cited at the end of each recipe.",
  },
];

export function MethodologyBlock({
  items = defaultItems,
  title = "How this recipe was tested",
}: {
  items?: Item[];
  title?: string;
}) {
  return (
    <section className="my-12 bg-cream-deep/50 border border-olive/12 rounded-sm p-7 md:p-9">
      <div className="flex items-center gap-3 mb-5">
        <span className="h-2 w-2 rounded-full bg-terracotta" />
        <span className="caps-label text-olive">The Pass &mdash; methodology</span>
      </div>
      <h2 className="font-serif text-2xl text-olive mb-6 leading-tight">
        {title}
      </h2>
      <dl className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="eyebrow text-stone mb-1">{item.label}</dt>
            <dd className="text-[15px] text-charcoal/85 leading-relaxed">
              {item.detail}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
