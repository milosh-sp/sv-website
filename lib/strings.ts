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
 * - Icons are embedded directly in content objects as Lucide React components
 */

// ============================================================================
// TYPE IMPORTS
// ============================================================================

import type { WaitlistStepConfig } from '@/types/WaitlistStep.types'

// ============================================================================
// LUCIDE REACT ICON IMPORTS
// ============================================================================

import {
  ArrowLeft,
  Brain,
  Building2,
  Calendar,
  CheckCircle,
  ClipboardList,
  Clock,
  Database,
  DollarSign,
  FastForward,
  FileText,
  FolderOpen,
  Globe,
  Home,
  IdCard,
  Mail,
  Medal,
  MessageCircle,
  Network,
  QrCode,
  Rocket,
  Search,
  Send,
  Shield,
  TrendingUp,
  User,
  UserCheck,
  Video,
} from 'lucide-react'

// ============================================================================
// SITE BRANDING & IDENTITY
// ============================================================================

export const branding = {
  // Company name and tagline
  companyName: `Skill Verdict`,
  tagline: `Don't chase, attract!`,

  // Logo and visual elements
  logo: {
    alt: `Skill Verdict Logo`,
    ariaLabel: `Go to homepage`,
  },

  // Copyright and legal
  copyright: `© 2025 Skill Verdict. All rights reserved.`,
} as const

// ============================================================================
// NAVIGATION & HEADER
// ============================================================================

export const navigation = {
  // Main navigation items
  menu: {
    home: `Home`,
    benefits: `Benefits`,
    cvPreview: `CV2.0 Preview`,
    companies: `Companies`,
    howToJoin: `How it works`,
    faqs: `FAQs`,
  },

  // Mobile menu specific items
  mobile: {
    cvPreview: `CV2.0 Preview`,
    forCompanies: `For Companies`,
    process: `Process`,
    faq: `FAQ`,
  },

  // Menu accessibility labels
  accessibility: {
    openMenu: `Open menu`,
    closeMenu: `Close menu`,
    goToHomepage: `Go to homepage`,
    goToBenefits: `Go to benefits section`,
    goToCvPreview: `Go to CV2.0 preview section`,
    goToCompanyDiscovery: `Go to company discovery section`,
    goToProcess: `Go to process section`,
    goToFaq: `Go to FAQ section`,
    scrollToHero: `Scroll to hero section to join the community`,
  },
} as const

// ============================================================================
// HERO SECTION
// ============================================================================

export const hero = {
  // Main hero content
  mainHeading: `Don't chase your next role, attract it with your`,
  /**
   * Will be placed next to the main heading to the right side, with a gradient applied
   */
  mainHeadingHighlight: ` CV2.0!`,
  subHeading: `Skill Verdict is a decentralized, unbiased and respected community where
    global tech professionals from leading companies verify your skills. Replace
    empty resume claims with proven endorsements, build your CV2.0 and get hired
    faster, or earn income by selling your own credibility as a tech
    professional`,
  callToAction: `Choose your path to get started:`,

  // Action buttons
  buttons: {
    verifySkills: `Verify my skills`,
    earnByVerifying: `Earn by verifying`,
  },

  // Trust indicators with embedded icons
  trustIndicators: [
    {
      text: `100% Secure & transparent`,
      icon: Shield,
    },
    {
      text: `No time commitment`,
      icon: Clock,
    },
    {
      text: `Verified by world's top talent`,
      icon: UserCheck,
    },
  ],

  // Accessibility labels
  accessibility: {
    heroSection: `Hero section`,
    openSignupModal: `Open signup modal to verify your skills`,
    openEarnModal: `Open signup modal to earn by verifying skills`,
  },
} as const

// ============================================================================
// BENEFITS SECTION
// ============================================================================

export const benefits = {
  // Section header
  heading: `Twitter Community Notes, but for your`,
  headingHighlight: `skills`,
  description: `Inspired by models like Twitter's Community Notes, Skill Verdict brings
    transparent, community-driven verification to member's skills. It's unbiased
    assessment, powered by the community.`,

  // Tab labels
  tabs: {
    members: `Members`,
    guruMembers: `Guru members`,
  },

  // Tab accessibility
  tabAccessibility: {
    chooseUserType: `Choose user type`,
    membersTab: `Members tab`,
    guruMembersTab: `Guru member`,
  },

  // Members section
  members: {
    iconAriaLabel: `Award icon for members`,
    description: `Get your skills verified by global industry experts and boost your
      career with a next-generation CV2.0.`,
    benefits: [
      {
        title: `Verified skill badges`,
        description: `Stand out with verified skill badges on your profile`,
        icon: Medal,
      },
      {
        title: `Possibly skip lengthy interviews`,
        description: `Chance to reduce multi-step interviews or skip fully because your
          skills are already verified by world's top talent`,
        icon: FastForward,
      },
      {
        title: `Increase Hiring Chances`,
        description: `Don't just say you're good—prove it. Verified skills from top
          professionals make employers notice`,
        icon: Rocket,
      },
      {
        title: `Customizable digital CV2.0`,
        description: `Share your verified skills instantly. Export a digital CV2.0 with a
          trusted QR code or send a live link to anyone.`,
        icon: QrCode,
      },
    ],
  },

  // Guru membersection
  guruMembers: {
    iconAriaLabel: `Dollar sign icon for tech professionals`,
    description: `Top talent is valued in the Skill Verdict community. Monetize your
      expertise by verifying the skills of other members.`,
    benefits: [
      {
        title: `Earn extra income`,
        description: `Get paid for reviewing code and conducting technical interviews`,
        icon: DollarSign,
      },
      {
        title: `Flexible schedule`,
        description: `Work on your own time from anywhere - no contracts or minimum hours`,
        icon: Calendar,
      },
      {
        title: `Build your reputation`,
        description: `Establish yourself as an industry expert in the community`,
        icon: TrendingUp,
      },
      {
        title: `Expand your network`,
        description: `Connect with talented tech professionals`,
        icon: Network,
      },
    ],
  },

  // Section accessibility
  accessibility: {
    benefitsSection: `How Skill Verdict works for different users`,
    membersPanel: `Members panel`,
    guruMembersPanel: `Guru memberpanel`,
  },
} as const

// ============================================================================
// CV PREVIEW SECTION
// ============================================================================

export const cvPreview = {
  // Section header
  heading: `Your CV2.0 - The only CV that grows with you`,
  description: `See what makes your CV2.0 different from traditional resumes.
  Our flexible CV2.0 platform lets you showcase your verified skills in a
  format that best represents your expertise and achievements.
  Your CV2.0 updates automatically if you update you linkedin or github, or
  yourself.`,
  note: `Note: This is a simplified demo version, our CV2.0 platform is heavily
  in development and is going to be much more advanced and customizable with
  your feedback.`,

  // CV features
  features: [
    {
      title: `QR Code live links`,
      description: `Anyone can access your CV2.0 by scanning your unique QR code`,
      icon: QrCode,
    },
    {
      title: `Skill Badges`,
      description: `Visual badges show exactly which skills have been verified by the
        community`,
      icon: Shield,
    },
    {
      title: `Optimized metadata`,
      description: `Your live CV2.0 page and exported PDF file contain optimized metadata`,
      icon: Database,
    },
    {
      title: `Your personal business card`,
      description: `Your CV2.0 can be added to your Apple or Google wallet to be used as
        your personal business card`,
      icon: IdCard,
    },
  ],
} as const

// ============================================================================
// COMPANY DISCOVERY SECTION
// ============================================================================

export const companyDiscovery = {
  // Section content
  icon: Building2,
  iconAriaLabel: `Building icon for company discovery`,
  heading: `Your CV2.0 attracts companies!`,
  description: `With passive discovery, companies on Skill Verdict discover and contact
    you directly with opportunities that match your verified skills.`,

  // Benefits list
  benefits: [
    {
      text: `Passive discovery`,
      icon: CheckCircle,
    },
    {
      text: `Direct company contact`,
      icon: CheckCircle,
    },
    {
      text: `No applications needed`,
      icon: CheckCircle,
    },
  ],

  // Section accessibility
  accessibility: {
    companyDiscoverySection: `How companies discover and contact verified talent`,
  },
} as const

// ============================================================================
// PROCESS SECTION
// ============================================================================

export const process = {
  // Section header
  heading: `How Skill Verdict Works`,
  description: {
    members: `As a Member, your skills can be evaluated by a Guru using their own preferred technique. 
    This means each review is shaped by the Guru’s personal expertise and unique approach, giving you a more authentic and practical assessment of your abilities. 
    It’s an opportunity to learn from real experience, not just a standardized test. 
    You can verify as many skills as you want, and you can always add new skills to your profile.`,
    guruMembers: `As a Guru, you have the freedom to evaluate a Member’s skills using your own preferred technique. 
      This allows you to leverage your personal expertise and unique approach, ensuring a more authentic and practical skill review.`,
  },

  // Tab labels
  tabs: {
    members: `Members`,
    guruMembers: `Tech professionals`,
  },

  // Process steps for members
  memberSteps: [
    {
      title: `1. Create your profile`,
      description: `Connect your github profile and linkedin, and modify your new CV2.0 to
        your perfection`,
      icon: FileText,
    },
    {
      title: `2. Prepare for verification`,
      description: `Choose the skills you want to verify and pick your guru member to
        verify your skills`,
      icon: Brain,
    },
    {
      title: `3. Verification process`,
      description: `The guru member sends you an assignment for you to complete and then
        your solution is discussed with them`,
      icon: Video,
    },
    {
      title: `4. Final verdict`,
      description: `If you pass the technical discussion, you will receive your verified
        skill badge and get a chance to rate the guru member`,
      icon: CheckCircle,
    },
  ],

  // Process steps for tech professionals
  guruMembersteps: [
    {
      title: `1. Create your profile`,
      description: `Connect your github profile and linkedin, and modify your new CV2.0 to
        your perfection`,
      icon: ClipboardList,
    },
    {
      title: `2. Guru interview`,
      description: `You will be interviewed by other gurus to determine if you are a fit to
        become a guru member`,
      icon: Video,
    },
    {
      title: `3. Start verifying`,
      description: `Access our AI-assisted dashboard to easily review member candidate
        submissions`,
      icon: MessageCircle,
    },
    {
      title: `4. Earn`,
      description: `Earn income by selling your credibility. Grow your expertise by
        learning from candidate feedback.`,
      icon: DollarSign,
    },
  ],
} as const

// ============================================================================
// FAQ SECTION
// ============================================================================

export const faq = {
  membersHeading: `Frequently asked questions for Members`,
  verifiersHeading: `Frequently asked questions for Guru members`,

  // Members FAQ
  members: [
    {
      question: `How does the verification process work?`,
      answer: `Our verification process involves a multi-step evaluation where your
        skills are assessed by experienced guru member in the field. Our guru
        member come from different backgrounds and companies like Google,
        Netflix, Airbnb, Amazon, Meta and many more. Once verified, your skills
        are permanently recorded and can be easily validated by employers
        through QR codes or direct links.`,
    },
    {
      question: `How long does it take to get a skill or skills verified?`,
      answer: `The verification process typically takes 1-3 business days, depending
        on the complexity of the skills being assessed and the availability of
        our verifiers.`,
    },
    {
      question: `Can I update my skills after verification?`,
      answer: `Yes, you can always add new skills or request re-verification of
        existing skills as you continue to develop your expertise. The platform
        is designed to grow with your career.`,
    },
    {
      question: `I am not happy with my verification outcome, what can I do?`,
      answer: `You can always submit a complaint if you think you have not been
        treated fairly. We will investigate your complaint, if your claim turns
        out to be true, we will assign a new guru member to your case.`,
    },
    {
      question: `Can I become a guru member and earn?`,
      answer: `Of course you can, after you have verified the skills you want to
        verify other members skills with, you can apply and go through the
        become a guru member process.`,
    },
    {
      question: `Is my data and code safe? Who can see my verification results?`,
      answer: `Your privacy is paramount. Your specific code and assignment solutions
        are only visible to the verifiers assigned to you. Your public profile
        and CV2.0 will only show the skills you choose to make public and their
        verification status. You have full control over your visibility
        settings.`,
    },
  ],

  // Verifiers FAQ
  verifiers: [
    {
      question: `How much can I earn as a guru member?`,
      answer: `Earnings are based on a share of the verification fee for each
        assessment you complete. The more complex the skill, the higher the fee
        and your potential earnings. We provide a clear breakdown of potential
        earnings in your verifier dashboard.`,
    },
    {
      question: `What's the time commitment for being a guru member?`,
      answer: `There is no minimum time commitment. You can choose to take on as many
        or as few verification tasks as your schedule allows. The platform is
        designed for flexibility.`,
    },
    {
      question: `How does the "AI-assisted dashboard" help me?`,
      answer: `Our dashboard helps you streamline the review process. It can help with
        initial code analysis, flagging common patterns, managing your queue of
        assignments, and generating structured feedback templates, allowing you
        to focus on the high-level assessment.`,
    },
    {
      question: `What happens if a candidate disputes my assessment?`,
      answer: `Our admin team will review the dispute neutrally. If your feedback is
        found to be constructive, professional, and accurate, your rating and
        standing will be unaffected. This system protects verifiers from
        frivolous disputes while ensuring fairness for members.`,
    },
  ],
} as const

// ============================================================================
// FLOATING SIGNUP BUTTON
// ============================================================================

export const floatingSignupButton = {
  text: `Sign Up`,
  ariaLabel: `Scroll to hero section to sign up`,
  iconAriaLabel: `User plus icon with sparkles`,
} as const

// ============================================================================
// FOOTER
// ============================================================================

export const footer = {
  // Links
  links: {
    privacyPolicy: `Privacy Policy`,
    contactUs: `Contact Us`,
  },
  contactUs: `Contact us`,
  email: `contact@skillverdict.com`,
  // Social media
  social: {
    twitter: `Twitter profile`,
    linkedin: `LinkedIn profile`,
    github: `GitHub profile`,
  },
} as const

// ============================================================================
// CONTACT PAGE
// ============================================================================

export const contactPage = {
  // Page header
  title: `Contact Us`,
  heading: `Get in Touch`,
  description: `Have a question or want to learn more about Skill Verdict? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.`,

  // Form fields
  form: {
    email: {
      label: `Email address`,
      placeholder: `your.email@example.com *`,
      ariaLabel: `Email address field`,
      icon: Mail,
    },
    name: {
      label: `Name (Company or Individual)`,
      placeholder: `Your name or company name *`,
      ariaLabel: `Name field`,
      icon: User,
    },
    message: {
      label: `Message`,
      placeholder: `Tell us how we can help you... *`,
      ariaLabel: `Message field`,
      icon: MessageCircle,
    },
    website: {
      label: `Website (leave this field empty)`,
      placeholder: `Your website`,
      ariaLabel: `Website field (honeypot)`,
    },
  },

  // Submit button
  submitButton: {
    idle: `Send Message`,
    submitting: `Sending...`,
    ariaLabel: {
      idle: `Submit contact form`,
      submitting: `Submitting form`,
    },
    icon: Send,
  },

  // Status messages
  status: {
    success: {
      title: `Message Sent!`,
      message: `Thank you for contacting us. We'll get back to you within 24-48 hours.`,
      icon: `✓`,
    },
    error: {
      title: `Error`,
      message: `Something went wrong. Please try again or email us directly at contact@skillverdict.com.`,
      icon: `✕`,
    },
  },

  // Validation messages
  validation: {
    emailRequired: `Email is required`,
    emailInvalid: `Please enter a valid email address`,
    nameRequired: `Name is required`,
    nameMinLength: `Name must be at least 2 characters`,
    nameMaxLength: `Name must be less than 100 characters`,
    messageRequired: `Message is required`,
    messageMinLength: `Message must be at least 10 characters`,
    messageMaxLength: `Message must be less than 1000 characters`,
  },

  // Accessibility
  accessibility: {
    contactForm: `Contact form`,
    emailError: `Email validation error`,
    nameError: `Name validation error`,
    messageError: `Message validation error`,
  },

  // Alternative contact methods
  alternativeContact: {
    heading: `Other Ways to Reach Us`,
    email: {
      label: `Email`,
      value: `contact@skillverdict.com`,
      ariaLabel: `Send us an email`,
    },
  },
} as const

// ============================================================================
// LEGAL PAGES CONTENT
// ============================================================================

export const legalPages = {
  // Privacy Policy
  privacyPolicy: {
    title: `Privacy Policy`,
    description: `Your privacy is fundamental to our mission. Learn how we protect and handle your data.`,
    lastUpdated: `10-Nov-2025`,
    effectiveDate: `10-Nov-2025`,
    sections: {
      introduction: {
        title: `Introduction`,
        content: [
          `This Privacy Policy describes the policies of Skill Verdict, Dover, Delaware 19901, United States of America, email: contact@skillverdict.com, phone: +1123423523 on the collection, use and disclosure of your information that we collect when you use our website (https://skillverdict.com). (the "Service"). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service.`,
          `We may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page.`,
        ],
      },
      informationWeCollect: {
        title: `Information We Collect`,
        content: [
          `We will collect and process the following personal information about you:`,
        ],
        items: [
          `Email`,
          `Social Media Profile`,
          `Employment status`,
          `IP address`,
          `Country`,
        ],
      },
      howWeUse: {
        title: `How We Use Your Information`,
        content: [
          `We will use the information that we collect about you for the following purposes:`,
          `Marketing/Promotional`,
          `Creating user account`,
          `Customer feedback collection`,
          `If we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which grant consent unless we are required to do otherwise by law.`,
        ],
      },
      informationSharing: {
        title: `How We Share Your Information`,
        content: [
          `We will not transfer your personal information to any third party without seeking your consent, except in limited circumstances as described below:`,
          `Analytics`,
          `We require such third party's to use the personal information we transfer to them only for the purpose for which it was transferred and not to retain it for longer than is required for fulfilling the said purpose.`,
          `We may also disclose your personal information for the following: (1) to comply with applicable law, regulation, court order or other legal process; (2) to enforce your agreements with us, including this Privacy Policy; or (3) to respond to claims that your use of the Service violates any third-party rights. If the Service or our company is merged or acquired with another company, your information will be one of the assets that is transferred to the new owner.`,
        ],
      },
      dataRetention: {
        title: `Retention Of Your Information`,
        content: [
          `We will retain your personal information with us for Anonymous data is stored forever or for as long as we need it to fulfill the purposes for which it was collected as detailed in this Privacy Policy. We may need to retain certain information for longer periods such as record-keeping / reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc. Residual anonymous information and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely.`,
        ],
      },
      yourRights: {
        title: `Your Rights`,
        content: [
          `Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at contact@skillverdict.com. We will respond to your request in accordance with applicable law.`,
          `You may opt-out of direct marketing communications or the profiling we carry out for marketing purposes by writing to us at contact@skillverdict.com.`,
          `Do note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought.`,
        ],
      },
      cookies: {
        title: `Cookies Etc.`,
        content: [
          `To learn more about how we use these and your choices in relation to these tracking technologies, please refer to our Cookie Policy.`,
        ],
      },
      dataSecurity: {
        title: `Security`,
        content: [
          `The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.`,
        ],
      },
      grievanceOfficer: {
        title: `Grievance / Data Protection Officer`,
        content: [
          `If you have any queries or concerns about the processing of your information that is available with us, you may email our Grievance Officer at Skill Verdict, Dover, email: contact@skillverdict.com. We will address your concerns in accordance with applicable law.`,
        ],
      },
    },
    contact: {
      email: `contact@skillverdict.com`,
      phone: `+1123423523`,
      address: `Skill Verdict, Dover, Delaware 19901, United States of America`,
    },
  },
} as const

// ============================================================================
// ERROR PAGES CONTENT
// ============================================================================

export const errorPages = {
  notFound: {
    title: `Page Not Found | Skill Verdict`,
    errorCode: `404`,
    heading: `Page Not Found`,
    description: `The page you're looking for doesn't exist or has been moved. Let's get
      you back on track to verify your skills.`,
    actions: {
      backToHome: {
        label: `Back to Homepage`,
        icon: Home,
      },
      benefits: {
        label: `How It Works`,
        icon: Search,
      },
      goBack: {
        label: `Go Back`,
        icon: ArrowLeft,
      },
    },
    helpfulLinks: {
      title: `Looking for something specific?`,
      cvPreview: `View CV2.0 Preview`,
      faq: `Frequently Asked Questions`,
      privacyPolicy: `Privacy Policy`,
    },
  },
} as const

// ============================================================================
// LAYOUT & ACCESSIBILITY
// ============================================================================

export const layout = {
  accessibility: {
    skipToMain: `Skip to main content`,
  },
} as const

// ============================================================================
// CV PREVIEW SAMPLE DATA
// ============================================================================

export const cvSampleData = {
  profile: {
    name: `Alex Smith`,
    title: `Senior Full Stack Developer`,
    bio: `Full stack developer with 8+ years of experience building scalable web
    applications. Passionate about clean code and innovative solutions.`,
  },
  sections: {
    profile: `Profile`,
    technicalSkills: `Technical Skills`,
    education: `Education`,
    experience: `Experience`,
    projects: `Projects`,
    certifications: `Certifications`,
    languages: `Languages`,
  },
  skills: [
    {
      name: `JavaScript`,
      verified: `verified`,
      verifier: `Sarah Chen - Senior Developer at Google`,
    },
    {
      name: `React`,
      verified: `verified`,
      verifier: `Michael Rodriguez - Engineering Lead at Meta`,
    },
    { name: `Node.js`, verified: `pending` },
    {
      name: `Python`,
      verified: `verified`,
      verifier: `James Wilson - Principal Engineer at Netflix`,
    },
    {
      name: `AWS`,
      verified: `verified`,
      verifier: `Emily Zhang - Cloud Architect at Amazon`,
    },
    { name: `Docker`, verified: `unverified` },
  ],
  education: [
    {
      name: `MSc Computer Science`,
      degree: `MSc Computer Science`,
      institution: `Stanford University`,
      year: `2016`,
      verified: `unverified`,
    },
    {
      name: `BSc Software Engineering`,
      degree: `BSc Software Engineering`,
      institution: `UC Berkeley`,
      year: `2014`,
      verified: `verified`,
      verifier: `John Doe - Professor at UC Berkeley`,
    },
  ],
  experience: [
    {
      title: `Senior Developer`,
      company: `TechInnovate Inc.`,
      period: `2020 - Present`,
      description: `Lead development of customer-facing web applications using React and
        Node.js. Mentored junior developers and implemented CI/CD pipelines.`,
      verified: `unverified`,
    },
    {
      title: `Full Stack Developer`,
      company: `WebSolutions LLC`,
      period: `2017 - 2020`,
      description: `Developed and maintained multiple web applications for clients across
        various industries. Implemented responsive designs and optimized
        performance.`,
      verified: `verified`,
      verifier: `Jane Smith - CTO at WebSolutions LLC`,
    },
    {
      title: `Junior Developer`,
      company: `DigitalCreations`,
      period: `2015 - 2017`,
      description: `Assisted in development of front-end interfaces and backend APIs.
        Participated in code reviews and agile development processes.`,
      verified: `unverified`,
    },
  ],
  projects: [
    {
      name: `E-commerce Platform`,
      description: `Full-stack React/Node.js application with payment integration`,
      verified: `verified`,
      verifier: `Lisa Chen - Product Manager at Shopify`,
      icon: FolderOpen,
    },
    {
      name: `Task Management App`,
      description: `React Native mobile app with real-time synchronization`,
      verified: `unverified`,
      icon: FolderOpen,
    },
    {
      name: `Data Analytics Dashboard`,
      description: `Python/Django dashboard with interactive visualizations`,
      verified: `verified`,
      verifier: `Mark Thompson - Data Engineer at Airbnb`,
      icon: FolderOpen,
    },
  ],
  certifications: [
    {
      name: `AWS Certified`,
      verifier: `David Kim - Solutions Architect at Amazon`,
    },
    {
      name: `React Expert`,
      verifier: `Lisa Johnson - Frontend Lead at Meta`,
    },
    {
      name: `Node.js Master`,
      verifier: `Robert Williams - Backend Engineer at Netflix`,
    },
  ],
  languages: [
    {
      name: `English`,
      level: `C2`,
      verified: `verified`,
      verifier: `Sarah Mitchell - Language Specialist at Cambridge Assessment`,
      icon: Globe,
    },
    {
      name: `Spanish`,
      level: `B2`,
      verified: `pending`,
      icon: Globe,
    },
    {
      name: `French`,
      level: `A2`,
      verified: `pending`,
      icon: Globe,
    },
  ],
  qrSection: {
    scanText: `Scan to view my verified skills`,
    viewHistoryLink: `View full verification history`,
  },
  statusLabels: {
    verified: `✓ Verified`,
    pending: `⏱ Pending`,
    unverified: `⏱ Unverified`,
  },
} as const

// ============================================================================
// API & FORM SUBMISSION RESPONSES
// ============================================================================

export const apiResponses = {
  // Success messages
  success: {
    subscribed: `Successfully subscribed!`,
    messageSent: `Message sent successfully!`,
  },

  // Error messages
  errors: {
    // Client errors (400)
    methodNotAllowed: `Method not allowed. Only POST requests are accepted.`,
    missingBody: `Request body is required.`,
    invalidJson: `Invalid JSON in request body.`,
    botDetected: `Invalid submission detected.`,
    formSessionExpired: `Form session expired. Please refresh and try again.`,
    validationError: `Validation error occurred.`,

    // Conflict errors (409)
    emailAlreadySubscribed: `This email is already subscribed.`,

    // Server errors (500)
    serverConfigError: `Server configuration error. Please try again later.`,
    subscriptionFailed: `Failed to subscribe. Please try again later.`,
    unexpectedError: `An unexpected error occurred. Please try again later.`,
  },
} as const

// ============================================================================
// COMMON UI ELEMENTS
// ============================================================================

export const common = {
  // Loading states
  loading: `Loading...`,

  // Error states
  error: {
    generic: `Something went wrong. Please try again.`,
    network: `Network error. Please check your connection.`,
    validation: `Please check your input and try again.`,
  },

  // Success states
  success: {
    saved: `Changes saved successfully!`,
    submitted: `Form submitted successfully!`,
  },

  // Accessibility
  accessibility: {
    close: `Close`,
    open: `Open`,
    expand: `Expand`,
    collapse: `Collapse`,
    next: `Next`,
    previous: `Previous`,
    menu: `Menu`,
    search: `Search`,
    submit: `Submit`,
    cancel: `Cancel`,
    save: `Save`,
    edit: `Edit`,
    delete: `Delete`,
    required: `Required field`,
    checkbox: `Checkbox`,
    checked: `Checked`,
    unchecked: `Unchecked`,
    indeterminate: `Partially selected`,
  },
} as const

// ============================================================================
// CHECKBOX COMPONENT
// ============================================================================

export const checkbox = {
  // Accessibility labels
  accessibility: {
    defaultLabel: `Checkbox`,
    requiredIndicator: `Required field`,
    checkedState: `Checked`,
    uncheckedState: `Unchecked`,
    indeterminateState: `Partially selected`,
  },

  // Validation messages
  validation: {
    required: `This field is required`,
  },
} as const

// ============================================================================
// RADIO BUTTON COMPONENT
// ============================================================================

export const radioButton = {
  // Accessibility labels
  accessibility: {
    defaultLabel: `Radio button`,
    requiredIndicator: `Required field`,
    selectedState: `Selected`,
    unselectedState: `Not selected`,
  },

  // Validation messages
  validation: {
    required: `This field is required`,
  },
} as const

// ============================================================================
// WAITLIST FORMS
// ============================================================================

export const waitlistForms = {
  // Page headers for waitlist forms
  pageHeaders: {
    candidate: {
      title: `Join Our Candidate Waitlist`,
      description: `Get your skills verified and discover opportunities`,
    },
    verifier: {
      title: `Become a Skill Verifier`,
      description: `Help verify skills and build trust in our community`,
    },
    'hiring-manager': {
      title: `Find Verified Talent`,
      description: `Access our network of verified professionals`,
    },
  },

  // Success screen messages
  successScreen: {
    candidate: {
      title: `Welcome to the Waitlist!`,
      description: `Thank you for joining our candidate waitlist. We'll review your profile and get back to you soon with next steps.`,
      checkEmailMessage: `Check your email for confirmation and next steps.`,
      backToHomepage: `Back to Homepage`,
    },
    verifier: {
      title: `Welcome to the Verifier Program!`,
      description: `Thank you for your interest in becoming a verifier. We'll review your qualifications and contact you shortly.`,
      checkEmailMessage: `Check your email for confirmation and next steps.`,
      backToHomepage: `Back to Homepage`,
    },
    'hiring-manager': {
      title: `Welcome to Our Hiring Platform!`,
      description: `Thank you for joining our hiring manager waitlist. We'll be in touch soon with information about verified talent.`,
      checkEmailMessage: `Check your email for confirmation and next steps.`,
      backToHomepage: `Back to Homepage`,
    },
  },

  // Form field labels and placeholders
  fields: {
    email: {
      label: `Email Address`,
      placeholder: `your@email.com`,
      ariaLabel: `Email address field`,
    },
    technicalSkills: {
      label: `What technical skills do you have?`,
    },
    linkedIn: {
      label: `LinkedIn Profile URL`,
      placeholder: `https://linkedin.com/in/yourprofile`,
      ariaLabel: `LinkedIn profile URL field`,
    },
    github: {
      label: `GitHub/GitLab Profile URL`,
      placeholder: `https://github.com/yourprofile (optional)`,
      ariaLabel: `GitHub/GitLab profile URL field`,
    },
    website: {
      label: `Website`,
      placeholder: `https://example.com`,
      ariaLabel: `Website field (honeypot)`,
    },
    techCommunityDetails: {
      label: `Tech Community Details`,
      placeholder: `e.g., Python Developers Group, React Community`,
      ariaLabel: `Tech community details field`,
    },
    skillAreas: {
      label: `What are your primary skill areas?`,
    },
    jobSearchChallengeOther: {
      label: `Other challenge`,
      placeholder: `Please specify your challenge`,
      ariaLabel: `Other job search challenge field`,
    },
    valuableOutcomeOther: {
      label: `Other outcome`,
      placeholder: `Please specify the outcome`,
      ariaLabel: `Other valuable outcome field`,
    },
    verifierMotivationOther: {
      label: `Other motivation`,
      placeholder: `Please specify your motivation`,
      ariaLabel: `Other verifier motivation field`,
    },
    professionalFrustrationOther: {
      label: `Other frustration`,
      placeholder: `Please specify your frustration`,
      ariaLabel: `Other professional frustration field`,
    },
  },

  // Form labels and questions
  labels: {
    privacyConsent: `I agree to the Privacy Policy`,
    newsletterOptIn: `Subscribe to our newsletter`,
    professionalStatus: `What is your current professional status?`,
    techCommunityMembership: `Are you already a member of a tech community?`,
    skillValidationConfidence: `How much do you agree with the following statement: "I would feel more confident in my job search if my skills were validated anonymously by senior engineers"`,
    jobSearchChallenges: `What is the biggest challenge you face in your job search?`,
    valuableOutcomes: `What would be the SINGLE most valuable outcome for you from a skill-validation platform?`,
    yearsOfExperience: `Years of experience`,
    hoursPerWeek: `Roughly how many hours per week would you be available for verification work?`,
    coachingMentoring: `Have you ever done coaching or mentoring?`,
    verifierMotivations: `Why are you interested in becoming a Verifier? [Select all that apply]`,
    professionalFrustration: `What is your biggest professional frustration?`,
    managerRole: `What is your role?`,
    fundingStage: `What is your company's current funding stage?`,
    engineeringTeamSize: `What is the size of your engineering team?`,
    rolesHiring: `Which roles are you looking to hire for in the next 3 months?`,
    seniorityLevel: `What is the most critical seniority level you need to hire?`,
    hiringInterviewHours: `On average, how many hours does your team and you spend interviewing per hire?`,
    hiringFrustrations: `What are your biggest frustrations with your current hiring process?`,
    hiringFailures: `What hiring failures have you experienced recently?`,
  },

  // Form button labels
  buttons: {
    previous: `Previous`,
    next: `Next`,
    submit: `Submit`,
    submitting: `Submitting...`,
  },

  // Privacy policy consent
  privacyPolicyConsent: {
    prefix: `By signing up, you agree to our `,
    linkText: `Privacy Policy`,
    href: `/privacy-policy`,
    ariaLabel: `Read our privacy policy`,
  },

  // Validation error messages
  validation: {
    emailRequired: `Email is required`,
    emailInvalid: `Please enter a valid email address`,
    linkedInRequired: `LinkedIn profile URL is required`,
    linkedInInvalid: `Please enter a valid LinkedIn URL`,
    githubInvalid: `Please enter a valid GitHub URL`,
    privacyConsentRequired: `You must agree to the privacy policy`,
    skillAreasRequired: `Please select at least one skill area`,
    technicalSkillsRequired: `Please select at least one technical skill`,
    professionalStatusRequired: `Please select your professional status`,
    techCommunityMembershipRequired: `Please select your tech community membership status`,
    techCommunityDetailsRequired: `Please specify which tech community`,
    githubGitlabUrlRequired: `GitHub/GitLab profile URL is required`,
    githubGitlabUrlInvalid: `Please enter a valid GitHub/GitLab URL`,
    skillValidationConfidenceRequired: `Please select an option`,
    jobSearchChallengesRequired: `Please select at least one challenge`,
    jobSearchChallengeOtherRequired: `Please specify your challenge`,
    valuableOutcomesRequired: `Please select at least one outcome`,
    valuableOutcomeOtherRequired: `Please specify the outcome`,
    yearsOfExperienceRequired: `Please select your years of experience`,
    hoursPerWeekRequired: `Please select your availability`,
    coachingMentoringRequired: `Please select an option`,
    verifierMotivationsRequired: `Please select at least one motivation`,
    verifierMotivationOtherRequired: `Please specify your motivation`,
    professionalFrustrationRequired: `Please select your biggest frustration`,
    professionalFrustrationOtherRequired: `Please specify your frustration`,
    managerRoleRequired: `Please select your role`,
    fundingStageRequired: `Please select your funding stage`,
    engineeringTeamSizeRequired: `Please select your team size`,
    rolesHiringRequired: `Please select at least one role`,
    seniorityLevelRequired: `Please select a seniority level`,
    hiringInterviewHoursRequired: `Please select an option`,
    hiringFrustrationsRequired: `Please select at least one frustration`,
    hiringFailuresRequired: `Please select at least one failure`,
  },

  // Accessibility labels
  accessibility: {
    progressIndicator: `Form progress indicator`,
    goToStep: `Go to step`,
    formNavigation: `Form navigation`,
    previousButton: `Go to previous step`,
    nextButton: `Go to next step`,
    submitButton: `Submit form`,
    successIcon: `Success icon`,
    errorIcon: `Error icon`,
  },

  // Persona-specific form field configurations
  // These are used by the generic FormFieldsStep component
  personaFields: {
    // Verifier persona - Section 2: Your Motivation
    verifierMotivation: {
      motivations: {
        id: 'verifierMotivations',
        label: `Why are you interested in becoming a Verifier? [Select all that apply]`,
        otherFieldId: 'verifierMotivationOther',
        otherLabel: `Other motivation`,
        otherPlaceholder: `Please specify your motivation`,
      },
      frustration: {
        id: 'professionalFrustration',
        label: `What is your biggest professional frustration?`,
        otherFieldId: 'professionalFrustrationOther',
        otherLabel: `Other frustration`,
        otherPlaceholder: `Please specify your frustration`,
      },
    },

    // Candidate persona - Section 2: Your Motivation & Challenges
    candidateMotivationChallenges: {
      skillValidation: {
        id: 'skillValidationConfidence',
        label: `How much do you agree with the following statement: "I would feel more confident in my job search if my skills were validated anonymously by senior engineers"`,
      },
      challenges: {
        id: 'jobSearchChallenges',
        label: `What is the biggest challenge you face in your job search?`,
        otherFieldId: 'jobSearchChallengeOther',
        otherLabel: `Other challenge`,
        otherPlaceholder: `Please specify your challenge`,
      },
      outcomes: {
        id: 'valuableOutcomes',
        label: `What would be the SINGLE most valuable outcome for you from a skill-validation platform?`,
        otherFieldId: 'valuableOutcomeOther',
        otherLabel: `Other outcome`,
        otherPlaceholder: `Please specify the outcome`,
      },
    },

    // Hiring Manager persona - Section 3: Hiring Demand & Challenges
    hiringManagerDemandChallenges: {
      rolesHiring: {
        id: 'rolesHiring',
        label: `Which roles are you looking to hire for in the next 3 months?`,
        description: `Select all that apply`,
      },
      seniorityLevel: {
        id: 'seniorityLevel',
        label: `What is the most critical seniority level you need to hire?`,
      },
      interviewHours: {
        id: 'hiringInterviewHours',
        label: `On average, how many hours does your team and you spend interviewing per hire?`,
      },
      frustrations: {
        id: 'hiringFrustrations',
        label: `What are your biggest frustrations with your current hiring process?`,
        description: `Select all that apply`,
      },
      failures: {
        id: 'hiringFailures',
        label: `What hiring failures have you experienced recently?`,
        description: `Select all that apply`,
      },
    },
  },

  // Step configurations for each persona
  stepConfigs: {
    candidate: [
      {
        stepNumber: 1,
        title: 'Contact Information',
        description: 'Let us know how to reach you',
        fields: ['email', 'linkedIn', 'github', 'newsletterOptIn'],
      },
      {
        stepNumber: 2,
        title: 'Skills Profile',
        description: 'Tell us about your skills',
        fields: ['skillAreas', 'technicalSkills'],
      },
      {
        stepNumber: 3,
        title: 'Your Candidate Profile',
        description: 'Tell us about your professional background',
        fields: [
          'professionalStatus',
          'techCommunityMembership',
          'techCommunityDetails',
          'githubGitlabUrl',
        ],
      },
      {
        stepNumber: 4,
        title: 'Motivation & Challenges',
        description: 'Help us understand your goals',
        fields: [
          'skillValidationConfidence',
          'jobSearchChallenges',
          'jobSearchChallengeOther',
          'valuableOutcomes',
          'valuableOutcomeOther',
        ],
      },
    ] as WaitlistStepConfig[],
    verifier: [
      {
        stepNumber: 1,
        title: 'Contact Information',
        description: 'Let us know how to reach you',
        fields: ['linkedIn', 'github', 'newsletterOptIn'],
      },
      {
        stepNumber: 2,
        title: 'Skills Profile',
        description: 'Tell us about your skills',
        fields: ['skillAreas', 'technicalSkills'],
      },
      {
        stepNumber: 3,
        title: 'Your Verification Profile',
        description: 'Share your professional experience',
        fields: [
          'yearsOfExperience',
          'hoursPerWeek',
          'professionalStatus',
          'coachingMentoring',
          'githubGitlabUrl',
        ],
      },
      {
        stepNumber: 4,
        title: 'Your Motivation',
        description: 'Help us understand your goals',
        fields: [
          'verifierMotivations',
          'verifierMotivationOther',
          'professionalFrustration',
          'professionalFrustrationOther',
        ],
      },
    ] as WaitlistStepConfig[],
    'hiring-manager': [
      {
        stepNumber: 1,
        title: 'Contact Information',
        description: 'Let us know how to reach you',
        fields: ['email', 'newsletterOptIn'],
      },
      {
        stepNumber: 2,
        title: 'Your Company Profile',
        description: 'Tell us about your company',
        fields: ['managerRole', 'fundingStage', 'engineeringTeamSize'],
      },
      {
        stepNumber: 3,
        title: 'Hiring Demand',
        description: 'Share your hiring needs',
        fields: ['rolesHiring', 'seniorityLevel', 'hiringInterviewHours'],
      },
      {
        stepNumber: 4,
        title: 'Hiring Challenges',
        description: 'Tell us about your challenges',
        fields: ['hiringFrustrations', 'hiringFailures'],
      },
    ] as WaitlistStepConfig[],
  },
} as const

// ============================================================================
// EXPORT ALL STRINGS
// ============================================================================

export const strings = {
  branding,
  navigation,
  hero,
  benefits,
  cvPreview,
  companyDiscovery,
  process,
  faq,
  floatingSignupButton,
  footer,
  contactPage,
  legalPages,
  errorPages,
  apiResponses,
  common,
  layout,
  cvSampleData,
  checkbox,
  radioButton,
  waitlistForms,
} as const
