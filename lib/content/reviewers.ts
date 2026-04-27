/**
 * Editorial reviewer registry. Surfaced via DietitianReviewedBadge and
 * the /about#reviewers anchor. Peptide-therapy expertise is the lead
 * credential since the April 2026 repositioning.
 */
export type Reviewer = {
  slug: string;
  name: string;
  credentials: string;
  /** One-line lead-with-expertise tag for badges. */
  tag: string;
  /** Longer-form bio for the about page. */
  bio: string;
  /** Areas of specialty surfaced on the about page. */
  specialties: string[];
};

export const reviewers: Reviewer[] = [
  {
    slug: "maya-rao",
    name: "Dr. Maya Rao",
    credentials: "RDN, PhD",
    tag: "GLP-1 nutrition specialist",
    bio: "Registered Dietitian Nutritionist with a doctorate in clinical nutrition. Maya works with patients on semaglutide, tirzepatide, and liraglutide protocols — focusing on muscle preservation, micronutrient adequacy, and tolerability during dose escalation. She reviews every recipe on ThatCleanChef for clinical appropriateness in a peptide-therapy context.",
    specialties: [
      "GLP-1 receptor agonist nutrition (semaglutide, tirzepatide, liraglutide)",
      "Muscle preservation during caloric deficit",
      "Anti-inflammatory protocols supporting BPC-157 / TB-500 recovery",
      "Bone and tendon health, collagen substrates",
      "Pre/post-cycle meal-timing for peptide protocols",
    ],
  },
];

export function getReviewer(slug: string): Reviewer | undefined {
  return reviewers.find((r) => r.slug === slug);
}
