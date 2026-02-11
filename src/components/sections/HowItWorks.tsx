import { UserPlus, Search, FileCheck, BarChart3 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/lib/constants";

const icons = [UserPlus, Search, FileCheck, BarChart3];

export default function HowItWorks() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Four simple steps from sign up to live Reddit placements with full reporting."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.number} className="relative">
                {/* Connector line (hidden on mobile) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-reddit-orange/30 to-transparent" />
                )}

                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-reddit-orange/20 hover:shadow-md transition-all h-full">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative w-14 h-14 bg-reddit-orange/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-reddit-orange" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 bg-reddit-orange text-white text-xs font-bold rounded-full flex items-center justify-center shadow-sm">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-dark">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
