export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zuugnu',
    url: 'https://zuugnu.com',
    logo: 'https://zuugnu.com/pwa-512x512.png',
    description:
      "India's fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building.",
    sameAs: [
      'https://facebook.com/zuugnu',
      'https://twitter.com/zuugnu',
      'https://linkedin.com/company/zuugnu',
      'https://instagram.com/zuugnu',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8800607598',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zuugnu',
    url: 'https://zuugnu.com',
    description:
      "Join India's fastest-growing community-driven platform for pre-paid gigs, bidding opportunities, and skill-building.",
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://zuugnu.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Gig Platform',
    provider: {
      '@type': 'Organization',
      name: 'Zuugnu',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gig Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pre-Paid Gigs',
            description: 'Access confirmed, pre-paid demand for services and products',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bidding Platform',
            description: 'Compete for assignments based on your skills and pricing',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Skills Training',
            description: 'Certified training in UGC, SMA, and digital branding',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://zuugnu.com',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
