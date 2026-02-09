import { Metadata } from "next";
import { TESTIMONIALS } from "@/lib/constants";
import { Quote } from "lucide-react";
import Button from "@/components/ui/Button";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Case Studies | Reddit Marketing Results",
  description:
    "See how brands use Reddit marketing to boost organic search visibility, get cited by AI, and drive purchase decisions. Real results from real campaigns.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600">
              Results and proof from brands that chose Reddit as a growth
              channel. More case studies are being added as campaigns complete.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-bg-light rounded-lg p-8 border border-gray-100"
              >
                <Quote className="w-8 h-8 text-reddit-orange/30 mb-4" />
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-slate-dark text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-bg-light rounded-2xl p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-dark mb-4">
              Detailed Case Studies Coming Soon
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              We are currently documenting in-depth campaign results with full
              data. In the meantime, book a call to learn about the results our
              clients are seeing.
            </p>
            <Button href="/book-call" variant="primary" size="lg">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
