import { Metadata } from "next";
import { PACKAGES } from "@/lib/constants";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

const pkg = PACKAGES[3];

export const metadata: Metadata = {
  title: "Branded Subreddit Launch | Reddit Marketing Service",
  description:
    "Own your corner of Reddit. Full subreddit setup, 10 launch posts, 40 supporting comments, moderation guide. Starting at $2,997.",
};

export default function BrandedSubredditLaunchPage() {
  return <ServicePageTemplate pkg={pkg} />;
}
