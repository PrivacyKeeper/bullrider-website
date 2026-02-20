export default function SchemaMarkup() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Bullrider.Pro",
    "applicationCategory": "SportsApplication",
    "operatingSystem": "iOS, Android",
    "description": "The ultimate bull riding app. Track scores, find events, connect with bull riders, stock contractors, trainers, and fans. Live streaming, AI ride analysis, bull database, and marketplace.",
    "url": "https://www.bullrider.pro",
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "name": "Free"
      },
      {
        "@type": "Offer",
        "price": "4.99",
        "priceCurrency": "USD",
        "name": "Premium Monthly"
      },
      {
        "@type": "Offer",
        "price": "49.99",
        "priceCurrency": "USD",
        "name": "Premium Annual"
      }
    ],
    "author": {
      "@type": "Organization",
      "name": "Bullrider.Pro",
      "url": "https://www.bullrider.pro",
      "email": "support@bullrider.pro"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Bullrider.Pro",
    "url": "https://www.bullrider.pro",
    "description": "The ultimate bull riding platform. Events, scores, bull database, community, and marketplace — all in one app.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.bullrider.pro/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
