import Link from "next/link";
import { ServicePackage } from "@/types";
import { ArrowRight } from "lucide-react";

interface PackageCardProps {
  pkg: ServicePackage;
  featured?: boolean;
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

export default function PackageCard({ pkg, featured = false }: PackageCardProps) {
  return (
    <div
      className={`relative bg-white rounded-lg shadow-sm border p-6 flex flex-col ${
        featured
          ? "border-reddit-orange ring-2 ring-reddit-orange/20"
          : "border-gray-200"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-reddit-orange text-white text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-xl font-bold text-slate-dark mb-2">{pkg.name}</h3>
      <p className="text-gray-600 text-sm mb-4">{pkg.hook}</p>

      <div className="mb-4">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-slate-dark">
            {formatPrice(pkg.priceOneTime)}
          </span>
          <span className="text-gray-500 text-sm">one-time</span>
        </div>
        {pkg.priceMonthly && (
          <p className="text-sm text-gray-500 mt-1">
            or {formatPrice(pkg.priceMonthly)}/mo recurring
          </p>
        )}
      </div>

      <ul className="space-y-2 mb-6 flex-1">
        {pkg.deliverables.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
            <svg
              className="w-4 h-4 text-cta-green mt-0.5 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
        <span className="bg-bg-light px-2 py-1 rounded">{pkg.executionTime}</span>
        <span className="bg-bg-light px-2 py-1 rounded">{pkg.riskLevel}</span>
      </div>

      <Link
        href={`/services/${pkg.slug}`}
        className={`flex items-center justify-center gap-2 font-bold rounded-md py-3 transition-colors ${
          featured
            ? "bg-reddit-orange text-white hover:bg-orange-600"
            : "bg-cta-green text-white hover:bg-green-600"
        }`}
      >
        View Details <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
