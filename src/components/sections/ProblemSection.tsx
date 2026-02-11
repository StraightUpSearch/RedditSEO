import { Search, Bot, Users, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Search,
    title: "Google Ranks Reddit",
    stat: "62%",
    statLabel: "of buyer-intent queries show Reddit",
    benefits: [
      "Reddit threads appear in organic SERPs for \"best X\" and \"X vs Y\" queries",
      "Google's Discussions tab highlights Reddit for purchase research",
      "Helpful Reddit content can rank page 1, even for competitive terms",
    ],
  },
  {
    icon: Bot,
    title: "AI Trains on Reddit",
    stat: "$60M",
    statLabel: "Google paid for Reddit data",
    benefits: [
      "Google licenses Reddit data for AI Overviews",
      "ChatGPT, Gemini, and Perplexity ingest Reddit content",
      "Brand mentions become training data for AI answers",
    ],
  },
  {
    icon: Users,
    title: "Buyers Trust Reddit",
    stat: "64%",
    statLabel: "prefer brands seen on communities",
    benefits: [
      "Reddit recommendations outperform ads for purchase intent",
      "Peer advice in threads converts better than branded content",
      "Authentic Reddit presence builds lasting trust signals",
    ],
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Search Game Changed. Reddit Won."
          subtitle="Google, AI, and buyers all look to Reddit for answers. If your brand is not part of those conversations, you are invisible."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-reddit-orange/30 hover:shadow-lg transition-all group"
            >
              {/* Icon + Stat header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-reddit-orange/10 rounded-xl flex items-center justify-center group-hover:bg-reddit-orange/20 transition-colors">
                  <item.icon className="w-7 h-7 text-reddit-orange" />
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-slate-dark">{item.stat}</span>
                  <p className="text-xs text-gray-500 mt-0.5">{item.statLabel}</p>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-dark mb-4">
                {item.title}
              </h3>

              {/* Benefits list */}
              <ul className="space-y-3">
                {item.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                    <ArrowRight className="w-3.5 h-3.5 text-reddit-orange mt-1 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
