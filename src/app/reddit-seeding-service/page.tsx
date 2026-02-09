import { Metadata } from "next";
import {
  Sprout,
  MessageSquare,
  TrendingUp,
  Shield,
  Users,
  Search,
  Bot,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title:
    "Reddit Seeding Service | Content Seeding on Reddit | The Reddit SEO",
  description:
    "Strategic Reddit seeding service that places your brand in high traffic conversations. Native posts and comments designed to convert readers into customers.",
};

const seedingTypes = [
  {
    icon: MessageSquare,
    title: "Thread Seeding",
    description:
      "We create original Reddit threads that naturally introduce your brand as a solution to common problems or questions in your niche. These posts are written to spark discussion, attract upvotes, and rank on Google for relevant keywords. Each thread is crafted to match the tone and expectations of the target subreddit.",
  },
  {
    icon: Users,
    title: "Comment Seeding",
    description:
      "We place thoughtful, context appropriate comments in existing high traffic threads where your brand is a natural fit. This is often the highest ROI form of seeding because these threads already have visibility and search rankings. A well placed comment in a popular thread can generate thousands of impressions over its lifetime.",
  },
  {
    icon: Sprout,
    title: "Narrative Seeding",
    description:
      "We build a multi post narrative across several subreddits to establish your brand as a recognized name in your category. This approach creates a natural pattern of mentions that signals credibility to both human readers and AI models. Over time, your brand becomes the name that keeps coming up in relevant discussions.",
  },
  {
    icon: TrendingUp,
    title: "Engagement Amplification",
    description:
      "After seeding content, we provide initial upvote support to give posts the momentum they need to surface in subreddit feeds and hot pages. This is not about inflating numbers artificially. It is about ensuring quality content gets the early traction it deserves so it can reach the organic audience that will engage with it.",
  },
];

const faqs: FAQ[] = [
  {
    question: "What is Reddit seeding and how does it work?",
    answer:
      "Reddit seeding is the practice of strategically placing branded content within relevant Reddit communities. This includes creating original threads and commenting on existing discussions in a way that naturally introduces your brand as a recommendation or solution. The content is written by experienced Reddit users on established accounts, so it reads as authentic community participation rather than advertising.",
  },
  {
    question: "How is seeding different from just posting on Reddit ourselves?",
    answer:
      "Posting from a brand account on Reddit rarely works because the community is hostile to overt self promotion. Effective seeding requires aged accounts with real karma and posting history, deep knowledge of subreddit rules and culture, and the ability to write content that contributes genuine value while naturally mentioning your brand. We handle all of this, which is why our content stays up and earns engagement while brand account posts typically get downvoted or removed.",
  },
  {
    question: "What types of brands benefit most from Reddit seeding?",
    answer:
      "Any brand that people research before buying benefits from Reddit seeding. This includes DTC products (skincare, supplements, electronics, fashion), SaaS tools, professional services, and B2B solutions. If people search Google for opinions about products or services in your category, and Reddit threads appear in those results, seeding is designed to put your brand in those conversations.",
  },
  {
    question: "How many posts and comments will I receive?",
    answer:
      "This depends on the package you choose. Our Brand Signal Pack includes 1 to 3 threads and 5 comments. The Discussion Boost Pack includes 3 threads and 10 comments. The AI Visibility Campaign includes 5 threads and 20 comments. We also offer a la carte Reddit Units if you need a specific volume of posts or comments outside of these packages.",
  },
  {
    question: "What happens if seeded content gets removed?",
    answer:
      "Removal rates are low because we follow subreddit rules and use established accounts. However, Reddit is a third party platform and moderators can remove content at their discretion. If any seeded content is removed within 48 hours of placement, we replace it with equivalent content at no additional cost. Our reporting tracks the status of every placement so nothing falls through the cracks.",
  },
  {
    question: "Can Reddit seeding help with AI visibility?",
    answer:
      "Yes, and this is one of the most valuable benefits of Reddit seeding right now. Google, OpenAI, and other AI companies use Reddit data to train their language models. When your brand is mentioned naturally in Reddit threads, those mentions become part of the training data that AI models use to answer questions in your category. This means Reddit seeding today can influence AI generated answers for months or years to come.",
  },
];

export default function RedditSeedingServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Reddit Seeding Service: Place Your Brand in the Conversations That
              Convert
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Strategic content seeding that puts your brand name into the Reddit
              threads buyers read, Google ranks, and AI models cite. Not ads.
              Not spam. Real content in real conversations.
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

      {/* What Is Reddit Seeding */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="What Is Reddit Seeding?"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Reddit seeding is the strategic placement of branded content
                within active Reddit communities. It involves creating original
                posts and inserting thoughtful comments into existing
                conversations where your brand is a natural, relevant
                recommendation. The goal is to position your brand as a trusted
                answer within the organic discussions that drive purchase
                decisions.
              </p>
              <p>
                Unlike traditional marketing channels where you push messages to
                an audience, Reddit seeding works by meeting people where they
                are already talking about problems your product solves. When
                someone posts in r/SkincareAddiction asking for a moisturizer
                recommendation, or a founder asks in r/startups which project
                management tool is best for a small team, that is an opportunity.
                A well crafted response that mentions your brand in context can
                influence not just that reader, but everyone who views the thread
                afterward, including Google and AI crawlers.
              </p>
              <p>
                The power of Reddit seeding lies in its permanence and
                compounding returns. A Reddit thread published today can rank on
                Google for years, accumulate thousands of views, and feed into AI
                training data that shapes how chatbots recommend products. One
                piece of seeded content can generate more long term visibility
                than a month of paid ads.
              </p>
              <p>
                The challenge is that Reddit communities have strong norms around
                authenticity. Self promotional content gets flagged, downvoted,
                or removed. That is why effective seeding requires experienced
                accounts, genuine writing, and deep knowledge of each
                subreddit&apos;s culture. This is exactly what our service
                provides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Seeding Works Better Than Ads */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Why Reddit Seeding Works Better Than Ads"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Reddit users are notoriously resistant to advertising. Promoted
                posts on Reddit have some of the lowest click through rates of
                any social platform because the community values authentic,
                peer driven content above all else. When users see a &quot;Promoted&quot;
                tag, they scroll past. When they see a genuine recommendation
                from another community member, they pay attention.
              </p>
              <p>
                This is why seeding consistently outperforms ads on Reddit. A
                seeded comment or post looks and feels like organic community
                participation because that is what it is, when done correctly.
                The content contributes real value to the discussion, answers a
                real question, and mentions your brand in a natural context. This
                approach earns trust instead of triggering ad blindness.
              </p>
              <p>
                There is also a critical difference in longevity. A Reddit ad
                disappears the moment you stop paying for it. A seeded thread can
                live for years, ranking on Google, accumulating views, and
                generating brand exposure with zero ongoing cost. Our clients
                regularly see threads from campaigns completed months ago
                continuing to drive traffic and mentions.
              </p>
              <p>
                The economics become even more compelling when you factor in AI
                visibility. Reddit ads are not indexed or used as training data
                by AI models. But organic Reddit content is. Every seeded post
                and comment has the potential to become part of the data that
                ChatGPT, Gemini, and Perplexity use to answer product questions.
                This is a form of visibility that paid advertising simply cannot
                provide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Content We Seed */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Types of Content We Seed"
            subtitle="Four approaches to get your brand into the conversations that matter."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {seedingTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white rounded-lg p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <type.icon className="w-6 h-6 text-reddit-orange" />
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Seeding Process */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Our Seeding Process"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Every seeding campaign begins with research. We identify the
                subreddits where your target audience is most active and map the
                types of conversations happening there. This includes analyzing
                which threads rank on Google, which topics generate the most
                engagement, and where your competitors are or are not being
                mentioned.
              </p>
              <p>
                Next, we develop a content strategy tailored to each subreddit.
                This means understanding the community rules, the posting norms,
                the tone that resonates, and the types of content that get
                upvoted versus downvoted. A comment that works in r/Fitness would
                fail in r/SkincareAddiction because the communities have
                completely different expectations.
              </p>
              <p>
                Our writers then draft all posts and comments, incorporating your
                brand mention in a way that feels earned and contextually
                appropriate. You review and approve every piece of content before
                it goes live. Nothing is published without your sign off.
              </p>
              <p>
                Once approved, we deploy content using established Reddit
                accounts with real posting histories and karma. Posts are timed
                strategically to align with peak subreddit activity for maximum
                initial visibility. We provide upvote support to give each
                placement the early momentum it needs.
              </p>
              <p>
                After deployment, you receive a full transparency report with
                every live URL, subreddit name, engagement count, and placement
                status. We monitor all placements and replace any content removed
                within 48 hours at no extra cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Clients Typically See */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Results Our Clients Typically See"
            subtitle="Every campaign is different, but these are the outcomes our clients report most consistently."
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Search className="w-6 h-6 text-reddit-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-dark mb-3">
                Google Indexing in 1 to 4 Weeks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seeded threads are typically indexed by Google within the first
                month. Many rank for target keywords and continue to appear in
                search results for 6 to 12 months or longer.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Bot className="w-6 h-6 text-reddit-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-dark mb-3">
                AI Mentions Within Months
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                As AI models update their training data, brand mentions from
                Reddit seeding campaigns begin appearing in AI generated answers.
                Clients report seeing their brand recommended by ChatGPT and
                other AI tools after building a consistent Reddit presence.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-6 h-6 text-reddit-orange" />
              </div>
              <h3 className="text-lg font-bold text-slate-dark mb-3">
                Long Term Brand Trust
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Consistent positive mentions across Reddit build a trust layer
                that influences buyers during their research phase. When someone
                searches &quot;is [your brand] legit,&quot; they find genuine
                community discussions, not just your own marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Pricing"
              subtitle="Choose the seeding intensity that matches your goals and budget."
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We offer structured packages starting at $490 for the Brand
                Signal Pack (1 to 3 threads, 5 comments) and scaling up to the
                AI Visibility Campaign at $2,400 (5 threads, 20 comments). For
                brands that need specific volumes, our Reddit Units option lets
                you purchase individual posts at $75 each, comments at $25 each,
                and upvotes at $1.50 each.
              </p>
              <p>
                Monthly recurring plans are available at a reduced rate for
                brands that want consistent seeding over time. Enterprise and
                white label pricing is available for agencies and multi brand
                operations.
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
