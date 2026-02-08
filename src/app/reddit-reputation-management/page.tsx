import { Metadata } from "next";
import {
  Eye,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  Bot,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title:
    "Reddit Reputation Management | Protect Your Brand on Reddit | The Reddit SEO",
  description:
    "Take control of what people see about your brand on Reddit. Strategic content placement and engagement designed to shape the conversations that rank on Google and train AI.",
};

const problems = [
  {
    icon: AlertTriangle,
    title: "Negative Threads Ranking on Google",
    description:
      "A single critical Reddit thread can rank on the first page of Google for your brand name. When potential customers search for your company and find a complaint thread with dozens of upvotes, it directly impacts their buying decision. Google gives these threads significant authority because Reddit content is perceived as authentic and community validated.",
  },
  {
    icon: MessageCircle,
    title: "Unanswered Criticism in Active Threads",
    description:
      "When complaints or negative mentions go unanswered in Reddit threads, they become the dominant narrative. Other users pile on, the thread gains traction, and the negative sentiment compounds. Without counterbalancing perspectives and context, a single negative experience can define how your brand appears to thousands of readers.",
  },
  {
    icon: Bot,
    title: "AI Models Citing Negative Reddit Content",
    description:
      "AI tools like ChatGPT, Gemini, and Perplexity use Reddit data in their training sets. When negative Reddit threads are the most prominent content about your brand, AI models learn to associate your brand with those negative sentiments. This means when someone asks an AI chatbot about your product, the response may reference complaints from Reddit.",
  },
  {
    icon: Eye,
    title: "Competitors Controlling Your Narrative",
    description:
      "In competitive markets, rival brands sometimes benefit from negative sentiment about your company on Reddit. Whether through deliberate negative seeding or simply by being recommended as alternatives in complaint threads, your competitors gain when your Reddit reputation suffers. Without active reputation management, you cede control of your brand story to others.",
  },
];

const approachSteps = [
  {
    number: 1,
    title: "Reddit Brand Audit",
    description:
      "We conduct a thorough analysis of every mention of your brand across Reddit. This includes tracking existing threads, comments, sentiment patterns, subreddit activity, and any content that ranks on Google for your brand name or related queries. You receive a clear picture of your current Reddit reputation landscape.",
  },
  {
    number: 2,
    title: "Strategy Development",
    description:
      "Based on the audit findings, we create a targeted plan to strengthen your Reddit presence. This includes identifying which subreddits need positive content, which negative threads need to be balanced with additional context, and which keyword opportunities exist for creating new threads that position your brand favorably.",
  },
  {
    number: 3,
    title: "Positive Content Placement",
    description:
      "We create and deploy genuine, value adding Reddit content that mentions your brand in a positive and natural context. This includes original threads in relevant subreddits, comments in active discussions where your brand is a natural fit, and contributions to existing threads where balanced perspective is needed.",
  },
  {
    number: 4,
    title: "Strategic Engagement",
    description:
      "For existing negative threads that rank on Google, we add thoughtful, balanced responses that provide context, share positive experiences, and give readers a more complete picture. This is not about suppressing criticism. It is about ensuring that one sided narratives are balanced with genuine counter perspectives.",
  },
  {
    number: 5,
    title: "Monitoring and Ongoing Protection",
    description:
      "Reputation management is not a one time fix. We provide ongoing monitoring of your brand mentions across Reddit, alert you to new negative threads, and recommend responses or new content placements as needed. This continuous approach ensures your Reddit reputation stays strong over time.",
  },
];

const faqs: FAQ[] = [
  {
    question: "Can you remove negative Reddit posts about my brand?",
    answer:
      "We cannot remove Reddit posts or comments. Reddit content is controlled by the platform and its moderators. However, we can effectively manage your reputation by creating positive, high quality content that outranks and outnumbers negative mentions. We also add balanced responses to negative threads so readers get a complete picture rather than a one sided complaint.",
  },
  {
    question: "How long does it take to see reputation improvements?",
    answer:
      "Most clients see measurable improvements within 30 to 60 days. New positive threads begin ranking on Google within 1 to 4 weeks, and the cumulative effect of multiple positive mentions starts to shift the overall narrative in your favor. For brands with significant negative sentiment, a sustained 3 to 6 month campaign is typically recommended for substantial results.",
  },
  {
    question: "Is this ethical? Are you creating fake positive reviews?",
    answer:
      "We do not create fake reviews or misleading content. All content we create is genuine, accurately represents your brand, and provides real value to the Reddit communities where it is posted. Our approach focuses on ensuring that your brand story is told completely and fairly. When criticism exists, we add context and balanced perspectives rather than attempting to deceive anyone.",
  },
  {
    question: "What if there are legitimate complaints about my product?",
    answer:
      "Legitimate complaints are actually an opportunity. We help you respond thoughtfully, demonstrate that your brand listens to feedback, and show how issues have been addressed. In Reddit communities, a brand that responds genuinely to criticism earns more respect than one that ignores it. We can also create content that highlights improvements, updates, or changes you have made in response to customer feedback.",
  },
  {
    question: "How does Reddit reputation affect AI visibility?",
    answer:
      "AI models like ChatGPT and Gemini use Reddit data as training material. If the most prominent Reddit content about your brand is negative, AI models learn to associate your brand with those negative sentiments and may reflect them in answers. By building a strong body of positive Reddit content, you give AI models better training data about your brand, which positions you for more favorable AI generated mentions over time.",
  },
  {
    question: "Do you offer ongoing reputation monitoring?",
    answer:
      "Yes. We offer monthly retainers that include continuous Reddit monitoring, alerting for new brand mentions, strategic response recommendations, and regular positive content placements. This proactive approach catches potential reputation issues early and maintains the positive sentiment your brand has built over time.",
  },
];

export default function RedditReputationManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Reddit Reputation Management: Take Control of What People See
              About Your Brand
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Reddit threads rank on Google, train AI models, and shape buying
              decisions. If negative content is defining your brand on Reddit,
              it is costing you customers. Our reputation management service
              puts you back in control of the narrative.
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

      {/* Why Reddit Reputation Matters */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Why Your Reddit Reputation Matters More Than Ever"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Reddit is no longer a niche forum. It is the internet&apos;s
                largest trust engine. With over 1.7 billion monthly visits,
                Reddit ranks among the most visited websites globally. More
                importantly, Google treats Reddit as a high authority source for
                search results, and AI companies use Reddit data to train the
                models that answer product questions for millions of users.
              </p>
              <p>
                When someone searches your brand name on Google, Reddit threads
                frequently appear on page 1. If those threads contain complaints,
                negative experiences, or unanswered criticism, that becomes the
                first impression for every potential customer who searches for
                you. Studies show that a single negative result on page 1 can
                reduce click through rates by over 20%.
              </p>
              <p>
                The stakes are even higher with AI. ChatGPT, Gemini, Perplexity,
                and Google AI Overviews all draw on Reddit data when generating
                answers. If the dominant Reddit content about your brand is
                negative, AI models learn and repeat that negativity. A customer
                asking &quot;is [your brand] good?&quot; might get an AI response
                heavily influenced by a single complaint thread that went viral
                on Reddit.
              </p>
              <p>
                Managing your Reddit reputation is no longer optional. It is a
                core part of protecting your brand in both search and AI
                channels. The brands that actively manage their Reddit presence
                control the narrative. Those that don&apos;t leave it to chance,
                or worse, to their competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Reputation Problems */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Common Reddit Reputation Problems"
            subtitle="These are the issues our clients face most often when they come to us."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="bg-bg-light rounded-lg p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Approach to Reddit Reputation Management"
            subtitle="A five step framework designed to reshape your Reddit narrative."
          />
          <div className="space-y-6 max-w-3xl mx-auto">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 items-start bg-white rounded-lg p-6 border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-reddit-orange text-white rounded-lg shrink-0 font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Our Approach Different */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="What Makes Our Approach Different"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Most reputation management services focus on Google results by
                creating blog posts, press releases, and other branded content to
                push negative results down. That approach misses the point when
                it comes to Reddit. Reddit threads rank because Google trusts
                them as authentic community content. You cannot outrank a Reddit
                thread with a blog post. You need to compete on Reddit&apos;s
                own terms.
              </p>
              <p>
                Our approach works within Reddit, not around it. We create
                genuine content that contributes to communities, earns upvotes
                organically, and builds a positive sentiment layer that outweighs
                isolated negative threads. We do not suppress criticism. We add
                context, balance the conversation, and create new positive
                touchpoints that give readers and AI models a complete picture of
                your brand.
              </p>
              <p>
                We also account for the AI dimension of reputation management.
                Every piece of content we create is designed to provide training
                data that positions your brand favorably in AI generated answers.
                As models update, the positive Reddit content we build becomes
                part of how AI talks about your brand. This forward looking
                approach addresses not just today&apos;s search results, but
                tomorrow&apos;s AI responses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Pricing for Reddit Reputation Management"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Reputation management campaigns are built on the same package
                structure as our other Reddit marketing services. The right
                package depends on the severity of the reputation challenge and
                the volume of content needed to shift the narrative.
              </p>
              <p>
                For brands dealing with a small number of negative threads, the
                <strong> Brand Signal Pack at $490</strong> provides an initial
                layer of positive content. Brands facing more significant
                reputation challenges typically benefit from the
                <strong> Discussion Boost Pack at $1,250</strong> or the
                <strong> AI Visibility Campaign at $2,400</strong>, which
                provides the volume needed to meaningfully reshape search and AI
                results.
              </p>
              <p>
                For ongoing reputation protection, we recommend a monthly
                retainer that includes continuous monitoring, regular content
                placements, and rapid response capability when new negative
                content surfaces. Custom pricing is available for enterprise
                brands requiring large scale reputation campaigns.
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

      {/* Who Needs This */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Who Needs Reddit Reputation Management?"
              centered={false}
            />
            <div className="space-y-4">
              {[
                "Brands that have negative Reddit threads ranking on Google for their brand name",
                "Companies launching new products who want to proactively shape the Reddit conversation",
                "SaaS tools and services discussed frequently in subreddits like r/SaaS, r/startups, or r/marketing",
                "Ecommerce brands mentioned in product comparison threads where competitors dominate",
                "Any business where potential customers research the brand on Reddit before purchasing",
                "Companies concerned about how AI models represent their brand based on Reddit data",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-cta-green mt-1 shrink-0" />
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </div>
              ))}
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
