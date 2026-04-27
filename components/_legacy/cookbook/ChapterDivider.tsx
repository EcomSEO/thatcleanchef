import { Roman } from "./Roman";
import { HerbMark } from "./HerbMark";

/**
 * Full-bleed chapter title page treatment. Used between hubs on the home
 * page and at the top of a chapter route. The cookbook convention: a
 * blank-ish recto, a Roman numeral, the chapter name in italic serif,
 * a small hand-drawn mark, and a single short epigraph. Generous space.
 */
export function ChapterDivider({
  number,
  name,
  epigraph,
  mark = "rosemary",
  compact = false,
}: {
  number: number;
  name: string;
  epigraph?: string;
  mark?: "rosemary" | "garlic" | "pepper" | "lemon" | "knife" | "mortar" | "spoon" | "leaf" | "wheat" | "fish";
  compact?: boolean;
}) {
  return (
    <section className="border-y border-olive/15 bg-cream-deep/20">
      <div
        className={`mx-auto max-w-3xl px-6 text-center ${
          compact ? "py-16" : "py-24 md:py-32"
        }`}
      >
        <div className="caps-label !tracking-[0.4em] text-stone mb-6">
          Chapter
        </div>
        <Roman n={number} size="display" className="!text-terracotta" />
        <div className="my-10 flex items-center justify-center gap-5 text-sage">
          <span aria-hidden className="block h-px w-12 bg-current opacity-60" />
          <HerbMark kind={mark} size={32} />
          <span aria-hidden className="block h-px w-12 bg-current opacity-60" />
        </div>
        <h2 className="font-serif italic text-olive text-4xl md:text-5xl leading-tight tracking-tight">
          {name}
        </h2>
        {epigraph && (
          <p className="mt-8 font-serif italic text-charcoal/75 max-w-md mx-auto leading-snug">
            &ldquo;{epigraph}&rdquo;
          </p>
        )}
      </div>
    </section>
  );
}
