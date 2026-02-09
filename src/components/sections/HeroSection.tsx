import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";

const proofStats = [
  { number: "50+", label: "Brands Served" },
  { number: "200+", label: "Subreddits Targeted" },
  { number: "2,000+", label: "Placements Delivered" },
  { number: "48hr", label: "Replacement Guarantee" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-slate-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate-dark to-reddit-orange/20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-reddit-orange/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-reddit-orange text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/10">
              <Zap className="w-4 h-4" />
              Trusted by 50+ DTC and B2B brands
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Get Your Brand Mentioned Where Google and AI{" "}
              <span className="text-reddit-orange">Look First</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Reddit campaigns designed to influence rankings, AI answers, and
              buyer trust. Fixed pricing. Full transparency. Live reporting on
              every placement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href="/services" variant="primary" size="lg">
                View Packages <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="/book-call"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Book Strategy Call
              </Button>
            </div>

            <div className="space-y-2">
              {[
                "Content approved by you before posting",
                "48 hour replacement guarantee",
                "Full transparency report with every campaign",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-cta-green shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {proofStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center"
                >
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-cta-green rounded-full animate-pulse" />
                <span className="font-bold text-white text-sm">
                  Recent Client Results
                </span>
              </div>
              <div className="space-y-3">
                {[
                  { metric: "Google AI Overviews", result: "Brand cited within 45 days" },
                  { metric: "Subreddit Coverage", result: "18 subreddits, 1 campaign" },
                  { metric: "Organic Views", result: "14,000+ from page 1 threads" },
                ].map((item) => (
                  <div key={item.metric} className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{item.metric}</span>
                    <span className="text-white font-medium">{item.result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
