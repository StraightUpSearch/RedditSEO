import Button from "@/components/ui/Button";
import { TrendingUp, Shield } from "lucide-react";

const proofStats = [
  { number: "50+", label: "Brands Served" },
  { number: "200+", label: "Subreddits Targeted" },
  { number: "2,000+", label: "Placements Delivered" },
  { number: "48hr", label: "Replacement Guarantee" },
];

const proofPoints = [
  "Ranked client brand in Google AI Overviews within 45 days",
  "Secured top-thread placements across 18 subreddits for a single DTC brand",
  "Generated 14,000+ organic views from Reddit threads ranking on page 1",
];

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-reddit-orange/10 text-reddit-orange text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            Used by 50+ DTC and B2B brands
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-dark leading-tight mb-6">
            Get Your Brand Mentioned Where Google and AI{" "}
            <span className="text-reddit-orange">Look First</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Reddit campaigns designed to influence rankings, AI answers, and
            buyer trust. Fixed pricing. Full transparency. Live reporting on
            every placement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href="/services" variant="primary" size="lg">
              View Packages
            </Button>
            <Button href="/book-call" variant="outline" size="lg">
              Book Strategy Call
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {proofStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-slate-dark">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-bg-light rounded-xl p-6 sm:p-8 text-left">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-cta-green" />
              <span className="font-bold text-slate-dark text-sm">
                Recent Results
              </span>
            </div>
            <ul className="space-y-3">
              {proofPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <svg
                    className="w-4 h-4 text-cta-green mt-0.5 shrink-0"
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
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
