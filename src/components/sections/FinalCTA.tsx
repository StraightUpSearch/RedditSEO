import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-reddit-orange to-orange-600 rounded-2xl p-12 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Own the Conversation?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
            Get your brand into the Reddit threads that Google ranks and AI
            cites. Start with a free strategy call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/book-call"
              variant="primary"
              size="lg"
              className="bg-white text-reddit-orange hover:bg-gray-100 font-bold"
            >
              Book Your Free Strategy Call
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              View Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
