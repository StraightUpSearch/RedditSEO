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
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-reddit-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-reddit-orange" />
                </div>
                <div className="text-sm font-bold text-reddit-orange mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
