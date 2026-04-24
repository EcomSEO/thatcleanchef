import { SITE } from "@/lib/content/site";

function currentMonth() {
  const d = new Date();
  return d.toLocaleString("en-US", { month: "long", year: "numeric" });
}

/**
 * Dateline — "Service · Issue N · {month}" — the kitchen "pass" vibe.
 * Service = where the plates go out. Issue = we publish like a periodical.
 */
export function Dateline({ className = "" }: { className?: string }) {
  return (
    <div className={`dateline flex flex-wrap items-center gap-3 ${className}`}>
      <span>{SITE.service}</span>
      <span aria-hidden className="text-terracotta/60">&middot;</span>
      <span>{SITE.issue}</span>
      <span aria-hidden className="text-terracotta/60">&middot;</span>
      <span>{currentMonth()}</span>
      <span aria-hidden className="text-terracotta/60">&middot;</span>
      <span>{SITE.url.replace(/^https?:\/\//, "")}</span>
    </div>
  );
}
