"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

interface ContactFormProps {
  selectedPackage?: string;
  isPurchaseIntent?: boolean;
}

export default function ContactForm({ selectedPackage, isPurchaseIntent }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      package: formData.get("package"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email us directly at hello@theredditseo.com.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-cta-green/5 border border-cta-green/20 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-cta-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-cta-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-dark mb-2">
          {isPurchaseIntent ? "Order Received" : "Message Sent"}
        </h3>
        <p className="text-gray-600 text-sm">
          {isPurchaseIntent
            ? "Thank you for your order. We will review your details and send a confirmation with next steps within 1 business day."
            : "Thank you for reaching out. We will get back to you within 1 business day."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-bg-light rounded-xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-slate-dark mb-2">
        {isPurchaseIntent ? "Complete Your Order" : "Send Us a Message"}
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        {isPurchaseIntent
          ? "Fill in your details and we will confirm your campaign and send a secure payment link."
          : "Fill out the form and we will get back to you within 1 business day."}
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
              placeholder="John Smith"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
              placeholder="Your Company"
            />
          </div>

          <div>
            <label
              htmlFor="package"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Package
            </label>
            <select
              id="package"
              name="package"
              defaultValue={selectedPackage || ""}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent bg-white"
            >
              <option value="">Not sure yet</option>
              <option value="Brand Signal Pack">Brand Signal Pack ($490)</option>
              <option value="Discussion Boost Pack">Discussion Boost Pack ($1,250)</option>
              <option value="AI Visibility Campaign">AI Visibility Campaign ($2,400)</option>
              <option value="Branded Subreddit Launch">Branded Subreddit Launch ($4,500)</option>
              <option value="Reddit Units">Reddit Units (A La Carte)</option>
              <option value="Custom Plan">Custom Plan ($3,000+/mo)</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Monthly Budget
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent bg-white"
          >
            <option value="">Select a range</option>
            <option value="Under $500">Under $500</option>
            <option value="$500 - $1,000">$500 to $1,000</option>
            <option value="$1,000 - $2,500">$1,000 to $2,500</option>
            <option value="$2,500 - $5,000">$2,500 to $5,000</option>
            <option value="$5,000+">$5,000+</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {isPurchaseIntent ? "Campaign Brief *" : "Message *"}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent resize-none"
            placeholder={
              isPurchaseIntent
                ? "Tell us about your brand, target subreddits, keywords, and what you want to achieve."
                : "Tell us about your brand and what you would like to achieve on Reddit."
            }
          />
        </div>

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-600 text-sm">{errorMessage}</p>
          </div>
        )}

        <Button
          type="submit"
          variant={isPurchaseIntent ? "secondary" : "primary"}
          size="lg"
          className={`w-full ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {status === "sending"
            ? "Sending..."
            : isPurchaseIntent
            ? "Submit Order"
            : "Send Message"}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          {isPurchaseIntent
            ? "We will confirm your order and send a secure payment link within 1 business day. No charge until you approve."
            : "Your contact info is only used to reply to your inquiry. We never spam or share your details."}
        </p>
      </form>
    </div>
  );
}
