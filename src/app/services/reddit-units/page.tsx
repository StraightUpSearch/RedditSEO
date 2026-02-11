import { Metadata } from "next";
import { REDDIT_UNITS, SERVICE_FAQS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";
import { MessageSquare, ArrowUp, ArrowDown, FileText, ArrowRight } from "lucide-react";

const icons = [FileText, MessageSquare, ArrowUp, ArrowDown];

export const metadata: Metadata = {
  title: "Reddit Units (A La Carte) | Reddit Marketing Service",
  description:
    "Buy exactly what you need: Reddit posts at $120 each, comments at $40 each, upvote packs at $60. Minimum order $150. Full reporting included.",
};

export default function RedditUnitsPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-4 tracking-tight">
              Reddit Units
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Buy exactly what you need: posts, comments, upvotes.
            </p>
            <p className="text-gray-500 mb-6">Minimum order: $150</p>
            <Button
              href="/book-call?package=reddit-units&intent=purchase"
              variant="secondary"
              size="lg"
            >
              Order Reddit Units <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {REDDIT_UNITS.map((item, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={item.name}
                  className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-reddit-orange/20 transition-all"
                >
                  <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-reddit-orange" />
                  </div>
                  <h3 className="font-bold text-slate-dark text-lg mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-3xl font-bold text-slate-dark">
                      ${item.pricePerUnit % 1 === 0 ? item.pricePerUnit : item.pricePerUnit.toFixed(2)}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">{item.unit}</span>
                  </div>
                  <Button
                    href="/book-call?package=reddit-units&intent=purchase"
                    variant="primary"
                    size="sm"
                    className="w-full"
                  >
                    Order Now
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="bg-bg-light rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-dark mb-4">
              How A La Carte Works
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-reddit-orange font-bold text-sm mb-2">
                  Step 1
                </div>
                <h3 className="font-bold text-slate-dark mb-2">
                  Submit Your Brief
                </h3>
                <p className="text-gray-600 text-sm">
                  Tell us your target subreddits, keywords, and what you need.
                  Select your quantities.
                </p>
              </div>
              <div>
                <div className="text-reddit-orange font-bold text-sm mb-2">
                  Step 2
                </div>
                <h3 className="font-bold text-slate-dark mb-2">
                  We Draft for Approval
                </h3>
                <p className="text-gray-600 text-sm">
                  Our team creates authentic, community-appropriate content. You
                  review and approve before anything goes live.
                </p>
              </div>
              <div>
                <div className="text-reddit-orange font-bold text-sm mb-2">
                  Step 3
                </div>
                <h3 className="font-bold text-slate-dark mb-2">
                  Deploy Within 3 to 7 Days
                </h3>
                <p className="text-gray-600 text-sm">
                  Content goes live with full reporting. You get live links and
                  an engagement snapshot for every unit.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-white rounded-xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <p className="text-slate-dark font-bold text-lg mb-2">
              Want a full campaign instead?
            </p>
            <p className="text-gray-600 mb-4 text-sm">
              Our packages include strategy, content creation, and reporting all in one.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/services" variant="outline" size="md">
                View Full Packages
              </Button>
              <Button href="/book-call" variant="primary" size="md">
                Book a Free Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Frequently Asked Questions" />
          <FAQAccordion faqs={SERVICE_FAQS} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
