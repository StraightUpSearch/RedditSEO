import { ServicePackage } from "@/types";
import { SERVICE_FAQS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { Clock, FileText, Shield, Plus } from "lucide-react";

interface ServicePageTemplateProps {
  pkg: ServicePackage;
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

export default function ServicePageTemplate({ pkg }: ServicePageTemplateProps) {
  return (
    <>
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-dark mb-4">
              {pkg.name}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{pkg.hook}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/book-call" variant="primary" size="lg">
                Book a Call First
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Compare All Packages
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-dark mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-3">
                  {pkg.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-cta-green mt-0.5 shrink-0"
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

                <div className="flex flex-wrap gap-3 mt-6">
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-gray-200 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{pkg.executionTime}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-gray-200 text-sm">
                    <FileText className="w-4 h-4 text-gray-400" />
                    <span>Full report included</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-gray-200 text-sm">
                    <Shield className="w-4 h-4 text-gray-400" />
                    <span>{pkg.riskLevel}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-dark mb-4">
                  Who It&apos;s For
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {pkg.idealClient}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-dark mb-4">
                  Reporting
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {pkg.reportingFormat}
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm sticky top-24">
                <h3 className="text-lg font-bold text-slate-dark mb-4">
                  Pricing
                </h3>

                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-slate-dark">
                      {formatPrice(pkg.priceOneTime)}
                    </span>
                    <span className="text-gray-500">one-time</span>
                  </div>
                  {pkg.priceMonthly && (
                    <p className="text-gray-600 text-sm mt-2">
                      or {formatPrice(pkg.priceMonthly)}/mo for recurring
                    </p>
                  )}
                </div>

                <p className="text-xs text-gray-500 mb-6">
                  Also accept BTC, ETH, USDT
                </p>

                <Button
                  href="/book-call"
                  variant="primary"
                  size="lg"
                  className="w-full mb-3"
                >
                  Get Started
                </Button>
                <Button
                  href="/book-call"
                  variant="outline"
                  size="md"
                  className="w-full"
                >
                  Book a Call First
                </Button>

                {pkg.upsells.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-bold text-slate-dark mb-3 flex items-center gap-2">
                      <Plus className="w-4 h-4" /> Add-Ons
                    </h4>
                    <ul className="space-y-2">
                      {pkg.upsells.map((upsell, i) => (
                        <li
                          key={i}
                          className="flex justify-between text-sm text-gray-600"
                        >
                          <span>{upsell.name}</span>
                          <span className="font-medium">
                            {formatPrice(upsell.price)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQAccordion faqs={SERVICE_FAQS} />
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
