/**
 * SEO utilities and metadata generation for SkillVerdict
 */

import type { Metadata } from 'next'
import { siteConfig, seoKeywords, technicalSeo } from './seo-config'

// Default metadata for the application
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: seoKeywords.primary,
  authors: [
    {
      name: 'Skill Verdict Team',
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.company.creator,
  publisher: siteConfig.company.publisher,
  category: siteConfig.company.category,
  robots: technicalSeo.robots,
  openGraph: {
    type: 'website',
    locale: 'en_US',
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
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
  },
  icons: technicalSeo.icons,
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteConfig.url,
  },
  verification: technicalSeo.verification,
  other: technicalSeo.other,
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
    ? [...seoKeywords.primary, ...pageData.keywords]
    : seoKeywords.primary

  const ogImage = pageData.ogImage || siteConfig.ogImage
  const canonical = pageData.canonical || siteConfig.url

  return {
    title,
    description,
    keywords,
    robots: pageData.noIndex
      ? { index: false, follow: false }
      : technicalSeo.robots,
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
          type: 'image/jpeg',
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
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    foundingDate: siteConfig.company.foundingDate,
    sameAs: siteConfig.socialProfiles,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: siteConfig.contact.email,
      availableLanguage: 'English',
    },
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateFaqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Skill Verification Service',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description:
      'Professional skill verification and assessment service for developers and tech professionals',
    serviceType: 'Professional Verification',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Skill Verification Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Developer Skill Verification',
            description:
              'Comprehensive verification of programming and development skills',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CV2.0 Generation',
            description:
              'Modern, verified CV generation with community validation',
          },
        },
      ],
    },
  }
}
