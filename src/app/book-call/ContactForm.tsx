"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
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
      <div className="bg-cta-green/5 border border-cta-green/20 rounded-lg p-8 text-center">
        <div className="w-12 h-12 bg-cta-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-cta-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-dark mb-2">Message Sent</h3>
        <p className="text-gray-600 text-sm">
          Thank you for reaching out. We will get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-bg-light rounded-lg p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-slate-dark mb-6">
        Send Us a Message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company (optional)
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
            placeholder="Your Company"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent resize-none"
            placeholder="Tell us about your brand and what you would like to achieve on Reddit."
          />
        </div>

        {status === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3">
            <p className="text-red-600 text-sm">{errorMessage}</p>
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className={`w-full ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Your contact info is only used to reply to your inquiry. We
          never spam or share your details.
        </p>
      </form>
    </div>
  );
}
