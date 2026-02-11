import { TESTIMONIALS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star, TrendingUp } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted by Brands That Get It"
          subtitle="Results from teams that chose Reddit as a growth channel."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-reddit-orange/30 hover:shadow-lg transition-all"
            >
              {/* Result badge */}
              {t.result && (
                <div className="inline-flex items-center gap-1.5 bg-cta-green/10 text-cta-green text-xs font-bold px-3 py-1.5 rounded-full mb-4">
                  <TrendingUp className="w-3 h-3" />
                  {t.result}
                </div>
              )}

              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-reddit-orange text-reddit-orange" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 bg-slate-dark rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-dark text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
