import type { Metadata } from "next";
import Link from "next/link";
import { ChapterDivider } from "@/components/editorial/ChapterDivider";
import { HerbMark } from "@/components/editorial/HerbMark";
import { PullQuote } from "@/components/editorial/PullQuote";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "How we test recipes, how we calculate the Nutrition Ledger, and what \"clean\" means here. Written like a colophon, not a marketing page.",
};

export default function MethodologyPage() {
  return (
    <main>
      <ChapterDivider
        number={100}
        name="Our Approach"
        epigraph="A short list of rules, kept short on purpose."
        mark="mortar"
        compact
      />

      <article className="mx-auto max-w-2xl px-6 py-16 md:py-20 cookbook-body">
        <p className="font-serif text-charcoal/85 text-[18px] leading-[1.85] drop-cap">
          The cookbook is written from a small kitchen. We test every
          recipe at least three times on home equipment. We use weights
          when they matter and volumes when they do not, and we say which
          is which. The honest prep time is the prep time we wrote down,
          including the dishes that piled up while we worked.
        </p>

        <h2 className="font-serif italic text-olive text-3xl mt-12 mb-3">
          What &ldquo;clean&rdquo; means here.
        </h2>
        <p className="font-serif text-charcoal/85 text-[17px] leading-[1.8]">
          Whole foods, finished simply, in proportions that make sense for
          a person who plans to keep cooking on Wednesday and Thursday too.
          Not a label. Not a virtue. A pattern that happens to fit several
          ways of eating without bending to any one of them.
        </p>

        <PullQuote attribution="The kitchen note">
          The point of a cookbook is not to be impressive. The point is
          to be useful on a Tuesday.
        </PullQuote>

        <h2 className="font-serif italic text-olive text-3xl mt-12 mb-3">
          The Nutrition Ledger.
        </h2>
        <p className="font-serif text-charcoal/85 text-[17px] leading-[1.8]">
          Per serving. USDA FoodData Central is the source. We list calories,
          protein, fiber, sodium, saturated fat, and added sugar — six
          numbers that are useful, none that are headline-worthy. We do not
          calculate anything we cannot source.
        </p>

        <h2 className="font-serif italic text-olive text-3xl mt-12 mb-3">
          What we do not write.
        </h2>
        <p className="font-serif text-charcoal/85 text-[17px] leading-[1.8]">
          No before-and-afters. No weight-loss numbers. No diet-culture
          shaming. No headline calorie counts. No medical claims. This is
          a cookbook, not a clinic.
        </p>

        <div className="my-12 flex items-center justify-center gap-4 text-sage/60">
          <span aria-hidden className="block h-px w-16 bg-current opacity-50" />
          <HerbMark kind="leaf" size={20} />
          <span aria-hidden className="block h-px w-16 bg-current opacity-50" />
        </div>

        <p className="font-serif italic text-charcoal/75 text-[15.5px] leading-relaxed">
          Continue to{" "}
          <Link
            href="/methodology/v1-2"
            className="text-terracotta hover:text-terracotta-deep underline decoration-terracotta/40 underline-offset-4"
          >
            What We&apos;re Testing &rarr;
          </Link>
        </p>
      </article>
    </main>
  );
}
