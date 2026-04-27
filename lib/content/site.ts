export const SITE = {
  name: "ThatCleanChef",
  url: "https://thatcleanchef.com",
  tagline: "Clean-eating recipes for people on peptide therapy",
  taglineAlt: "Clean-eating recipes for people on peptide therapy",
  description:
    "Recipes designed for GLP-1 patients fighting muscle loss, peptide-cycle users supporting recovery, and anyone optimizing nutrition during peptide protocols. Time-honest. USDA Nutrition Ledger on every recipe. Reviewed by registered dietitians with peptide-therapy expertise.",
  author: "The ThatCleanChef Kitchen",
  email: "hello@thatcleanchef.com",
  launched: true,
  // Kitchen "pass" = the counter where plates go out. Our dateline treatment.
  service: "Service I",
  issue: "Issue No. 01",
  /** Repositioning flag — peptide-therapy context layered onto recipes. */
  peptideContext: true,
} as const;
