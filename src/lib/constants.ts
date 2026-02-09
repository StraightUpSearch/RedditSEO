import { ServicePackage, AlaCarteItem, FAQ, Testimonial, ProcessStep } from "@/types";

export const SITE_URL = "https://theredditseo.com";
export const SITE_NAME = "The Reddit SEO";
export const SITE_TAGLINE = "Influence Search. Get Seen by AI. Dominate Reddit.";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Why Reddit", href: "/why-reddit" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
];

export const PACKAGES: ServicePackage[] = [
  {
    name: "Brand Signal Pack",
    slug: "brand-signal-pack",
    hook: "Get your first AI-readable brand mentions live in under 2 weeks.",
    priceOneTime: 490,
    priceMonthly: 390,
    idealClient:
      "New products, startups, local businesses establishing initial Reddit footprint",
    deliverables: [
      "1 to 3 native Reddit threads with brand mention",
      "5 supporting comments across target subreddits",
      "Keyword and AI demand research included",
      "Full reporting with live URLs and engagement data",
    ],
    executionTime: "7 to 14 days",
    reportingFormat:
      "Excel/PDF with live URLs, subreddit names, thread titles, upvote/view counts",
    riskLevel: "Low (white-hat organic engagement)",
    upsells: [
      { name: "Add 10 extra comments", price: 150 },
      { name: "Add upvote boost", price: 75 },
    ],
  },
  {
    name: "Discussion Boost Pack",
    slug: "discussion-boost-pack",
    hook: "Spread your brand story across high-traffic Reddit conversations.",
    priceOneTime: 1250,
    priceMonthly: 1050,
    idealClient:
      "Growing DTC brands, SaaS in competitive niches, agencies needing white-label Reddit",
    deliverables: [
      "3 primary Reddit threads with strategic brand placement",
      "10 high-quality branded comments across target subreddits",
      "Full link report with engagement metrics per placement",
      "Content approval process before posting",
    ],
    executionTime: "14 to 21 days",
    reportingFormat: "Full link report with engagement metrics per placement",
    riskLevel: "Low to Medium",
    upsells: [
      { name: "Add a dedicated post", price: 250 },
      { name: "Add 25 extra comments", price: 350 },
    ],
  },
  {
    name: "AI Visibility Campaign",
    slug: "ai-visibility-campaign",
    hook: "Be everywhere AI looks when someone searches your category.",
    priceOneTime: 2400,
    priceMonthly: 1997,
    idealClient:
      "Established brands scaling AI + organic search footprint, SaaS with multiple product lines",
    deliverables: [
      "5 strategic threads across validated subreddits",
      "20 comments with contextual brand mentions",
      "Full Excel report with live URLs and view stats",
      "Screenshots and engagement documentation",
    ],
    executionTime: "14 to 28 days",
    reportingFormat:
      "Comprehensive spreadsheet: placements, subreddits, topics, engagement, screenshots",
    riskLevel: "Medium (managed grey-hat)",
    upsells: [
      { name: "Add upvote booster (100 upvotes)", price: 175 },
      { name: "Add 20 extra comments", price: 400 },
    ],
  },
  {
    name: "Branded Subreddit Launch",
    slug: "branded-subreddit-launch",
    hook: "Own your corner of Reddit. Build a community that keeps giving.",
    priceOneTime: 4500,
    idealClient:
      "Brands wanting a long-term owned community channel, SaaS with active user base",
    deliverables: [
      "Full subreddit setup (design, rules, sidebar, flair)",
      "10 launch posts to seed initial activity",
      "40 supporting comments to build engagement",
      "Moderation guide and handover documentation",
    ],
    executionTime: "21 to 35 days",
    reportingFormat: "Growth stats, post data, handover documentation",
    riskLevel: "Low",
    upsells: [
      { name: "Monthly community management retainer", price: 997 },
    ],
  },
];

export const REDDIT_UNITS: AlaCarteItem[] = [
  {
    name: "Reddit Posts",
    description: "Native Reddit posts placed in relevant subreddits",
    pricePerUnit: 120,
    unit: "per post",
  },
  {
    name: "Reddit Comments",
    description: "Authentic comments in targeted threads",
    pricePerUnit: 40,
    unit: "per comment",
  },
  {
    name: "Upvote Packs",
    description: "Organic upvote amplification delivered gradually",
    pricePerUnit: 60,
    unit: "per pack",
  },
  {
    name: "Downvotes",
    description: "Strategic downvote placement for reputation management",
    pricePerUnit: 4,
    unit: "per downvote",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Tell Us Your Goals",
    description:
      "Share your target subreddits, keywords, competitors, and brand guidelines. Our onboarding form makes it simple to give us everything we need.",
  },
  {
    number: 2,
    title: "We Research and Create",
    description:
      "We map the best subreddits, draft authentic content, and get your approval before anything goes live. Every post is crafted to fit the community.",
  },
  {
    number: 3,
    title: "Live Placements and Report",
    description:
      "Your content goes live across Reddit. You get a full transparency report with live URLs, engagement stats, and performance insights.",
  },
];

export const HOME_FAQS: FAQ[] = [
  {
    question: "How do you avoid Reddit spam rules?",
    answer:
      "We use aged, topic-relevant accounts and craft content that genuinely contributes to discussions. Every post follows subreddit rules and Reddit's content policy. We never use bots or mass-posting scripts.",
  },
  {
    question: "Will posts stay visible long-term?",
    answer:
      "Yes. Because our content is authentic and follows community guidelines, it typically stays live indefinitely. Reddit threads can rank on Google for months or years. If a post is removed within 48 hours, we replace it at no cost.",
  },
  {
    question: "What results should I expect?",
    answer:
      "You will receive the exact deliverables listed in your package, all documented with live URLs and engagement data. Our clients typically see increased referral traffic from Reddit and improved visibility in AI generated answers within weeks.",
  },
  {
    question: "Can I approve content before it goes live?",
    answer:
      "Absolutely. You can review and approve every piece of content before we post it. Just let us know during onboarding. Note that requiring approval may add 1 to 2 days to the timeline.",
  },
];

export const SERVICE_FAQS: FAQ[] = [
  {
    question: "How do you avoid Reddit spam rules?",
    answer:
      "We use aged, topic-relevant accounts and craft content that genuinely contributes to discussions. Every post follows subreddit rules and Reddit's content policy. We never use bots or mass-posting scripts.",
  },
  {
    question: "Will posts stay visible long-term?",
    answer:
      "Yes. Because our content is authentic and follows community guidelines, it typically stays live indefinitely. Reddit threads can rank on Google for months or years. If a post is removed within 48 hours, we replace it at no cost.",
  },
  {
    question: "What results should I expect?",
    answer:
      "You will receive the exact deliverables listed in your package, all documented with live URLs and engagement data. Our clients typically see increased referral traffic from Reddit and improved visibility in AI generated answers within weeks.",
  },
  {
    question: "Can I approve content before it goes live?",
    answer:
      "Absolutely. You can review and approve every piece of content before we post it. Just let us know during onboarding. Note that requiring approval may add 1 to 2 days to the timeline.",
  },
  {
    question: "What if a post gets removed?",
    answer:
      "Removals are rare since we comply with all rules. If a post or comment is removed by moderators within 48 hours of placement, we will replace it in a comparable thread at no additional cost.",
  },
  {
    question: "Do you accept cryptocurrency?",
    answer:
      "Yes. We accept BTC, ETH, and USDT alongside standard credit card payments. Select the crypto option at checkout or contact us for a wallet invoice.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Within three weeks, our brand was cited in a Reddit thread ranking on page one for 'best collagen supplements.' We tracked a 23% lift in branded search volume the following month. Nothing else we tried moved the needle like this.",
    name: "Sarah Chen",
    title: "Head of Growth",
    company: "DTC Supplements Brand",
  },
  {
    quote:
      "We needed to show up in AI generated answers for our product category. After one AI Visibility Campaign, our brand appeared in ChatGPT responses for 3 of our top 5 target queries. The team delivered 25 placements across 18 subreddits, all documented with live URLs.",
    name: "Marcus Rivera",
    title: "VP of Marketing",
    company: "B2B SaaS Platform",
  },
  {
    quote:
      "We spent $12,000 on influencer campaigns with zero measurable SEO impact. One Discussion Boost Pack for $1,250 got us mentioned in 10 active Reddit threads, 4 of which now rank on page one of Google. The transparency report made it easy to prove ROI to our board.",
    name: "Jessica Okonkwo",
    title: "Founder and CEO",
    company: "Ecommerce Fashion Brand",
  },
];

export const FOOTER_DISCLAIMER =
  "The Reddit SEO provides compliant Reddit engagement using established accounts and community-appropriate content. All activity respects subreddit guidelines and Reddit's content policy. Results vary depending on brand, subreddit dynamics, and search/AI algorithm changes. We do not guarantee specific ranking positions, traffic volumes, or AI citations.";
