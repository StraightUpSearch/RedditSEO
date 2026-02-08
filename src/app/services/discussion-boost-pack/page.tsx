import { Metadata } from "next";
import { PACKAGES } from "@/lib/constants";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

const pkg = PACKAGES[1];

export const metadata: Metadata = {
  title: "Discussion Boost Pack | Reddit Marketing Service",
  description:
    "Spread your brand story across high-traffic Reddit conversations. 3 threads, 10 comments, full engagement reporting. Starting at $1,250.",
};

export default function DiscussionBoostPackPage() {
  return <ServicePageTemplate pkg={pkg} />;
}
