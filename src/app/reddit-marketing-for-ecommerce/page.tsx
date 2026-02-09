import { Metadata } from "next";
import {
  Search,
  Bot,
  Star,
  MessageCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title:
    "Reddit Marketing for Ecommerce | DTC Reddit Campaigns | The Reddit SEO",
  description:
    "Put your products in front of ready to buy shoppers on Reddit. Strategic placements in the subreddits where real purchase decisions happen every day.",
};

const subreddits = [
  "r/SkincareAddiction",
  "r/MakeupAddiction",
  "r/BuyItForLife",
  "r/femalefashionadvice",
  "r/malefashionadvice",
  "r/Supplements",
  "r/Fitness",
  "r/HomeImprovement",
  "r/Coffee",
  "r/ZeroWaste",
  "r/GoodValue",
  "r/techdeals",
  "r/Hair",
  "r/frugalmalefashion",
  "r/camping",
  "r/MealPrepSunday",
  "r/running",
  "r/backpacking",
  "r/Cooking",
  "r/dogs",
];

const purchaseInfluences = [
  {
    icon: MessageCircle,
    title: "Product Recommendation Threads",
    description:
      "Threads like \"best moisturizer for oily skin\" or \"what headphones should I buy under $100\" generate hundreds of responses and thousands of views. These threads become permanent shopping guides that rank on Google and influence AI recommendations. When your product is mentioned as the top answer, it drives direct purchase intent from readers who are ready to buy.",
  },
  {
    icon: Search,
    title: "Google Search Visibility",
    description:
      "When shoppers search Google for product recommendations, Reddit threads consistently rank on page 1. Google's Discussions tab gives Reddit even more visibility for shopping queries. A single Reddit thread recommending your product can drive organic traffic to your store for months or years without any ad spend. This is especially powerful for \"best [product] for [use case]\" queries.",
  },
  {
    icon: Bot,
    title: "AI Shopping Recommendations",
    description:
      "Consumers are increasingly asking AI chatbots for product recommendations. When someone asks ChatGPT \"what is the best face serum for aging skin?\" the AI pulls from Reddit discussions to form its answer. Products frequently recommended on Reddit have the best chance of appearing in these AI generated shopping lists. This is a channel that most ecommerce brands are not yet leveraging.",
  },
  {
    icon: Star,
    title: "Social Proof at Scale",
    description:
      "A Reddit recommendation carries more weight than a product review on your own website because it comes from an independent community member with no apparent brand affiliation. When potential customers see your product recommended multiple times across different threads by different users, it creates a powerful perception of organic popularity that traditional marketing cannot replicate.",
  },
];

const scenarios = [
  {
    title: "Skincare Brand Launch",
    description:
      "A new skincare brand needed to establish credibility in a market dominated by established names. We targeted r/SkincareAddiction, r/30PlusSkinCare, and r/AsianBeauty with threads and comments that positioned the brand's key products as effective alternatives worth trying. Content focused on ingredient analysis and real results, which is the type of discussion these communities value most.",
    result:
      "Multiple threads ranked on Google for product comparison keywords within 4 weeks. The brand reported a measurable increase in website traffic from Reddit referrals, with higher conversion rates than traffic from paid social channels.",
  },
  {
    title: "Home Goods DTC Brand",
    description:
      "An established DTC home goods brand wanted to increase visibility in the subreddits where homeowners research purchases. We identified r/HomeImprovement, r/BuyItForLife, and r/InteriorDesign as primary targets and created content around the brand's durability claims and design quality.",
    result:
      "Seeded threads generated genuine community engagement, with organic users sharing their own positive experiences with the brand in response to our initial mentions. Several threads were indexed by Google for high intent queries related to the brand's product category.",
  },
  {
    title: "Supplement Brand Scaling",
    description:
      "A supplement company wanted to compete against category leaders in Reddit discussions. We focused on r/Supplements, r/Fitness, and r/Nootropics with evidence based content that highlighted the brand's transparency and third party testing, which are values these communities prioritize.",
    result:
      "The brand went from zero Reddit mentions to consistent presence across target subreddits within 60 days. Multiple threads now rank on Google for supplement category keywords, providing ongoing organic visibility.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Which product categories work best for Reddit marketing?",
    answer:
      "Any product category where consumers research before purchasing works well on Reddit. Our strongest results come from skincare and beauty, supplements and wellness, fashion and accessories, home goods and improvement, tech accessories and gadgets, fitness equipment, coffee and food products, and pet supplies. If people ask \"what is the best [your product type]\" on Reddit, this service is designed for you.",
  },
  {
    question: "How quickly can Reddit marketing drive sales for my store?",
    answer:
      "Reddit marketing is designed to build sustained organic visibility rather than instant traffic spikes. Most clients see their placements indexed by Google within 1 to 4 weeks, and those threads can drive traffic for months or years. Some clients report direct Reddit referral traffic within the first week of placements going live, especially in highly active subreddits where new content gets immediate views.",
  },
  {
    question: "Can you link directly to my product pages in Reddit posts?",
    answer:
      "Direct product links are handled carefully. Some subreddits allow links in context, while others prohibit them entirely. We follow each subreddit's rules to ensure content stays visible. In most cases, we mention your brand name naturally so that readers can search for it themselves. This approach actually converts better because it creates organic discovery rather than a click that feels like an ad.",
  },
  {
    question: "How does this compare to influencer marketing for ecommerce?",
    answer:
      "Influencer marketing delivers a one time visibility spike that disappears quickly. Reddit marketing creates content that stays visible for months or years, ranks on Google, and trains AI models. A Reddit thread recommending your product can generate hundreds of views per month indefinitely, while an influencer post is typically forgotten within days. Many of our ecommerce clients run Reddit marketing alongside influencer campaigns for both short term and long term results.",
  },
  {
    question: "Do you work with Amazon sellers or only DTC brands?",
    answer:
      "We work with both. Amazon sellers benefit from Reddit marketing because positive Reddit mentions can drive external traffic to listings, which Amazon's algorithm rewards with better organic rankings. DTC brands benefit because Reddit threads create a layer of social proof that supports their own website traffic. The strategy is tailored based on whether your primary sales channel is your own store, Amazon, or both.",
  },
  {
    question: "What if my products get negative feedback on Reddit?",
    answer:
      "Constructive criticism is actually common and manageable on Reddit. If a seeded thread generates some critical responses, that is normal for authentic Reddit discussion. Our team monitors all placements and can guide you on how to respond appropriately. Often, addressing feedback transparently in the thread earns more credibility than pure positive mentions. We also ensure the overall volume of positive content outweighs any isolated negative responses.",
  },
];

export default function RedditMarketingForEcommercePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Reddit Marketing for Ecommerce: Put Your Products in Front of
              Buyers Who Are Ready to Buy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Millions of shoppers research products on Reddit before they
              purchase. Threads like &quot;best moisturizer for dry skin&quot;
              and &quot;is [brand] worth it&quot; rank on Google and feed AI
              recommendations. We place your products in those conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/services" variant="primary" size="lg">
                View Packages
              </Button>
              <Button href="/book-call" variant="outline" size="lg">
                Book a Free Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Ecommerce Brands Need Reddit */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Why Ecommerce Brands Need Reddit Marketing"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The way consumers shop online has fundamentally shifted. Paid
                social ads are becoming more expensive and less effective as
                privacy changes limit targeting. Review sites are losing
                credibility due to fake reviews. And consumers are increasingly
                skeptical of branded content. In response, buyers are turning to
                Reddit for authentic product recommendations from real people.
              </p>
              <p>
                Reddit is now the largest forum in the world, with communities
                for virtually every product category imaginable. From
                r/SkincareAddiction (2+ million members) to r/BuyItForLife (1.5+
                million members) to r/Supplements (500,000+ members), these
                subreddits are active marketplaces of opinion where purchase
                decisions are made every day.
              </p>
              <p>
                The compounding effect is what makes Reddit marketing so
                valuable for ecommerce. A product recommendation posted today can
                rank on Google for months, accumulate thousands of views, and
                eventually feed into AI models that recommend products to
                consumers. One piece of content, placed in the right thread, can
                generate more sustained value than thousands of dollars in paid
                advertising.
              </p>
              <p>
                Ecommerce brands that are not present in Reddit conversations are
                leaving money on the table. Their competitors are being
                recommended instead. And as AI shopping assistants become more
                popular, the brands with the strongest Reddit presence will be
                the ones AI recommends most often.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Reddit Drives Purchase Decisions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Reddit Drives Ecommerce Purchase Decisions"
            subtitle="Four channels through which Reddit content directly impacts sales."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {purchaseInfluences.map((influence) => (
              <div
                key={influence.title}
                className="bg-bg-light rounded-lg p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <influence.icon className="w-6 h-6 text-reddit-orange" />
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3">
                  {influence.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {influence.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Subreddits for Ecommerce */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Popular Subreddits for Ecommerce Brands"
            subtitle="Active communities where product recommendations drive real purchase decisions."
          />
          <div className="bg-slate-dark rounded-2xl p-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {subreddits.map((sub) => (
                <div
                  key={sub}
                  className="bg-white/10 rounded-lg px-4 py-3 text-center text-white text-sm font-medium"
                >
                  {sub}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs text-center mt-6">
              These are common examples. We research and validate the best
              subreddits for your specific product category as part of every
              campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Our Approach for Ecommerce Brands"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Ecommerce Reddit marketing requires content that feels like a
                genuine product recommendation, not an advertisement. Reddit
                communities are exceptionally good at identifying promotional
                content, and anything that reads like marketing gets downvoted or
                removed. Our approach is built around authenticity and community
                value.
              </p>
              <p>
                We start by analyzing the conversations happening in your
                product&apos;s category subreddits. What questions are people
                asking? Which products are being recommended? Where are the gaps
                where your product is a strong fit but not yet being mentioned?
                This research forms the foundation of every campaign.
              </p>
              <p>
                Our writers then create content that addresses real questions and
                concerns. A post in r/SkincareAddiction might share a routine
                that includes your product alongside other steps, explaining why
                it works for a specific skin concern. A comment in
                r/BuyItForLife might recommend your product in response to
                someone asking for durable options in your category. Every piece
                of content provides genuine value first, with the brand mention
                woven in naturally.
              </p>
              <p>
                All content is submitted for your approval before publishing. You
                see every post and comment, the target subreddit, and the context
                in which your product will be mentioned. We deploy using
                established accounts with real community participation histories
                and provide upvote support to help content gain initial traction.
              </p>
              <p>
                Post deployment, you receive a comprehensive report with every
                live URL, view count, upvote count, and Google indexing status.
                We monitor placements for removals and replace anything taken
                down within 48 hours at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Scenarios */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Example Scenarios"
            subtitle="How Reddit marketing campaigns work in practice for ecommerce brands."
          />
          <div className="space-y-8 max-w-3xl mx-auto">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="bg-white rounded-lg p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-slate-dark mb-4">
                  {scenario.title}
                </h3>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>{scenario.description}</p>
                  <p>
                    <strong className="text-slate-dark">
                      Typical Outcome:
                    </strong>{" "}
                    {scenario.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Pricing for Ecommerce Brands"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our packages are structured to match the needs of ecommerce
                brands at every stage. New product launches and smaller brands
                typically begin with the{" "}
                <strong>Brand Signal Pack at $490</strong>, which establishes an
                initial Reddit presence with 1 to 3 threads and 5 supporting
                comments in target subreddits.
              </p>
              <p>
                Growing DTC brands that want broader coverage across multiple
                product categories or subreddits choose the{" "}
                <strong>Discussion Boost Pack at $1,250</strong>, delivering 3
                threads and 10 comments. For established ecommerce brands
                pursuing comprehensive Reddit and AI visibility, the{" "}
                <strong>AI Visibility Campaign at $2,400</strong> provides 5
                strategic threads and 20 comments across validated communities.
              </p>
              <p>
                Brands looking to build a dedicated community around their
                products can opt for the{" "}
                <strong>Branded Subreddit Launch at $4,500</strong>, which
                includes full subreddit creation, design, launch content, and a
                moderation guide. Monthly recurring options are available at
                reduced rates for sustained Reddit presence.
              </p>
              <p>
                For individual needs, our Reddit Units option lets you purchase
                posts at $75 each, comments at $25 each, and upvotes at $1.50
                each, with a minimum order of $150.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/services" variant="primary" size="lg">
                View All Packages
              </Button>
              <Button href="/book-call" variant="outline" size="lg">
                Get a Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Why Ecommerce Brands Should Act Now"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The window of opportunity for Reddit marketing is open right now,
                but it will not stay this way forever. As more brands recognize
                the value of Reddit presence, competition for visibility in key
                subreddits will increase. The brands that build their Reddit
                footprint today will have an established advantage that
                latecomers will find difficult to match.
              </p>
              <p>
                AI shopping assistants are growing rapidly. Consumers are
                beginning to ask ChatGPT, Gemini, and Perplexity for product
                recommendations instead of browsing Amazon or Google. These AI
                tools rely heavily on Reddit data to form their answers. The
                ecommerce brands with the strongest Reddit presence today are
                building the training data that will influence AI recommendations
                for years to come.
              </p>
              <p>
                Meanwhile, paid acquisition costs continue to rise across every
                major platform. Facebook, Instagram, TikTok, and Google Ads are
                all becoming more expensive while delivering diminishing returns.
                Reddit marketing offers a fundamentally different value
                proposition: create content once and benefit from sustained
                organic visibility across search, AI, and the Reddit platform
                itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Frequently Asked Questions" />
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
