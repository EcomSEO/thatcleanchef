import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbNav } from "@/components/editorial/BreadcrumbNav";
import { MedicalDisclaimerFooter } from "@/components/MedicalDisclaimerFooter";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How we test recipes, how we calculate the Nutrition Ledger against USDA FoodData Central, and what 'clean' means here.",
};

export default function MethodologyPage() {
  return (
    <main>
      <section className="bg-surface border-b border-hairline">
        <div className="mx-auto max-w-7xl px-5 py-10 md:py-14">
          <BreadcrumbNav crumbs={[{ label: "Home", href: "/" }, { label: "Methodology" }]} />
          <div className="mt-5 max-w-3xl">
            <span className="caps-label">Methodology</span>
            <h1 className="h1-editorial mt-2 text-[36px] md:text-[44px] leading-[1.1] text-ink">
              How we test, calculate, and review.
            </h1>
            <p className="mt-3 text-body-md text-ink-2 leading-relaxed">
              A short list of rules, kept short on purpose. Every recipe is
              tested at least three times on home equipment and reviewed by a
              registered dietitian before it ships.
            </p>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-5 py-12 prose">
        <h2>Three tests, on home equipment.</h2>
        <p>We test every recipe at least three times in a home kitchen, on home equipment. We use weights when they matter and volumes when they do not, and we say which is which. The honest prep time is the prep time we wrote down, including the dishes that piled up while we worked. If something fails, we publish what failed and what we changed.</p>

        <h2>Nutrition Ledger — calculated from ingredients.</h2>
        <p>The Nutrition Ledger on every recipe is calculated per serving from the ingredient list, against the USDA FoodData Central reference, not from packaging labels. Where a brand-specific value would change the math materially (sodium in stocks, sugar in sauces) we cite the brand we tested with. Calorie counts are not headlines — they are one number among six.</p>

        <h2>Reviewed by a registered dietitian.</h2>
        <p>Every recipe is read by a credentialed RDN before it goes live. Their name and license number are linked on the page. The reviewer checks that nutrient claims match the math, that any health-pattern framing (anti-inflammatory, Mediterranean, PCOS-friendly) is defensible against published evidence, and that no diet-culture language slipped in.</p>

        <h2>What "clean" means here.</h2>
        <p>We don't use "clean" as a moral category. It means: short-ingredient, minimally processed, recognizable. Olive oil instead of seed-oil blends. Whole grains over refined when the dish allows it. Real dairy. Real salt. We are not selling a diet. We are publishing recipes you can cook on a Tuesday.</p>

        <h2>What we don't do.</h2>
        <ul>
          <li>We don't write "guilt-free", "skinny", "slimming", or "flat belly."</li>
          <li>We don't lead with calorie counts.</li>
          <li>We don't link to telehealth or weight-loss services.</li>
          <li>We don't take brand sponsorships on individual recipes.</li>
          <li>We don't place ads between recipe ingredients or steps.</li>
        </ul>

        <p>See also: <Link href="/methodology/v1-2">What we're testing (rev. 1.2)</Link> · <Link href="/editorial-standards">Editorial standards</Link>.</p>
      </article>

      <div className="mx-auto max-w-3xl px-5 pb-14">
        <MedicalDisclaimerFooter />
      </div>
    </main>
  );
}
