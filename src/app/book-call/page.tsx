import { Metadata } from "next";
import { Clock, Mail, Shield } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call | Reddit Marketing Consultation",
  description:
    "Schedule a free 30-minute Reddit marketing strategy call. Discuss your goals, target subreddits, and the best package for your brand.",
};

export default function BookCallPage() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Book Your Free Strategy Call
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Have questions or want to discuss the best package for your needs?
              We are here to help. Pick a time that works for you.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
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

              <div className="flex items-start gap-4">
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

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-reddit-orange/10 rounded-lg flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-reddit-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-dark">
                    Confidential and Professional
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Your business information stays private. We will respond
                    within 1 business day if you prefer to send a message
                    instead.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bg-light rounded-lg p-6 border border-gray-100">
              <h3 className="font-bold text-slate-dark mb-2">
                Prefer to email?
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
            <div className="bg-bg-light rounded-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-slate-dark mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company (optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent resize-none"
                    placeholder="Tell us about your brand and what you would like to achieve on Reddit."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Your contact info is only used to reply to your inquiry. We
                  never spam or share your details.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
