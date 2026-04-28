import { SITE } from "@/lib/content/site";
import Script from "next/script";

/**
 * <MediavineScript /> — site-wide Mediavine loader.
 *
 * Returns null while `SITE.displayAdsEnabled === false`. Flips to true only
 * after the site clears 50k sessions/mo and Mediavine onboarding completes.
 *
 * Mount once in `app/layout.tsx`. The `data-noptimize="1"` attr stops Vercel
 * Analytics from racing the loader on first paint; the `strategy="lazyOnload"`
 * means the script never blocks LCP, which is the metric Mediavine itself
 * publishes guidelines around.
 *
 * Domain ID and account name are resolved from env vars; Vercel project
 * settings should hold them as `NEXT_PUBLIC_MEDIAVINE_DOMAIN_ID` and
 * `NEXT_PUBLIC_MEDIAVINE_ACCOUNT_SLUG`. Until those are set, the loader
 * stays inert even if `displayAdsEnabled` is flipped — defense in depth.
 */
export function MediavineScript() {
  if (!SITE.displayAdsEnabled) return null;

  const accountSlug = process.env.NEXT_PUBLIC_MEDIAVINE_ACCOUNT_SLUG;
  if (!accountSlug) return null;

  // Mediavine's recommended loader (the "scripts.mediavine.com/tags/{slug}.js"
  // pattern). They publish this snippet on the publisher dashboard verbatim.
  return (
    <Script
      id="mediavine-tag"
      data-noptimize="1"
      strategy="lazyOnload"
      src={`https://scripts.mediavine.com/tags/${accountSlug}.js`}
      async
    />
  );
}
