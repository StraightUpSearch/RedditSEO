import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-dark to-slate-dark/95 rounded-2xl p-12 sm:p-16 text-center relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-reddit-orange/10 to-transparent" />

          <div className="relative">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Ready to Own the Conversation?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Get your brand into the Reddit threads that Google ranks and AI
              cites. Start with a free strategy call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                href="/book-call"
                variant="secondary"
                size="lg"
                className="bg-reddit-orange hover:bg-orange-600 text-white font-bold"
              >
                Book Your Free Strategy Call <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                View Packages
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cta-green" />
                No commitment required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cta-green" />
                15 minute strategy session
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cta-green" />
                Custom plan delivered after call
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
