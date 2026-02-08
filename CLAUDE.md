# CLAUDE.md — The Reddit SEO: AI Build Brief & Development Guide

> **Purpose:** This file is the single source of truth for any AI agent, developer, or VA tasked with building, editing, or extending "The Reddit SEO" website. Read this before writing any code, copy, or design.

---

## 1. Project Overview

**The Reddit SEO** is a productized, Reddit-only marketing service website targeting DTC and B2B brands that want to influence organic search rankings, AI model training data, and brand trust through Reddit.

| Field | Value |
|---|---|
| Brand Name | The Reddit SEO |
| Tagline | "Influence Search. Get Seen by AI. Dominate Reddit." |
| Owner | Jamie Irwin / Straight Up Search |
| Primary Market | United States (USA first, other English-speaking markets secondary) |
| Language | American English (color, optimize, behavior, etc.) |
| Currency | USD ($). All prices displayed in dollars. |
| Crypto Payments | Accepted: BTC, ETH, USDT. Use Coinbase Commerce or CoinPayments integration. |
| Tone | Direct, confident, zero fluff. Reads like a sharp operator wrote it, not a marketing team. |

---

## 2. Repository Structure

This is a greenfield project. The site will be built from scratch using Next.js (preferred) or a similar modern framework. Expected directory layout once built:

```
/
├── CLAUDE.md                 # This file (AI build brief)
├── README.md                 # Project readme
├── package.json              # Dependencies and scripts
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript config
├── public/                   # Static assets (images, fonts, favicons)
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage (/)
│   │   ├── services/
│   │   │   ├── page.tsx      # All packages grid (/services)
│   │   │   ├── brand-signal-pack/page.tsx
│   │   │   ├── discussion-boost-pack/page.tsx
│   │   │   ├── ai-visibility-campaign/page.tsx
│   │   │   ├── branded-subreddit-launch/page.tsx
│   │   │   └── reddit-units/page.tsx
│   │   ├── custom-plan/page.tsx
│   │   ├── why-reddit/page.tsx
│   │   ├── industries/
│   │   │   ├── dtc-reddit-marketing/page.tsx
│   │   │   ├── b2b-reddit-marketing/page.tsx
│   │   │   └── reddit-subreddits-by-niche/page.tsx
│   │   ├── how-it-works/page.tsx
│   │   ├── case-studies/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── book-call/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── refund-policy/page.tsx
│   ├── components/           # Reusable UI components
│   │   ├── layout/           # Header, Footer, Navigation
│   │   ├── ui/               # Buttons, Cards, Badges, Toggles
│   │   ├── sections/         # Hero, PackageGrid, FAQ, CTA, etc.
│   │   └── forms/            # Lead capture, contact, checkout
│   ├── lib/                  # Utilities, API helpers, constants
│   │   ├── constants.ts      # Service data, pricing, URLs
│   │   ├── stripe.ts         # Stripe checkout integration
│   │   └── analytics.ts      # GA4, Meta Pixel setup
│   ├── styles/               # Global styles, Tailwind config
│   │   └── globals.css
│   └── types/                # TypeScript type definitions
│       └── index.ts
├── tailwind.config.ts        # Tailwind CSS configuration
└── .env.local                # Environment variables (never commit)
```

---

## 3. Development Workflow

### Tech Stack

| Component | Choice |
|---|---|
| Framework | Next.js 14+ (App Router, TypeScript) |
| Styling | Tailwind CSS |
| CMS | Headless (Sanity or Contentful) for blog + case studies |
| Payments (USD) | Stripe Checkout with product catalog |
| Payments (Crypto) | Coinbase Commerce or CoinPayments widget |
| Lead Capture | Calendly embed on /book-call, email capture via ConvertKit or Mailerlite |
| Analytics | GA4 + Meta Pixel + optional LinkedIn Insight Tag |
| Hosting | Vercel (preferred) or Netlify |
| Forms | Native React forms or Tally.so / Typeform for intake briefs |
| Email Automation | ConvertKit or Mailerlite for onboarding drip sequences |
| Icons | Lucide React or Tabler Icons (lightweight SVG) |

### Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

### Git Conventions

- Branch naming: `feature/<description>`, `fix/<description>`, `claude/<session-id>`
- Commit messages: Concise, descriptive, imperative tense ("Add service page template", "Fix pricing toggle")
- Always push to feature branches, never directly to main

### Code Conventions

- TypeScript for all files (`.tsx`, `.ts`)
- Functional components only (no class components)
- Use Next.js App Router conventions (layout.tsx, page.tsx, loading.tsx, error.tsx)
- Tailwind CSS for all styling (no separate CSS files per component)
- Component files: PascalCase (`PackageCard.tsx`, `HeroSection.tsx`)
- Utility files: camelCase (`formatPrice.ts`, `analytics.ts`)
- Keep components small and focused; extract reusable pieces into `/components/ui/`
- All service/package data should live in a central constants file (`/lib/constants.ts`), not hardcoded in pages

---

## 4. Brand Identity & Copy Rules

### Writing Rules

| Rule | Detail |
|---|---|
| Spelling | American English always (color, optimize, behavior, analyze, etc.) |
| Tone | Direct, confident, operator-level. Not academic, not fluffy. |
| Punctuation | NEVER use dashes or em-dashes in any output. Use commas, periods, or restructure the sentence. |
| Banned Words | Beacon, Bombastic, Embrace, Dive, Discover, Unleash, Unlock, Realm, Say goodbye, Elevate, Explore, Solace, Supercharge, Plethora, Demystify, Furthermore, "In this digital landscape" |
| Sales Claims | Never promise rankings, traffic numbers, or guaranteed AI mentions. Use: "designed to," "positions your brand for," "gives you the best chance of," "our clients typically see." |
| Currency | Always USD ($). Display prices as $497, $997, $1,997, etc. |

### Visual Design System

| Element | Specification |
|---|---|
| Primary Font | Inter or Space Grotesk (clean sans-serif) |
| Body Font Size | 16px base, 1.6 line height |
| Primary Color | Reddit Orange: `#FF4500` |
| Secondary Color | Slate/Charcoal: `#1A1A2E` |
| Accent / CTA Color | Green: `#2ECC71` |
| Background | White (`#FFFFFF`) with light gray (`#F5F5F5`) alternating sections |
| Card Style | Rounded corners (8px), subtle shadow, white background |
| Button Style | Rounded (6px), bold text, primary = green bg + white text, secondary = outlined |
| Icons | Lucide or Tabler (lightweight SVG) |
| Layout | Mobile-first, grid-based, generous whitespace |
| Images | Minimal stock. Prefer screenshots, data visuals, and simple illustrations. No generic "person at laptop" hero images. |

### Tailwind Theme Extension

```js
// tailwind.config.ts colors
colors: {
  'reddit-orange': '#FF4500',
  'slate-dark': '#1A1A2E',
  'cta-green': '#2ECC71',
  'bg-light': '#F5F5F5',
}
```

---

## 5. Site Map & URL Structure

```
/                                   Homepage
/services                           All packages (grid/card layout)
/services/brand-signal-pack         Tier 1 product page
/services/discussion-boost-pack     Tier 2 product page
/services/ai-visibility-campaign    Tier 3 product page
/services/branded-subreddit-launch  Tier 4 product page
/services/reddit-units              A la carte: posts, comments, upvotes
/custom-plan                        Enterprise / bespoke quote funnel
/why-reddit                         Educational: why Reddit matters for SEO + AI
/industries/dtc-reddit-marketing    SEO landing page for DTC brands
/industries/b2b-reddit-marketing    SEO landing page for B2B / SaaS
/industries/reddit-subreddits-by-niche   Resource page
/how-it-works                       Process walkthrough (3-5 steps)
/case-studies                       Results and proof (placeholder initially)
/blog                               SEO content hub
/book-call                          Calendly embed + lead capture
/terms                              Terms of service
/privacy                            Privacy policy
/refund-policy                      Refund and re-placement policy
```

---

## 6. Service Packages (Product Data Schema)

Every package follows this data structure. Use it to populate cards, product pages, checkout, and reporting templates. Store this in `/lib/constants.ts` as typed objects.

### TypeScript Interface

```typescript
interface ServicePackage {
  name: string;
  slug: string;
  hook: string;
  priceOneTime: number;
  priceMonthly?: number;
  idealClient: string;
  deliverables: string[];
  executionTime: string;
  reportingFormat: string;
  riskLevel: string;
  upsells: { name: string; price: number }[];
}
```

### 6a. Brand Signal Pack

| Field | Value |
|---|---|
| Name | Brand Signal Pack |
| Slug | `/services/brand-signal-pack` |
| Hook | "Get your first AI-readable brand mentions live in under 2 weeks." |
| Price | $497 (one-time) / $397/mo (recurring) |
| Ideal Client | New products, startups, local businesses establishing initial Reddit footprint |
| Deliverables | 1 to 3 native Reddit threads with brand mention + 5 supporting comments, all based on keyword/AI demand research |
| Execution Time | 7 to 14 days |
| Reporting | Excel/PDF with live URLs, subreddit names, thread titles, upvote/view counts |
| Risk Level | Low (white-hat organic engagement) |
| Upsells | Add 10 extra comments ($150), Add upvote boost ($75) |

### 6b. Discussion Boost Pack

| Field | Value |
|---|---|
| Name | Discussion Boost Pack |
| Slug | `/services/discussion-boost-pack` |
| Hook | "Spread your brand story across high-traffic Reddit conversations." |
| Price | $997 (one-time) / $847/mo (recurring) |
| Ideal Client | Growing DTC brands, SaaS in competitive niches, agencies needing white-label Reddit |
| Deliverables | 3 primary Reddit threads + 10 high-quality branded comments across target subreddits |
| Execution Time | 14 to 21 days |
| Reporting | Full link report with engagement metrics per placement |
| Risk Level | Low to Medium |
| Upsells | Add a dedicated post ($250), Add 25 extra comments ($350) |

### 6c. AI Visibility Campaign

| Field | Value |
|---|---|
| Name | AI Visibility Campaign |
| Slug | `/services/ai-visibility-campaign` |
| Hook | "Be everywhere AI looks when someone searches your category." |
| Price | $1,997 (one-time) / $1,697/mo (recurring) |
| Ideal Client | Established brands scaling AI + organic search footprint, SaaS with multiple product lines |
| Deliverables | 5 strategic threads + 20 comments across validated subreddits, full Excel report with live URLs and view stats |
| Execution Time | 14 to 28 days |
| Reporting | Comprehensive spreadsheet: placements, subreddits, topics, engagement, screenshots |
| Risk Level | Medium (managed grey-hat) |
| Upsells | Add upvote booster (100 upvotes, $175), Add 20 extra comments ($400) |

### 6d. Branded Subreddit Launch

| Field | Value |
|---|---|
| Name | Branded Subreddit Launch |
| Slug | `/services/branded-subreddit-launch` |
| Hook | "Own your corner of Reddit. Build a community that keeps giving." |
| Price | $2,997 (one-time) |
| Ideal Client | Brands wanting a long-term owned community channel, SaaS with active user base |
| Deliverables | Full subreddit setup (design, rules, sidebar, flair), 10 launch posts + 40 supporting comments, moderation guide |
| Execution Time | 21 to 35 days |
| Reporting | Growth stats, post data, handover documentation |
| Risk Level | Low |
| Upsells | Monthly community management retainer ($997/mo) |

### 6e. Reddit Units (A La Carte)

| Field | Value |
|---|---|
| Name | Reddit Units |
| Slug | `/services/reddit-units` |
| Hook | "Buy exactly what you need: posts, comments, upvotes." |
| Pricing | Posts: $75 each / Comments: $25 each / Upvotes: $1.50 each / Downvotes: $2.00 each |
| Ideal Client | Teams running their own strategy who need execution support, agencies buying units at volume |
| Min Order | $150 |
| Execution | Submit brief, we draft for approval, deploy within 3 to 7 days |
| Reporting | Live links + engagement snapshot per unit |

### 6f. Custom AI Visibility Plan

| Field | Value |
|---|---|
| Name | Custom AI Visibility Plan |
| Slug | `/custom-plan` |
| Hook | "Your goals. Your timeline. Our Reddit expertise." |
| Price | From $3,000/mo (bespoke scoping) |
| Ideal Client | Enterprise brands, multi-product companies, agencies needing white-label at scale |
| Deliverables | Tailored roadmap: target subreddits, posting schedule, escalation path, monthly reporting |
| Execution Time | 1 to 12+ months |
| CTA | "Get a Custom Quote" (leads to Calendly or intake form) |

---

## 7. Page Templates & Copy Structure

### 7a. Homepage Layout

```
[HERO SECTION]
  H1: "Influence Search. Get Seen by AI. Dominate Reddit."
  Sub: "Productized Reddit campaigns that control the conversations
        Google and AI rank for your brand."
  CTA1: "Book a Free Strategy Call" -> /book-call
  CTA2: "View Packages" -> /services

[PROBLEM SECTION]
  H2: "The Search Game Changed. Reddit Won."
  3-column grid:
    Col 1: "Google Ranks Reddit" + short paragraph
    Col 2: "AI Trains on Reddit" + short paragraph
    Col 3: "Buyers Trust Reddit" + short paragraph

[PACKAGES PREVIEW]
  H2: "Pick Your Package"
  4 cards (Brand Signal / Discussion Boost / AI Visibility / Subreddit Launch)
  Each card: Name, 1-line description, price, CTA button

[HOW IT WORKS]
  H2: "How It Works"
  3 steps (numbered, with icons):
    1. "Tell Us Your Goals" - Brief intake form
    2. "We Research & Create" - Subreddit mapping, content drafting, approval
    3. "Live Placements + Report" - Deployed content, full transparency report

[SOCIAL PROOF]
  H2: "Trusted by Brands That Get It"
  2-3 testimonial cards (placeholder text initially, swap in real quotes as they come)
  Optional: Clutch/Trustpilot badge area

[WHY REDDIT TEASER]
  H2: "Why Reddit Is the Most Underpriced Channel in Marketing"
  Short 3-4 sentence summary linking to /why-reddit
  CTA: "Learn Why Reddit Matters ->"

[FINAL CTA]
  H2: "Ready to Own the Conversation?"
  CTA: "Book Your Free Strategy Call" -> /book-call
```

### 7b. Individual Service Page Template

```
[HERO]
  H1: {Service Name}
  Sub: {Hook / 1-line promise}
  CTA1: "Buy Now" -> checkout
  CTA2: "Book a Call First" -> /book-call

[WHAT'S INCLUDED]
  Bulleted deliverables list with quantities
  Timeline badge (e.g. "Delivered in 14-21 days")
  Report format note

[WHO IT'S FOR]
  Short paragraph describing ideal client
  2-3 use case bullets

[HOW IT WORKS]
  Step-by-step (3-5 steps)
  Optional: screenshot placeholder of a Reddit thread with brand mention

[PRICING & PAYMENT]
  Price displayed prominently in USD
  Toggle: "One-time" / "Monthly (save X%)"
  Secondary line: "Also accept BTC, ETH, USDT"
  CTA: "Buy Now" -> Stripe checkout / crypto option

[ADD-ONS]
  Upsell options as checkboxes or cards
  E.g. "+10 comments ($150)" / "+Upvote booster ($75)"

[FAQS]
  4-6 questions covering:
    - "How do you avoid Reddit spam rules?"
    - "Will posts stay visible long-term?"
    - "What results should I expect?"
    - "Can I approve content before it goes live?"
    - "What if a post gets removed?"

[CTA FOOTER]
  "Not sure which package? Book a free call." -> /book-call
```

### 7c. /why-reddit Page

```
[HERO]
  H1: "Why Reddit Is the Biggest Untapped Channel for SEO and AI Visibility"
  Sub: "Google reads it. AI trains on it. Buyers trust it. Here's how it works."

[SECTION: Google Ranks Reddit]
  - Reddit threads appear in organic SERPs, especially for "best X", "X vs Y",
    "is X legit" queries
  - Google's "Discussions" tab highlights Reddit for buyer-intent searches
  - Helpful Reddit content can rank page 1, even for competitive terms

[SECTION: AI Trains on Reddit]
  - Google licenses Reddit data for AI Overviews
  - ChatGPT and other LLMs include Reddit discussion data in training
  - Brand mentions in Reddit threads feed directly into AI-generated answers

[SECTION: Buyers Trust Reddit]
  - 64% of consumers prefer brands seen as authentic on community platforms
  - Reddit recommendations outperform ads for purchase intent
  - Peer advice in threads converts better than branded content

[SECTION: Market Intelligence]
  - Reddit is a live focus group: questions reveal content gaps, unmet needs,
    competitor weaknesses
  - Keyword tools miss what Reddit surfaces organically

[CTA]
  "See Our Packages" -> /services
  "Book a Strategy Call" -> /book-call
```

---

## 8. SEO Configuration

### Title Tag Patterns
- Homepage: `The Reddit SEO | Reddit Marketing for AI & Organic Search Visibility`
- Service pages: `{Service Name} | Reddit Marketing Service | The Reddit SEO`
- Industry pages: `Reddit Marketing for {Industry} Brands | The Reddit SEO`
- Blog posts: `{Post Title} | The Reddit SEO Blog`

### Meta Description Rules
- 145 to 155 characters
- Must include a benefit + CTA
- Example: "Productized Reddit marketing campaigns that put your brand in the conversations Google and AI rank. View packages or book a free strategy call."

### Schema Markup Requirements
- **Product** schema on each service page (name, price, currency, description)
- **FAQ** schema on service pages and /why-reddit
- **Article** schema on blog posts
- **Organization** schema on homepage
- Generate `sitemap.xml` and `robots.txt` on build
- Enforce canonical URLs on all pages

### Internal Linking Rules
- Every blog post links to at least 1 service page
- Every service page links to /why-reddit and /book-call
- /why-reddit links to all service pages
- Industry pages link to relevant service pages

---

## 9. Conversion & Pricing Logic

### Pricing Strategy
- **Anchor high, sell mid.** Display the Custom Plan ($3,000+/mo) prominently so the $997 and $1,997 tiers feel accessible.
- **Monthly toggle.** Offer ~15% discount for monthly recurring vs one-time pricing.
- **Minimum order.** Reddit Units minimum is $150.
- **Crypto discount.** Optional: 5% off for crypto payments (lower processing fees justify it).

### Upsell Architecture
- Each package page shows relevant add-ons as checkboxes below the main CTA.
- Post-purchase: email sequence offers the next tier up ("You bought the Brand Signal Pack. Ready to scale? Here's 20% off the Discussion Boost Pack.")
- Bundle incentive: Buy any 2 packages together, get 10% off the combined price.

### Compliance-Safe Sales Copy
- Never promise rankings, traffic numbers, or guaranteed AI mentions.
- Use: "designed to," "positions your brand for," "gives you the best chance of," "our clients typically see."
- Risk disclaimer in footer (see Legal section below).

---

## 10. Reporting & Deliverables Format

Every campaign produces a client-facing report. Standard columns:

| Column | Description |
|---|---|
| Subreddit | The community where content was placed |
| Thread Title | Title of the Reddit post |
| Content Type | Post / Comment |
| Live URL | Direct link to the Reddit content |
| Date Published | When it went live |
| Upvotes (at report time) | Current upvote count |
| Comment Count | Number of replies on the thread |
| Brand Mentioned | Yes/No + how (name drop, link, contextual) |
| Status | Live / Removed / Replaced |
| Notes | Any observations (e.g. "Top comment in thread", "Thread ranks page 1 for [keyword]") |

Deliver as: Excel (.xlsx) or Google Sheet (shared link). Include a 1-page narrative summary at the top.

---

## 11. Legal & Compliance Copy

### Footer Disclaimer
> "The Reddit SEO provides compliant Reddit engagement using established accounts and community-appropriate content. All activity respects subreddit guidelines and Reddit's content policy. Results vary depending on brand, subreddit dynamics, and search/AI algorithm changes. We do not guarantee specific ranking positions, traffic volumes, or AI citations."

### Refund Policy (/refund-policy)
> "Due to the nature of digital marketing services, all sales are final once work has begun. If posts or comments are removed by Reddit moderators within 48 hours of placement, we will re-place equivalent content at no additional cost. For campaigns where 50% or more of deliverables are removed and cannot be re-placed, we offer a partial credit toward a future campaign. Credits are valid for 90 days."

### Terms of Service Key Points
- Client provides accurate brand info and approved URLs
- Client understands Reddit is a third-party platform outside our control
- We reserve the right to decline campaigns that would violate Reddit's content policy
- White-label clients must not misrepresent the service origin

---

## 12. Blog Content Strategy

Publish 2 to 4 blog posts per month targeting long-tail SEO keywords.

| Topic | Target Keyword | Intent |
|---|---|---|
| How Reddit Threads Rank on Google (And How to Use That) | reddit seo strategy | Informational |
| Reddit Marketing for Ecommerce: A Practical Guide | reddit marketing ecommerce | Informational/Commercial |
| What Are AI Overviews and Why Reddit Content Appears in Them | ai overviews reddit | Informational |
| Best Subreddits for SaaS Marketing in 2026 | best subreddits saas marketing | Commercial |
| Reddit vs Quora for Brand Visibility: Which Wins? | reddit vs quora marketing | Comparison |
| How to Get Your Brand Mentioned in ChatGPT Answers | chatgpt brand mentions | Commercial |
| The Cost of Reddit Marketing Services (Honest Breakdown) | reddit marketing service cost | Commercial |
| Why DTC Brands Are Investing in Reddit Over TikTok Ads | dtc reddit marketing | Informational/Commercial |

---

## 13. Competitor References (For Positioning, Not Copying)

| Competitor | What to Note |
|---|---|
| **Loganix (Reddit Amplify + Reddit Units)** | Productized structure, unit-based pricing, clean marketplace UX, white-label reporting. Closest model to replicate. |
| **Stanislav Tarasenko (stanislav.expert)** | Similar package tiers (Brand Signal, Discussion Boost, AI Visibility). Good naming conventions. Pricing reference. |
| **Thredly (bethredly.com)** | Full-service Reddit agency. White-hat positioning. Good "how it works" page structure. |
| **Soar Agency** | Conversation SEO angle. Blends content seeding with paid Reddit ads. |

**Positioning Statement:**
The Reddit SEO is NOT an upvote farm or spam service. We sit between full-service agencies (expensive, slow) and black-hat vote sellers (cheap, risky). Our lane: productized, transparent, scalable Reddit campaigns for brands that want to show up in search and AI without getting banned.

---

## 14. Build Priority Order

When building this site, follow this sequence:

1. **Project scaffolding** (Next.js + Tailwind + TypeScript setup, routing)
2. **Shared layout** (Header, Footer, Navigation, CTA components)
3. **Homepage** (hero, packages preview, how it works, CTAs)
4. **Service pages** (4 main packages + Reddit Units, using shared template)
5. **/why-reddit** (educational page, high SEO value)
6. **/book-call** (Calendly embed, lead capture form)
7. **/how-it-works** (process page)
8. **Industry landing pages** (DTC, B2B, subreddits-by-niche)
9. **/custom-plan** (enterprise quote funnel)
10. **/blog** (CMS setup + first 3 posts)
11. **/case-studies** (placeholder page, populate as results come in)
12. **Legal pages** (terms, privacy, refund)
13. **Checkout flow** (Stripe + crypto integration)
14. **SEO finalization** (schema markup, sitemap, robots.txt, meta tags)
15. **Analytics setup** (GA4, Meta Pixel, conversion tracking)

---

## 15. What NOT to Do

- Do NOT use generic stock photos of people at laptops
- Do NOT write copy that sounds like a marketing textbook
- Do NOT promise specific rankings, traffic, or AI citations
- Do NOT position this as a "black-hat" or "vote buying" service
- Do NOT use dashes or em-dashes in any copy
- Do NOT include any of the banned words listed in Section 4
- Do NOT over-design. Speed to launch beats pixel perfection.
- Do NOT create separate CSS files per component. Use Tailwind utility classes.
- Do NOT add features that were not requested. MVP first, iterate later.
- Do NOT hardcode service data in individual pages. Use centralized data files.

---

## 16. Environment Variables

Required `.env.local` variables (never commit this file):

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_COINBASE_COMMERCE_KEY=
NEXT_PUBLIC_GA4_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_CALENDLY_URL=
CONVERTKIT_API_KEY=
NEXT_PUBLIC_SITE_URL=https://theredditseo.com
```

---

## 17. Target Clients

**Primary:**
- DTC / eCommerce brands (Shopify, Amazon sellers, CPG)
- B2B SaaS companies wanting thought leadership positioning
- Agencies wanting to white-label Reddit services
- Affiliate marketers and content publishers

**Value Proposition** sits at the intersection of three trends:
1. **Google ranks Reddit.** Reddit threads appear in organic SERPs, "Discussions" tabs, and featured snippets for buyer-intent queries.
2. **AI trains on Reddit.** Google AI Overviews, ChatGPT, Gemini, and Perplexity all ingest Reddit content. Brand mentions become training data for AI answers.
3. **Buyers trust Reddit.** 64% of consumers prefer brands they perceive as authentic on community platforms. Reddit is the largest trust signal engine outside of review sites.

---

## 18. Success Metrics (Post-Launch)

| Metric | Target (Month 1) | Target (Month 3) |
|---|---|---|
| Organic sessions | 500+ | 2,000+ |
| /book-call submissions | 10+ | 30+ |
| Package purchases | 3+ | 10+ |
| Blog posts published | 4 | 12 |
| Case studies live | 1 | 3 |
| Email list subscribers | 50+ | 200+ |

---

*Last updated: February 2026*
*Maintained by: Jamie Irwin / Straight Up Search*
