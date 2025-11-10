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
// LUCIDE REACT ICON IMPORTS
// ============================================================================

import {
  Shield,
  Clock,
  UserCheck,
  Medal,
  FastForward,
  Rocket,
  QrCode,
  DollarSign,
  Calendar,
  TrendingUp,
  Network,
  FileText,
  Brain,
  Video,
  CheckCircle,
  ClipboardList,
  MessageCircle,
  Database,
  IdCard,
  Globe,
  FolderOpen,
  Building2,
  Github,
  Linkedin,
  Mail,
  Home,
  Search,
  ArrowLeft,
  Send,
  User,
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
// SIGNUP MODAL
// ============================================================================

export const signupModal = {
  // Modal header
  title: `Join Skill Verdict`,

  // Form fields
  form: {
    email: {
      label: `Email address`,
      placeholder: `Your email address *`,
      ariaLabel: `Email address field`,
      icon: Mail,
    },
    linkedin: {
      label: `LinkedIn profile URL`,
      placeholder: `Your LinkedIn profile URL *`,
      ariaLabel: `LinkedIn profile URL field`,
      icon: Linkedin,
    },
    website: {
      label: `Website (leave this field empty)`,
      placeholder: `Your website`,
      ariaLabel: `Website field (honeypot)`,
    },
    github: {
      label: `GitHub profile URL`,
      placeholder: `Your GitHub profile URL *`,
      ariaLabel: `GitHub profile URL field`,
      icon: Github,
    },
  },

  // Submit button
  submitButton: {
    idle: `Secure my spot`,
    submitting: `Securing your spot...`,
    ariaLabel: {
      idle: `Submit signup form`,
      submitting: `Submitting form`,
    },
  },

  // Status messages
  status: {
    success: {
      title: `Success!`,
      message: `We've added you to our waitlist. You'll be among the first to know
        when we launch!`,
      icon: `🎉`,
    },
    error: {
      title: `Error`,
      message: `Something went wrong. Please try again or contact support.`,
      icon: `❌`,
    },
  },

  // Privacy Policy Consent
  privacyPolicyConsent: {
    prefix: `By signing up, you agree to our`,
    linkText: `Privacy Policy`,
    href: `/privacy-policy`,
    ariaLabel: `Read our privacy policy`,
  },

  // Accessibility
  accessibility: {
    closeModal: `Close modal`,
    signupForm: `Signup form`,
    emailError: `Email validation error`,
    linkedinError: `LinkedIn validation error`,
    githubError: `GitHub validation error`,
  },
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
    description: `Your privacy is fundamental to our mission. Learn how we protect and
      handle your data.`,
    lastUpdated: `December 2024`,
    sections: {
      introduction: {
        title: `Introduction`,
        content: [
          `Skill Verdict ("we," "our," or "us") is committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you use our skill verification
          platform.`,
          `By using Skill Verdict, you agree to the collection and use of
          information in accordance with this policy. If you do not agree with
          our policies and practices, do not use our service.`,
        ],
      },
      informationWeCollect: {
        title: `Information We Collect`,
        personalInformation: {
          title: `Personal Information`,
          items: [
            `Name, email address, and contact information`,
            `Professional background and work experience`,
            `Skills, certifications, and educational background`,
            `Profile information and professional achievements`,
          ],
        },
        technicalInformation: {
          title: `Technical Information`,
          items: [
            `Code submissions and technical assessments`,
            `Verification results and skill ratings`,
            `Platform usage data and interaction patterns`,
            `Device information and IP addresses`,
          ],
        },
      },
      howWeUse: {
        title: `How We Use Your Information`,
        content: [
          `We use the information we collect to:`,
          `Provide and maintain our skill verification services`,
          `Process verification requests and generate skill assessments`,
          `Connect you with qualified verifiers and potential employers`,
          `Improve our platform and develop new features`,
          `Communicate with you about your account and our services`,
          `Ensure platform security and prevent fraud`,
          `Comply with legal obligations and resolve disputes`,
        ],
      },
      informationSharing: {
        title: `Information Sharing and Disclosure`,
        withVerifiers: {
          title: `With Verifiers`,
          content: `Your code submissions and technical materials are shared only with
            qualified verifiers assigned to assess your skills. Verifiers are
            bound by confidentiality agreements.`,
        },
        withEmployers: {
          title: `With Employers`,
          content: `Your public profile and verified skills are visible to potential
            employers. You control what information is publicly displayed
            through your privacy settings.`,
        },
        legalRequirements: {
          title: `Legal Requirements`,
          content: `We may disclose your information if required by law, court order,
            or to protect our rights, property, or safety.`,
        },
      },
      dataSecurity: {
        title: `Data Security`,
        content: [
          `We implement appropriate technical and organizational security
          measures to protect your personal information against unauthorized
          access, alteration, disclosure, or destruction.`,
          `End-to-end encryption for sensitive data transmission`,
          `Secure data storage with regular security audits`,
          `Access controls and authentication mechanisms`,
          `Regular security training for our team members`,
          `However, no method of transmission over the internet or electronic
          storage is 100% secure. While we strive to protect your information,
          we cannot guarantee absolute security.`,
        ],
      },
      yourRights: {
        title: `Your Rights and Choices`,
        content: [
          `You have the following rights regarding your personal information:`,
          `Access: Request a copy of the personal information we hold about
          you`,
          `Correction: Request correction of inaccurate or incomplete
          information`,
          `Deletion: Request deletion of your personal information (subject to
          legal requirements)`,
          `Portability: Request transfer of your data to another service
          provider`,
          `Restriction: Request limitation of how we process your information`,
          `Objection: Object to certain types of processing`,
          `To exercise these rights, please contact us at
          contact@skillverdict.com. We will respond to your request within 30
          days.`,
        ],
      },
      dataRetention: {
        title: `Data Retention`,
        content: [
          `We retain your personal information for as long as necessary to
          provide our services and fulfill the purposes outlined in this
          policy. Specific retention periods include:`,
          `Account information: Until account deletion or 7 years after last
          activity`,
          `Verification records: Permanently (to maintain credential integrity)`,
          `Code submissions: 3 years after verification completion`,
          `Communication records: 3 years for support purposes`,
        ],
      },
      internationalTransfers: {
        title: `International Data Transfers`,
        content: [
          `Skill Verdict operates globally, and your information may be
          transferred to and processed in countries other than your own. We
          ensure appropriate safeguards are in place for international
          transfers, including:`,
          `Standard contractual clauses approved by relevant authorities`,
          `Adequacy decisions for transfers to certain countries`,
          `Certification schemes and codes of conduct`,
        ],
      },
      childrensPrivacy: {
        title: `Children's Privacy`,
        content: `Skill Verdict is not intended for use by children under 16 years of
          age. We do not knowingly collect personal information from children
          under 16. If we become aware that we have collected personal
          information from a child under 16, we will take steps to delete such
          information.`,
      },
      changesToPolicy: {
        title: `Changes to This Privacy Policy`,
        content: [
          `We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new Privacy Policy on this page
          and updating the "Last updated" date.`,
          `For significant changes, we will provide additional notice (such as
          email notification) at least 30 days before the changes take effect.`,
        ],
      },
      contact: {
        title: `Contact Us`,
        content: `If you have any questions about this Privacy Policy or our privacy
          practices, please contact us:`,
        email: `contact@skillverdict.com`,
        address: `Skill Verdict Privacy Team`,
        responseTime: `We aim to respond within 48 hours`,
      },
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
  signupModal,
  floatingSignupButton,
  footer,
  contactPage,
  legalPages,
  errorPages,
  common,
  layout,
  cvSampleData,
} as const
