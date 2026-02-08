import { Search, Bot, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const problems = [
  {
    icon: Search,
    title: "Google Ranks Reddit",
    description:
      'Reddit threads appear in organic search results, especially for "best X," "X vs Y," and "is X legit" queries. Google\'s Discussions tab highlights Reddit for buyer-intent searches. Helpful Reddit content can rank page 1, even for competitive terms.',
  },
  {
    icon: Bot,
    title: "AI Trains on Reddit",
    description:
      "Google licenses Reddit data for AI Overviews. ChatGPT, Gemini, and Perplexity all ingest Reddit content. Brand mentions in Reddit threads feed directly into AI generated answers about your category.",
  },
  {
    icon: Users,
    title: "Buyers Trust Reddit",
    description:
      "64% of consumers prefer brands seen as authentic on community platforms. Reddit recommendations outperform ads for purchase intent. Peer advice in threads converts better than branded content.",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Search Game Changed. Reddit Won."
          subtitle="Google, AI, and buyers all look to Reddit for answers. If your brand isn't part of those conversations, you're invisible."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-reddit-orange" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">
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
