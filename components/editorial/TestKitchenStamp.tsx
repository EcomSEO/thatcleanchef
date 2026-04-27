import Link from "next/link";

/**
 * Pill-shaped trust stamp: "Tested {n} times in our kitchen". Sage-on-sage,
 * with a check-circle. Polish: hairline border, font-medium label, mono number.
 */
export function TestKitchenStamp({
  testCount = 3,
  href = "/editorial-standards",
  className = "",
}: {
  testCount?: number;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-sage-50 text-sage-700 border border-sage-100 hover:bg-sage-100 px-3 py-1.5 text-[12.5px] font-medium transition ${className}`}
      aria-label={`Tested ${testCount} times in our kitchen — read our editorial standards`}
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
        <circle cx="12" cy="12" r="9.2" />
        <path d="M9 12 l2.2 2.2 L15.5 9.5" />
      </svg>
      <span>
        Tested <span className="font-mono tnum font-semibold">{testCount}</span> times in our kitchen
      </span>
    </Link>
  );
}
