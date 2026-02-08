import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for The Reddit SEO. Read our terms covering service agreements, liability, refunds, and compliance.",
};

export default function TermsPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: February 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-dark mt-8">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or using The Reddit SEO website and services, you agree
            to be bound by these Terms of Service. If you do not agree to these
            terms, please do not use our services.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            2. Description of Services
          </h2>
          <p>
            The Reddit SEO provides Reddit marketing services including content
            creation, posting, comment placement, upvote amplification, and
            reporting. All services are performed by our team using established
            Reddit accounts and community-appropriate content strategies.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            3. Client Responsibilities
          </h2>
          <p>
            Clients are responsible for providing accurate brand information,
            approved URLs, and clear campaign guidelines. Clients understand that
            Reddit is a third-party platform outside our direct control, and
            that community engagement outcomes depend on multiple factors
            including subreddit rules, moderator decisions, and community
            dynamics.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            4. Service Compliance
          </h2>
          <p>
            We operate within Reddit&apos;s content policy and subreddit
            guidelines to the best of our ability. We reserve the right to
            decline or modify campaigns that would violate Reddit&apos;s content
            policy or community standards. All content is designed to contribute
            genuine value to discussions.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            5. Payment Terms
          </h2>
          <p>
            All prices are listed in United States Dollars (USD). Payment is
            required before work begins. We accept credit card payments via
            Stripe and cryptocurrency payments (BTC, ETH, USDT) via our
            designated payment processor. Monthly subscription packages are
            billed on a recurring basis until canceled.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            6. Refund Policy
          </h2>
          <p>
            Due to the nature of digital marketing services, all sales are final
            once work has begun. If posts or comments are removed by Reddit
            moderators within 48 hours of placement, we will re-place equivalent
            content at no additional cost. For campaigns where 50% or more of
            deliverables are removed and cannot be re-placed, we offer a partial
            credit toward a future campaign. Credits are valid for 90 days. See
            our full Refund Policy for details.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            7. No Guarantees
          </h2>
          <p>
            The Reddit SEO does not guarantee specific ranking positions, traffic
            volumes, AI citations, or business outcomes. We guarantee the
            delivery of agreed-upon placements and our best-effort execution
            based on our experience and methodology. Results vary depending on
            brand, subreddit dynamics, and search/AI algorithm changes.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            8. Limitation of Liability
          </h2>
          <p>
            The Reddit SEO&apos;s total liability to any client shall not exceed
            the total amount paid by that client for the specific service in
            question. We are not liable for indirect, incidental, or
            consequential damages arising from the use of our services.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            9. White-Label Clients
          </h2>
          <p>
            Clients using our services on a white-label basis must not
            misrepresent the origin of the service. White-label arrangements are
            subject to separate terms as agreed upon in writing.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            10. Modifications
          </h2>
          <p>
            We reserve the right to update these Terms of Service at any time.
            Changes will be posted on this page with an updated revision date.
            Continued use of our services after changes constitutes acceptance of
            the revised terms.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            11. Contact
          </h2>
          <p>
            For questions about these Terms of Service, contact us at{" "}
            <a
              href="mailto:hello@theredditseo.com"
              className="text-reddit-orange hover:underline"
            >
              hello@theredditseo.com
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
