/**
 * English Terms of Service for ThatCleanChef.
 *
 * ThatCleanChef provides chef-tested clean-eating recipes with USDA-sourced
 * Nutrition Ledger values, reviewed by a registered dietitian. Content is
 * editorial nutrition information, not medical advice. Consult a qualified
 * healthcare professional for medical, dietetic, or clinical guidance.
 *
 * Per-locale expansion deferred until [locale]/ routing lands.
 */

export const TERMS_LAST_UPDATED = "April 27, 2026";

export const TERMS = {
  lastUpdated: TERMS_LAST_UPDATED,
  intro: [
    "These Terms govern your use of thatcleanchef.com (“the Site”), operated by ThatCleanChef (“we,” “us”). By accessing the Site you accept these Terms. If you do not accept them, do not use the Site.",
  ],
  sections: [
    {
      heading: "1. Scope",
      body: [
        "ThatCleanChef publishes editorial recipes, ingredient guides, and dietitian-reviewed nutrition explainers. The Site is informational. It does not sell medication, supplements, or food products.",
      ],
    },
    {
      heading: "2. Content disclaimer — not medical advice",
      body: [
        "ThatCleanChef provides editorial recipes and dietitian-reviewed nutrition explainers. Content is not medical advice, dietetic advice, prescription advice, or pharmacological advice.",
        "ThatCleanChef does not advise you to start, stop, or alter any prescription medication, supplement, or clinical nutrition plan. Recipes are general culinary information, not individualised medical nutrition therapy.",
        "**Always consult your dietitian or another qualified healthcare professional** before making any significant change to your nutrition, particularly if you have a diagnosed condition or take prescription medication. The recipes are designed to be sensible clean-eating defaults; they are not personalised medical nutrition therapy.",
        "We do not diagnose, treat, cure, or prevent any disease or condition. Recipes are not labelled with permitted EFSA health claims unless specifically and verifiably scoped to a single, EFSA-authorised wording.",
      ],
    },
    {
      heading: "3. Editorial review",
      body: [
        "Recipes are reviewed by a registered dietitian (see the editorial team registry at /team). Review applies to clinical appropriateness within the recipe context only — it is not a substitute for personal clinical advice for you.",
      ],
    },
    {
      heading: "4. Intellectual property",
      body: [
        "All editorial content — recipes, photography, illustrations, ingredient guides, page layout — is owned by ThatCleanChef or licensed to us. You may share short excerpts with attribution and a link back. You may not republish recipes in full, scrape content for AI training at scale, or use the ThatCleanChef name or marks in a way that implies endorsement of a third-party product.",
      ],
    },
    {
      heading: "5. User obligations",
      body: [
        "You agree not to:",
        "Misrepresent recipes as medical advice or as a treatment plan.",
        "Republish recipes in full without written permission.",
        "Submit content (corrections, comments) that infringes third-party rights, is defamatory, or contains personal data of others.",
        "Use the Site to harass, scrape disproportionately, or reverse-engineer paid offerings.",
        "Bypass technical protections such as the cookie consent banner or rate-limiting.",
      ],
    },
    {
      heading: "6. Affiliate links and commercial content",
      body: [
        "ThatCleanChef may participate in affiliate programs for cookware, kitchen tools, and dietitian-vetted supplements (none currently active). When affiliate links appear, they are labelled with the audit-mandated disclosure pill (Werbung / Publicité / Pubblicità / Sponsored / etc.). Affiliate participation never affects which recipes we publish or which ingredients we recommend. See the Affiliate Disclosure at /affiliate-disclosure.",
        "ThatCleanChef does not run pharmaceutical or supplement-vendor affiliate programs. Zero. Ever.",
      ],
    },
    {
      heading: "7. No warranties",
      body: [
        "The Site is provided “as is.” We do not warrant that the Site will be uninterrupted, error-free, secure, or virus-free. We do not warrant that any recipe outcome — a particular flavour, a particular macronutrient hit, a particular tolerability — will match your kitchen, your equipment, or your individual physiology.",
      ],
    },
    {
      heading: "8. Limitation of liability",
      body: [
        "To the maximum extent permitted by law, ThatCleanChef is not liable for any indirect, incidental, consequential, special, or punitive damages arising from your use of the Site. Our aggregate liability for any claim related to the Site is limited to EUR 100 or the equivalent in your local currency. Nothing in these Terms limits liability for death, personal injury caused by negligence, fraud, or any liability that cannot be excluded under applicable law.",
      ],
    },
    {
      heading: "9. Third-party sites",
      body: [
        "We link to third-party sites (research papers, regulatory bodies, ingredient retailers). We do not control those sites and are not responsible for their content, privacy practices, or availability.",
      ],
    },
    {
      heading: "10. Governing law",
      body: [
        "These Terms are governed by the laws of [Operator's chosen jurisdiction]. Mandatory consumer protection rights in your country of residence are not affected. If a dispute cannot be resolved by direct contact, it will be subject to the exclusive jurisdiction of the courts of that jurisdiction.",
      ],
    },
    {
      heading: "11. Changes",
      body: [
        "We may update these Terms. Material changes will be highlighted on this page with a new “Last updated” date. Continued use of the Site after a change constitutes acceptance.",
      ],
    },
    {
      heading: "12. Contact",
      body: [
        "Questions about these Terms: **hello@thatcleanchef.com**. Postal address: see /impressum.",
      ],
    },
  ],
} as const;
