import { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for The Reddit SEO. Our 48-hour replacement guarantee and refund terms for Reddit marketing services.",
};

export default function RefundPolicyPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-8">
          Refund Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: February 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-dark mt-8">
            Our Commitment
          </h2>
          <p>
            We stand behind our work. Every campaign includes our 48-hour
            replacement guarantee and full transparency reporting. Here is how
            our refund and replacement policy works.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            48-Hour Replacement Guarantee
          </h2>
          <p>
            If posts or comments are removed by Reddit moderators within 48
            hours of placement, we will re-place equivalent content at no
            additional cost. This guarantee covers removals due to moderator
            discretion, subreddit rule enforcement, or automated filters. It
            does not cover removals caused by client-requested content that
            violates Reddit&apos;s content policy.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            Partial Credit for Major Removals
          </h2>
          <p>
            For campaigns where 50% or more of deliverables are removed and
            cannot be re-placed within 7 business days, we offer a partial
            credit toward a future campaign. Credits are calculated based on the
            proportion of undelivered work and are valid for 90 days from the
            date of issue.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            One-Time Campaigns
          </h2>
          <p>
            Due to the nature of digital marketing services, all sales are final
            once work has begun. If you cancel before we begin execution, we can
            offer a full refund minus any transaction processing fees. Once
            content has been drafted or posted, refunds are not available, but we
            will work with you to address any concerns.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            Monthly Subscriptions
          </h2>
          <p>
            Monthly packages are billed on a recurring basis and can be canceled
            at any time. Cancellation takes effect at the end of the current
            billing period. Charges for the current billing period are
            non-refundable, but you will continue to receive service through the
            end of that period.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            Cryptocurrency Payments
          </h2>
          <p>
            Payments made in cryptocurrency (BTC, ETH, USDT) are generally
            non-refundable due to the nature of blockchain transactions. In
            select cases of order cancellation before work begins, refunds may
            be issued in USD equivalent via an alternate payment method.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            Service Failure
          </h2>
          <p>
            In the unlikely event that The Reddit SEO is unable to deliver the
            agreed-upon deliverables due to our fault, we will offer a make-good
            campaign at no additional cost or refund the affected portion of the
            fee at our discretion.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            Contact Us
          </h2>
          <p>
            If you have concerns about your campaign or would like to discuss a
            refund, please contact us at{" "}
            <a
              href="mailto:hello@theredditseo.com"
              className="text-reddit-orange hover:underline"
            >
              hello@theredditseo.com
            </a>
            . We are committed to making things right and will work with you to
            find a solution.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about our policies?
          </p>
          <Button href="/book-call" variant="primary">
            Talk to Us
          </Button>
        </div>
      </div>
    </section>
  );
}
