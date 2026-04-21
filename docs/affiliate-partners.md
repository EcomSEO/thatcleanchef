# ThatCleanChef — Affiliate Partner Reference

Recipe-site monetization mix: affiliate + display ads (Mediavine / Raptive) + future digital products. **This is the one site in the network where display ads are part of the revenue thesis** — recipe sites have ~$18-30 RPM at scale, which makes display economically material.

Per research doc §9: Month 12 target ~$6-8k/mo blended ($4.4k display + $2k affiliate).

---

## 1. Networks

| Network | Coverage | Notes |
|---|---|---|
| **Amazon Associates** | Kitchen equipment, cookbooks, pantry cross-sells | 1-4.5% |
| **ShareASale** | Primal Kitchen, Siete Foods, Kettle & Fire, Butcher Box | 8-15% |
| **Impact.com** | Vital Proteins, Organifi, BulletProof, Truvani | 10-20% |
| **Mediavine** (display) | Full-site display ad management | $18-30 RPM at 50k+ sessions |
| **Raptive** (display alternative) | Alternative display network at 100k+ sessions | $25-35 RPM |
| **Direct affiliates** | ButcherBox, Thrive Market, Misfits Market, Perfect Keto (careful — adjacent only) | Varies |

---

## 2. Wave 1 recipes → brands

### Pantry staples (across all recipes)
| Product | Brand | Affiliate |
|---|---|---|
| Olive oil | Graza (trending), California Olive Ranch, Kirkland | Amazon / direct |
| Coconut aminos | Coconut Secret | Amazon |
| Bone broth | Kettle & Fire (ShareASale ~10%), Bonafide Provisions | ShareASale |
| Hot sauce | Siete, Fly By Jing | ShareASale / direct |
| Vinegar | Bragg, Spectrum | Amazon |
| Salt | Redmond Real Salt, Maldon | Amazon |
| Spices | Burlap & Barrel, Diaspora Co (premium), Simply Organic | Direct / Amazon |

### Proteins (primary ingredient for many recipes)
| Product | Brand | Affiliate |
|---|---|---|
| Wild-caught salmon | Vital Choice, Butcher Box (subscription) | Butcher Box ($30 CPA) |
| Grass-fed beef + pastured chicken | Butcher Box, Force of Nature, Crowd Cow | Butcher Box |
| Sardines | Wild Planet, Season | Amazon |
| Eggs (pastured) | Vital Farms (not directly affiliate, note availability) | Vital Farms website link (no aff) |
| Cottage cheese | Good Culture, Nancy's | Retailer-only |
| Greek yogurt | Fage, Chobani, Two Good, Icelandic Provisions | Amazon Subscribe & Save |
| Whey protein | Momentous (Impact ~15%), Transparent Labs (direct ~15%), Legion | Impact / direct |

### Shop-the-ingredient boxes (high AOV)
| Service | Notes | Affiliate |
|---|---|---|
| **Thrive Market** | Organic pantry membership — high AOV, ~$15-25 per signup | Direct/ShareASale (~$15-25 CPA) |
| **Misfits Market / Imperfect Foods** | Produce box | Direct (~$10-20 CPA) |
| **Butcher Box** | Meat subscription | Direct (~$30 CPA) |

### Cookware (featured in technique posts)
Every technique post references equipment. Cross-links to specific cookware:

| Category | Recommended brands | Affiliate |
|---|---|---|
| Cast iron skillet | Lodge (budget), Stargazer (mid), Smithey (premium) | Amazon / direct |
| Carbon steel | Made In, De Buyer | Direct (Made In ShareASale ~8%) |
| Stainless steel pan | All-Clad, Made In | Amazon + Made In direct |
| Dutch oven | Le Creuset, Staub, Lodge | Amazon + retailer |
| Sheet pan | Nordic Ware | Amazon |
| Chef's knife | Victorinox (budget), Wüsthof (mid), Misen (DTC) | Amazon + Misen direct |
| Kitchen scale | Escali, OXO | Amazon |
| Instant-read thermometer | Thermapen | ThermoWorks direct |

### Cookbook cross-sells
Every diet pillar links to relevant cookbooks (Amazon Associates):
- Anti-Inflammatory: Monica Reinagel's *Inflammation Free Diet Plan*, Dr. Mark Hyman's books
- Mediterranean: Yasmin Khan's *Zaitoun*, Diane Kochilas's works, *Modern Mediterranean*
- Whole30: Melissa Urban's *The Whole30* (official)
- Protein-forward: Brian Lagerstrom, Alison Roman (general)

Low margin but high opener rate. These are cart-fillers.

---

## 3. Display ad strategy

**Not at launch.** Display ad networks (Mediavine, Raptive) require minimum traffic — 50k monthly sessions for Mediavine, 100k for Raptive's premium tier. The network applications take 2-6 weeks.

Pre-launch to month 3: NO display ads. Site must load fast and look clean for audience acquisition + email capture.

**Month 4 prep (expected around 30-40k sessions):**
- Pre-application to Mediavine
- Audit ad placement UX — ads NEVER between recipe ingredients, NEVER between recipe steps, NEVER obscuring a photo
- Ad slots reserved in page templates but rendered only when `SITE.displayAdsEnabled = true`

**Month 5-6 (50k+ sessions):**
- Mediavine live
- $18-25 RPM initially, climbing toward $22-28 as Mediavine optimizes the site
- Target: $2-3k/mo display by month 6

**Month 9-12 (100k+ sessions):**
- Consider Raptive switchover (higher RPM at premium tier)
- Target: $4-5k/mo display by month 12

### Ad placement rules (bound to editorial principle #10)

- In-content ads: between paragraphs in the INTRO section only (max 2)
- Sidebar ads on desktop: acceptable, non-sticky
- Sticky footer ad: one max, dismissable
- **NEVER:** between recipe ingredients, between recipe steps, between a photo and its caption, in the Nutrition Ledger, in the Chef Notes section, between a headline and its associated paragraph
- **Mobile:** max 3 in-content ads per page, all outside the recipe card, all load-lazy below the fold

---

## 4. Revenue model (month 12)

Per research doc §9 projection at 200k sessions/mo:

| Stream | Month 12 target | Notes |
|---|---|---|
| **Display (Mediavine)** | $4.4k/mo | 200k sessions × $22 RPM |
| **Affiliate** | $2k/mo | Primary: Butcher Box, Thrive Market, Kettle & Fire, cookbook Amazon |
| **Newsletter sponsorship** | $500-1k/mo | 12k+ subs × occasional brand partnerships |
| **Cookbook PDF** (post-month-8) | $500-1.5k/mo | $19 cookbook, ~50-100 sales/mo once established |
| **Total blended** | **~$6-8k/mo** | Per research §9 |

### Top revenue drivers (expected)

1. Display ads (once Mediavine is live) — the largest single line item
2. Butcher Box CPA ($30 per signup) — the highest-value affiliate per click
3. Thrive Market CPA (~$15-25 per signup)
4. Amazon Associates on cookware + cookbooks (volume, low margin)
5. Kettle & Fire (ShareASale) on soup + stock recipes

---

## 5. Cookbook PDF (post-month-8 launch)

**"The 14-Day Anti-Inflammatory Reset Cookbook"** — $19 PDF.

- 14 recipes from the Wave 1 pillar + 14 bonus recipes
- Cover + interior design to match brand
- Nutrition Ledger on every recipe
- Weekly meal plan + shopping list
- Prep-ahead timeline

Launch approach: pre-order email list at month 6, soft launch month 8 to Starter Kit subscribers, full launch month 9.

### Future products
- Mediterranean 14-day cookbook (Q2 2027)
- Weekly meal plan membership ($5/mo — validate at 10k newsletter subs)
- Live cooking class (Q4 2027 — with named chef onboarding)

---

## 6. Compliance per recipe/post page

- `<AffiliateDisclosure>` at the top of posts with affiliate content
- `<AffiliateLink>` (`rel="sponsored nofollow noopener"`) for all product links
- `<PriceAsOf>` on cookware recommendations (prices dated)
- Recipe schema validates before publication (CI blocking)
- Original photography (or explicitly note if licensed food photography with attribution)
- Display ad placement follows the rules in §3 (enforced via template-level ad-slot definitions)

---

## 7. Application order

**Month 1:** no affiliate links. Build content + photography + lead magnet.

**Month 2 (10+ recipes live with photography):**
- Amazon Associates
- ShareASale network + specific merchants (Kettle & Fire, Siete, Primal Kitchen, Butcher Box, Made In)
- Impact.com → Momentous, Vital Proteins, Truvani, Organifi

**Month 3 (20+ recipes, first Pinterest traction):**
- Thrive Market direct affiliate
- Misfits Market / Imperfect Foods
- Thermapen (ThermoWorks direct)
- Cookbook publisher Amazon Associates (they often pay higher rates than standard)

**Month 4 prep:**
- Mediavine pre-application (audit + fix any issues)

**Month 5-6:**
- Mediavine live
- Raptive pre-application for month 9-10 switchover consideration

**Month 8+:**
- Cookbook PDF launch
- Newsletter sponsorship outreach

---

## 8. What we won't affiliate

- Weight-loss products or diet pills
- Meal replacement shakes marketed as "skinny" or "thin"
- Diet culture brands (even if they pay well — brand integrity issue)
- "Detox" teas, cleanse products
- MLM food brands (Beachbody, Isagenix, etc.)
- Cheap counterfeit cookware on Amazon (we curate carefully)

---

## 9. Seasonal revenue patterns

Recipe sites have strong seasonality:
- **Q4 (Nov-Dec):** Gift guides → cookware + cookbook affiliate spike. Holiday recipe traffic spike.
- **Q1 (Jan):** "New year diet" spike → diet pillar pages + meal plans
- **Q3 (Aug-Sep):** Back-to-school meal prep + lunchbox content
- **Spring:** Mediterranean + garden-to-plate

Plan editorial calendar around these cycles. Gift guide in mid-November, New Year meal plans in late December.
