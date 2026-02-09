import { Search, Bot, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const problems = [
  {
    icon: Search,
    title: "Google Ranks Reddit",
    stat: "62%",
    statLabel: "of buyer-intent queries show Reddit",
    description:
      'Reddit threads appear in organic search results, especially for "best X," "X vs Y," and "is X legit" queries. Google\'s Discussions tab highlights Reddit for buyer-intent searches.',
  },
  {
    icon: Bot,
    title: "AI Trains on Reddit",
    stat: "$60M",
    statLabel: "Google paid for Reddit data",
    description:
      "Google licenses Reddit data for AI Overviews. ChatGPT, Gemini, and Perplexity all ingest Reddit content. Brand mentions in Reddit threads feed directly into AI generated answers.",
  },
  {
    icon: Users,
    title: "Buyers Trust Reddit",
    stat: "64%",
    statLabel: "prefer brands seen on communities",
    description:
      "Reddit recommendations outperform ads for purchase intent. Peer advice in threads converts better than branded content. Authentic Reddit presence builds lasting trust.",
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
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-bg-light rounded-xl p-8 border border-gray-100 hover:border-reddit-orange/20 transition-colors"
            >
              <div className="w-12 h-12 bg-reddit-orange/10 rounded-xl flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-reddit-orange" />
              </div>
              <div className="mb-4">
                <span className="text-3xl font-bold text-slate-dark">{item.stat}</span>
                <p className="text-xs text-gray-500 mt-1">{item.statLabel}</p>
              </div>
              <h3 className="text-lg font-bold text-slate-dark mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
