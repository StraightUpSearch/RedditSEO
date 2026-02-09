import { PACKAGES, SERVICE_FAQS, SITE_URL, SITE_NAME } from "./constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@theredditseo.com",
      contactType: "customer support",
      areaServed: "US",
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function getProductSchema(packageIndex: number) {
  const pkg = PACKAGES[packageIndex];
  if (!pkg) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pkg.name,
    description: pkg.hook,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: pkg.priceOneTime.toFixed(2),
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/services/${pkg.slug}`,
    },
  };
}

export function getFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SERVICE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
