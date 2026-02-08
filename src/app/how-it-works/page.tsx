import { Metadata } from "next";
import {
  ClipboardList,
  Search,
  PenTool,
  CheckCircle,
  BarChart3,
} from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "How It Works | Reddit Marketing Process",
  description:
    "Our proven 5-step Reddit marketing process: intake, research, content creation, deployment, and reporting. Full transparency at every step.",
};

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us Your Goals",
    description:
      "Share your target audience, keywords, competitors, and brand guidelines. Our onboarding form collects everything we need to build a strategy tailored to your business.",
    details: [
      "Target subreddits and communities",
      "Keywords and topics relevant to your brand",
      "Competitor names and positioning",
      "Brand voice and messaging guidelines",
      "URLs and content to reference",
    ],
  },
  {
    icon: Search,
    title: "We Research Your Market",
    description:
      "Our team maps the best subreddits for your brand, analyzes competitor activity, and identifies the highest-value threads and conversations to participate in.",
    details: [
      "Subreddit analysis and validation",
      "Thread and conversation mapping",
      "Competitor mention tracking",
      "Keyword and topic opportunity identification",
      "Community rules and culture review",
    ],
  },
  {
    icon: PenTool,
    title: "Content Creation and Approval",
    description:
      "We draft authentic, community-appropriate posts and comments that mention your brand naturally. You review and approve everything before it goes live.",
    details: [
      "Native, community-appropriate content",
      "Subtle, contextual brand mentions",
      "Client approval before posting",
      "Tone matching for each subreddit",
      "Multiple content variations for testing",
    ],
  },
  {
    icon: CheckCircle,
    title: "Live Deployment",
    description:
      "Using aged, topic-relevant accounts, we post your approved content across target subreddits. Posts are spaced naturally and amplified with upvotes to gain visibility.",
    details: [
      "Posted via aged, established accounts",
      "Natural pacing to avoid detection",
      "Upvote amplification for visibility",
      "Real-time monitoring for engagement",
      "48-hour replacement guarantee on removals",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting and Results",
    description:
      "You receive a comprehensive report with live URLs, engagement metrics, and performance insights. Every placement is documented with full transparency.",
    details: [
      "Live URLs for every placement",
      "Upvote and comment counts",
      "Subreddit and thread details",
      "Traffic and visibility insights",
      "Recommendations for next steps",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600">
              From intake to live placements, our process is built for
              transparency and results. Here is exactly what happens when you
              work with us.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-reddit-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-dark">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-bg-light rounded-lg p-6 border border-gray-100">
                    <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="w-5 h-5 text-reddit-orange" />
                    </div>
                    <ul className="space-y-3">
                      {step.details.map((detail, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-gray-700"
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
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" variant="primary" size="lg">
                View Packages
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
