import { Metadata } from "next";
import { PACKAGES, REDDIT_UNITS, SERVICE_FAQS } from "@/lib/constants";
import PackageCard from "@/components/ui/PackageCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import Button from "@/components/ui/Button";
import { CheckCircle, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Reddit SEO Packages & Pricing | Reddit Marketing Services",
  description:
    "Choose from productized Reddit marketing packages starting at $490. Get brand mentions, Reddit threads, comments, and upvotes. Transparent pricing with crypto accepted.",
};

const comparisonFeatures = [
  { feature: "Reddit Threads", values: ["1 to 3", "3", "5", "10+"] },
  { feature: "Branded Comments", values: ["5", "10", "20", "40"] },
  { feature: "Keyword Research", values: [true, true, true, true] },
  { feature: "Content Approval", values: [true, true, true, true] },
  { feature: "Transparency Report", values: [true, true, true, true] },
  { feature: "Subreddit Mapping", values: [false, true, true, true] },
  { feature: "Subreddit Design & Setup", values: [false, false, false, true] },
  { feature: "Moderation Guide", values: [false, false, false, true] },
  { feature: "Screenshots & Evidence", values: [false, false, true, true] },
  { feature: "48hr Replacement", values: [true, true, true, true] },
];

function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate-dark to-reddit-orange/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Reddit Marketing Packages
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            All packages include hands-on Reddit content placement,
            community-appropriate engagement, and full transparency reporting.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {PACKAGES.map((pkg, i) => (
              <PackageCard key={pkg.slug} pkg={pkg} featured={i === 2} />
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-slate-dark text-center mb-2">
              Compare Packages
            </h2>
            <p className="text-gray-500 text-center mb-8">
              See exactly what you get at each tier.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 pr-4 text-sm font-bold text-slate-dark w-1/5">
                      Feature
                    </th>
                    {PACKAGES.map((pkg, i) => (
                      <th
                        key={pkg.slug}
                        className={`text-center py-4 px-3 text-sm font-bold ${
                          i === 2 ? "text-reddit-orange" : "text-slate-dark"
                        }`}
                      >
                        <div>{pkg.name}</div>
                        <div className="text-lg mt-1">{formatPrice(pkg.priceOneTime)}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row) => (
                    <tr key={row.feature} className="border-b border-gray-100">
                      <td className="py-3 pr-4 text-sm text-gray-700">{row.feature}</td>
                      {row.values.map((val, i) => (
                        <td key={i} className="py-3 px-3 text-center">
                          {val === true ? (
                            <CheckCircle className="w-5 h-5 text-cta-green mx-auto" />
                          ) : val === false ? (
                            <Minus className="w-5 h-5 text-gray-300 mx-auto" />
                          ) : (
                            <span className="text-sm font-medium text-slate-dark">{val}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Reddit Units */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold text-slate-dark text-center mb-2">
              Reddit Units (A La Carte)
            </h2>
            <p className="text-gray-500 text-center mb-8">
              Buy exactly what you need. Posts, comments, upvotes. Minimum order $150.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {REDDIT_UNITS.map((item) => (
                <div
                  key={item.name}
                  className="bg-bg-light rounded-xl border border-gray-100 p-6 hover:border-reddit-orange/20 transition-colors"
                >
                  <h3 className="font-bold text-slate-dark mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-dark">
                      ${item.pricePerUnit % 1 === 0 ? item.pricePerUnit : item.pricePerUnit.toFixed(2)}
                    </span>
                    <span className="text-gray-400 text-sm">{item.unit}</span>
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

          {/* Custom */}
          <div className="border-t border-gray-200 pt-16 mt-16">
            <div className="bg-gradient-to-br from-slate-dark to-slate-dark/95 rounded-2xl p-10 sm:p-14 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Need Something Custom?
              </h2>
              <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                Enterprise brands, multi-product companies, and agencies needing
                white-label at scale. Let us build a plan around your goals.
              </p>
              <Button href="/custom-plan" variant="secondary" size="lg">
                Get a Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={SERVICE_FAQS} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
