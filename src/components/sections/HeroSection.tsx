import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-dark leading-tight mb-6">
            Influence Search. Get Seen by AI.{" "}
            <span className="text-reddit-orange">Dominate Reddit.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Productized Reddit campaigns that control the conversations Google
            and AI rank for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/book-call" variant="primary" size="lg">
              Book a Free Strategy Call
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Packages
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
