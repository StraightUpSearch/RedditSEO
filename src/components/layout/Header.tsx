"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-reddit-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-bold text-lg text-slate-dark">
              The Reddit SEO
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-slate-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-call"
              className="bg-cta-green text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-green-600 transition-colors"
            >
              Book a Call
            </Link>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-dark" />
            ) : (
              <Menu className="w-6 h-6 text-slate-dark" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2 pt-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-slate-dark px-2 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book-call"
                className="bg-cta-green text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-green-600 transition-colors text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
