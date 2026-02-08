import { Metadata } from "next";
import {
  Search,
  Bot,
  Users,
  Target,
  CheckCircle,
  BarChart3,
  FileText,
  MessageCircle,
} from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { FAQ } from "@/types";

export const metadata: Metadata = {
  title:
    "Reddit Marketing Service | Professional Reddit Campaigns | The Reddit SEO",
  description:
    "Professional Reddit marketing service for brands that want visibility in the threads Google ranks and AI cites. View packages or book a free strategy call today.",
};

const deliverables = [
  "Subreddit research and targeting mapped to your niche and buyer intent keywords",
  "Native Reddit threads written by experienced contributors on aged accounts",
  "Supporting comments that reinforce your brand narrative naturally",
  "Upvote support to give placements the initial momentum they need",
  "Full transparency reporting with live URLs, engagement metrics, and screenshots",
  "Content approval workflow so you see every post and comment before it goes live",
];

const processSteps = [
  {
    icon: FileText,
    title: "Submit Your Brief",
    description:
      "Tell us about your brand, your target audience, and the keywords or topics you want to be associated with. We use this to build a campaign strategy tailored to your goals.",
  },
  {
    icon: Search,
    title: "Research and Strategy",
    description:
      "We identify the highest value subreddits for your niche, analyze trending threads, map keyword demand, and draft content that fits the tone and rules of each community.",
  },
  {
    icon: MessageCircle,
    title: "Content Creation and Approval",
    description:
      "Our writers create Reddit posts and comments designed to be genuinely helpful and contextually appropriate. You review and approve every piece of content before deployment.",
  },
  {
    icon: Target,
    title: "Deployment and Engagement",
    description:
      "We publish approved content using established Reddit accounts with real history and karma. Each placement is strategically timed for maximum visibility within the subreddit.",
  },
  {
    icon: BarChart3,
    title: "Reporting and Optimization",
    description:
      "You receive a detailed report with every live URL, subreddit name, engagement metric, and placement status. We monitor posts for removals and replace any content taken down within 48 hours.",
  },
];

const faqs: FAQ[] = [
  {
    question: "What exactly is a Reddit marketing service?",
    answer:
      "A Reddit marketing service places your brand organically within real Reddit conversations. Instead of running ads, we create and deploy native content (posts and comments) across relevant subreddits. This content is designed to look and feel like authentic community participation, positioning your brand as a trusted recommendation rather than an advertisement.",
  },
  {
    question: "How is this different from Reddit advertising?",
    answer:
      "Reddit Ads are paid placements that appear as promoted posts. Users can identify them immediately and often scroll past them. Our service creates organic content that lives permanently within threads, ranks on Google, feeds into AI training data, and carries far more credibility with readers. The two strategies can complement each other, but organic placement delivers longer lasting visibility.",
  },
  {
    question: "Will posts get removed by Reddit moderators?",
    answer:
      "We use established accounts with real posting histories and write content that genuinely contributes to the conversation. This approach keeps removal rates low. However, Reddit is a third party platform and occasional removals do happen. If any content is removed within 48 hours of placement, we replace it at no additional cost.",
  },
  {
    question: "Can I approve the content before it goes live?",
    answer:
      "Yes, absolutely. Every post and comment goes through your approval before we publish anything. You will see the exact text, the target subreddit, and the context for each placement. Nothing goes live without your sign off.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see their placements indexed by Google within 1 to 4 weeks. Reddit threads can rank for months or even years, so the value compounds over time. AI models also ingest this content, which means your brand mentions can appear in AI generated answers as training data is updated.",
  },
  {
    question: "Is this safe for my brand?",
    answer:
      "We take brand safety seriously. All content follows subreddit rules and Reddit content policy. We never use spammy tactics, fake accounts, or aggressive self promotion. Our approach positions your brand within genuinely helpful conversations, which is exactly the kind of engagement Reddit communities value.",
  },
];

export default function RedditMarketingServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Reddit Marketing Service for Brands That Want to Show Up Where It
              Matters
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional Reddit campaigns that place your brand in the threads
              Google ranks, AI cites, and real buyers trust. No bots. No spam.
              Just strategic, native content that positions your brand as the
              answer.
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

      {/* What Is a Reddit Marketing Service */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="What Is a Reddit Marketing Service?"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                A Reddit marketing service is a professional solution designed to
                get your brand mentioned, recommended, and discussed within
                relevant Reddit communities. Unlike traditional social media
                marketing where you post from a branded account and hope for
                engagement, Reddit marketing operates within the platform&apos;s
                unique culture of authenticity, peer advice, and community
                driven conversation.
              </p>
              <p>
                Reddit has over 1.7 billion monthly visits and ranks as one of
                the most visited websites in the world. More importantly, Google
                treats Reddit content as highly authoritative for search
                rankings, and AI companies like OpenAI and Google use Reddit data
                to train their language models. When someone asks ChatGPT for a
                product recommendation or searches Google for &quot;best tools
                for X,&quot; Reddit threads frequently appear at the top of the
                results.
              </p>
              <p>
                A professional Reddit marketing service handles the strategy,
                content creation, account management, and deployment required to
                place your brand into these high visibility conversations. The
                goal is simple: make your brand the answer when people ask
                questions in your category, whether they are asking on Reddit,
                Google, or an AI chatbot.
              </p>
              <p>
                This is not about blasting promotional links or gaming votes. The
                most effective Reddit marketing service builds genuine
                engagement. Posts and comments that contribute real value to the
                conversation, mention your brand in context, and stay visible for
                months or years. That is what we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brands Need Reddit Marketing */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Brands Need Reddit Marketing"
            subtitle="Three forces are making Reddit the most important organic channel for brand visibility right now."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-bg-light rounded-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-reddit-orange" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">
                Google Ranks Reddit Content
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Reddit threads consistently appear on page 1 of Google for buyer
                intent queries. Searches like &quot;best CRM for small
                business&quot; or &quot;is [brand] worth it&quot; surface Reddit
                discussions ahead of traditional blog content. Google&apos;s
                Discussions tab further amplifies Reddit visibility. When your
                brand is mentioned in these threads, you gain organic search
                exposure that compounds over time without ongoing ad spend.
              </p>
            </div>
            <div className="bg-bg-light rounded-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-6 h-6 text-reddit-orange" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">
                AI Models Train on Reddit Data
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Google has a licensing deal with Reddit specifically to use its
                data for AI Overviews. ChatGPT, Gemini, Perplexity, and other AI
                tools all include Reddit content in their training data. When a
                potential customer asks an AI assistant for a product
                recommendation, the AI draws from Reddit threads to form its
                answer. Your brand mentions on Reddit become part of the data
                that shapes AI generated responses in your category.
              </p>
            </div>
            <div className="bg-bg-light rounded-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-reddit-orange" />
              </div>
              <h3 className="text-xl font-bold text-slate-dark mb-3">
                Buyers Trust Reddit Over Ads
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Research shows that 64% of consumers prefer brands they perceive
                as authentic on community platforms. Reddit recommendations carry
                more weight than paid advertising because they come from peers,
                not brands. Millions of people add &quot;reddit&quot; to their
                Google searches specifically because they want unfiltered,
                honest opinions. Being present in those conversations gives your
                brand a credibility advantage that no ad can replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Service Works */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Our Reddit Marketing Service Works"
            subtitle="A transparent, five step process from strategy to reporting."
          />
          <div className="space-y-8 max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-6 items-start bg-white rounded-lg p-6 border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-reddit-orange/10 rounded-lg shrink-0">
                  <step.icon className="w-6 h-6 text-reddit-orange" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-dark mb-2">
                    Step {index + 1}: {step.title}
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

      {/* What You Get */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What You Get"
            subtitle="Every campaign includes these core deliverables, regardless of which package you choose."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cta-green mt-1 shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              All deliverables are provided with full transparency. You receive
              live URLs, engagement data, and a narrative summary explaining the
              performance and strategic value of each placement.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Pricing Overview"
            subtitle="Four packages designed for different stages of growth. Every package includes research, content creation, deployment, and reporting."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-100 text-center">
              <h3 className="text-lg font-bold text-slate-dark mb-2">
                Brand Signal Pack
              </h3>
              <p className="text-3xl font-bold text-reddit-orange mb-3">$490</p>
              <p className="text-gray-600 text-sm mb-4">
                Get your first AI readable brand mentions live in under 2 weeks.
                Ideal for startups and new products establishing their initial
                Reddit presence.
              </p>
              <p className="text-xs text-gray-400">
                1 to 3 threads + 5 comments
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100 text-center">
              <h3 className="text-lg font-bold text-slate-dark mb-2">
                Discussion Boost Pack
              </h3>
              <p className="text-3xl font-bold text-reddit-orange mb-3">
                $1,250
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Spread your brand story across high traffic Reddit conversations.
                Built for growing DTC brands and SaaS companies in competitive
                markets.
              </p>
              <p className="text-xs text-gray-400">
                3 threads + 10 comments
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100 text-center">
              <h3 className="text-lg font-bold text-slate-dark mb-2">
                AI Visibility Campaign
              </h3>
              <p className="text-3xl font-bold text-reddit-orange mb-3">
                $2,400
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Be everywhere AI looks when someone searches your category.
                Designed for established brands scaling their AI and organic
                footprint.
              </p>
              <p className="text-xs text-gray-400">
                5 threads + 20 comments
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100 text-center">
              <h3 className="text-lg font-bold text-slate-dark mb-2">
                Branded Subreddit Launch
              </h3>
              <p className="text-3xl font-bold text-reddit-orange mb-3">
                $4,500
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Own your corner of Reddit with a fully managed branded community.
                Includes setup, launch content, and a moderation guide.
              </p>
              <p className="text-xs text-gray-400">
                Full subreddit + 10 posts + 40 comments
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">
              Need something custom? We also offer a la carte Reddit Units
              (individual posts, comments, and upvotes) and fully bespoke
              campaigns for enterprise brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" variant="primary" size="lg">
                See All Packages
              </Button>
              <Button href="/book-call" variant="outline" size="lg">
                Get a Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Who Is a Reddit Marketing Service For?"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Our Reddit marketing service is designed for brands and
                businesses that understand the value of showing up in organic
                conversations. If you sell a product or service that people
                research before buying, Reddit is almost certainly part of that
                research process. Here is who we work with most often.
              </p>
              <p>
                <strong>DTC and ecommerce brands</strong> that want their
                products recommended in subreddits where buyers ask for advice.
                Whether you sell skincare, supplements, home goods, or tech
                accessories, Reddit threads like &quot;best moisturizer for oily
                skin&quot; or &quot;top budget headphones 2026&quot; drive real
                purchase decisions every day.
              </p>
              <p>
                <strong>B2B and SaaS companies</strong> looking to be positioned
                as the go to solution in industry discussions. Threads in
                r/startups, r/SaaS, r/marketing, and hundreds of niche
                subreddits influence software buying decisions for founders,
                marketers, and technical teams.
              </p>
              <p>
                <strong>Agencies</strong> that want to offer Reddit marketing as
                a white label service to their clients. We provide execution
                while you maintain the client relationship.
              </p>
              <p>
                <strong>Personal brands and thought leaders</strong> who want to
                build authority by contributing valuable content in the
                communities their audience frequents. This positions you as a
                trusted voice in your space, not a self promoter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Long Term Value */}
      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="The Long Term Value of Reddit Marketing"
              centered={false}
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Unlike paid advertising where visibility disappears the moment
                you stop spending, Reddit content has a remarkably long shelf
                life. A well placed thread can rank on Google for months or
                years, continuously driving organic traffic to your brand without
                any additional investment.
              </p>
              <p>
                Every Reddit placement also contributes to your brand&apos;s AI
                visibility. As language models are updated with new training
                data, your brand mentions in Reddit threads become part of the
                information AI uses to answer questions in your category. This
                means a single Reddit campaign can generate visibility across
                Google search, AI chatbots, and the Reddit platform itself.
              </p>
              <p>
                Our clients typically see their Reddit placements indexed by
                Google within 1 to 4 weeks. Many of those placements continue to
                rank and generate engagement for 6 to 12 months or longer. When
                you compare the cost per impression over the lifetime of a Reddit
                placement versus a paid ad campaign, the economics are
                compelling.
              </p>
              <p>
                The brands that invest in Reddit marketing now are building an
                organic moat around their category. As AI search grows and
                traditional SEO becomes more competitive, having a library of
                authentic Reddit content mentioning your brand gives you an
                advantage that competitors will struggle to replicate.
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
