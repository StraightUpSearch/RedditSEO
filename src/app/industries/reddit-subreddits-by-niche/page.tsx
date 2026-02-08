import { Metadata } from "next";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Reddit Subreddits by Niche | Find Your Target Communities",
  description:
    "Find the best Reddit subreddits for your industry. Curated lists of high-traffic communities for DTC, B2B, SaaS, health, finance, and more.",
};

const niches = [
  {
    name: "Ecommerce and DTC",
    subreddits: [
      "r/SkincareAddiction",
      "r/BuyItForLife",
      "r/femalefashionadvice",
      "r/Supplements",
      "r/Coffee",
      "r/Fitness",
    ],
  },
  {
    name: "SaaS and Technology",
    subreddits: [
      "r/SaaS",
      "r/startups",
      "r/webdev",
      "r/devops",
      "r/sysadmin",
      "r/ProductManagement",
    ],
  },
  {
    name: "Marketing and SEO",
    subreddits: [
      "r/SEO",
      "r/marketing",
      "r/digital_marketing",
      "r/content_marketing",
      "r/PPC",
      "r/socialmedia",
    ],
  },
  {
    name: "Finance and Investing",
    subreddits: [
      "r/personalfinance",
      "r/investing",
      "r/financialindependence",
      "r/CreditCards",
      "r/smallbusiness",
      "r/tax",
    ],
  },
  {
    name: "Health and Wellness",
    subreddits: [
      "r/Fitness",
      "r/loseit",
      "r/nutrition",
      "r/Meditation",
      "r/mentalhealth",
      "r/Supplements",
    ],
  },
  {
    name: "Home and Lifestyle",
    subreddits: [
      "r/HomeImprovement",
      "r/InteriorDesign",
      "r/DIY",
      "r/Cooking",
      "r/MealPrepSunday",
      "r/ZeroWaste",
    ],
  },
];

export default function SubredditsByNichePage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Reddit Subreddits by Niche
            </h1>
            <p className="text-xl text-gray-600">
              A starting point for identifying the Reddit communities where your
              target audience spends time. We validate and refine this list for
              every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {niches.map((niche) => (
              <div
                key={niche.name}
                className="bg-bg-light rounded-lg p-6 border border-gray-100"
              >
                <h2 className="text-lg font-bold text-slate-dark mb-4">
                  {niche.name}
                </h2>
                <ul className="space-y-2">
                  {niche.subreddits.map((sub) => (
                    <li
                      key={sub}
                      className="text-gray-700 text-sm flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-reddit-orange rounded-full shrink-0" />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-slate-dark rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Not Sure Which Subreddits Fit Your Brand?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              We research and validate the best communities for your specific
              product and audience as part of every campaign.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/book-call" variant="primary" size="lg">
                Book a Strategy Call
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
