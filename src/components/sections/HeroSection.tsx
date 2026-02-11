"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle, Zap, Shield, Clock, BarChart3 } from "lucide-react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative bg-slate-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate-dark to-reddit-orange/20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-reddit-orange/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        {/* Trust badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-cta-green/10 backdrop-blur-sm text-cta-green text-sm font-medium px-5 py-2 rounded-full border border-cta-green/20">
            <Zap className="w-4 h-4" />
            Trusted by 50+ DTC and B2B brands
          </div>
        </div>

        {/* Main headline area - centered */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
            The Only SEO Service{" "}
            <span className="text-reddit-orange">Built for Reddit</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Productized Reddit campaigns that put your brand in the conversations
            Google ranks, AI cites, and buyers trust. Fixed pricing. Full transparency.
          </p>

          {/* Email capture + CTA above the fold */}
          <div className="max-w-lg mx-auto mb-6">
            {status === "success" ? (
              <div className="bg-cta-green/10 border border-cta-green/20 rounded-xl p-4">
                <p className="text-cta-green font-medium">
                  You are in. Check your inbox for next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-1 px-5 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="px-8 py-4 bg-reddit-orange text-white text-base font-bold rounded-xl hover:bg-orange-600 transition-colors disabled:opacity-70 whitespace-nowrap"
                >
                  {status === "sending" ? "Sending..." : "Get a Free Strategy Brief"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">Something went wrong. Please try again.</p>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-400 mb-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-cta-green" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-cta-green" />
              Free strategy call included
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-cta-green" />
              48hr replacement guarantee
            </span>
          </div>

          {/* Secondary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services" variant="primary" size="lg">
              View Packages <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              href="/book-call"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: BarChart3, number: "50+", label: "Brands Served" },
              { icon: Shield, number: "200+", label: "Subreddits Targeted" },
              { icon: Clock, number: "2,000+", label: "Placements Delivered" },
              { icon: CheckCircle, number: "48hr", label: "Replacement Guarantee" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-5 text-center"
              >
                <stat.icon className="w-5 h-5 text-reddit-orange mx-auto mb-2" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
