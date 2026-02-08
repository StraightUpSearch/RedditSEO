import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

interface BlogPostProps {
  params: { slug: string };
}

const blogPosts: Record<
  string,
  { title: string; date: string; content: string[] }
> = {
  "how-reddit-threads-rank-on-google": {
    title: "How Reddit Threads Rank on Google (And How to Use That)",
    date: "February 2026",
    content: [
      "Reddit threads are appearing in Google search results more frequently than ever before. Google has invested in Reddit data through a licensing deal, and the search engine clearly values the authentic, discussion-based content that Reddit provides.",
      'If you search for queries like "best CRM for small business" or "is [product] worth it," you will often see Reddit threads on the first page. Google\'s Discussions tab further highlights these results for buyer-intent queries.',
      "For brands, this means Reddit is no longer just a social platform. It is a search engine optimization channel. Content that performs well on Reddit can rank on Google for months or years, driving consistent organic traffic.",
      "The key is authenticity. Reddit users and moderators are skilled at spotting promotional content. The brands that win on Reddit are the ones that contribute genuine value to conversations, with their product mentioned naturally as part of a helpful answer.",
      "Our approach at The Reddit SEO focuses on creating exactly this type of content: authentic, community-appropriate posts and comments that mention your brand in context, positioned to rank both on Reddit and in Google search results.",
    ],
  },
  "reddit-marketing-for-ecommerce": {
    title: "Reddit Marketing for Ecommerce: A Practical Guide",
    date: "February 2026",
    content: [
      "Ecommerce brands have a massive opportunity on Reddit. The platform is filled with active communities where people research products, compare options, and ask for recommendations before making a purchase.",
      'Subreddits like r/SkincareAddiction, r/BuyItForLife, and r/Coffee have millions of engaged members who trust peer recommendations over advertisements. A well-placed comment in the right thread can drive more qualified traffic than a paid ad campaign.',
      "The first step is identifying which subreddits your target customers frequent. This goes beyond the obvious. A skincare brand might find value in r/30PlusSkinCare or r/AsianBeauty in addition to the larger communities.",
      "Content needs to be genuinely helpful. Instead of saying \"buy our product,\" the approach should be answering a real question with a helpful response that naturally includes your brand as a recommendation among others.",
      "Timing matters too. Posting when a subreddit is most active increases the chances of your content getting upvotes and visibility. Early engagement in the first hour is critical for Reddit's algorithm.",
      "The ROI of ecommerce Reddit marketing compounds over time. Unlike paid ads that stop performing when you stop paying, Reddit threads continue to rank on Google and attract traffic for months after posting.",
    ],
  },
  "ai-overviews-and-reddit-content": {
    title: "What Are AI Overviews and Why Reddit Content Appears in Them",
    date: "January 2026",
    content: [
      "Google AI Overviews are the AI generated summaries that appear at the top of many search results. These overviews synthesize information from multiple sources to provide a quick answer to the user's query.",
      "Reddit content appears frequently in AI Overviews because Google has a data licensing agreement with Reddit, and because Reddit discussions often contain the kind of authentic, experience-based information that AI models value.",
      "For brands, this creates a new channel for visibility. When your brand is mentioned positively in Reddit threads that AI models reference, those mentions can flow through to AI generated answers that millions of people see.",
      "This is not limited to Google. ChatGPT, Gemini, Perplexity, and other AI assistants also draw on Reddit data when generating responses. A well-positioned brand mention on Reddit can appear across multiple AI platforms.",
      "The implication for marketing is clear: Reddit is no longer just a social platform or even just an SEO channel. It is a training data source for the AI systems that are increasingly mediating how people find and evaluate products and services.",
      "Brands that invest in authentic Reddit presence now are positioning themselves to be referenced by AI systems for years to come. The content you seed today becomes the training data that shapes AI answers tomorrow.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const post = blogPosts[params.slug];
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} | The Reddit SEO Blog`,
    description: post.content[0].slice(0, 155),
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-slate-dark mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            This blog post could not be found.
          </p>
          <Button href="/blog" variant="primary">
            Back to Blog
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-slate-dark mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <article>
          <p className="text-sm text-gray-500 mb-2">{post.date}</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-8">
            {post.title}
          </h1>

          <div className="prose prose-gray max-w-none">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-700 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="bg-bg-light rounded-lg p-8 text-center">
            <h2 className="text-xl font-bold text-slate-dark mb-3">
              Want Reddit Marketing for Your Brand?
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              See our packages or book a free strategy call to discuss your
              goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/services" variant="primary">
                View Packages
              </Button>
              <Button href="/book-call" variant="outline">
                Book a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
