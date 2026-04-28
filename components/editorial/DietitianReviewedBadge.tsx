import Link from "next/link";

/**
 * DIFFERENTIATOR vs minimalistbaker. Pill-shaped, sage-on-sage-tint, with a
 * RDN reviewer name and link to the reviewer profile.
 */
export function DietitianReviewedBadge({
  name = "Lena Marsh",
  credentials = "RDN, MS",
  href = "/team/lena-marsh",
  size = "md",
}: {
  name?: string;
  credentials?: string;
  href?: string;
  size?: "sm" | "md";
}) {
  const sz = size === "sm" ? "text-[11px] py-1 px-2.5" : "text-[12.5px] py-1.5 px-3";
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-sage-50 text-sage-700 border border-sage-100 hover:bg-sage-100 transition ${sz}`}
      aria-label={`Reviewed by ${name}, ${credentials}`}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        aria-hidden
      >
        <path d="M9 12 l2.2 2.2 L15.5 9.5" />
        <circle cx="12" cy="12" r="9.2" />
      </svg>
      <span className="font-medium">
        Reviewed by {name}, {credentials}
      </span>
    </Link>
  );
}
