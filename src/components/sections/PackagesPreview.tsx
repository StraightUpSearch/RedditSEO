import { PACKAGES } from "@/lib/constants";
import PackageCard from "@/components/ui/PackageCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function PackagesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Pick Your Package"
          subtitle="From your first brand mentions to full community ownership, we have a plan that fits."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} featured={i === 2} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need something specific? Buy individual posts, comments, or upvotes.
          </p>
          <Button href="/services/reddit-units" variant="outline" size="md">
            View Reddit Units (A La Carte)
          </Button>
        </div>
      </div>
    </section>
  );
}
