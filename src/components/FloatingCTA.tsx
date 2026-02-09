"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <Link
      href="/book-call"
      className="fixed bottom-6 right-6 z-50 bg-cta-green text-white px-5 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-green-600 transition-all flex items-center gap-2 hover:scale-105"
    >
      <MessageCircle className="w-4 h-4" />
      Book a Call
    </Link>
  );
}
