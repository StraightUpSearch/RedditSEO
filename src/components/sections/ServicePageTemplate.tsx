import { ServicePackage } from "@/types";
import { SERVICE_FAQS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import { Clock, FileText, Shield, Plus, CreditCard, Bitcoin, ArrowRight, CheckCircle } from "lucide-react";

interface ServicePageTemplateProps {
  pkg: ServicePackage;
}

function formatPrice(price: number): string {
  return `$${price.toLocaleString()}`;
}

export default function ServicePageTemplate({ pkg }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero with dark gradient */}
      <section className="relative bg-slate-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate-dark to-reddit-orange/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-reddit-orange text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/10">
                <Clock className="w-4 h-4" />
                {pkg.executionTime}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-[1.1]">
                {pkg.name}
              </h1>
              <p className="text-lg text-gray-300 mb-8">{pkg.hook}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href={`/book-call?package=${pkg.slug}`}
                  variant="primary"
                  size="lg"
                >
                  Get Started <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  href="/book-call"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Book a Call First
                </Button>
              </div>
            </div>

            {/* Pricing card */}
            <div className="bg-white rounded-xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-slate-dark">
                    {formatPrice(pkg.priceOneTime)}
                  </span>
                  <span className="text-gray-500">one-time</span>
                </div>
                {pkg.priceMonthly && (
                  <p className="text-gray-500 text-sm mt-2">
                    or {formatPrice(pkg.priceMonthly)}/mo for recurring campaigns
                  </p>
                )}
              </div>

              <Button
                href={`/book-call?package=${pkg.slug}`}
                variant="primary"
                size="lg"
                className="w-full mb-3"
              >
                Get Started Now
              </Button>
              <Button
                href="/book-call"
                variant="outline"
                size="md"
                className="w-full mb-6"
              >
                Talk to Us First
              </Button>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-400 mb-6 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Credit Card</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bitcoin className="w-3.5 h-3.5" />
                  <span>BTC, ETH, USDT</span>
                </div>
              </div>

              <div className="space-y-2">
                {pkg.deliverables.slice(0, 3).map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-cta-green shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-slate-dark mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-4">
                  {pkg.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <div className="w-6 h-6 bg-cta-green/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-cta-green" />
                      </div>
                      <span className="text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-8">
                  <div className="flex items-center gap-2 bg-bg-light px-4 py-2.5 rounded-lg text-sm font-medium text-slate-dark">
                    <Clock className="w-4 h-4 text-reddit-orange" />
                    <span>{pkg.executionTime}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-bg-light px-4 py-2.5 rounded-lg text-sm font-medium text-slate-dark">
                    <FileText className="w-4 h-4 text-reddit-orange" />
                    <span>Full report included</span>
                  </div>
                  <div className="flex items-center gap-2 bg-bg-light px-4 py-2.5 rounded-lg text-sm font-medium text-slate-dark">
                    <Shield className="w-4 h-4 text-reddit-orange" />
                    <span>{pkg.riskLevel}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-dark mb-4">
                  Who It&apos;s For
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  {pkg.idealClient}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-dark mb-4">
                  Reporting
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  {pkg.reportingFormat}
                </p>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div>
              <div className="bg-bg-light rounded-xl border border-gray-200 p-6 sticky top-24">
                <h3 className="text-lg font-bold text-slate-dark mb-4">
                  Quick Summary
                </h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-slate-dark">
                      {formatPrice(pkg.priceOneTime)}
                    </span>
                    <span className="text-gray-500 text-sm">one-time</span>
                  </div>
                  {pkg.priceMonthly && (
                    <p className="text-gray-500 text-sm mt-1">
                      or {formatPrice(pkg.priceMonthly)}/mo recurring
                    </p>
                  )}
                </div>

                <Button
                  href={`/book-call?package=${pkg.slug}`}
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
                  className="w-full mb-4"
                >
                  Book a Call
                </Button>

                {pkg.upsells.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-bold text-slate-dark mb-3 flex items-center gap-2">
                      <Plus className="w-4 h-4" /> Available Add-Ons
                    </h4>
                    <ul className="space-y-2">
                      {pkg.upsells.map((upsell, i) => (
                        <li
                          key={i}
                          className="flex justify-between text-sm text-gray-600"
                        >
                          <span>{upsell.name}</span>
                          <span className="font-medium text-slate-dark">
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

      <section className="bg-bg-light py-20">
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
