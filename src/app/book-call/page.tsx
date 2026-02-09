import { Metadata } from "next";
import { Clock, Mail, Shield } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call | Reddit Marketing Consultation",
  description:
    "Schedule a free 30-minute Reddit marketing strategy call. Discuss your goals, target subreddits, and the best package for your brand.",
};

export default function BookCallPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
            Book Your Free Strategy Call
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to discuss the best package for your needs?
            We are here to help. Pick a time that works for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-start gap-4 bg-bg-light rounded-lg p-6">
            <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-reddit-orange" />
            </div>
            <div>
              <h3 className="font-bold text-slate-dark">
                30 Minute Strategy Session
              </h3>
              <p className="text-gray-600 text-sm">
                We will review your brand, identify target subreddits, and
                recommend the right package for your goals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-bg-light rounded-lg p-6">
            <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-reddit-orange" />
            </div>
            <div>
              <h3 className="font-bold text-slate-dark">
                No Commitment Required
              </h3>
              <p className="text-gray-600 text-sm">
                This is a free consultation. Ask anything about Reddit
                marketing, our process, or how we can help your brand.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-bg-light rounded-lg p-6">
            <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-reddit-orange" />
            </div>
            <div>
              <h3 className="font-bold text-slate-dark">
                Confidential and Professional
              </h3>
              <p className="text-gray-600 text-sm">
                Your business information stays private. We respond
                within 1 business day if you prefer to send a message instead.
              </p>
            </div>
          </div>
        </div>

        {/* Calendly Widget (shown when NEXT_PUBLIC_CALENDLY_URL is configured) */}
        <div className="mb-16">
          <CalendlyEmbed />
        </div>

        {/* Contact Form Fallback (always shown below) */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-dark mb-4">
              Prefer to Send a Message?
            </h2>
            <p className="text-gray-600 mb-8">
              Fill out the form and we will get back to you within 1 business
              day with a personalized recommendation.
            </p>

            <div className="bg-bg-light rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-slate-dark mb-2">
                Or email us directly
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                Reach us at{" "}
                <a
                  href="mailto:hello@theredditseo.com"
                  className="text-reddit-orange hover:underline"
                >
                  hello@theredditseo.com
                </a>
              </p>
              <p className="text-gray-500 text-xs">
                We will respond within 1 business day.
              </p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
