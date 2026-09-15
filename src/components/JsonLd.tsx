import { siteConfig } from "@/lib/site-config";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/logo.png`,
    telephone: `+${siteConfig.phoneIntl}`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL",
    },
    areaServed: "IL",
    sameAs: [siteConfig.social.facebook, siteConfig.social.youtube],
    founder: {
      "@type": "Person",
      name: siteConfig.owner,
    },
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "בניית אתרים ומערכות" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "כרטיסי ביקור דיגיטליים" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "סיורים וירטואליים ב-360 מעלות" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "באנרים ואנימציה" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "עריכת סרטים" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "צילומי אוויר בדרון" } },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
