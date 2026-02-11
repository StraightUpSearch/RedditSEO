import Button from "@/components/ui/Button";
import { TrendingUp, ArrowRight, Search, Bot, DollarSign } from "lucide-react";

const stats = [
  { icon: Search, value: "62%", label: "of buyer-intent queries show Reddit results" },
  { icon: Bot, value: "$60M", label: "Google paid Reddit for AI training data" },
  { icon: DollarSign, value: "64%", label: "of consumers trust community platforms" },
];

export default function WhyRedditTeaser() {
  return (
    <section className="bg-slate-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="w-14 h-14 bg-reddit-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-7 h-7 text-reddit-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Reddit Is the Most Underpriced Channel in Marketing
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Reddit threads rank on Google, feed AI training data, and influence
            buying decisions more than any ad. Brands that show up authentically
            in Reddit conversations get compounding returns in organic
            visibility. The window is open now.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <stat.icon className="w-5 h-5 text-reddit-orange mx-auto mb-2" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <p className="text-xs text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button href="/why-reddit" variant="secondary" size="lg">
            Learn Why Reddit Matters <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
