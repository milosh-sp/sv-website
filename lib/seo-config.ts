import { strings } from './strings'

// ============================================================================
// CORE SITE CONFIGURATION
// ============================================================================

const siteConfig = {
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
    email: 'contact@skillverdict.com',
  },

  // Company information
  company: {
    name: strings.branding.companyName,
    foundingDate: '2025',
    category:
      'HR Technology | Talent Marketplace | Skill Verification | Code review platform',
    creator: strings.branding.companyName,
    publisher: strings.branding.companyName,
  },

  // Social media profiles
  socialProfiles: [],
} as const

// ============================================================================
// KEYWORDS AND SEO TERMS - COMPREHENSIVE RESEARCH-BASED
// ============================================================================

const seoKeywords = {
  // PRIMARY KEYWORDS (Critical - High Volume, High Intent)
  primary: [
    'skill verification platform',
    'peer-validated developer skills',
    'verified developer credentials',
    'anonymous code review assessment',
    'developer skill assessment platform',
    'tech talent verification',
    'developer credibility verification',
    'verified engineer credentials',
    'technical skill endorsement',
    'peer-reviewed developer assessment',
    'hire verified developers',
    'developer verification platform',
    'anonymous developer evaluation',
    'tech skill verification',
    'developer skill assessment',
    'peer-validated coding skills',
    'bias-free tech hiring',
    'CV 2.0 platform',
    'anonymous technical interview',
    'skill passport for developers',
    'alternative to coding interviews',
    'real-world coding assessment',
    'code challenges for developers',
    'remote jobs for developers',
    'remote jobs for engineers',
    'remote jobs for software engineers',
    'remote jobs for tech professionals',
    'earn by doing code reviews',
    'get paid by reviewing code',
    'paid code reviews',
    'code review platform',
    'code review marketplace',
    'code review community',
  ] as string[],

  // SECONDARY KEYWORDS (High Priority - Medium Volume, High Intent)
  secondary: [
    // Hiring Manager Keywords
    'find pre-vetted developers',
    'verified developer talent pool',
    'bias-free developer hiring',
    'developer verification for hiring',
    'verified tech talent marketplace',
    'developer skill validation hiring',
    'remote developer verification',
    'developer vetting platform',
    'pre-vetted developer hiring',
    'transparent developer assessment',
    'anonymous developer assessment',
    'remote developer hiring',
    'talent marketplace',
    'find verified developers',
    'hire vetted talent',
    'reduce time to hire developers',
    'eliminate technical interview bias',
    'tech hiring platform',
    'pre-vetted developers',
    'community-verified skills',
    'stop whiteboard interviews',
    'portfolio-based hiring',

    // Candidate Keywords
    'build developer credentials',
    'prove programming skills',
    'create tech portfolio verification',
    'get developer skill badge',
    'verify engineering expertise',
    'developer credibility platform',
    'showcase verified skills',
    'technical skill portfolio',
    'verified engineer profile',
    'developer reputation platform',
    'resume builder',
    'resume replacement',
    'cv builder',
    'improve resume',
    'ATS checker',

    // Verifier Keywords
    'earn reviewing code',
    'developer assessment work',
    'peer review opportunities',
    'evaluator community platform',
    'technical assessment reviewer',
    'get paid for code review',
    'mentor developers earn',
    'community verification work',
    'peer code review platform',
    'proven engineering talent',
    'skill tier credential',
    'anonymous peer evaluation',
    'practical coding assessment',
    'senior developer verification',
  ] as string[],

  // LONG-TAIL KEYWORDS (High Purchase Intent)
  longTail: [
    'hire developers without lengthy interviews',
    'skip technical interview process verified skills',
    'pre-vetted developer talent for startups',
    'developer hiring faster than traditional interviews',
    'verified developer skills reduce bad hires',
    'anonymous developer assessment remove bias',
    'verified developer credentials replace interviews',
    'get verified skills show employers',
    'developer portfolio verification platform',
    'prove programming skills to employers',
    'build verified developer reputation',
    'peer-validated developer credentials',
    'developer credibility platform online',
    'hire developers without coding challenges',
    'developer hiring reduce recruiting fees',
    'verified developer credentials global hiring',
    'ATS-friendly developer resume',
    'beat applicant tracking system',
    'ATS-optimized developer CV',
    'bypass ATS screening developers',
    'online CV builder for developers',
    'professional developer resume builder',
    'verified CV builder platform',
    'developer portfolio CV generator',
    'code challenge platform for hiring',
    'real-world coding challenges',
    'practical code assessment platform',
    'developer coding challenge marketplace',
    'verified talent marketplace developers',
    'pre-vetted talent marketplace',
    'developer talent pool platform',
    'tech talent marketplace verified',
    'how to skip technical interviews with verified skills',
    'get developer skills verified by industry experts',
    'anonymous coding assessment no bias',
    'build verified developer portfolio',
    'prove coding skills without algorithm tests',
    'developer skill verification for job search',
    'replace LinkedIn skill assessments with real verification',
    'get hired without whiteboard coding challenges',
    'find pre-vetted senior developers fast',
    'reduce engineering interview time by 80%',
    'eliminate bad hires in tech recruitment',
    'hire developers with verified real-world skills',
    'alternative to Toptal vetting process',
    'cost-effective developer verification platform',
    'bias-free technical screening solution',
    'community-validated developer assessment',
    'earn money reviewing developer code',
    'become peer verifier for developer skills',
    'side income for senior engineers',
    'mentor developers through skill verification',
    'join tech skill verification community',
    'compensation for code review expertise',
    'arc dev alternative',
    'earn more money than arc dev',
  ] as string[],

  // UNIQUE VALUE PROPOSITION KEYWORDS
  uniqueValue: [
    'anonymous developer evaluation',
    'bias-free developer assessment',
    'anonymous developer hiring',
    'remove gender bias hiring',
    'remove demographic bias hiring',
    'peer-verified developer skills',
    'community developer verification',
    'decentralized developer assessment',
    'developer community endorsement',
    'CV 2.0 platform',
    'dynamic developer portfolio',
    'verifiable developer passport',
    'universal developer credentials',
    'developer skill tier verification',
    'developer skill tier credential',
    'reduce hiring costs',
  ] as string[],

  // PROBLEM-SOLUTION KEYWORDS
  problemSolution: [
    // Pain Points
    'developer interview problems',
    'expensive developer recruiting fees',
    'bad developer hires cost',
    'lengthy developer interview process',
    'developer hiring bias issues',
    'developer skills verification problems',
    'whiteboard coding interview problems',
    'developer assessment inaccuracy',

    // Solutions
    'developer hire faster',
    'reduce bad developer hires',
    'avoid developer hiring bias',
    'lower developer recruiting costs',
    'efficient developer evaluation',
    'fair developer assessment',
    'development interview alternative',
    'developer hiring solution',
  ] as string[],

  // EMERGING/TRENDING KEYWORDS
  emerging: [
    'developer skill bias reduction',
    'fair developer assessment',
    'development interview alternative',
    'non-technical hiring alternative',
    'development talent verification 2025',
    'AI-resistant developer assessment',
    'human-reviewed code assessment',
    'developer authenticity verification',
    'transparent developer hiring',
    'equity-driven developer assessment',
  ] as string[],

  // COMPETITIVE DIFFERENTIATION KEYWORDS
  competitive: [
    // Vs Toptal
    'alternative to toptal verification',
    'Toptal alternative for skill verification',
    'cheaper verified developer platform',
    'transparent developer marketplace',

    // Vs Arc.dev
    'bias-free vs AI matching developers',
    'human-reviewed developer assessment',
    'peer community vs algorithm hiring',
    'Arc.dev competitor for developer assessment',

    // Vs Other Platforms
    'better than HackerRank coding assessments',
    'alternative to Codility technical tests',
    'vs Geektastic peer code review',
    'Proxify alternative for verified talent',
    'Beon.tech alternative with peer validation',

    // Vs Traditional
    'interview alternative developers',
    'no technical interview assessment',
    'skip coding challenge verification',
    'replace traditional technical screening',
  ] as string[],

  // VERTICAL/TECH-SPECIFIC KEYWORDS
  techVerticals: [
    'junior developer assessment',
    'senior developer verification',
    'full-stack developer validation',
    'frontend developer assessment',
    'backend developer verification',
    'DevOps engineer verification',
    'React developer skills',
    'Node.js developer verification',
    'Python developer assessment',
    'TypeScript developer skills',
    'database engineer verification',
    'system design assessment',
  ] as string[],

  // PAGE-SPECIFIC KEYWORDS
  pages: {
    home: [
      'skill verification platform',
      'developer skill assessment',
      'tech community verification',
      'CV2.0 generation',
      'verified developer skills',
      'peer-validated credentials',
      'anonymous assessment platform',
      'alternative to interviews',
      'trusted skill verification platform',
      'CV 2.0 digital skill passport',
      'anonymous bias-free tech interviews',
      'verified engineering talent platform',
    ] as string[],

    privacy: [
      'privacy policy',
      'data protection',
      'GDPR compliance',
      'privacy rights',
      'data security',
      'anonymous assessment privacy',
      'developer data privacy',
      'skill verification privacy policy',
      'GDPR compliant peer review',
      'anonymous evaluation data security',
      'privacy-focused skill verification',
    ] as string[],

    contact: [
      'contact skill verification experts',
      'customer service',
      'enterprise skill verification inquiry',
      'get demo peer validation platform',
      'get in touch',
      'help',
      'partner with skill verdict',
      'support',
      'technical hiring consultation',
    ] as string[],

    candidate: [
      'build developer credentials',
      'verify programming skills',
      'developer portfolio verification',
      'get verified skills',
      'developer assessment candidate',
      'earn developer badge',
      'prove coding expertise',
    ] as string[],

    verifier: [
      'earn reviewing code',
      'developer assessment reviewer',
      'technical assessor platform',
      'peer review opportunities',
      'developer evaluation work',
      'get paid assessing developers',
      'community evaluator role',
    ] as string[],

    hiringManager: [
      'hire verified developers',
      'verified developer talent pool',
      'pre-vetted developer hiring',
      'developer verification hiring',
      'reduce bad developer hires',
      'faster developer hiring process',
      'transparent developer assessment',
    ] as string[],
  },

  // SEMANTIC KEYWORDS (For NLP and contextual understanding)
  semantic: [
    'skill validation',
    'credential verification',
    'talent assessment',
    'peer endorsement',
    'developer marketplace',
    'technical evaluation',
    'competency verification',
    'professional credential',
    'expertise validation',
    'capability assessment',
  ] as string[],
} as const

// ============================================================================
// PAGE-SPECIFIC SEO CONFIGURATION - OPTIMIZED FOR SEARCH INTENT
// ============================================================================

const pageSeoConfig = {
  home: {
    keywords: seoKeywords.pages.home,
    canonical: siteConfig.url,
    ogImage: siteConfig.ogImage,
    schema: {
      type: 'SoftwareApplication',
      applicationCategory: 'BusinessApplication',
      offers: {
        priceCurrency: 'USD',
        price: 'Variable',
      },
    },
  },

  privacy: {
    title: `Privacy Policy | ${strings.branding.companyName} - GDPR Compliant`,
    description: `Learn how ${strings.branding.companyName} protects developer privacy with anonymous assessment, GDPR compliance, and transparent data practices.`,
    keywords: seoKeywords.pages.privacy,
    canonical: `${siteConfig.url}/privacy-policy`,
    ogImage: siteConfig.ogImage,
  },

  contact: {
    title: `Contact ${strings.branding.companyName} | Get Support`,
    description: strings.contactPage.description,
    keywords: seoKeywords.pages.contact,
    canonical: `${siteConfig.url}/contact`,
    ogImage: siteConfig.ogImage,
  },

  candidate: {
    title: 'Build Verified Developer Credentials | Skill Verdict',
    description:
      'Get peer-validated skills, build your verified developer reputation, and prove your programming expertise to employers without lengthy interviews.',
    keywords: seoKeywords.pages.candidate,
    canonical: `${siteConfig.url}/candidate`,
    ogImage: siteConfig.ogImage,
    schema: {
      type: 'BreadcrumbList',
      itemListElement: [
        {
          position: 1,
          name: 'Home',
          item: siteConfig.url,
        },
        {
          position: 2,
          name: 'For Candidates',
          item: `${siteConfig.url}/candidate`,
        },
      ],
    },
  },

  verifier: {
    title: 'Earn Money Reviewing Developer Code | Skill Verdict',
    description:
      'Join our verifier community. Assess developers, earn compensation, gain recognition. Flexible peer review work with meaningful impact on hiring.',
    keywords: seoKeywords.pages.verifier,
    canonical: `${siteConfig.url}/verifier`,
    ogImage: siteConfig.ogImage,
    schema: {
      type: 'BreadcrumbList',
      itemListElement: [
        {
          position: 1,
          name: 'Home',
          item: siteConfig.url,
        },
        {
          position: 2,
          name: 'For Verifiers',
          item: `${siteConfig.url}/verifier`,
        },
      ],
    },
  },

  hiringManager: {
    title: 'Hire Verified Developers | Pre-Vetted Talent Pool | Skill Verdict',
    description:
      'Access pre-vetted developers through verified peer assessment. Remove hiring bias, reduce interview time 80%, eliminate bad hires. Fast, fair, transparent.',
    keywords: seoKeywords.pages.hiringManager,
    canonical: `${siteConfig.url}/hiring-manager`,
    ogImage: siteConfig.ogImage,
    schema: {
      type: 'BreadcrumbList',
      itemListElement: [
        {
          position: 1,
          name: 'Home',
          item: siteConfig.url,
        },
        {
          position: 2,
          name: 'For Hiring Managers',
          item: `${siteConfig.url}/hiring-manager`,
        },
      ],
    },
  },
}

// ============================================================================
// STRUCTURED DATA CONTENT - SEO-OPTIMIZED
// ============================================================================

const structuredData = {
  hero: {
    mainHeading: strings.hero.mainHeading,
    subHeading: strings.hero.subHeading,
    callToAction: strings.hero.callToAction,
    primaryButton: strings.hero.buttons.verifySkills,
    secondaryButton: strings.hero.buttons.earnByVerifying,
    trustIndicators: strings.hero.trustIndicators,
  },

  verifierBenefits: strings.benefits.guruMembers.benefits,
  memberBenefits: strings.benefits.members.benefits,

  verifierProcess: strings.process.guruMembersteps,
  memberProcess: strings.process.memberSteps,

  cvFeatures: strings.cvPreview.features,

  // SEO-focused value propositions
  valuePropositions: [
    {
      title: 'Stop Interviewing. Start Verifying.',
      description:
        'Replace broken interviews with verified peer assessment. Real-world evaluation replaces coding puzzles.',
      keywords: [
        'interview alternative',
        'verified assessment',
        'developer verification',
      ],
    },
    {
      title: 'Eliminate Bias. Hire Better.',
      description:
        'Anonymous evaluation removes gender, race, age, and background bias. Purely merit-based assessment.',
      keywords: ['bias-free hiring', 'anonymous assessment', 'fair evaluation'],
    },
    {
      title: 'One Assessment. Universal Trust.',
      description:
        'Candidates assess once. Credentials work everywhere. Companies trust verified skills backed by peers.',
      keywords: ['universal credentials', 'verified skills', 'skill tier'],
    },
  ],
} as const

// ============================================================================
// FAQ CONTENT - OPTIMIZED FOR SEO AND VOICE SEARCH
// ============================================================================

const faqContent = {
  member: strings.faq.members,
  verifier: strings.faq.verifiers,
  seoOptimized: [
    {
      question:
        'What is the difference between Skill Verdict and traditional interviews?',
      answer:
        'Skill Verdict uses peer-validated assessment instead of timed interviews. Evaluations are anonymous, removing bias. You build verifiable credentials that work across multiple companies, eliminating repetitive interview cycles.',
      keywords: [
        'interview alternative',
        'peer validation',
        'anonymous assessment',
      ],
    },
    {
      question: 'How does anonymous assessment reduce hiring bias?',
      answer:
        'Reviewers do not see candidate names, demographics, or background. Assessment focuses purely on demonstrated technical capability and real-world problem-solving—not on identity characteristics or personal networks.',
      keywords: ['bias reduction', 'fair hiring', 'anonymous evaluation'],
    },
    {
      question:
        'Can I use verified credentials from Skill Verdict for multiple job applications?',
      answer:
        'Yes. CV 2.0 credentials are universal. Once verified, your skill tier credential can be shared with any company, eliminating the need to repeat assessment processes.',
      keywords: ['universal credentials', 'CV 2.0', 'skill verification'],
    },
  ],
} as const

// ============================================================================
// TECHNICAL SEO CONFIGURATION
// ============================================================================

const technicalSeo = {
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
    categories: [
      'productivity',
      'business',
      'education',
      'recruiting',
      'human resources',
      'hr',
    ],
  },

  // Verification codes
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ||
      'your-google-verification-code',
    yandex:
      process.env.NEXT_PUBLIC_YANDEX_VERIFICATION ||
      'your-yandex-verification-code',
    yahoo:
      process.env.NEXT_PUBLIC_YAHOO_VERIFICATION ||
      'your-yahoo-verification-code',
  },

  // Additional meta tags
  other: {
    'msapplication-TileColor': '#3b82f6',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },

  // Open Graph configuration for social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocales: ['de_DE', 'fr_FR', 'es_ES'],
  },

  // Twitter Card configuration
  twitterCard: {
    card: 'summary_large_image',
    creator: '@skillverdict',
    site: '@skillverdict',
  },
} as const

export {
  siteConfig,
  seoKeywords,
  pageSeoConfig,
  structuredData,
  faqContent,
  technicalSeo,
}
