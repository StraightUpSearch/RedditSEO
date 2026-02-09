import { Metadata } from "next";
import { PACKAGES } from "@/lib/constants";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

const pkg = PACKAGES[0];

export const metadata: Metadata = {
  title: "Brand Signal Pack | Reddit Marketing Service",
  description:
    "Get your first AI-readable brand mentions live in under 2 weeks. 1 to 3 Reddit threads, 5 supporting comments, full reporting. Starting at $490.",
};

export default function BrandSignalPackPage() {
  return <ServicePageTemplate pkg={pkg} />;
}
