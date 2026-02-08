import { Metadata } from "next";
import { PACKAGES } from "@/lib/constants";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

const pkg = PACKAGES[2];

export const metadata: Metadata = {
  title: "AI Visibility Campaign | Reddit Marketing Service",
  description:
    "Be everywhere AI looks when someone searches your category. 5 strategic threads, 20 comments, comprehensive reporting. Starting at $1,997.",
};

export default function AIVisibilityCampaignPage() {
  return <ServicePageTemplate pkg={pkg} />;
}
