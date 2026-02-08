import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Reddit Marketing Blog | Tips for SEO & AI",
  description:
    "Insights on Reddit marketing, SEO, and AI visibility. Tips, strategies, and case studies to help your brand win on Reddit and search engines.",
};

const posts = [
  {
    slug: "how-reddit-threads-rank-on-google",
    title: "How Reddit Threads Rank on Google (And How to Use That)",
    excerpt:
      "Reddit threads are appearing in Google search results more than ever. Here is why that happens and how brands can position themselves to benefit.",
    date: "February 2026",
    category: "SEO Strategy",
  },
  {
    slug: "reddit-marketing-for-ecommerce",
    title: "Reddit Marketing for Ecommerce: A Practical Guide",
    excerpt:
      "A step-by-step guide for DTC and ecommerce brands looking to use Reddit as a traffic and conversion channel.",
    date: "February 2026",
    category: "Ecommerce",
  },
  {
    slug: "ai-overviews-and-reddit-content",
    title: "What Are AI Overviews and Why Reddit Content Appears in Them",
    excerpt:
      "Google AI Overviews pull from Reddit data. Learn how your brand mentions on Reddit feed directly into AI generated search results.",
    date: "January 2026",
    category: "AI Visibility",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights on Reddit marketing, SEO, and AI visibility from our
              team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-bg-light h-48 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{post.category}</span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-lg font-bold text-slate-dark mb-2 group-hover:text-reddit-orange transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              More posts coming soon. Want to discuss Reddit marketing for your
              brand?
            </p>
            <Button href="/book-call" variant="primary">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
