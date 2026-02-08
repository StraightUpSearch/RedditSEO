"use client";

import { useEffect } from "react";

export default function CalendlyEmbed() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  useEffect(() => {
    if (!calendlyUrl) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [calendlyUrl]);

  if (!calendlyUrl) {
    return null;
  }

  return (
    <div
      className="calendly-inline-widget w-full rounded-lg overflow-hidden"
      data-url={calendlyUrl}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
