import Link from "next/link";
import { ServicePackage } from "@/types";
import { ArrowRight, CheckCircle } from "lucide-react";

interface PackageCardProps {
  pkg: ServicePackage;
  featured?: boolean;
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

export default function PackageCard({ pkg, featured = false }: PackageCardProps) {
  return (
    <Link
      href={`/services/${pkg.slug}`}
      className={`relative bg-white rounded-xl shadow-sm border p-6 flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 group ${
        featured
          ? "border-reddit-orange ring-2 ring-reddit-orange/20 scale-[1.02]"
          : "border-gray-200 hover:border-reddit-orange/30"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-reddit-orange text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-lg font-bold text-slate-dark mb-2">{pkg.name}</h3>
      <p className="text-gray-500 text-sm mb-4 leading-relaxed">{pkg.hook}</p>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-slate-dark">
            {formatPrice(pkg.priceOneTime)}
          </span>
          <span className="text-gray-400 text-sm">one-time</span>
        </div>
        {pkg.priceMonthly && (
          <p className="text-sm text-gray-400 mt-1">
            or {formatPrice(pkg.priceMonthly)}/mo
          </p>
        )}
      </div>

      <ul className="space-y-2.5 mb-6 flex-1">
        {pkg.deliverables.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-cta-green mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
        <span className="bg-bg-light px-2 py-1 rounded">{pkg.executionTime}</span>
      </div>

      <div className={`flex items-center justify-center gap-2 font-bold rounded-lg py-3 transition-all ${
        featured
          ? "bg-reddit-orange text-white group-hover:bg-orange-600"
          : "bg-cta-green text-white group-hover:bg-green-600"
      }`}>
        Get Started <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
