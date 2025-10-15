/**
 * Centralized Content Strings for SkillVerdict
 *
 * This file contains ALL text content used throughout the application.
 * It's organized by sections to make it easy for editors to find and modify content.
 *
 * Structure:
 * - Each section represents a major component or page area
 * - Content is organized logically within each section
 * - All user-facing text should be defined here
 * - Use descriptive property names that indicate the content's purpose
 */

// ============================================================================
// SITE BRANDING & IDENTITY
// ============================================================================

export const branding = {
  // Company name and tagline
  companyName: 'SkillVerdict',
  tagline: 'Monetize Your Expertise as a Developer',

  // Logo and visual elements
  logo: {
    alt: 'SkillVerdict Logo',
    ariaLabel: 'Go to homepage',
  },

  // Copyright and legal
  copyright: '© 2025 SkillVerdict. All rights reserved.',
} as const

// ============================================================================
// NAVIGATION & HEADER
// ============================================================================

export const navigation = {
  // Main navigation items
  menu: {
    home: 'Home',
    howItWorks: 'How It Works',
    cvPreview: 'CV2.0 Preview',
    companies: 'Companies',
    howToJoin: 'How to join',
    faqs: 'FAQs',
    joinCommunity: 'Join community',
  },

  // Mobile menu specific items
  mobile: {
    cvPreview: 'CV Preview',
    forCompanies: 'For Companies',
    process: 'Process',
    faq: 'FAQ',
  },

  // Menu accessibility labels
  accessibility: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    goToHomepage: 'Go to homepage',
    goToHowItWorks: 'Go to how it works section',
    goToCvPreview: 'Go to CV preview section',
    goToCompanyDiscovery: 'Go to company discovery section',
    goToProcess: 'Go to process section',
    goToFaq: 'Go to FAQ section',
    scrollToHero: 'Scroll to hero section to join the community',
  },
} as const

// ============================================================================
// HERO SECTION
// ============================================================================

export const hero = {
  // Main hero content
  mainHeading: "Don't chase your next role, attract it with your CV2.0!",
  subHeading:
    'SkillVerdict is a decentralized, unbiased and respected community where global tech professionals from leading companies verify your skills. Replace empty resume claims with proven endorsements, build your CV2.0 and get hired faster, or earn income by selling your own credibility as a tech professional',
  callToAction: 'Choose your path to get started:',

  // Action buttons
  buttons: {
    verifySkills: 'Verify my skills',
    earnByVerifying: 'Earn by verifying',
  },

  // Trust indicators
  trustIndicators: [
    '100% Secure & transparent',
    'No time commitment',
    "Verified by world's top talent",
  ],

  // Accessibility labels
  accessibility: {
    heroSection: 'Hero section',
    openSignupModal: 'Open signup modal to verify your skills',
    openEarnModal: 'Open signup modal to earn by verifying skills',
  },
} as const

// ============================================================================
// HOW IT WORKS SECTION (Two Sides)
// ============================================================================

export const howItWorks = {
  // Section header
  heading: 'Twitter Community Notes, but for your',
  headingHighlight: 'skills',
  description:
    "Inspired by models like Twitter's Community Notes, SkillVerdict brings transparent, community-driven verification to member's skills. It's unbiased assessment, powered by the community.",

  // Tab labels
  tabs: {
    members: 'Members',
    techProfessionals: 'Tech professionals',
  },

  // Tab accessibility
  tabAccessibility: {
    chooseUserType: 'Choose user type',
    membersTab: 'Members tab',
    techProfessionalsTab: 'Tech professionals tab',
  },

  // Members section
  members: {
    iconAriaLabel: 'Award icon for members',
    description:
      'Get your skills verified by global industry experts and boost your career with a next-generation CV2.0.',
    benefits: [
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
  },

  // Tech professionals section
  techProfessionals: {
    iconAriaLabel: 'Dollar sign icon for tech professionals',
    description:
      'Top talent is valued in the SkillVerdict community. Monetize your expertise by verifying the skills of other members.',
    benefits: [
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
        description:
          'Establish yourself as an industry expert in the community',
      },
      {
        title: 'Expand your network',
        description: 'Connect with talented tech professionals',
      },
    ],
  },

  // Section accessibility
  accessibility: {
    howItWorksSection: 'How SkillVerdict works for different users',
    membersPanel: 'Members panel',
    techProfessionalsPanel: 'Tech professionals panel',
  },
} as const

// ============================================================================
// CV PREVIEW SECTION
// ============================================================================

export const cvPreview = {
  // Section header
  heading: 'Your Digital CV2.0 - Verified by the Community',
  description:
    'See what makes our verified CV different from traditional resumes. Our flexible CV2.0 platform lets you showcase your verified skills in a format that best represents your expertise and achievements. You can hide your community status or display it proudly, you can hide skills badges and other tons of customizations. This is just one of many CV2.0 templates used to display your verified skills',
  note: 'Note: This is not going to be the final version, our CV2.0 platform is heavily in development and is going to be much more advanced and customizable.',

  // CV features
  features: [
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
// COMPANY DISCOVERY SECTION
// ============================================================================

export const companyDiscovery = {
  // Section content
  iconAriaLabel: 'Building icon for company discovery',
  heading: 'Companies come to you',
  description:
    'With passive discovery, companies on SkillVerdict discover and contact you directly with opportunities that match your verified skills.',

  // Benefits list
  benefits: [
    'Passive discovery',
    'Direct company contact',
    'No applications needed',
  ],

  // Section accessibility
  accessibility: {
    companyDiscoverySection:
      'How companies discover and contact verified talent',
  },
} as const

// ============================================================================
// PROCESS SECTION
// ============================================================================

export const process = {
  // Section header
  heading: 'How SkillVerdict Works',
  description:
    'Our process ensures rigorous verification while maintaining flexibility for both tech professionals and members. We hand pick our verifiers, you will be assured that your skills are going to be verified in the upmost professional manner, unbiased, professional, fast and transparent.',

  // Tab labels
  tabs: {
    members: 'Members',
    techProfessionals: 'Tech professionals',
  },

  // Process steps for members
  memberSteps: [
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

  // Process steps for tech professionals
  techProfessionalSteps: [
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
} as const

// ============================================================================
// FAQ SECTION
// ============================================================================

export const faq = {
  // Section headers
  mainHeading: 'Frequently Asked Questions',
  membersHeading: 'Frequently asked questions for members',
  verifiersHeading: 'Frequently asked questions for verifiers',

  // Members FAQ
  members: [
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

  // Verifiers FAQ
  verifiers: [
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
// SIGNUP MODAL
// ============================================================================

export const signupModal = {
  // Modal header
  title: 'Join SkillVerdict',

  // Form fields
  form: {
    email: {
      label: 'Email address',
      placeholder: 'Your email address *',
      ariaLabel: 'Email address field',
    },
    linkedin: {
      label: 'LinkedIn profile URL',
      placeholder: 'Your LinkedIn profile URL *',
      ariaLabel: 'LinkedIn profile URL field',
    },
    website: {
      label: 'Website (leave this field empty)',
      placeholder: 'Your website',
      ariaLabel: 'Website field (honeypot)',
    },
  },

  // Submit button
  submitButton: {
    idle: 'Secure my spot',
    submitting: 'Securing your spot...',
    ariaLabel: {
      idle: 'Submit signup form',
      submitting: 'Submitting form',
    },
  },

  // Status messages
  status: {
    success: {
      title: 'Success!',
      message:
        "We've added you to our waitlist. You'll be among the first to know when we launch!",
      icon: '🎉',
    },
    error: {
      title: 'Error',
      message: 'Something went wrong. Please try again or contact support.',
      icon: '❌',
    },
  },

  // Accessibility
  accessibility: {
    closeModal: 'Close modal',
    signupForm: 'Signup form',
    emailError: 'Email validation error',
    linkedinError: 'LinkedIn validation error',
  },
} as const

// ============================================================================
// FLOATING SIGNUP BUTTON
// ============================================================================

export const floatingSignupButton = {
  text: 'Sign Up',
  ariaLabel: 'Scroll to hero section to sign up',
  iconAriaLabel: 'User plus icon with sparkles',
} as const

// ============================================================================
// FOOTER
// ============================================================================

export const footer = {
  // Links
  links: {
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
  },

  // Social media
  social: {
    twitter: 'Twitter profile',
    linkedin: 'LinkedIn profile',
    github: 'GitHub profile',
  },
} as const

// ============================================================================
// LEGAL PAGES CONTENT
// ============================================================================

export const legalPages = {
  // Terms of Service
  termsOfService: {
    title: 'Terms of Service',
    description:
      "Please read these terms carefully before using SkillVerdict's platform and services.",
    lastUpdated: 'October 2025',
    sections: {
      acceptance: {
        title: 'Acceptance of Terms',
        content: [
          'By accessing and using SkillVerdict ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
          'These Terms of Service ("Terms") govern your use of our website located at skillverdict.com and our skill verification services (together or individually "Service") operated by SkillVerdict.',
        ],
      },
      description: {
        title: 'Description of Service',
        content: [
          'SkillVerdict is a platform that provides skill verification services for technology professionals. Our service includes:',
          'Peer-to-peer skill verification and assessment',
          'Digital CV2.0 generation with verified credentials',
          'Community-driven skill validation',
          'Professional networking and discovery features',
          'Verifier marketplace and earning opportunities',
        ],
      },
      userAccounts: {
        title: 'User Accounts',
        accountCreation: {
          title: 'Account Creation',
          content:
            'To use certain features of our Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.',
        },
        accountSecurity: {
          title: 'Account Security',
          content:
            'You are responsible for safeguarding the password and for maintaining the confidentiality of your account. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.',
        },
      },
      prohibitedUses: {
        title: 'Prohibited Uses',
        content: [
          'You may not use our Service:',
          'For any unlawful purpose or to solicit others to perform unlawful acts',
          'To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances',
          'To infringe upon or violate our intellectual property rights or the intellectual property rights of others',
          'To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate',
          'To submit false or misleading information',
          'To upload or transmit viruses or any other type of malicious code',
          'To spam, phish, pharm, pretext, spider, crawl, or scrape',
          'For any obscene or immoral purpose',
          'To interfere with or circumvent the security features of the Service',
        ],
      },
      intellectualProperty: {
        title: 'Intellectual Property Rights',
        content: [
          'The Service and its original content, features, and functionality are and will remain the exclusive property of SkillVerdict and its licensors. The Service is protected by copyright, trademark, and other laws.',
          'Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.',
        ],
      },
      termination: {
        title: 'Termination',
        content: [
          'We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.',
          'If you wish to terminate your account, you may simply discontinue using the Service or contact us to request account deletion.',
        ],
      },
      disclaimer: {
        title: 'Disclaimer',
        content:
          'The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company excludes all representations, warranties, conditions and terms.',
      },
      contact: {
        title: 'Contact Us',
        content:
          'If you have any questions about these Terms of Service, please contact us:',
        email: 'legal@skillverdict.com',
        address: 'SkillVerdict Legal Team',
        responseTime: 'We aim to respond within 48 hours',
      },
    },
  },

  // Privacy Policy
  privacyPolicy: {
    title: 'Privacy Policy',
    description:
      'Your privacy is fundamental to our mission. Learn how we protect and handle your data.',
    lastUpdated: 'December 2024',
    sections: {
      introduction: {
        title: 'Introduction',
        content: [
          'SkillVerdict ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our skill verification platform.',
          'By using SkillVerdict, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our service.',
        ],
      },
      informationWeCollect: {
        title: 'Information We Collect',
        personalInformation: {
          title: 'Personal Information',
          items: [
            'Name, email address, and contact information',
            'Professional background and work experience',
            'Skills, certifications, and educational background',
            'Profile information and professional achievements',
          ],
        },
        technicalInformation: {
          title: 'Technical Information',
          items: [
            'Code submissions and technical assessments',
            'Verification results and skill ratings',
            'Platform usage data and interaction patterns',
            'Device information and IP addresses',
          ],
        },
      },
      howWeUse: {
        title: 'How We Use Your Information',
        content: [
          'We use the information we collect to:',
          'Provide and maintain our skill verification services',
          'Process verification requests and generate skill assessments',
          'Connect you with qualified verifiers and potential employers',
          'Improve our platform and develop new features',
          'Communicate with you about your account and our services',
          'Ensure platform security and prevent fraud',
          'Comply with legal obligations and resolve disputes',
        ],
      },
      informationSharing: {
        title: 'Information Sharing and Disclosure',
        withVerifiers: {
          title: 'With Verifiers',
          content:
            'Your code submissions and technical materials are shared only with qualified verifiers assigned to assess your skills. Verifiers are bound by confidentiality agreements.',
        },
        withEmployers: {
          title: 'With Employers',
          content:
            'Your public profile and verified skills are visible to potential employers. You control what information is publicly displayed through your privacy settings.',
        },
        legalRequirements: {
          title: 'Legal Requirements',
          content:
            'We may disclose your information if required by law, court order, or to protect our rights, property, or safety.',
        },
      },
      dataSecurity: {
        title: 'Data Security',
        content: [
          'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
          'End-to-end encryption for sensitive data transmission',
          'Secure data storage with regular security audits',
          'Access controls and authentication mechanisms',
          'Regular security training for our team members',
          'However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.',
        ],
      },
      yourRights: {
        title: 'Your Rights and Choices',
        content: [
          'You have the following rights regarding your personal information:',
          'Access: Request a copy of the personal information we hold about you',
          'Correction: Request correction of inaccurate or incomplete information',
          'Deletion: Request deletion of your personal information (subject to legal requirements)',
          'Portability: Request transfer of your data to another service provider',
          'Restriction: Request limitation of how we process your information',
          'Objection: Object to certain types of processing',
          'To exercise these rights, please contact us at privacy@skillverdict.com. We will respond to your request within 30 days.',
        ],
      },
      dataRetention: {
        title: 'Data Retention',
        content: [
          'We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Specific retention periods include:',
          'Account information: Until account deletion or 7 years after last activity',
          'Verification records: Permanently (to maintain credential integrity)',
          'Code submissions: 3 years after verification completion',
          'Communication records: 3 years for support purposes',
        ],
      },
      internationalTransfers: {
        title: 'International Data Transfers',
        content: [
          'SkillVerdict operates globally, and your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:',
          'Standard contractual clauses approved by relevant authorities',
          'Adequacy decisions for transfers to certain countries',
          'Certification schemes and codes of conduct',
        ],
      },
      childrensPrivacy: {
        title: "Children's Privacy",
        content:
          'SkillVerdict is not intended for use by children under 16 years of age. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information.',
      },
      changesToPolicy: {
        title: 'Changes to This Privacy Policy',
        content: [
          'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
          'For significant changes, we will provide additional notice (such as email notification) at least 30 days before the changes take effect.',
        ],
      },
      contact: {
        title: 'Contact Us',
        content:
          'If you have any questions about this Privacy Policy or our privacy practices, please contact us:',
        email: 'privacy@skillverdict.com',
        address: 'SkillVerdict Privacy Team',
        responseTime: 'We aim to respond within 48 hours',
      },
    },
  },
} as const

// ============================================================================
// ERROR PAGES CONTENT
// ============================================================================

export const errorPages = {
  notFound: {
    title: 'Page Not Found | SkillVerdict',
    errorCode: '404',
    heading: 'Page Not Found',
    description:
      "The page you're looking for doesn't exist or has been moved. Let's get you back on track to verify your skills.",
    actions: {
      backToHome: 'Back to Homepage',
      howItWorks: 'How It Works',
      goBack: 'Go Back',
    },
    helpfulLinks: {
      title: 'Looking for something specific?',
      cvPreview: 'View CV2.0 Preview',
      faq: 'Frequently Asked Questions',
      privacyPolicy: 'Privacy Policy',
    },
  },
} as const

// ============================================================================
// LAYOUT & ACCESSIBILITY
// ============================================================================

export const layout = {
  accessibility: {
    skipToMain: 'Skip to main content',
  },
} as const

// ============================================================================
// CV PREVIEW SAMPLE DATA
// ============================================================================

export const cvSampleData = {
  profile: {
    name: 'Alex Johnson',
    title: 'Senior Full Stack Developer',
    bio: 'Full stack developer with 8+ years of experience building scalable web applications. Passionate about clean code and innovative solutions.',
  },
  sections: {
    profile: 'Profile',
    technicalSkills: 'Technical Skills',
    education: 'Education',
    experience: 'Experience',
    projects: 'Projects',
    certifications: 'Certifications',
    languages: 'Languages',
  },
  skills: [
    {
      name: 'JavaScript',
      verified: true,
      verifier: 'Sarah Chen - Senior Developer at Google',
    },
    {
      name: 'React',
      verified: true,
      verifier: 'Michael Rodriguez - Engineering Lead at Meta',
    },
    { name: 'Node.js', verified: false },
    {
      name: 'Python',
      verified: true,
      verifier: 'James Wilson - Principal Engineer at Netflix',
    },
    {
      name: 'AWS',
      verified: true,
      verifier: 'Emily Zhang - Cloud Architect at Amazon',
    },
    { name: 'Docker', verified: false },
  ],
  education: [
    {
      degree: 'MSc Computer Science',
      institution: 'Stanford University',
      year: '2016',
      verified: false,
    },
    {
      degree: 'BSc Software Engineering',
      institution: 'UC Berkeley',
      year: '2014',
      verified: true,
    },
  ],
  experience: [
    {
      title: 'Senior Developer',
      company: 'TechInnovate Inc.',
      period: '2020 - Present',
      description:
        'Lead development of customer-facing web applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.',
      verified: false,
    },
    {
      title: 'Full Stack Developer',
      company: 'WebSolutions LLC',
      period: '2017 - 2020',
      description:
        'Developed and maintained multiple web applications for clients across various industries. Implemented responsive designs and optimized performance.',
      verified: true,
    },
    {
      title: 'Junior Developer',
      company: 'DigitalCreations',
      period: '2015 - 2017',
      description:
        'Assisted in development of front-end interfaces and backend APIs. Participated in code reviews and agile development processes.',
      verified: false,
    },
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description:
        'Full-stack React/Node.js application with payment integration',
      verified: true,
      verifier: 'Lisa Chen - Product Manager at Shopify',
    },
    {
      name: 'Task Management App',
      description: 'React Native mobile app with real-time synchronization',
      verified: false,
    },
    {
      name: 'Data Analytics Dashboard',
      description: 'Python/Django dashboard with interactive visualizations',
      verified: true,
      verifier: 'Mark Thompson - Data Engineer at Airbnb',
    },
  ],
  certifications: [
    {
      name: 'AWS Certified',
      verifier: 'David Kim - Solutions Architect at Amazon',
    },
    {
      name: 'React Expert',
      verifier: 'Lisa Johnson - Frontend Lead at Meta',
    },
    {
      name: 'Node.js Master',
      verifier: 'Robert Williams - Backend Engineer at Netflix',
    },
  ],
  languages: [
    {
      name: 'English',
      level: 'C2',
      verified: true,
      verifier: 'Sarah Mitchell - Language Specialist at Cambridge Assessment',
    },
    {
      name: 'Spanish',
      level: 'B2',
      verified: 'pending',
    },
    {
      name: 'French',
      level: 'A2',
      verified: 'pending',
    },
  ],
  qrSection: {
    scanText: 'Scan to view my verified skills',
    viewHistoryLink: 'View full verification history',
  },
  statusLabels: {
    verified: '✓ Verified',
    pending: '⏱ Pending',
    unverified: '⏱ Unverified',
  },
} as const

// ============================================================================
// COMMON UI ELEMENTS
// ============================================================================

export const common = {
  // Loading states
  loading: 'Loading...',

  // Error states
  error: {
    generic: 'Something went wrong. Please try again.',
    network: 'Network error. Please check your connection.',
    validation: 'Please check your input and try again.',
  },

  // Success states
  success: {
    saved: 'Changes saved successfully!',
    submitted: 'Form submitted successfully!',
  },

  // Accessibility
  accessibility: {
    close: 'Close',
    open: 'Open',
    expand: 'Expand',
    collapse: 'Collapse',
    next: 'Next',
    previous: 'Previous',
    menu: 'Menu',
    search: 'Search',
    submit: 'Submit',
    cancel: 'Cancel',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
  },
} as const

// ============================================================================
// EXPORT ALL STRINGS
// ============================================================================

export const strings = {
  branding,
  navigation,
  hero,
  howItWorks,
  cvPreview,
  companyDiscovery,
  process,
  faq,
  signupModal,
  floatingSignupButton,
  footer,
  legalPages,
  errorPages,
  common,
  layout,
  cvSampleData,
} as const

// Type exports for TypeScript support
export type Strings = typeof strings
export type Branding = typeof branding
export type Navigation = typeof navigation
export type Hero = typeof hero
export type HowItWorks = typeof howItWorks
export type CvPreview = typeof cvPreview
export type CompanyDiscovery = typeof companyDiscovery
export type Process = typeof process
export type FAQ = typeof faq
export type SignupModal = typeof signupModal
export type FloatingSignupButton = typeof floatingSignupButton
export type Footer = typeof footer
export type LegalPages = typeof legalPages
export type ErrorPages = typeof errorPages
export type Common = typeof common
export type Layout = typeof layout
export type CvSampleData = typeof cvSampleData
