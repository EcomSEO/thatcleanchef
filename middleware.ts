import { NextResponse, type NextRequest } from "next/server";
import { LOCALES, type Locale, isLocale } from "@/lib/content/i18n";

/**
 * Locale-detection middleware.
 *
 * On a first visit (no `tcc_locale` cookie set) to a non-localized URL, we
 * read Accept-Language and either redirect to `/{locale}/...` if we have a
 * matching non-English locale, or stay at the canonical English path. On
 * subsequent visits we honor the user's explicit choice (set via the
 * LocaleSwitcher, which writes the cookie).
 *
 * URLs already prefixed with a locale (e.g. /de/...) are passed through
 * unchanged. Static / API / image routes are excluded by the matcher.
 */

const COOKIE = "tcc_locale";

function pickLocaleFromHeader(header: string | null): Locale | null {
  if (!header) return null;
  // Parse Accept-Language: "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7"
  const candidates = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of candidates) {
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
    // Map nb (Norwegian Bokmål) → no
    if (primary === "nb" || primary === "nn") return "no";
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);

  // Already locale-prefixed → pass through.
  if (segments.length > 0 && isLocale(segments[0])) {
    return NextResponse.next();
  }

  // Cookie-set preference takes precedence — re-route unprefixed → preferred locale.
  const cookieValue = request.cookies.get(COOKIE)?.value;
  const cookieLocale = cookieValue && isLocale(cookieValue) ? cookieValue : null;
  if (cookieLocale && cookieLocale !== "en") {
    const url = request.nextUrl.clone();
    url.pathname = `/${cookieLocale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  // First-visit Accept-Language sniff (only on the home, to avoid 11x redirect
  // chains on deep recipe URLs the user shared cross-language).
  if (!cookieValue && pathname === "/") {
    const accept = request.headers.get("accept-language");
    const locale = pickLocaleFromHeader(accept);
    if (locale && locale !== "en") {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}`;
      const response = NextResponse.redirect(url);
      response.cookies.set(COOKIE, locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
      return response;
    }
    // No matching non-EN — set the cookie so we don't sniff every visit.
    const response = NextResponse.next();
    response.cookies.set(COOKIE, "en", { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next.js internals, static assets, sitemaps, and API.
  matcher: ["/((?!_next|api|.*\\..*|robots.txt|sitemap.xml|llms.txt).*)"],
};
