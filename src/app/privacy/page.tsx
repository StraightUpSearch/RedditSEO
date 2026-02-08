import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for The Reddit SEO. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: February 2026</p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-dark mt-8">
            1. Information We Collect
          </h2>
          <p>
            We collect information you provide directly to us, including your
            name, email address, company name, and any messages you send through
            our contact forms. When you make a purchase, payment information is
            processed securely by our payment providers (Stripe and/or our
            cryptocurrency payment processor) and is not stored on our servers.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect to provide and improve our
            services, communicate with you about your campaigns, send reports
            and deliverables, process payments, and respond to your inquiries.
            We may also use your email to send occasional service updates, but
            you can opt out of marketing communications at any time.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            3. Analytics and Cookies
          </h2>
          <p>
            We use Google Analytics (GA4) to understand how visitors interact
            with our website. This involves cookies that collect anonymized data
            about page views, traffic sources, and user behavior. We may also
            use Meta Pixel for advertising purposes. You can manage cookie
            preferences through your browser settings.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            4. Data Sharing
          </h2>
          <p>
            We do not sell your personal information. We may share your
            information with third-party service providers who assist us in
            operating our business (payment processors, email services,
            analytics providers), but only to the extent necessary for them to
            provide their services. These providers are bound by their own
            privacy policies and contractual obligations.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            5. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access, loss,
            or misuse. All data transmission is encrypted using SSL/TLS. However,
            no method of internet transmission is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            6. Data Retention
          </h2>
          <p>
            We retain your personal information for as long as necessary to
            provide our services and fulfill the purposes described in this
            policy. Campaign data and reports are retained for a minimum of 12
            months after campaign completion.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            7. Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. If you are located in the European Union, you have
            additional rights under GDPR. California residents have additional
            rights under CCPA. To exercise any of these rights, contact us at
            the email below.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the updated policy on this
            page with a revised date.
          </p>

          <h2 className="text-xl font-bold text-slate-dark mt-8">
            9. Contact
          </h2>
          <p>
            For questions about this Privacy Policy or to exercise your data
            rights, contact us at{" "}
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
