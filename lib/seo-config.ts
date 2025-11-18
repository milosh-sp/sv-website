import { strings } from './strings'

// ============================================================================
// CORE SITE CONFIGURATION
// ============================================================================

export const siteConfig = {
  // Basic site information
  name: strings.branding.companyName,
  title: `${strings.branding.companyName} | ${strings.branding.tagline}`,
  description: strings.hero.subHeading,
  shortDescription: strings.hero.mainHeading,

  // URLs and domains
  url: 'https://skillverdict.com',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://skillverdict.com',

  // Social media handles
  twitterHandle: '@skillverdict',

  // Images and assets
  ogImage: '/og-image.min.png',
  logo: '/logo-sv.svg',
  favicon: '/favicon.ico',

  // Contact information
  contact: {
    email: 'support@skillverdict.com',
    legalEmail: 'legal@skillverdict.com',
    privacyEmail: 'privacy@skillverdict.com',
  },

  // Company information
  company: {
    name: strings.branding.companyName,
    foundingDate: '2024',
    category: 'Technology',
    creator: strings.branding.companyName,
    publisher: strings.branding.companyName,
  },

  // Social media profiles
  socialProfiles: [
    'https://twitter.com/skillverdict',
    'https://linkedin.com/company/skillverdict',
    'https://github.com/skillverdict',
  ],
} as const

// ============================================================================
// KEYWORDS AND SEO TERMS
// ============================================================================

export const seoKeywords = {
  // Primary keywords
  primary: [
    'skill verification',
    'developer skills',
    'tech community',
    'code review',
    'professional verification',
    'CV verification',
    'developer portfolio',
    'tech skills assessment',
    'peer review',
    'developer community',
  ] as string[],

  // Secondary keywords
  secondary: [
    'CV2.0',
    'verified skills',
    'tech professionals',
    'skill badges',
    'digital CV',
    'technical assessment',
    'developer verification',
    'programming skills',
    'software development',
    'tech talent',
  ] as string[],

  // Long-tail keywords
  longTail: [
    'get verified skills from top companies',
    'earn money reviewing code',
    'skip technical interviews with verified skills',
    'build professional reputation as developer',
    'verify programming skills online',
    'tech skill verification platform',
    'developer credibility verification',
  ] as string[],

  // Page-specific keywords
  pages: {
    home: [
      'skill verification platform',
      'developer skill assessment',
      'tech community verification',
      'CV2.0 generation',
      'verified developer skills',
    ] as string[],
    privacy: [
      'privacy policy',
      'data protection',
      'GDPR',
      'privacy rights',
      'data security',
    ] as string[],
    contact: [
      'contact skill verdict',
      'get in touch',
      'support',
      'customer service',
      'help',
    ] as string[],
  },
} as const

// ============================================================================
// PAGE-SPECIFIC SEO CONFIGURATION
// ============================================================================

export const pageSeoConfig = {
  home: {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: seoKeywords.pages.home,
    canonical: siteConfig.url,
    ogImage: siteConfig.ogImage,
  },

  privacy: {
    title: `${strings.footer.links.privacyPolicy} | ${strings.branding.companyName}`,
    description: `Learn how ${strings.branding.companyName} protects your privacy and handles your personal data in our skill verification platform.`,
    keywords: seoKeywords.pages.privacy,
    canonical: `${siteConfig.url}/privacy-policy`,
    ogImage: siteConfig.ogImage,
  },

  contact: {
    title: `${strings.contactPage.title} | ${strings.branding.companyName}`,
    description: strings.contactPage.description,
    keywords: seoKeywords.pages.contact,
    canonical: `${siteConfig.url}/contact`,
    ogImage: siteConfig.ogImage,
  },
} as const

// ============================================================================
// STRUCTURED DATA CONTENT
// ============================================================================
// Note: Content is now sourced from strings.ts to maintain single source of truth

export const structuredData = {
  // Hero section content
  hero: {
    mainHeading: strings.hero.mainHeading,
    subHeading: strings.hero.subHeading,
    callToAction: strings.hero.callToAction,
    primaryButton: strings.hero.buttons.verifySkills,
    secondaryButton: strings.hero.buttons.earnByVerifying,
    trustIndicators: strings.hero.trustIndicators,
  },

  // Benefits for verifiers
  verifierBenefits: strings.benefits.guruMembers.benefits,

  // Benefits for members
  memberBenefits: strings.benefits.members.benefits,

  // Process steps
  verifierProcess: strings.process.guruMembersteps,

  memberProcess: strings.process.memberSteps,

  // CV2.0 features
  cvFeatures: strings.cvPreview.features,
} as const

// ============================================================================
// FAQ CONTENT
// ============================================================================
// Note: Content is now sourced from strings.ts to maintain single source of truth

export const faqContent = {
  member: strings.faq.members,
  verifier: strings.faq.verifiers,
} as const

// ============================================================================
// TECHNICAL SEO CONFIGURATION
// ============================================================================

export const technicalSeo = {
  // Robots configuration
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Viewport configuration
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ffffff' },
      { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
    ],
  },

  // Icons configuration
  // Favicon files are located in /public directory
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ] as Array<{ url: string; sizes: string; type: string }>,
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ] as Array<{ url: string; sizes: string; type: string }>,
  },

  // Manifest configuration
  manifest: {
    name: siteConfig.title,
    short_name: strings.branding.companyName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['productivity', 'business', 'education'],
  },

  // Verification codes (to be updated with actual values)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },

  // Additional meta tags
  other: {
    'msapplication-TileColor': '#3b82f6',
    'theme-color': '#ffffff',
  },
} as const
