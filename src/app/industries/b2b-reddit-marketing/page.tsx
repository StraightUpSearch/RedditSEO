import { Metadata } from "next";
import { Building2, TrendingUp, MessageCircle, Bot } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Reddit Marketing for B2B Brands",
  description:
    "Reddit marketing for B2B and SaaS companies. Position your brand as a thought leader in the subreddits where your buyers research solutions.",
};

const benefits = [
  {
    icon: Building2,
    title: "Reach Decision Makers",
    description:
      "B2B buyers research solutions on Reddit before contacting sales. Subreddits like r/SaaS, r/marketing, and r/startups are filled with founders and VPs evaluating tools and services.",
  },
  {
    icon: TrendingUp,
    title: "Build Thought Leadership",
    description:
      "Thoughtful posts and comments in professional subreddits establish your brand as an authority. These mentions compound over time as threads rank on Google.",
  },
  {
    icon: MessageCircle,
    title: "Influence the Conversation",
    description:
      'When someone asks "what is the best tool for X" on Reddit, your brand should be in the top answer. We make that happen through authentic, helpful engagement.',
  },
  {
    icon: Bot,
    title: "Get Cited by AI",
    description:
      "B2B buyers increasingly use AI assistants to shortlist vendors. Reddit mentions feed directly into those AI generated recommendations.",
  },
];

const subreddits = [
  "r/SaaS",
  "r/startups",
  "r/marketing",
  "r/SEO",
  "r/entrepreneur",
  "r/smallbusiness",
  "r/webdev",
  "r/devops",
  "r/sysadmin",
  "r/projectmanagement",
  "r/ProductManagement",
  "r/CRM",
];

export default function B2BRedditMarketingPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Reddit Marketing for B2B Brands
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your next customer is asking for a recommendation on Reddit right
              now. We position your brand as the answer in the subreddits where
              B2B buyers do their research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/services" variant="primary" size="lg">
                View Packages
              </Button>
              <Button href="/book-call" variant="outline" size="lg">
                Book a Strategy Call
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-bg-light rounded-lg p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-reddit-orange" />
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-dark rounded-2xl p-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Popular Subreddits for B2B
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {subreddits.map((sub) => (
                <div
                  key={sub}
                  className="bg-white/10 rounded-lg px-4 py-3 text-center text-white text-sm font-medium"
                >
                  {sub}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs text-center mt-4">
              We research and validate the best subreddits for your specific
              industry and product.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
