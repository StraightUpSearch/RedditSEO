import { ClipboardList, PenTool, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

const icons = [ClipboardList, PenTool, BarChart3];

export default function HowItWorks() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Three simple steps from sign-up to live Reddit placements."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.number} className="relative text-center">
                {/* Connector line (hidden on mobile) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gray-200" />
                )}
                <div className="relative w-16 h-16 bg-white border-2 border-reddit-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Icon className="w-7 h-7 text-reddit-orange" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-reddit-orange text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
