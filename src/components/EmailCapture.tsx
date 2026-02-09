"use client";

import { useState, FormEvent } from "react";

export default function EmailCapture() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [email, setEmail] = useState("");

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

  if (status === "success") {
    return (
      <p className="text-cta-green text-sm font-medium">
        You are subscribed. Watch your inbox for Reddit marketing insights.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className="flex-1 px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reddit-orange focus:border-transparent"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="px-4 py-2 bg-reddit-orange text-white text-sm font-bold rounded-md hover:bg-orange-600 transition-colors disabled:opacity-70"
      >
        {status === "sending" ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
