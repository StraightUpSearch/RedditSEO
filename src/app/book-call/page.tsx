import { Metadata } from "next";
import { Clock, Mail, Shield, CheckCircle } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ContactForm from "./ContactForm";
import { PACKAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call | Reddit Marketing Consultation",
  description:
    "Schedule a free 30-minute Reddit marketing strategy call. Discuss your goals, target subreddits, and the best package for your brand.",
};

export default function BookCallPage({
  searchParams,
}: {
  searchParams: { package?: string; intent?: string };
}) {
  const selectedPackage = PACKAGES.find((p) => p.slug === searchParams.package);
  const isPurchaseIntent = searchParams.intent === "purchase";

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6 tracking-tight">
            {isPurchaseIntent && selectedPackage
              ? `Get Started with ${selectedPackage.name}`
              : "Book Your Free Strategy Call"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {isPurchaseIntent && selectedPackage
              ? `Complete the form below to get started with your ${selectedPackage.name}. We will confirm your order and begin onboarding within 1 business day.`
              : "Have questions or want to discuss the best package for your needs? We are here to help. Pick a time or send us a message."}
          </p>
        </div>

        {/* Selected package summary */}
        {selectedPackage && (
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-bg-light border border-gray-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-slate-dark text-lg">{selectedPackage.name}</h3>
                <div className="text-right">
                  <span className="text-2xl font-bold text-slate-dark">
                    ${selectedPackage.priceOneTime.toLocaleString()}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">one-time</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3">{selectedPackage.hook}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {selectedPackage.deliverables.slice(0, 3).map((d, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-xs text-gray-500">
                    <CheckCircle className="w-3 h-3 text-cta-green" />
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-start gap-4 bg-bg-light rounded-xl p-6">
            <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-reddit-orange" />
            </div>
            <div>
              <h3 className="font-bold text-slate-dark">
                {isPurchaseIntent ? "Fast Onboarding" : "30 Minute Strategy Session"}
              </h3>
              <p className="text-gray-600 text-sm">
                {isPurchaseIntent
                  ? "We begin work within 1 business day of receiving your brief. Most campaigns go live within 2 weeks."
                  : "We will review your brand, identify target subreddits, and recommend the right package for your goals."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-bg-light rounded-xl p-6">
            <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-reddit-orange" />
            </div>
            <div>
              <h3 className="font-bold text-slate-dark">
                {isPurchaseIntent ? "Payment After Confirmation" : "No Commitment Required"}
              </h3>
              <p className="text-gray-600 text-sm">
                {isPurchaseIntent
                  ? "We will send a secure payment link after confirming your campaign details. We accept credit cards, BTC, ETH, and USDT."
                  : "This is a free consultation. Ask anything about Reddit marketing, our process, or how we can help your brand."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-bg-light rounded-xl p-6">
            <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-reddit-orange" />
            </div>
            <div>
              <h3 className="font-bold text-slate-dark">
                {isPurchaseIntent ? "48hr Replacement Guarantee" : "Confidential and Professional"}
              </h3>
              <p className="text-gray-600 text-sm">
                {isPurchaseIntent
                  ? "If any placement is removed within 48 hours, we replace it at no extra cost. Full reporting included with every campaign."
                  : "Your business information stays private. We respond within 1 business day if you prefer to send a message instead."}
              </p>
            </div>
          </div>
        </div>

        {/* Main content: Form + sidebar */}
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm
              selectedPackage={selectedPackage?.name}
              isPurchaseIntent={isPurchaseIntent}
            />
          </div>

          <div className="lg:col-span-2 space-y-6">
            {/* Calendly Widget (shown when configured) */}
            <CalendlyEmbed />

            {/* Direct contact info */}
            <div className="bg-bg-light rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-slate-dark mb-3">
                Prefer to reach out directly?
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Email us at{" "}
                <a
                  href="mailto:hello@theredditseo.com"
                  className="text-reddit-orange font-medium hover:underline"
                >
                  hello@theredditseo.com
                </a>
              </p>
              <p className="text-gray-500 text-xs">
                We respond within 1 business day.
              </p>
            </div>

            {/* Payment methods */}
            {isPurchaseIntent && (
              <div className="bg-bg-light rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-slate-dark mb-3">
                  Accepted Payment Methods
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Credit or debit card (via Stripe)</p>
                  <p>Bitcoin (BTC)</p>
                  <p>Ethereum (ETH)</p>
                  <p>Tether (USDT)</p>
                </div>
                <p className="text-gray-500 text-xs mt-3">
                  Secure payment link sent after campaign confirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
