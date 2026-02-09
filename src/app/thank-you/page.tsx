import { Metadata } from "next";
import { CheckCircle, FileText, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Thank You | Your Order Is Confirmed",
  description:
    "Your Reddit marketing campaign purchase is confirmed. Here is what happens next.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-cta-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-cta-green" />
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-4">
          You Are All Set
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Your order has been confirmed. We are excited to get your Reddit
          campaign started.
        </p>

        <div className="bg-bg-light rounded-xl p-8 mb-12 text-left">
          <h2 className="text-2xl font-bold text-slate-dark mb-6">
            What Happens Next
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-reddit-orange" />
              </div>
              <div>
                <h3 className="font-bold text-slate-dark mb-1">
                  Step 1: Check Your Inbox
                </h3>
                <p className="text-gray-600 text-sm">
                  You will receive a confirmation email with your receipt and an
                  onboarding form link within the next few minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-5 h-5 text-reddit-orange" />
              </div>
              <div>
                <h3 className="font-bold text-slate-dark mb-1">
                  Step 2: Complete the Onboarding Brief
                </h3>
                <p className="text-gray-600 text-sm">
                  Fill out the short brand brief so we know your target keywords,
                  subreddits, competitors, and messaging preferences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-reddit-orange" />
              </div>
              <div>
                <h3 className="font-bold text-slate-dark mb-1">
                  Step 3: We Get to Work
                </h3>
                <p className="text-gray-600 text-sm">
                  Our team will research your subreddits, draft content for your
                  approval (if requested), and begin placements. You will receive
                  your full report once the campaign is complete.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-dark rounded-xl p-8 mb-12 text-left">
          <h3 className="text-lg font-bold text-white mb-2">
            Questions Before We Start?
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Reach out anytime at{" "}
            <a
              href="mailto:hello@theredditseo.com"
              className="text-reddit-orange hover:underline"
            >
              hello@theredditseo.com
            </a>
            {" "}and we will get back to you within 1 business day.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/services" variant="outline" size="lg">
            View Other Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
