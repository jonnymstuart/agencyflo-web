export const BASE_URL = "https://agencyflo.ai";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AgencyFlo",
    url: BASE_URL,
    logo: `${BASE_URL}/images/agencyflo-logo.png`,
    sameAs: ["https://www.linkedin.com/company/agencyflo"],
    description:
      "AgencyFlo is the AI-native operating system for growing agencies — replacing fragmented tools with a single, intelligent platform.",
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AgencyFlo",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: BASE_URL,
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: "0",
      description: "Early access — pricing announced soon",
    },
    description:
      "AI-native agency management platform combining project management, resource planning, financial visibility, and FloAI assistant in one system.",
  };
}

export function articleSchema({
  title,
  description,
  slug,
  publishedAt,
  authorName = "Jonny Stuart",
  authorUrl = "https://www.linkedin.com/in/jonny-stuart/",
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  authorName?: string;
  authorUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished: publishedAt,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "AgencyFlo",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/images/agencyflo-logo.png` },
    },
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
