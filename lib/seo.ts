/**
 * SEO utilities and metadata generation for SkillVerdict
 */

import type { Metadata } from "next"

// Base SEO configuration
export const siteConfig = {
  name: "SkillVerdict",
  title: "SkillVerdict | Monetize Your Expertise as a Developer",
  description: "SkillVerdict is a decentralized, unbiased and respected community where global tech professionals from leading companies verify your skills.",
  url: "https://skillverdict.com", // Update with actual domain
  ogImage: "/og-image.jpg",
  twitterHandle: "@skillverdict",
  keywords: [
    "skill verification",
    "developer skills",
    "tech community",
    "code review",
    "professional verification",
    "CV verification",
    "developer portfolio",
    "tech skills assessment",
    "peer review",
    "developer community"
  ],
  authors: [
    {
      name: "SkillVerdict Team",
      url: "https://skillverdict.com",
    },
  ],
  creator: "SkillVerdict",
  publisher: "SkillVerdict",
  category: "Technology",
}

// Default metadata for the application
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  category: siteConfig.category,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.description}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#3b82f6" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "your-google-verification-code", // Add actual verification codes
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#ffffff",
  },
}

// Generate metadata for specific pages
export interface PageMetadata {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  noIndex?: boolean
  canonical?: string
  alternates?: {
    languages?: Record<string, string>
  }
}

export function generateMetadata(pageData: PageMetadata): Metadata {
  const title = pageData.title 
    ? `${pageData.title} | ${siteConfig.name}`
    : siteConfig.title

  const description = pageData.description || siteConfig.description
  const keywords = pageData.keywords 
    ? [...siteConfig.keywords, ...pageData.keywords]
    : siteConfig.keywords

  const ogImage = pageData.ogImage || siteConfig.ogImage
  const canonical = pageData.canonical || siteConfig.url

  return {
    title,
    description,
    keywords,
    robots:  defaultMetadata.robots,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${description}`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical,
      ...pageData.alternates,
    },
  }
}

// Structured data generators
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    foundingDate: "2024",
    sameAs: [
      "https://twitter.com/skillverdict",
      "https://linkedin.com/company/skillverdict",
      "https://github.com/skillverdict",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "support@skillverdict.com",
      availableLanguage: "English",
    },
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Skill Verification Service",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description: "Professional skill verification and assessment service for developers and tech professionals",
    serviceType: "Professional Verification",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Skill Verification Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Developer Skill Verification",
            description: "Comprehensive verification of programming and development skills",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CV2.0 Generation",
            description: "Modern, verified CV generation with community validation",
          },
        },
      ],
    },
  }
}
