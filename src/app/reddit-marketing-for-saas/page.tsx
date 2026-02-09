import { Metadata } from "next";
import {
  TrendingUp,
  MessageCircle,
  Search,
  Bot,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title: "Reddit Marketing for SaaS Companies | The Reddit SEO",
  description:
    "Get your SaaS product recommended in the Reddit threads where buyers research tools. Strategic placements in r/SaaS, r/startups, r/webdev, and more.",
};

const subreddits = [
  { name: "r/SaaS", description: "SaaS founders, builders, and marketers discussing tools, growth, and strategy" },
  { name: "r/startups", description: "Startup founders sharing tools, advice, and product recommendations" },
  { name: "r/webdev", description: "Web developers discussing frameworks, hosting, and development tools" },
  { name: "r/devops", description: "DevOps engineers comparing infrastructure and automation platforms" },
  { name: "r/marketing", description: "Marketers sharing strategies, tools, and campaign results" },
  { name: "r/Entrepreneur", description: "Business owners asking for software and service recommendations" },
  { name: "r/smallbusiness", description: "Small business operators looking for affordable, practical tools" },
  { name: "r/sysadmin", description: "System administrators evaluating enterprise software and security tools" },
  { name: "r/CRM", description: "Sales and success teams comparing CRM platforms and integrations" },
  { name: "r/projectmanagement", description: "Project managers discussing workflow and collaboration tools" },
  { name: "r/digital_marketing", description: "Digital marketers evaluating analytics, SEO, and advertising platforms" },
  { name: "r/ecommerce", description: "Ecommerce operators researching tools for inventory, shipping, and growth" },
];

const buyingInfluences = [
  {
    icon: MessageCircle,
    title: "Tool Recommendation Threads",
    description:
      "Threads titled \"What CRM do you use?\" or \"Best project management tool for a small team?\" generate hundreds of responses and thousands of views. These threads become permanent recommendation engines that rank on Google and feed AI training data. If your tool is not mentioned, your competitors are the ones getting recommended.",
  },
  {
    icon: Search,
    title: "Comparison and Versus Threads",
    description:
      "SaaS buyers frequently search for \"Tool A vs Tool B\" comparisons on Reddit because they trust peer opinions over vendor marketing. These threads rank prominently on Google and directly influence which product a buyer chooses. Having your tool recommended in these comparison discussions positions you as a legitimate contender at the decision point.",
  },
  {
    icon: TrendingUp,
    title: "Problem and Solution Discussions",
    description:
      "When a developer posts \"How do I automate my deployment pipeline?\" or a marketer asks \"What tools do you use for email analytics?\" every response is a mini recommendation. These threads are where SaaS products gain their strongest organic endorsements. Being the answer in these discussions builds credibility that no ad can match.",
  },
  {
    icon: Bot,
    title: "AI Sourced Recommendations",
    description:
      "When someone asks ChatGPT \"What is the best CRM for startups?\" the AI draws heavily from Reddit data to formulate its answer. SaaS tools that are frequently recommended in Reddit threads have the best chance of being cited in AI generated responses. This makes Reddit one of the most valuable channels for influencing how AI positions your product.",
  },
];

const caseExamples = [
  {
    title: "Project Management SaaS",
    scenario:
      "A mid stage project management tool needed to break into conversations dominated by established competitors like Asana, Monday, and ClickUp. We identified 15 active subreddits where project management discussions happen regularly and created content highlighting the tool's unique differentiators in the context of real user problems.",
    approach:
      "We deployed 5 original threads and 20 comments across r/projectmanagement, r/startups, r/Entrepreneur, and r/smallbusiness over 21 days. Each piece of content addressed specific pain points that the client's tool solves better than alternatives.",
    typicalOutcome:
      "Within 6 weeks, multiple seeded threads ranked on Google for comparison keywords. The client reported that new trial signups mentioned Reddit as their discovery source at a higher rate than any other organic channel.",
  },
  {
    title: "Developer Tools SaaS",
    scenario:
      "A developer tooling company wanted to establish presence in technical subreddits where developers evaluate infrastructure tools. The challenge was creating content that technical audiences would accept and upvote rather than dismiss as marketing.",
    approach:
      "Our writers, who have real development experience, created technically accurate posts and comments in r/webdev, r/devops, and r/sysadmin. Content focused on solving real problems and mentioning the tool as one option among several, maintaining the balanced tone these communities expect.",
    typicalOutcome:
      "Threads earned genuine engagement from community members, including follow up questions and additional upvotes from organic users. Several threads were indexed by Google for target keywords within 3 weeks.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Which subreddits are most valuable for SaaS marketing?",
    answer:
      "It depends on your product category. General SaaS subreddits like r/SaaS and r/startups work well for broad visibility. For more targeted reach, niche subreddits aligned with your product type are often more valuable. A CRM tool benefits most from r/CRM and r/sales, while a DevOps platform gets better traction in r/devops and r/sysadmin. We research and validate the highest value subreddits for your specific product as part of every campaign.",
  },
  {
    question: "How do you handle technical subreddits where users are highly skeptical?",
    answer:
      "Technical communities like r/webdev, r/devops, and r/sysadmin have zero tolerance for marketing fluff. We use writers with genuine technical backgrounds who understand the platforms and pain points being discussed. Our content contributes real technical value and mentions your product only where it is a genuine fit. This approach earns respect and engagement rather than downvotes.",
  },
  {
    question: "Can Reddit marketing work for early stage SaaS with no brand recognition?",
    answer:
      "Absolutely. Reddit is one of the best channels for early stage SaaS precisely because it rewards genuine, helpful content over brand size. A well written recommendation of your tool in a relevant thread carries the same weight whether your company is a funded startup or a bootstrapped side project. Many of our most successful SaaS clients started with zero Reddit presence.",
  },
  {
    question: "How does Reddit marketing fit into our existing SaaS growth strategy?",
    answer:
      "Reddit marketing complements your existing channels. It feeds organic search by creating content that ranks on Google for comparison and recommendation keywords. It supports AI visibility by providing training data for language models. It generates social proof that strengthens your positioning in sales conversations. Most clients run Reddit campaigns alongside content marketing, paid acquisition, and product led growth efforts.",
  },
  {
    question: "What results should we expect from a SaaS Reddit campaign?",
    answer:
      "Our clients typically see Reddit placements indexed by Google within 1 to 4 weeks. Threads can rank for comparison keywords like \"best [category] tool\" and drive organic traffic for months. Over time, consistent Reddit presence builds AI visibility, where your tool begins appearing in AI generated recommendations. We provide full reporting on every placement, including live URLs, engagement metrics, and Google indexing status.",
  },
  {
    question: "Do you offer recurring campaigns for SaaS brands?",
    answer:
      "Yes. SaaS markets move fast and new discussion threads are created daily. Monthly recurring campaigns ensure your brand stays present in the latest conversations rather than relying solely on older placements. We offer reduced monthly rates and can tailor the volume and subreddit mix each month based on what is trending in your category.",
  },
];

export default function RedditMarketingForSaaSPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Reddit Marketing for SaaS: Get Your Product Recommended in the
              Threads That Matter
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              SaaS buyers research on Reddit before they buy. When someone asks
              &quot;what tool do you use for X?&quot; in r/SaaS, r/startups, or
              r/webdev, your product should be in the answers. We make that
              happen.
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

      {/* Why SaaS Buyers Use Reddit */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Why SaaS Buyers Use Reddit"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The SaaS buying process has changed. Today&apos;s buyers, whether
                they are startup founders, engineering leads, or marketing
                directors, do not trust vendor websites to give them an honest
                assessment of a product. They want real opinions from real users.
                Reddit is where they go to get them.
              </p>
              <p>
                According to Reddit&apos;s own data, millions of users add
                &quot;reddit&quot; to their Google searches when researching
                software tools. Searches like &quot;best CRM for startups
                reddit&quot; or &quot;Notion vs ClickUp reddit&quot; drive
                significant traffic to threads where community members share
                their honest experiences with different tools.
              </p>
              <p>
                These threads are not casual browsing. They represent high intent
                buyers at the consideration stage of their purchase decision.
                Someone searching for &quot;best email marketing tool for SaaS
                reddit&quot; is actively evaluating options and ready to sign up
                for a trial. If your product is recommended in those threads, you
                are positioned as a credible option at the exact moment the buyer
                is making a decision.
              </p>
              <p>
                Google amplifies this behavior by ranking Reddit threads
                prominently for software comparison queries. The Google
                Discussions tab surfaces Reddit content even more visibly. And AI
                tools like ChatGPT and Gemini draw heavily from Reddit when
                answering questions about which SaaS tools are best for specific
                use cases. For SaaS companies, Reddit has become one of the most
                influential channels for organic product recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Subreddits for SaaS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Key Subreddits for SaaS Marketing"
            subtitle="These communities are where SaaS buying decisions happen every day."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subreddits.map((sub) => (
              <div
                key={sub.name}
                className="bg-bg-light rounded-lg p-5 border border-gray-100"
              >
                <h3 className="font-bold text-reddit-orange mb-1">
                  {sub.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">
            These are common starting points. We research and validate the
            specific subreddits most relevant to your product category as part of
            every campaign.
          </p>
        </div>
      </section>

      {/* How Reddit Influences SaaS Buying Decisions */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Reddit Influences SaaS Buying Decisions"
            subtitle="Four ways Reddit threads directly impact whether buyers choose your tool."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {buyingInfluences.map((influence) => (
              <div
                key={influence.title}
                className="bg-white rounded-lg p-8 border border-gray-100"
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

      {/* Our Approach for SaaS Brands */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Our Approach for SaaS Brands"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Marketing SaaS products on Reddit requires a different approach
                than marketing consumer products. SaaS buyers, especially
                developers and technical decision makers, are highly skeptical of
                marketing and quick to call out anything that feels inauthentic.
                Our team understands this and adapts accordingly.
              </p>
              <p>
                We start by mapping the subreddit landscape for your product
                category. This means identifying not just the obvious communities
                but also the niche subreddits where your ideal customers
                congregate. A cybersecurity SaaS might target r/netsec and
                r/cybersecurity in addition to broader communities like
                r/startups. A marketing analytics tool might focus on
                r/digital_marketing and r/analytics alongside r/SaaS.
              </p>
              <p>
                Our content strategy for SaaS prioritizes genuine technical value.
                We do not write generic promotional comments. Our writers create
                content that addresses real problems, compares options honestly,
                and positions your tool as a strong choice based on its actual
                strengths. This approach earns upvotes and engagement from the
                community, which amplifies reach and signals quality to Google
                and AI models.
              </p>
              <p>
                Every piece of content goes through your approval before
                publishing. You can adjust the messaging, add technical details,
                or refine how your product is positioned. We deploy using
                established accounts with real karma and posting histories in
                relevant subreddits, which is critical for acceptance in
                technical communities that scrutinize poster history.
              </p>
              <p>
                After deployment, you receive detailed reporting on every
                placement including live URLs, upvote counts, comment engagement,
                and Google indexing status. We track which threads rank on Google
                for your target keywords and which are generating the most
                sustained visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Examples */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Example Scenarios"
            subtitle="How Reddit marketing campaigns work in practice for SaaS brands."
          />
          <div className="space-y-8 max-w-3xl mx-auto">
            {caseExamples.map((example) => (
              <div
                key={example.title}
                className="bg-white rounded-lg p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-slate-dark mb-4">
                  {example.title}
                </h3>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-slate-dark">Scenario:</strong>{" "}
                    {example.scenario}
                  </p>
                  <p>
                    <strong className="text-slate-dark">Approach:</strong>{" "}
                    {example.approach}
                  </p>
                  <p>
                    <strong className="text-slate-dark">
                      Typical Outcome:
                    </strong>{" "}
                    {example.typicalOutcome}
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
            <SectionHeading title="Pricing for SaaS Brands" centered={false} />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our packages are designed to scale with your SaaS growth stage.
                Early stage startups establishing initial Reddit presence
                typically start with the <strong>Brand Signal Pack at $490</strong>,
                which includes 1 to 3 threads and 5 comments. Growth stage
                companies looking for broader coverage choose the{" "}
                <strong>Discussion Boost Pack at $1,250</strong> for 3 threads
                and 10 comments across multiple subreddits.
              </p>
              <p>
                For established SaaS brands that want comprehensive Reddit and
                AI visibility, the{" "}
                <strong>AI Visibility Campaign at $2,400</strong> delivers 5
                strategic threads and 20 comments across validated subreddits.
                Monthly recurring options are available at reduced rates for
                sustained Reddit presence.
              </p>
              <p>
                Enterprise SaaS companies and agencies can access custom pricing
                and white label options through our Custom Plan, starting at
                $3,000 per month.
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

      {/* FAQ Section */}
      <section className="bg-bg-light py-20">
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
