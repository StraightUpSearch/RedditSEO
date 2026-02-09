import Button from "@/components/ui/Button";
import { TrendingUp } from "lucide-react";

export default function WhyRedditTeaser() {
  return (
    <section className="bg-slate-dark py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-reddit-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="w-7 h-7 text-reddit-orange" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Reddit Is the Most Underpriced Channel in Marketing
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Reddit threads rank on Google, feed AI training data, and influence
            buying decisions more than any ad. Brands that show up authentically
            in Reddit conversations get compounding returns in organic
            visibility. The window is open now.
          </p>
          <Button href="/why-reddit" variant="secondary" size="lg">
            Learn Why Reddit Matters
          </Button>
        </div>
      </div>
    </section>
  );
}
