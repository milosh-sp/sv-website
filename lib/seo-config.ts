/**
 * Centralized SEO Configuration for SkillVerdict
 * This file serves as the single source of truth for all SEO-related values
 */

import type { Metadata } from 'next'

// ============================================================================
// CORE SITE CONFIGURATION
// ============================================================================

export const siteConfig = {
  // Basic site information
  name: 'SkillVerdict',
  title: 'SkillVerdict | Monetize Your Expertise as a Developer',
  description:
    'SkillVerdict is a decentralized, unbiased and respected community where global tech professionals from leading companies verify your skills.',
  shortDescription:
    "Get your CV2.0 today - verified skills from world's top talent",

  // URLs and domains
  url: 'https://skillverdict.com',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://skillverdict.com',

  // Social media handles
  twitterHandle: '@skillverdict',

  // Images and assets
  ogImage: '/og-image.jpg',
  ogImageSvg: '/og-image.svg',
  logo: '/placeholder-logo.png',
  logoSvg: '/placeholder-logo.svg',
  favicon: '/favicon.ico',

  // Contact information
  contact: {
    email: 'support@skillverdict.com',
    legalEmail: 'legal@skillverdict.com',
    privacyEmail: 'privacy@skillverdict.com',
  },

  // Company information
  company: {
    name: 'SkillVerdict',
    foundingDate: '2024',
    category: 'Technology',
    creator: 'SkillVerdict',
    publisher: 'SkillVerdict',
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
    terms: [
      'terms of service',
      'user agreement',
      'platform rules',
      'community guidelines',
      'legal terms',
    ] as string[],
    privacy: [
      'privacy policy',
      'data protection',
      'GDPR',
      'privacy rights',
      'data security',
    ] as string[],
  },
} as const

// ============================================================================
// PAGE-SPECIFIC SEO CONFIGURATION
// ============================================================================

export const pageSeoConfig = {
  home: {
    title: 'SkillVerdict | Monetize Your Expertise as a Developer',
    description:
      'SkillVerdict is a decentralized, unbiased and respected community where global tech professionals from leading companies verify your skills. Replace empty resume claims with proven endorsements, build your CV2.0 and get hired faster, or earn income by selling your own credibility as a tech professional',
    keywords: seoKeywords.pages.home,
    canonical: siteConfig.url,
    ogImage: siteConfig.ogImage,
  },

  terms: {
    title: 'Terms of Service',
    description:
      "Read SkillVerdict's terms of service, user agreements, and platform guidelines for our skill verification community.",
    keywords: seoKeywords.pages.terms,
    canonical: `${siteConfig.url}/terms-of-service`,
    ogImage: siteConfig.ogImage,
  },

  privacy: {
    title: 'Privacy Policy',
    description:
      'Learn how SkillVerdict protects your privacy and handles your personal data in our skill verification platform.',
    keywords: seoKeywords.pages.privacy,
    canonical: `${siteConfig.url}/privacy-policy`,
    ogImage: siteConfig.ogImage,
  },
} as const

// ============================================================================
// STRUCTURED DATA CONTENT
// ============================================================================

export const structuredData = {
  // Hero section content
  hero: {
    mainHeading:
      "Don't let your CV be ignored by AI and HR, get your CV2.0 today",
    subHeading:
      'SkillVerdict is a decentralized, unbiased and respected community where global tech professionals from leading companies verify your skills. Replace empty resume claims with proven endorsements, build your CV2.0 and get hired faster, or earn income by selling your own credibility as a tech professional',
    callToAction: 'Choose your path to get started:',
    primaryButton: 'Verify my skills',
    secondaryButton: 'Earn by verifying',
    trustIndicators: [
      '100% Secure & transparent',
      'No time commitment',
      "Verified by world's top talent",
    ],
  },

  // Benefits for verifiers
  verifierBenefits: [
    {
      title: 'Earn extra income',
      description:
        'Get paid for reviewing code and conducting technical interviews',
    },
    {
      title: 'Flexible schedule',
      description:
        'Work on your own time from anywhere - no contracts or minimum hours',
    },
    {
      title: 'Build your reputation',
      description: 'Establish yourself as an industry expert in the community',
    },
    {
      title: 'Expand your network',
      description: 'Connect with talented tech professionals',
    },
  ],

  // Benefits for members
  memberBenefits: [
    {
      title: 'Verified skill badges',
      description: 'Stand out with verified skill badges on your profile',
    },
    {
      title: 'Possibly skip lengthy interviews',
      description:
        "Chance to reduce multi-step interviews or skip fully because your skills are already verified by world's top talent",
    },
    {
      title: 'Increase Hiring Chances',
      description:
        "Don't just say you're good—prove it. Verified skills from top professionals make employers notice",
    },
    {
      title: 'Customizable digital CV2.0',
      description:
        'Share your verified skills instantly. Export a digital CV2.0 with a trusted QR code or send a live link to anyone.',
    },
  ],

  // Process steps
  verifierProcess: [
    {
      title: '1. Apply as a verifier',
      description:
        'Sign up to the community, submit your traditional CV and areas of expertise for review',
    },
    {
      title: '2. Interview',
      description:
        'Demonstrate your expertise and pass the interview to become a verifier',
    },
    {
      title: '3. Start verifying',
      description:
        'Access our AI-assisted dashboard to easily review candidate submissions',
    },
    {
      title: '4. Earn',
      description:
        'Earn income by selling your credibility. Grow your expertise by learning from candidate feedback.',
    },
  ],

  memberProcess: [
    {
      title: '1. Create profile',
      description:
        'Sign up to the community, upload your traditional CV and select the skills you want to verify',
    },
    {
      title: '2. Complete assignment',
      description:
        'Complete a short take at home assignment that demonstrates your skills. Our take at home assignment are designed to surface your true skills',
    },
    {
      title: '3. Technical discussion',
      description:
        'If your solution is picked by a verifier, you will have a technical discussion with the verifier to validate your skills and knowledge',
    },
    {
      title: '4. Final conclusion',
      description:
        'If you pass the technical discussion, you will receive your verified skill badge and get a chance to rate the verifier',
    },
  ],

  // CV2.0 features
  cvFeatures: [
    {
      title: 'QR Verification',
      description:
        'Employers can scan QR codes to verify credential authenticity instantly',
    },
    {
      title: 'Skill Badges',
      description:
        'Visual badges show exactly which skills have been verified by the community',
    },
    {
      title: 'Optimized metadata',
      description:
        'Every exported CV2.0 is optimized for HR AIs to read and understand your skills',
    },
    {
      title: 'Live Links',
      description:
        'Direct links to your verified projects and code repositories',
    },
  ],
} as const

// ============================================================================
// FAQ CONTENT
// ============================================================================

export const faqContent = {
  member: [
    {
      question: 'How does the verification process work?',
      answer:
        'Our verification process involves a multi-step evaluation where your skills are assessed by experienced tech professionals in the field. Our tech professionals come from different backgrounds and companies like Google, Netflix, Airbnb, Amazon, Meta and many more. Once verified, your skills are permanently recorded and can be easily validated by employers through QR codes or direct links.',
    },
    {
      question: 'How long does it take to get verified?',
      answer:
        'The verification process typically takes 3-5 business days, depending on the complexity of the skills being assessed and the availability of our verifiers.',
    },
    {
      question: 'Can I update my skills after verification?',
      answer:
        'Yes, you can always add new skills or request re-verification of existing skills as you continue to develop your expertise. The platform is designed to grow with your career.',
    },
    {
      question: 'How do employers verify my skills?',
      answer:
        "Employers can verify your skills by scanning the QR code on your digital CV or by visiting your unique profile URL. They'll see a complete verification history with timestamps and reviewer credentials.",
    },
    {
      question: 'I am not happy with my verification outcome, what can I do?',
      answer:
        'You can always submit a complaint if you think you have not been treated fairly. We will investigate your complaint, if your claim turns out to be true, we will assign a new verifier to your case.',
    },
    {
      question: 'Can I become a verifier as well and earn?',
      answer:
        'Of course you can, after you have verified the skills you want to verify other members skills with, you can apply and go through the become a verifier process.',
    },
    {
      question:
        'Is my data and code safe? Who can see my verification results?',
      answer:
        'Your privacy is paramount. Your specific code and assignment solutions are only visible to the verifiers assigned to you. Your public profile and CV2.0 will only show the skills you choose to make public and their verification status. You have full control over your visibility settings.',
    },
  ],

  verifier: [
    {
      question: 'How much can I earn as a verifier?',
      answer:
        'Earnings are based on a share of the verification fee for each assessment you complete. The more complex the skill, the higher the fee and your potential earnings. We provide a clear breakdown of potential earnings in your verifier dashboard.',
    },
    {
      question: "What's the time commitment for being a verifier?",
      answer:
        'There is no minimum time commitment. You can choose to take on as many or as few verification tasks as your schedule allows. The platform is designed for flexibility.',
    },
    {
      question: 'How does the "AI-assisted dashboard" help me?',
      answer:
        'Our dashboard helps you streamline the review process. It can help with initial code analysis, flagging common patterns, managing your queue of assignments, and generating structured feedback templates, allowing you to focus on the high-level assessment.',
    },
    {
      question: 'What happens if a candidate disputes my assessment?',
      answer:
        'Our admin team will review the dispute neutrally. If your feedback is found to be constructive, professional, and accurate, your rating and standing will be unaffected. This system protects verifiers from frivolous disputes while ensuring fairness for candidates.',
    },
  ],
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ] as any[],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ] as any[],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' },
    ] as any[],
  },

  // Manifest configuration
  manifest: {
    name: 'SkillVerdict - Monetize Your Expertise as a Developer',
    short_name: 'SkillVerdict',
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

// ============================================================================
// SITEMAP CONFIGURATION
// ============================================================================

export const sitemapConfig = {
  pages: [
    {
      url: '',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
      images: [
        '/og-image.jpg',
        '/og-image.svg',
        '/placeholder-logo.png',
        '/placeholder-user.jpg',
        '/placeholder.jpg',
      ],
    },
    {
      url: '/privacy-policy',
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: '/terms-of-service',
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ],
} as const

// ============================================================================
// EXPORT TYPES
// ============================================================================

export type PageSeoConfig = typeof pageSeoConfig
export type StructuredData = typeof structuredData
export type FAQContent = typeof faqContent
export type TechnicalSeo = typeof technicalSeo
export type SitemapConfig = typeof sitemapConfig
