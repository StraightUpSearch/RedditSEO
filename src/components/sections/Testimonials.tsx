import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted by Brands That Get It"
          subtitle="Results from teams that chose Reddit as a growth channel."
        />

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
