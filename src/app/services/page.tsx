import { Metadata } from "next";
import { PACKAGES, REDDIT_UNITS, SERVICE_FAQS } from "@/lib/constants";
import PackageCard from "@/components/ui/PackageCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Reddit SEO Packages & Pricing | Reddit Marketing Services",
  description:
    "Choose from productized Reddit marketing packages. Get brand mentions, Reddit threads, comments, and upvotes. Transparent pricing in USD with crypto accepted.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Reddit Marketing Packages"
            subtitle="All packages include hands-on Reddit content placement, community-appropriate engagement, and full transparency reporting."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} featured={i === 2} />
            ))}
          </div>

          <div className="border-t border-gray-200 pt-16">
            <SectionHeading
              title="Reddit Units (A La Carte)"
              subtitle="Buy exactly what you need. Posts, comments, upvotes. Minimum order $150."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {REDDIT_UNITS.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm"
                >
                  <h3 className="font-bold text-slate-dark mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-dark">
                      ${item.pricePerUnit % 1 === 0 ? item.pricePerUnit : item.pricePerUnit.toFixed(2)}
                    </span>
                    <span className="text-gray-500 text-sm">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button href="/services/reddit-units" variant="outline">
                Learn More About Reddit Units
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-16 mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-dark mb-4">
              Need Something Custom?
            </h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">
              Enterprise brands, multi-product companies, and agencies needing
              white-label at scale. Let us build a plan around your goals.
            </p>
            <Button href="/custom-plan" variant="secondary">
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion faqs={SERVICE_FAQS} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
