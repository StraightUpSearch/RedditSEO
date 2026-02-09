import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/schema";
import { GoogleAnalytics, MetaPixel } from "@/components/Analytics";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: {
    default: "The Reddit SEO | Reddit Marketing for AI & Organic Search Visibility",
    template: "%s | The Reddit SEO",
  },
  description:
    "Productized Reddit marketing campaigns that put your brand in the conversations Google and AI rank. View packages or book a free strategy call.",
  metadataBase: new URL("https://theredditseo.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Reddit SEO",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebsiteSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <MetaPixel />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
