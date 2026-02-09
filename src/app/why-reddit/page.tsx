import { Metadata } from "next";
import { Search, Bot, Users, BarChart3 } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Why Reddit Is the Biggest Untapped Channel for SEO and AI Visibility",
  description:
    "Google reads it. AI trains on it. Buyers trust it. Learn how Reddit content ranks on Google, feeds AI answers, and influences buying decisions.",
};

const sections = [
  {
    icon: Search,
    title: "Google Ranks Reddit",
    points: [
      'Reddit threads appear in organic SERPs, especially for "best X," "X vs Y," and "is X legit" queries.',
      "Google's Discussions tab highlights Reddit content for buyer-intent searches.",
      "Helpful Reddit content can rank on page 1, even for competitive terms that established sites struggle to crack.",
      "Reddit threads often outrank traditional blog posts and product pages for comparison and recommendation queries.",
    ],
  },
  {
    icon: Bot,
    title: "AI Trains on Reddit",
    points: [
      "Google licenses Reddit data specifically for AI Overviews and search enhancements.",
      "ChatGPT, Gemini, Perplexity, and other LLMs include Reddit discussion data in their training corpora.",
      "Brand mentions in Reddit threads feed directly into AI generated answers when users ask about your category.",
      "As AI search continues to grow, Reddit content becomes an increasingly valuable signal for brand visibility.",
    ],
  },
  {
    icon: Users,
    title: "Buyers Trust Reddit",
    points: [
      "64% of consumers prefer brands they perceive as authentic on community platforms.",
      "Reddit recommendations outperform paid ads for purchase intent and credibility.",
      "Peer advice in threads converts better than branded content because it feels genuine and unbiased.",
      'Users actively search Reddit before buying, appending "reddit" to their Google queries for real opinions.',
    ],
  },
  {
    icon: BarChart3,
    title: "Market Intelligence You Cannot Get Elsewhere",
    points: [
      "Reddit is a live focus group: questions reveal content gaps, unmet needs, and competitor weaknesses.",
      "Keyword tools miss what Reddit surfaces organically through authentic user conversations.",
      "Subreddit activity signals emerging trends before they show up in search volume data.",
      "Competitor mentions on Reddit reveal exactly how your market talks about alternatives.",
    ],
  },
];

export default function WhyRedditPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Why Reddit Is the Biggest Untapped Channel for SEO and AI
              Visibility
            </h1>
            <p className="text-xl text-gray-600">
              Google reads it. AI trains on it. Buyers trust it. Here is how it
              works.
            </p>
          </div>

          <div className="space-y-20">
            {sections.map((section) => (
              <div
                key={section.title}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4">
                  <div className="w-14 h-14 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <section.icon className="w-7 h-7 text-reddit-orange" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-dark">
                    {section.title}
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <ul className="space-y-4">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-cta-green mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" variant="primary" size="lg">
                See Our Packages
              </Button>
              <Button href="/book-call" variant="outline" size="lg">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
