import Link from "next/link";
import { Roman, toRoman } from "./Roman";
import { HerbMark } from "./HerbMark";

export type ChapterEntry = {
  number: number;
  title: string;
  blurb: string;
  href: string;
  page: number;
  mark?:
    | "rosemary"
    | "garlic"
    | "pepper"
    | "lemon"
    | "knife"
    | "mortar"
    | "spoon"
    | "leaf"
    | "wheat"
    | "fish";
};

/**
 * Front-matter table of contents. Roman-numeral chapters with dot-leader
 * page numbers — exactly the convention you find on the first page of a
 * printed cookbook ("CONTENTS" with leaders out to a folio). This is the
 * dominant site navigation: the header is intentionally small, this is
 * where the reader picks where to go.
 */
export function ChapterTOC({
  chapters,
  heading = "Contents",
}: {
  chapters: ChapterEntry[];
  heading?: string;
}) {
  return (
    <section className="border-t border-olive/15 bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <div className="text-center mb-14">
          <div className="caps-label !tracking-[0.32em] text-stone mb-4">
            Front Matter
          </div>
          <h2 className="font-serif italic text-olive text-4xl md:text-5xl leading-tight">
            {heading}
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 text-sage">
            <span aria-hidden className="block h-px w-10 bg-current opacity-50" />
            <HerbMark kind="leaf" size={20} />
            <span aria-hidden className="block h-px w-10 bg-current opacity-50" />
          </div>
        </div>

        <ol className="space-y-1 list-none">
          {chapters.map((c) => (
            <li key={`${c.number}-${c.href}`}>
              <Link
                href={c.href}
                className="toc-row group block py-5 border-b border-olive/12 hover:border-terracotta/50 transition"
              >
                <div className="flex items-baseline gap-5">
                  <span
                    aria-hidden
                    className="font-serif italic text-terracotta/80 group-hover:text-terracotta tnum text-xl shrink-0 w-14"
                  >
                    {toRoman(c.number)}.
                  </span>
                  <span className="font-serif text-olive group-hover:text-terracotta transition text-xl md:text-2xl tracking-tight">
                    {c.title}
                  </span>
                  <span
                    aria-hidden
                    className="toc-leader flex-1 mx-3 border-b border-dotted border-olive/30 translate-y-[-4px]"
                  />
                  <span className="font-serif italic text-stone tnum text-base shrink-0">
                    {String(c.page).padStart(3, " ")}
                  </span>
                </div>
                <p className="mt-2 ml-[4.7rem] mr-12 text-[14.5px] text-charcoal/70 italic font-serif leading-snug">
                  {c.blurb}
                </p>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export { toRoman };
