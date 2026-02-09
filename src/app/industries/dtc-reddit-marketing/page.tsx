import { Metadata } from "next";
import { ShoppingBag, TrendingUp, MessageCircle, Target } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Reddit Marketing for DTC Brands",
  description:
    "Reddit marketing designed for DTC and ecommerce brands. Get your products mentioned in the conversations that drive purchase decisions on Reddit and Google.",
};

const benefits = [
  {
    icon: ShoppingBag,
    title: "Reach Buyers at Decision Time",
    description:
      'DTC shoppers search Reddit for real opinions before buying. Threads like "best moisturizer for dry skin" or "is [brand] worth it" drive high-intent traffic directly to your store.',
  },
  {
    icon: TrendingUp,
    title: "Rank on Google Through Reddit",
    description:
      "Reddit threads consistently rank on page 1 for product comparison and recommendation queries. Your brand mention in a top thread becomes a long-term organic traffic source.",
  },
  {
    icon: MessageCircle,
    title: "Build Authentic Social Proof",
    description:
      "A genuine Reddit recommendation from a real account carries more weight than any ad. We position your product as the answer to real questions from real people.",
  },
  {
    icon: Target,
    title: "Feed AI with Your Brand",
    description:
      "When customers ask ChatGPT or Google AI for product recommendations, Reddit content is a primary data source. Your mentions become training data for AI generated answers.",
  },
];

const subreddits = [
  "r/SkincareAddiction",
  "r/BuyItForLife",
  "r/femalefashionadvice",
  "r/malefashionadvice",
  "r/Supplements",
  "r/HomeImprovement",
  "r/Coffee",
  "r/Fitness",
  "r/MealPrepSunday",
  "r/ZeroWaste",
  "r/techdeals",
  "r/GoodValue",
];

export default function DTCRedditMarketingPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Reddit Marketing for DTC Brands
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your customers are on Reddit right now, asking for product
              recommendations in your category. We make sure your brand is part
              of those conversations.
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
              Popular Subreddits for DTC Brands
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
              These are examples. We research and validate the best subreddits
              for your specific product category.
            </p>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
