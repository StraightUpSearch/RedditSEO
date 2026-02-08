import { Metadata } from "next";
import { Target, Users, BarChart3, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Custom AI Visibility Plan | Enterprise Reddit Marketing",
  description:
    "Enterprise Reddit marketing for multi-product companies and agencies. Custom roadmap, target subreddits, posting schedule, and monthly reporting. From $3,000/mo.",
};

const features = [
  {
    icon: Target,
    title: "Tailored Strategy",
    description:
      "A custom roadmap built around your specific goals, target subreddits, and competitive landscape. No cookie-cutter packages.",
  },
  {
    icon: Users,
    title: "White-Label Ready",
    description:
      "Agencies can resell our Reddit marketing under their own brand. We handle execution, you handle the client relationship.",
  },
  {
    icon: BarChart3,
    title: "Monthly Reporting",
    description:
      "Comprehensive monthly reports with live URLs, engagement data, traffic attribution, and strategic recommendations.",
  },
  {
    icon: Zap,
    title: "Scalable Execution",
    description:
      "From 10 placements to 100+ per month. We scale our team and accounts to match your growth trajectory.",
  },
];

export default function CustomPlanPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Custom AI Visibility Plan
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Your goals. Your timeline. Our Reddit expertise.
            </p>
            <p className="text-gray-500">From $3,000/mo (bespoke scoping)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-bg-light rounded-lg p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-reddit-orange" />
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-dark rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let Us Build Your Custom Plan
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Tell us about your brand, target market, and goals. We will scope
              a plan and timeline that fits.
            </p>
            <Button
              href="/book-call"
              variant="primary"
              size="lg"
            >
              Get a Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
