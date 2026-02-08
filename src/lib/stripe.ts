import { PACKAGES, REDDIT_UNITS } from "./constants";

export interface CheckoutItem {
  slug: string;
  type: "package" | "unit";
  quantity?: number;
}

export const STRIPE_PRODUCT_IDS: Record<string, string> = {
  "brand-signal-pack": process.env.STRIPE_PRICE_BRAND_SIGNAL || "",
  "discussion-boost-pack": process.env.STRIPE_PRICE_DISCUSSION_BOOST || "",
  "ai-visibility-campaign": process.env.STRIPE_PRICE_AI_VISIBILITY || "",
  "branded-subreddit-launch": process.env.STRIPE_PRICE_BRANDED_SUBREDDIT || "",
  "reddit-posts": process.env.STRIPE_PRICE_REDDIT_POSTS || "",
  "reddit-comments": process.env.STRIPE_PRICE_REDDIT_COMMENTS || "",
  "upvote-packs": process.env.STRIPE_PRICE_UPVOTE_PACKS || "",
};

export function getPackageBySlug(slug: string) {
  return PACKAGES.find((p) => p.slug === slug);
}

export function getUnitByName(name: string) {
  return REDDIT_UNITS.find(
    (u) => u.name.toLowerCase().replace(/\s+/g, "-") === name
  );
}
