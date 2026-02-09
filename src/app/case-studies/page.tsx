import { Metadata } from "next";
import { ArrowRight, BarChart3, Eye, MessageSquare, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Case Studies | Reddit Marketing Results",
  description:
    "See how brands use Reddit marketing to boost organic search visibility, get cited by AI, and drive purchase decisions. Real results from real campaigns.",
};

const caseStudies = [
  {
    tag: "DTC Supplements",
    title: "From Zero Reddit Presence to Page 1 Rankings in 45 Days",
    challenge:
      "A DTC collagen supplements brand had no Reddit presence. Competitor brands were being recommended in top subreddits while their product was invisible to both Google and AI search tools.",
    approach:
      "We deployed a Discussion Boost Pack targeting 8 high-traffic health and wellness subreddits. 3 strategic threads and 10 supporting comments were placed over 21 days, all approved by the client before posting.",
    results: [
      { metric: "Reddit threads ranking on page 1 of Google", value: "4" },
      { metric: "Branded search volume increase", value: "23%" },
      { metric: "Subreddits with active brand mentions", value: "8" },
      { metric: "Organic views from Reddit placements", value: "14,200+" },
    ],
    quote: "Nothing else we tried moved the needle like this. We saw the brand show up in Google results within weeks.",
  },
  {
    tag: "B2B SaaS",
    title: "Getting Cited in AI Answers for 3 of 5 Target Queries",
    challenge:
      "A B2B project management SaaS wanted their brand to appear in AI generated answers when users asked about tools in their category. They had strong SEO but zero Reddit footprint.",
    approach:
      "We ran an AI Visibility Campaign across 18 validated subreddits. 5 strategic threads and 20 contextual comments positioned the brand as a trusted recommendation in authentic conversations.",
    results: [
      { metric: "AI generated answers citing the brand", value: "3 of 5 queries" },
      { metric: "Reddit placements delivered", value: "25" },
      { metric: "Subreddits targeted", value: "18" },
      { metric: "Posts still live after 90 days", value: "100%" },
    ],
    quote: "After one campaign, our brand appeared in ChatGPT responses for our top target queries. The documentation made it easy to prove ROI.",
  },
  {
    tag: "Ecommerce Fashion",
    title: "$1,250 Reddit Campaign Outperformed $12,000 in Influencer Spend",
    challenge:
      "An ecommerce fashion brand had invested $12,000 in influencer campaigns with no measurable SEO impact. They needed a channel that would produce lasting, searchable brand mentions.",
    approach:
      "A single Discussion Boost Pack placed branded mentions in 10 active Reddit threads across fashion, streetwear, and deal subreddits. Every piece of content was native to the community style.",
    results: [
      { metric: "Reddit threads now ranking on Google page 1", value: "4" },
      { metric: "Cost per ranking placement", value: "$312" },
      { metric: "Active threads with brand mentions", value: "10" },
      { metric: "Referral traffic from Reddit (month 1)", value: "1,800+" },
    ],
    quote: "The transparency report made it easy to prove ROI to our board. We are renewing quarterly.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-slate-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Campaign Results
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real outcomes from real Reddit marketing campaigns. Every metric is
            documented with live URLs and engagement data.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, i) => (
              <div
                key={i}
                className="bg-bg-light rounded-2xl border border-gray-100 overflow-hidden"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-reddit-orange/10 text-reddit-orange text-xs font-bold px-3 py-1 rounded-full">
                      {study.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-dark mb-6">
                    {study.title}
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-bold text-slate-dark text-sm uppercase tracking-wider mb-2">
                        Challenge
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-dark text-sm uppercase tracking-wider mb-2">
                        Our Approach
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {study.approach}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {study.results.map((result, j) => {
                      const icons = [TrendingUp, BarChart3, MessageSquare, Eye];
                      const Icon = icons[j % icons.length];
                      return (
                        <div
                          key={j}
                          className="bg-white rounded-xl p-4 border border-gray-100 text-center"
                        >
                          <Icon className="w-5 h-5 text-reddit-orange mx-auto mb-2" />
                          <div className="text-2xl font-bold text-slate-dark mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {result.metric}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-100">
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      &ldquo;{study.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-dark rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to See Results Like These?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Every campaign includes a full transparency report with live URLs,
              engagement data, and placement documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-call" variant="primary" size="lg">
                Book a Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
