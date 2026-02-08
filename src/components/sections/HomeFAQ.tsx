import { HOME_FAQS } from "@/lib/constants";
import FAQAccordion from "@/components/ui/FAQAccordion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomeFAQ() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Quick answers to the most common questions about our Reddit marketing services."
        />
        <FAQAccordion faqs={HOME_FAQS} />
      </div>
    </section>
  );
}
