import Link from "next/link";
import { FOOTER_DISCLAIMER, SITE_NAME } from "@/lib/constants";
import EmailCapture from "@/components/EmailCapture";

const footerLinks = {
  Services: [
    { label: "All Packages", href: "/services" },
    { label: "Brand Signal Pack", href: "/services/brand-signal-pack" },
    { label: "Discussion Boost Pack", href: "/services/discussion-boost-pack" },
    { label: "AI Visibility Campaign", href: "/services/ai-visibility-campaign" },
    { label: "Reddit Units", href: "/services/reddit-units" },
    { label: "Custom Plan", href: "/custom-plan" },
  ],
  Company: [
    { label: "Why Reddit", href: "/why-reddit" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Book a Call", href: "/book-call" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-reddit-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-bold text-lg">{SITE_NAME}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Productized Reddit campaigns that control the conversations Google
              and AI rank for your brand.
            </p>
            <p className="text-gray-500 text-xs mb-6">
              We accept USD, BTC, ETH, and USDT.
            </p>
            <div>
              <h3 className="font-bold text-sm text-gray-300 mb-2">
                Get Reddit Marketing Tips
              </h3>
              <EmailCapture />
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-gray-300">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            {FOOTER_DISCLAIMER}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All Rights
              Reserved.
            </p>
            <p className="text-gray-600 text-xs">
              {SITE_NAME} is not affiliated with or endorsed by Reddit. Reddit
              is a trademark of Reddit Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
