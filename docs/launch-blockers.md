# Launch blockers — thatcleanchef.com

Tracking what gates the public launch from the 2026-04-29 finalize commit
(`feat/finalize-2026-04-29` PR) onward. Updated when each item closes.

These are explicitly **Fabian-side decisions** — Claude Code can't fill them.

---

## Critical (block public launch — no `thatcleanchef.com` DNS until closed)

| # | Item | Where | Required for | Status |
|---|---|---|---|---|
| 1 | `[Operator Name]` | `lib/content/impressum.ts` | TTDSG §5 — required for any commercial site accessible in DE | ⏳ Open |
| 2 | `[Address — Straße, Hausnummer, PLZ, Ort]` | `lib/content/impressum.ts` | TTDSG §5 | ⏳ Open |
| 3 | `[Operator's chosen jurisdiction]` | `lib/content/terms.ts` | Governing-law / venue clause | ⏳ Open |
| 4 | DSR contact email | `lib/content/privacy-policy.ts` (currently `hello@thatcleanchef.com`) | GDPR Art. 13/14 | ⏳ Open (acceptable interim if mailbox is monitored) |
| 5 | Real chef hire **OR** "We tested 3 times in our test kitchen by an editorial team" reframe | `components/Hero.tsx`, `components/editorial/TestKitchenStamp.tsx`, every recipe body | Mediavine application reviews byline authenticity. The current "We tested this 3 times" framing claims a chef does it; the byline is "The ThatCleanChef Kitchen" (anonymous). | ⏳ Open. **Recommended default if no decision lands by month 3:** reframe to "test-kitchen by an editorial team" — the safer default and unblocks Mediavine. |

## High (block monetization, not launch)

| # | Item | Where | Required for | Status |
|---|---|---|---|---|
| 6 | Beehiiv API key | env var `BEEHIIV_API_KEY` on Vercel | Newsletter + `<OwnedShopWaitlist>` Beehiiv tag delivery | ⏳ Open. Component no-ops safely without (saves to localStorage). |
| 7 | Amazon Associates tag | env var `NEXT_PUBLIC_AMAZON_TAG` on Vercel | Affiliate-revenue tracking on the `lib/affiliate/registry.ts` SKUs | ⏳ Open. Default placeholder `thatcleanchef-20` ships, tracks incorrectly until set. |
| 8 | Mediavine onboarding | `SITE.displayAdsEnabled = true` flip + `NEXT_PUBLIC_MEDIAVINE_ACCOUNT_SLUG` env var | Display-ad revenue (post-50k sessions/mo) | ⏳ Open, intentional. Don't apply until 50k sessions tracked in Search Console. |

## Medium (block E-E-A-T quality but not launch)

| # | Item | Where | Required for | Status |
|---|---|---|---|---|
| 9 | Lena Marsh HCPC public-register verification | Manual check at https://www.hcpc-uk.org/registration-and-licensing/the-medical-register | Confirms the reviewer is real and currently licensed | ⏳ Open. `team.ts` flag `verifiedCredential: false` surfaces a "credential pending" note on `/team/lena-marsh` until closed. |
| 10 | Lena Marsh signed editorial-independence letter | Filed with operator | Reviewer no-conflict statement on every recipe | ⏳ Open. Note surfaces alongside #9. |
| 11 | Multi-aspect recipe images (4:3 + 1:1) for the 23 existing recipes | kie.ai Nano Banana batch run | Google SERP image-carousel inclusion (3-aspect rule) | ⏳ Open. Single-batch run, ~$14 total. Flip `SITE.multiAspectComplete = true` after files land. |
| 12 | Real headshots for the 4 team members | Photographer commission | Replace initials avatars with real photos. | ⏳ Open. Per 2026-04-29 lock, initials avatars are the safe path until then. |

## Closed (for record)

(none yet — populate as items close)

---

## How to close an item

1. Make the operator decision (Fabian).
2. Edit the relevant file or set the env var.
3. Update this table — move the row to "Closed" with the closing commit hash + date.
4. Run the verification grep + a fresh build.

---

## Why this file exists

Per `MONETIZATION-MODEL.md` and the 2026-04-29 master orchestration: every
site has placeholder slots that Claude Code cannot fill (legal entities,
real-person credentials, real-money env vars). Tracking them in one file
prevents quiet drift — when launch day comes, this is the checklist.
