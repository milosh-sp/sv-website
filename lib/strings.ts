// ============================================================================
// WAITLIST FORM TYPES
// ============================================================================
interface SkillArea {
  id: string
  label: string
  description?: string
}

interface TechnicalSkill {
  id: string
  label: string
}

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
  Facebook,
  FileText,
  FolderOpen,
  Globe,
  Home,
  IdCard,
  Instagram,
  Mail,
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
  Users,
} from 'lucide-react'
import { techSkills } from './tech-skills'

// ============================================================================
// SITE BRANDING & IDENTITY
// ============================================================================

const branding = {
  // Company name and tagline
  companyName: `Skill Verdict`,
  tagline: `Hire with evidence.`,

  // Logo and visual elements
  logo: {
    alt: `Skill Verdict Logo`,
    ariaLabel: `Go to homepage`,
  },

  // Copyright and legal
  copyright: `© ${new Date().getFullYear()} Skill Verdict. All rights reserved.`,
} as const

// ============================================================================
// NAVIGATION & HEADER
// ============================================================================

const navigation = {
  // Top-level grouped menus (arc.dev-style)
  menu: {
    home: `Home`,
    companies: `For companies`,
    talent: `For talent CV2.0`,
    contact: `Contact`,
  },

  // "For companies" dropdown items (all on the homepage)
  companyMenu: {
    smartSearch: `Smart AI search`,
    whyDifferent: `Why Skill Verdict is different`,
    howItWorks: `How Skill Verdict works`,
    interviewProcess: `The interview process`,
    personality: `Personality`,
    faq: `FAQs`,
  },

  // "For talent CV2.0" dropdown items (all on the /for-talent-cv2.0 page)
  talentMenu: {
    whatIsCv2: `What is CV2.0`,
    getVerified: `How it works`,
    becomeReviewer: `How to join`,
    faq: `FAQs`,
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
  // Audience eyebrow (companies)
  eyebrow: `For hiring teams`,
  // Main hero content
  mainHeading: `Hire international top talent,`,
  /**
   * Will be placed next to the main heading to the right side, with a gradient applied
   */
  mainHeadingHighlight: ` peer-vetted.`,
  subHeading: `Every candidate skills and personality is vetted by senior engineers who do the work themselves. Stricter than a screening call, sourced from real peers, not self-reported. Hire already interviewed talent, ideal for fast paced start ups.`,
  callToAction: `Simply paste a job description and meet your shortlist.`,

  // Prominent pricing badge shown under the primary hero actions
  ctaBadge: `$0 until you hire`,

  // Secondary prompt directing candidates/reviewers to the talent page
  talentPrompt: `Looking to join as talent or talent vetter?`,
  talentLinkText: `For talent CV2.0`,

  // Action buttons
  buttons: {
    verifySkills: `Get hired`,
    earnByVerifying: `Become a reviewer`,
    hireMeNow: `Hire vetted talent`,
  },

  // Trust indicators with embedded icons
  trustIndicators: [
    {
      text: `Peer-vetted, ready to get hired`,
      icon: Shield,
    },
    {
      text: `Anonymous, bias-free vetting`,
      icon: Users,
    },
    {
      text: `Shortlist in few minutes`,
      icon: Clock,
    },
  ],

  // Accessibility labels
  accessibility: {
    heroSection: `Hero section`,
    heroActions: `Hero actions`,
    trustIndicators: `Trust indicators`,
    heroVisual: `Hero visual CV2.0`,
    openSignupModal: `Navigate to the candidate wait-list`,
    openEarnModal: `Navigate to the verifier wait-list`,
  },
} as const

// ============================================================================
// BENEFITS SECTION
// ============================================================================
const benefits = {
  // Section header
  heading: `Why talent chooses`,
  headingHighlight: `CV2.0`,
  description: `A vetted, live profile you own, so remote companies find you and the right role comes to you.`,

  // Tab labels
  tabs: {
    members: `Candidates`,
    guruMembers: `Reviewers`,
    hiringManagers: `Hiring teams`,
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
    description: `Get interviewed only once, prove what you can do once, then let the right remote companies come to you`,
    benefits: [
      {
        title: `Vetting you own, live anywhere`,
        description: `Your verified skills live on a page you control. Share one link or QR on any job board, profile, or email, always current.`,
        icon: Send,
      },
      {
        title: `Get discovered, don't apply`,
        description: `Companies reach out when your peer-vetted skills match their roles, so you skip the endless application grind.`,
        icon: UserCheck,
      },
      {
        title: `Land your next role faster`,
        description: `A proof-backed profile gives hiring teams what they need up front, shortening the path from match to offer.`,
        icon: Rocket,
      },
      {
        title: `Work remote, worldwide`,
        description: `Built for remote work, get matched to remote-friendly companies hiring across time zones.`,
        icon: Globe,
      },
    ],
  },

  // Guru member section
  guruMembers: {
    iconAriaLabel: `Dollar sign icon for tech professionals`,
    description: `Use your experience to assess talent and earn, remotely and on your own terms.`,
    benefits: [
      {
        title: `Earn extra income`,
        description: `Get paid for every review you complete, with clear per-assessment pay you can track.`,
        icon: DollarSign,
      },
      {
        title: `Fully flexible, fully remote`,
        description: `No minimum commitment. Accept reviews from anywhere, whenever they fit your schedule.`,
        icon: Calendar,
      },
      {
        title: `Build your reputation`,
        description: `Build visible credibility through consistent, high-quality reviews.`,
        icon: TrendingUp,
      },
      {
        title: `Expand your skills and network`,
        description: `Meet skilled engineers while staying sharp on modern practices.`,
        icon: Network,
      },
    ],
  },

  // Section accessibility
  accessibility: {
    benefitsSection: `How Skill Verdict works for different users`,
    membersPanel: `Members panel`,
    guruMembersPanel: `Guru member panel`,
  },
} as const

// ============================================================================
// CV PREVIEW SECTION
// ============================================================================

const cvPreview = {
  // Audience eyebrow (engineers + reviewers)
  eyebrow: `For engineers & reviewers`,
  heroHeading: `Your skills,`,
  heroHeadingHighlight: ` verified and shareable`,
  heroSubheading: `A live page you own: independently vetted skills you can share on any job board, profile, or link. Companies discover you when your skills match, and you stay open to remote roles worldwide, no endless applications.`,
  callToAction: `Build your CV2.0 and let remote companies find you.`,

  trustIndicators: [
    {
      text: `A live page, always current`,
      icon: Send,
    },
    {
      text: `Yours to use anywhere`,
      icon: FileText,
    },
    {
      text: `Built for remote work`,
      icon: Globe,
    },
  ],

  accessibility: {
    heroSection: `CV2.0 introduction`,
    heroVisual: `CV2.0 benefits overview`,
    heroActions: `CV2.0 actions`,
    trustIndicators: `CV2.0 trust indicators`,
    featuresSection: `CV2.0 benefits`,
    featuresList: `CV2.0 benefits list`,
    qrVisual: `Verification history QR code illustration`,
  },

  features: [
    {
      title: `Verified skill badges`,
      description: `See which skills were independently reviewed and how they were proven.`,
      icon: Shield,
      iconAriaLabel: `Verified skill badges icon`,
    },
    {
      title: `Verification history`,
      description: `Every verification links to full reviewer evidence, scan the QR or open history anytime.`,
      icon: QrCode,
      iconAriaLabel: `Verification history icon`,
      showQrVisual: true,
    },
    {
      title: `Export & share`,
      description: `Download as PDF or share one link, your profile goes wherever you do.`,
      icon: FileText,
      iconAriaLabel: `Export and share icon`,
    },
    {
      title: `Share anywhere`,
      description: `Open a CV2.0 instantly through a direct link or unique QR code.`,
      icon: Send,
      iconAriaLabel: `Share anywhere icon`,
    },
    {
      title: `Easy to discover`,
      description: `Structured skill data helps recruiters find relevant candidates faster.`,
      icon: Database,
      iconAriaLabel: `Easy to discover icon`,
    },
    {
      title: `Always up to date`,
      description: `One living profile keeps achievements, reviews, and credentials current.`,
      icon: IdCard,
      iconAriaLabel: `Always up to date icon`,
    },
  ],
} as const

// ============================================================================
// COMPANY DISCOVERY SECTION
// ============================================================================

const companyDiscovery = {
  // Section content
  icon: Building2,
  iconAriaLabel: `Building icon for company discovery`,
  heading: `Spend less. Hire faster.`,
  description: `Meet engineers whose skills are peer-vetted by senior engineers, not AI, not an agency, not self-reported.`,
  // Benefits list
  benefits: [
    {
      title: `See proven ability`,
      description: `Every CV2.0 shows peer-vetted skills, real work, and reviewer evidence at a glance.`,
      icon: UserCheck,
    },
    {
      title: `Ready to hire, day one`,
      description: `Pre-vetted talent is ready to start, perfect for startups where time and resources are limited.`,
      icon: Clock,
    },

    {
      title: `Hire globally, spend less`,
      description: `Outsource with confidence to peer-vetted overseas talent and cut spend by up to 58% versus local hiring.`,
      icon: Globe,
    },
    {
      title: `Reach the right people`,
      description: `Paste a job description and let AI surface qualified, peer-vetted matches.`,
      icon: Search,
    },
  ],
  buttons: {
    hiringManagerCta: `Start hiring`,
  },
  // Section accessibility
  accessibility: {
    companyDiscoverySection: `How companies discover and contact verified talent`,
  },
} as const

// ============================================================================
// PROCESS SECTION
// ============================================================================

const process = {
  // Section header
  heading: `How CV2.0 works`,
  description: {
    members: `Build a live CV2.0 with skills independently verified through practical work, then share it anywhere and let remote companies find you.`,
    guruMembers: `Assess real engineering work remotely, give useful feedback, and earn on your own schedule.`,
  },

  // Tab labels
  tabs: {
    members: `Candidates`,
    guruMembers: `Reviewers`,
  },

  // Process steps for members
  memberSteps: [
    {
      title: `1. Create your profile`,
      description: `Connect your experience and portfolio to create your CV2.0.`,
      icon: FileText,
    },
    {
      title: `2. Choose your assessment`,
      description: `Select what you want verified and begin a practical assessment.`,
      icon: Brain,
    },
    {
      title: `3. Prove your ability`,
      description: `Complete real-world work and discuss it with an experienced reviewer.`,
      icon: Video,
    },
    {
      title: `4. Earn verification`,
      description: `Add the result and reviewer feedback to your CV2.0.`,
      icon: CheckCircle,
    },
  ],

  // Process steps for tech professionals
  guruMembersteps: [
    {
      title: `1. Create your reviewer profile`,
      description: `Show your experience and the skills you are qualified to assess.`,
      icon: ClipboardList,
    },
    {
      title: `2. Get approved`,
      description: `Demonstrate your technical judgment and mentoring ability.`,
      icon: Video,
    },
    {
      title: `3. Review real work`,
      description: `Assess candidates with practical tasks and clear feedback.`,
      icon: MessageCircle,
    },
    {
      title: `4. Earn and build trust`,
      description: `Get paid for each review and grow your professional reputation.`,
      icon: DollarSign,
    },
  ],
} as const

// ============================================================================
// FAQ SECTION
// ============================================================================
const faq = {
  membersHeading: `Candidate questions`,
  verifiersHeading: `Reviewer questions`,
  hiringManagersHeading: `Hiring questions`,
  contactUsButton: `Talk to us`,

  // Members FAQ
  members: [
    {
      question: `Can I use my CV2.0 anywhere? Is it really a live page?`,
      answer: `Yes. Your CV2.0 is a live page you own. Share one link or QR on any job board, profile, or email, and it always shows your latest verified skills, no re-uploading or stale PDFs.`,
    },
    {
      question: `Do companies find me, or do I have to apply?`,
      answer: `Companies discover you. When your peer-vetted skills match a role, hiring teams reach out, so you can stay open to remote opportunities without endless applications.`,
    },
    {
      question: `How does the verification process work?`,
      answer: `Complete a practical assessment reviewed by an experienced engineer. Your result and feedback become part of your shareable CV2.0.`,
    },
    {
      question: `How long does skill verification take?`,
      answer: `Most reviews take 1–3 days, depending on the skill and reviewer availability.`,
    },
    {
      question: `Can I update my skills after verification?`,
      answer: `Yes. Add skills or request another review as you grow; your CV2.0 evolves with your career.`,
    },
    {
      question: `What if I’m not happy with my verification outcome?`,
      answer: `You can dispute a result. We will review the case and arrange a fresh assessment when appropriate.`,
    },
    {
      question: `Can I become a reviewer and earn?`,
      answer: `Yes. Qualified engineers can apply to review candidates and earn for each completed assessment.`,
    },
    {
      question: `Is my data and code safe? Who can see my verification results?`,
      answer: `Only assigned reviewers can access assessment work. You control which results and profile details appear publicly.`,
    },
  ],

  // Verifiers FAQ
  verifiers: [
    {
      question: `How do you prevent reviewers from verifying themselves?`,
      answer: `Reviewers cannot access their own assessments. Suspicious activity is flagged for investigation.`,
    },
    {
      question: `How much can I earn as a reviewer?`,
      answer: `Pay varies by the skill and assessment complexity. Earnings are shown clearly in your dashboard.`,
    },
    {
      question: `What is the time commitment?`,
      answer: `There is no minimum. Accept reviews when they fit your schedule.`,
    },
    {
      question: `How does the "AI-assisted dashboard" help me?`,
      answer: `It organizes reviews, supports code analysis, and provides feedback templates so you can focus on judgment and mentoring.`,
    },
    {
      question: `What happens if a candidate disputes my assessment?`,
      answer: `Our team handles disputes privately and reviews the evidence from both sides.`,
    },
    {
      question: `What payment methods do you support?`,
      answer: `Supported methods will be listed at launch, and all earnings will be visible in your dashboard.`,
    },
  ],

  hiringManagers: [
    {
      question: `How does the smart AI search work?`,
      answer: `Paste a job description and your requirements and our AI instantly surfaces peer-vetted candidates whose personality and skills match. It is up to you who to hire or do additional interviews.`,
    },
    {
      question: `Can I hire entire teams or just individuals?`,
      answer: `Both. Hire an individual engineer or a pre-formed team with complementary peer-vetted skills. You can ask our AI team builder to find the best fit for your team by mix and matching the right personalities and skills for the role.`,
    },
    {
      question: `How do I know a candidate meets our bar?`,
      answer: `Each CV2.0 shows the skill assessed, practical evidence, reviewer feedback, and a work-style read before you hire, additionally you can interview the candidate.`,
    },
    {
      question: `How do you keep hiring fair and unbiased?`,
      answer: `Reviewers assess the work anonymously, not the name, background, or location, which surfaces overlooked talent and reduces bias.`,
    },
  ],
} as const

// ============================================================================
// FOOTER
// ============================================================================

const footer = {
  // Links
  links: {
    privacyPolicy: `Privacy Policy`,
    contactUs: `Contact Us`,
  },
  contactUs: `Contact us`,
  email: `contact@skillverdict.com`,
  // Social media
  social: [
    {
      name: `Facebook`,
      url: `https://facebook.com/skillverdict`,
      label: `Follow us on Facebook`,
      icon: Facebook,
    },
    {
      name: `Instagram`,
      url: `https://instagram.com/skill_verdict`,
      label: `Follow us on Instagram`,
      icon: Instagram,
    },
    {
      name: `Mastodon`,
      url: `https://mastodon.social/@skillverdict`,
      label: `Follow us on Mastodon`,
      icon: MessageCircle,
    },
  ],
} as const

// ============================================================================
// CONTACT PAGE
// ============================================================================

const contactPage = {
  // Page header
  title: `Contact Us`,
  heading: `Get in Touch`,
  description: `Have a question, hiring horror story or want to learn more about Skill Verdict? 
  We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.`,

  // Form fields
  form: {
    email: {
      label: `Email address`,
      placeholder: `your.email@example.com`,
      ariaLabel: `Email address field`,
      icon: Mail,
    },
    contactName: {
      label: `Name (Company or Individual)`,
      placeholder: `Company or individual name`,
      ariaLabel: `Name field`,
      icon: User,
    },
    message: {
      label: `Message`,
      placeholder: `Your message...`,
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
    contactNameError: `Name validation error`,
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

const legalPages = {
  // Privacy Policy
  privacyPolicy: {
    title: `Privacy Policy`,
    description: `Your privacy is fundamental to our mission. Learn how we 
      protect and handle your data.`,
    lastUpdated: `11-Nov-2025`,
    effectiveDate: `13-Nov-2025`,
    sections: {
      introduction: {
        title: `Introduction`,
        content: [
          `This Privacy Policy describes the policies of Skill Verdict, Dover, 
          Delaware 19901, United States of America (the), email: 
          contact@skillverdict.com, on the collection, use 
          and disclosure of your information that we collect when you use our 
          website (https://skillverdict.com). (the "Service"). By accessing or 
          using the Service, you are consenting to the collection, use and 
          disclosure of your information in accordance with this Privacy 
          Policy. If you do not consent to the same, please do not access or 
          use the Service.`,
          `We may modify this Privacy Policy at any time without any prior 
          notice to you and will post the revised Privacy Policy on the 
          Service. The revised Policy will be effective 180 days from when the 
          revised Policy is posted in the Service and your continued access or 
          use of the Service after such time will constitute your acceptance 
          of the revised Privacy Policy. We therefore recommend that you 
          periodically review this page.`,
        ],
      },
      informationWeCollect: {
        title: `Information We Collect`,
        content: [
          `We will collect and process the following personal information 
          about you:`,
        ],
        items: [
          `Name`,
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
          `We will use the information that we collect about you for the 
          following purposes:`,
          `Marketing/Promotional`,
          `Creating user account`,
          `Testimonials`,
          `Customer feedback collection`,
          `If we want to use your information for any other purpose, we will 
          ask you for consent and will use your information only on receiving 
          your consent and then, only for the purpose(s) for which grant 
          consent unless we are required to do otherwise by law.`,
        ],
      },
      informationSharing: {
        title: `How We Share Your Information`,
        content: [
          `We will not transfer your personal information to any third party 
          without seeking your consent, except in limited circumstances as 
          described below:`,
          `Analytics`,
          `Data collection & process`,
          `We require such third party's to use the personal information we 
          transfer to them only for the purpose for which it was transferred 
          and not to retain it for longer than is required for fulfilling the 
          said purpose.`,
          `We may also disclose your personal information for the following: 
          (1) to comply with applicable law, regulation, court order or other 
          legal process; (2) to enforce your agreements with us, including 
          this Privacy Policy; or (3) to respond to claims that your use of 
          the Service violates any third-party rights. If the Service or our 
          company is merged or acquired with another company, your information 
          will be one of the assets that is transferred to the new owner.`,
        ],
      },
      dataRetention: {
        title: `Retention Of Your Information`,
        content: [
          `We will retain your personal information with us for 90 days to 2 
          years after users terminate their accounts or for as long as we need 
          it to fulfill the purposes for which it was collected as detailed in 
          this Privacy Policy. We may need to retain certain information for 
          longer periods such as record-keeping / reporting in accordance with 
          applicable law or for other legitimate reasons like enforcement of 
          legal rights, fraud prevention, etc. Residual anonymous information 
          and aggregate information, neither of which identifies you (directly 
          or indirectly), may be stored indefinitely.`,
        ],
      },
      yourRights: {
        title: `Your Rights`,
        content: [
          `Depending on the law that applies, you may have a right to access 
          and rectify or erase your personal data or receive a copy of your 
          personal data, restrict or object to the active processing of your 
          data, ask us to share (port) your personal information to another 
          entity, withdraw any consent you provided to us to process your 
          data, a right to lodge a complaint with a statutory authority and 
          such other rights as may be relevant under applicable laws. To 
          exercise these rights, you can write to us at 
          contact@skillverdict.com. We will respond to your request in 
          accordance with applicable law.`,
          `You may opt-out of direct marketing communications or the profiling 
          we carry out for marketing purposes by writing to us at 
          contact@skillverdict.com.`,
          `Do note that if you do not allow us to collect or process the 
          required personal information or withdraw the consent to process the 
          same for the required purposes, you may not be able to access or use 
          the services for which your information was sought.`,
        ],
      },
      cookies: {
        title: `Cookies Etc.`,
        content: [
          `To learn more about how we use these and your choices in relation 
          to these tracking technologies, please refer to the Cookie Policy button on the bottom left of the page.`,
        ],
      },
      dataSecurity: {
        title: `Security`,
        content: [
          `The security of your information is important to us and we will use 
          reasonable security measures to prevent the loss, misuse or 
          unauthorized alteration of your information under our control. 
          However, given the inherent risks, we cannot guarantee absolute 
          security and consequently, we cannot ensure or warrant the security 
          of any information you transmit to us and you do so at your own 
          risk.`,
        ],
      },
      grievanceOfficer: {
        title: `Grievance / Data Protection Officer`,
        content: [
          `If you have any queries or concerns about the processing of your 
          information that is available with us, you may email our Grievance 
          Officer at Skill Verdict, Dover, email: contact@skillverdict.com. We 
          will address your concerns in accordance with applicable law.`,
        ],
      },
    },
    contact: {
      email: `contact@skillverdict.com`,
      phone: ``,
      address: `Skill Verdict, Dover, Delaware 19901, United States of 
        America`,
    },
  },
} as const

// ============================================================================
// ERROR PAGES CONTENT
// ============================================================================

const errorPages = {
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
      cvPreview: `Explore CV2.0 for talent`,
      faq: `Frequently Asked Questions`,
      privacyPolicy: `Privacy Policy`,
    },
  },
} as const

// ============================================================================
// LAYOUT & ACCESSIBILITY
// ============================================================================

const layout = {
  accessibility: {
    skipToMain: `Skip to main content`,
  },
} as const

// ============================================================================
// CV PREVIEW SAMPLE DATA
// ============================================================================

const cvSampleData = {
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
    personality: `Personality`,
  },
  skills: [
    { name: `Docker`, verified: `unverified` },
    {
      name: `JavaScript`,
      verified: `pending`,
      verifier: `Sarah Chen - Senior Developer at Google`,
    },
    { name: `Node.js`, verified: `pending` },
    {
      name: `React`,
      verified: `verified`,
      verifier: `Michael Rodriguez - Engineering Lead at Meta`,
    },
    {
      name: `AWS`,
      verified: `verified`,
      verifier: `Emily Zhang - Cloud Architect at Amazon`,
    },
    {
      name: `AI / ML`,
      verified: `verified`,
      verifier: `Mark James - AI Engineer at OpenAI`,
    },
  ],
  education: [
    {
      name: `MSc Computer Science`,
      degree: `MSc Computer Science`,
      institution: `Harvard University`,
      period: `2014 - 2016`,
      verified: `unverified`,
    },
    {
      name: `BSc Software Engineering`,
      degree: `BSc Software Engineering`,
      institution: `Oxford University`,
      period: `2010 - 2014`,
      verified: `verified`,
      verifier: `Peter Tufano - Professor at Oxford University`,
    },
  ],
  experience: [
    {
      title: `Senior AI Engineer`,
      company: `OpenAI`,
      period: `2020 - Present`,
      description: `Lead development of LLM powered and generative AI features. 
      Architect scalable, cloud-native AI solutions on AWS/Azure.
       Mentor team on AI-assisted development. `,
      verified: `unverified`,
    },
    {
      title: `Full Stack Developer`,
      company: `Amazon `,
      period: `2017 - 2020`,
      description: `Architected scalable, cloud-native applications. 
      Led CI/CD pipelines, containerization (Docker/Kubernetes), and microservices. Worked on the Angular framework.`,
      verified: `verified`,
      verifier: `Taylor Swift - Technical Lead at Amazon`,
    },
    {
      title: `Junior Backend Developer`,
      company: `YouTube`,
      period: `2015 - 2017`,
      description: `Developed features using modern frameworks (React, Node.js). 
      Gained experience in RESTful API design and cloud platform (AWS) services.`,
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
      name: `React Expert`,
      verifier: `Lisa Johnson - Frontend Lead at Meta`,
    },
    {
      name: `Node.js Master`,
      verifier: `Robert Williams - Backend Engineer at Netflix`,
      verified: `pending`,
    },
    {
      name: `AWS Certified`,
      verifier: `David Kim - Solutions Architect at Amazon`,
      verified: `verified`,
    },
  ],
  languages: [
    {
      name: `Spanish`,
      level: `B2`,
      verified: `pending`,
      icon: Globe,
    },
    {
      name: `English`,
      level: `C2`,
      verified: `verified`,
      verifier: `Sarah Mitchell - Language Specialist at Cambridge Assessment`,
      icon: Globe,
    },
    {
      name: `French`,
      level: `A2`,
      verified: `pending`,
      icon: Globe,
    },
  ],
  personality: [
    {
      name: `Action oriented`,
    },
    {
      name: `Self-starter`,
    },
    {
      name: `Analytical`,
    },
    {
      name: `Team player`,
    },
  ],
  qrSection: {
    scanText: `Scan to view my verified skills`,
    viewHistoryLink: `View full verification history`,
  },
} as const

// ============================================================================
// API & FORM SUBMISSION RESPONSES
// ============================================================================

const apiResponses = {
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

const common = {
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

const checkbox = {
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

const radioButton = {
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

const waitlistForms = {
  ctaToOtherForms: 'Looking to do something else?',
  // ========================================================================
  // FORM CONFIGURATION
  // ========================================================================

  totalFormSteps: 4,

  // ========================================================================
  // SKILL AREAS & TECHNICAL SKILLS
  // ========================================================================

  skillAreas: [
    { id: 'frontend', label: 'Frontend Development' },
    { id: 'backend', label: 'Backend Development' },
    { id: 'fullstack', label: 'Full Stack Development' },
    { id: 'devops', label: 'DevOps' },
    { id: 'data', label: 'Data Science' },
  ] as SkillArea[],

  technicalSkills: techSkills as TechnicalSkill[],

  // ========================================================================
  // CANDIDATE FORM OPTIONS
  // ========================================================================

  professionalStatusOptions: [
    { value: 'student', label: 'Student' },
    { value: 'unemployed', label: 'Unemployed' },
    { value: 'employed-fulltime', label: 'Employed (full-time)' },
    { value: 'employed-parttime', label: 'Employed (part-time)' },
    { value: 'freelancer', label: 'Freelancer' },
  ],

  techCommunityOptions: [
    { value: 'yes', label: 'Yes, please specify' },
    { value: 'no', label: 'No' },
  ],

  skillValidationOptions: [
    { value: 'strongly-agree', label: 'Strongly Agree' },
    { value: 'agree', label: 'Agree' },
    { value: 'neutral', label: 'Neutral' },
    { value: 'disagree', label: 'Disagree' },
    { value: 'strongly-disagree', label: 'Strongly Disagree' },
  ],

  jobSearchChallengeOptions: [
    { value: 'no-response', label: 'Getting no response after applying' },
    { value: 'cv-rejections', label: 'My CV is always getting rejections' },
    {
      value: 'no-feedback',
      label:
        'Rejection without clear feedback (even after completing every interview round successfully)',
    },
    {
      value: 'bias',
      label:
        'Bias (e.g., based on geographical location, background, age, gender)',
    },
    { value: 'not-knowing', label: 'Not knowing what to improve' },
    { value: 'lack-mentorship', label: 'Lack of mentorship / guidance' },
    { value: 'other', label: 'Other:' },
  ],

  valuableOutcomeOptions: [
    {
      value: 'credibility',
      label:
        'Credibility: A trusted certificate/badge for my resume that gets me more interviews.',
    },
    {
      value: 'clarity-growth',
      label:
        'Clarity & Growth: A detailed report with actionable feedback and a personalized plan to improve my skills.',
    },
    {
      value: 'efficiency',
      label:
        'Efficiency: Drastically reducing the number of technical screens I have to do for each company.',
    },
    {
      value: 'opportunity',
      label:
        "Opportunity: Direct access to job opportunities from companies that trust the platform's assessment.",
    },
    { value: 'other', label: 'Other:' },
  ],

  // ========================================================================
  // VERIFIER FORM OPTIONS
  // ========================================================================

  yearsOfExperienceOptions: [
    { value: '3-5', label: '3–5 years' },
    { value: '6-10', label: '6–10 years' },
    { value: '10+', label: '10+ years' },
  ],

  hoursPerWeekOptions: [
    { value: '1-3', label: '1-3 hours' },
    { value: '4-7', label: '4-7 hours' },
    { value: '8+', label: '8+ hours' },
  ],

  coachingMentoringOptions: [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ],

  verifierMotivationOptions: [
    { value: 'improve-hiring', label: 'Improve hiring standards in tech' },
    { value: 'earn-income', label: 'Earn extra income' },
    { value: 'mentor-talent', label: 'Mentor and grow future talent' },
    {
      value: 'build-reputation',
      label: 'Build my external reputation and credibility',
    },
    {
      value: 'leadership-work',
      label: 'Transition into more leadership/advisory work',
    },
    { value: 'community', label: 'To be a part of a like minded community' },
    {
      value: 'stay-updated',
      label: 'Staying up-to-date with modern engineering practices and tools',
    },
    { value: 'other', label: 'Other:' },
  ],

  professionalFrustrationOptions: [
    {
      value: 'expertise-not-recognized',
      label: "My leadership and expertise aren't fully recognized or utilized.",
    },
    {
      value: 'undervalued',
      label: 'I feel undervalued or unfairly compensated for my experience.',
    },
    {
      value: 'lack-autonomy',
      label: 'Lack of autonomy and too much micromanagement',
    },
    {
      value: 'hiring-flawed',
      label: 'The technical hiring processes I see are flawed or biased.',
    },
    {
      value: 'no-growth',
      label: 'Not having the opportunity to grow in my current position',
    },
    {
      value: 'burnout-culture',
      label: 'Burnout culture disguised as "hustle" or "startup mindset".',
    },
    {
      value: 'meetings-context-switching',
      label:
        'Excessive meetings or context-switching hurts productivity and deep work.',
    },
    { value: 'other', label: 'Other:' },
  ],

  // ========================================================================
  // HIRING MANAGER FORM OPTIONS
  // ========================================================================

  managerRoleOptions: [
    { value: 'cto-vp', label: 'CTO / VP Engineering' },
    { value: 'head-engineering', label: 'Head of Engineering' },
    { value: 'tech-lead', label: 'Tech Lead / Engineering Manager' },
    { value: 'founder-ceo', label: 'Founder / CEO (hiring first engineers)' },
    { value: 'recruiter', label: 'Recruiter' },
  ],

  fundingStageOptions: [
    { value: 'pre-seed', label: 'Pre-seed / Bootstrapped' },
    { value: 'seed', label: 'Seed' },
    { value: 'series-a', label: 'Series A' },
    { value: 'series-b', label: 'Series B' },
    { value: 'profitable', label: 'Profitable / Late-Stage' },
  ],

  teamSizeOptions: [
    { value: '0', label: '0' },
    { value: '1-5', label: '1-5' },
    { value: '6-15', label: '6-15' },
    { value: '16-30', label: '16-30' },
    { value: '30+', label: '30+' },
  ],

  rolesHiringOptions: [
    { value: 'fullstack', label: 'Full-stack engineer' },
    { value: 'backend', label: 'Backend engineer' },
    { value: 'frontend', label: 'Frontend / Web' },
    { value: 'mobile', label: 'Mobile (iOS / Android / Flutter)' },
    { value: 'devops', label: 'DevOps / SRE / Platform' },
    { value: 'ai-ml', label: 'AI / ML / Data' },
    { value: 'product-design', label: 'Product / Design / QA' },
    { value: 'leadership', label: 'Engineering leadership' },
    {
      value: 'squad',
      label:
        'A pre-formed squad (e.g., Full-stack + Engineering leadership + QA)',
    },
    { value: 'other', label: 'Other:' },
  ],

  seniorityLevelOptions: [
    { value: 'intern', label: 'Intern' },
    { value: 'mid-level', label: 'Mid-level' },
    { value: 'senior', label: 'Senior' },
    { value: 'staff-principal', label: 'Staff / Principal' },
    {
      value: 'generalists',
      label: 'Hands-on startup generalists (wears many hats)',
    },
  ],

  interviewHoursOptions: [
    { value: 'less-10', label: 'Less than 10 hours' },
    { value: '10-20', label: '10 - 20 hours' },
    { value: '20-40', label: '20 - 40 hours' },
    { value: '40+', label: "40+ hours (it's a massive drain)" },
    { value: 'dont-know', label: "I don't know" },
  ],

  hiringFrustrationOptions: [
    {
      value: 'wasting-hours',
      label: 'Wasting 10+ hours per candidate with my engineering team.',
    },
    { value: 'bad-hire-cost', label: 'The fear and cost of a bad hire.' },
    { value: 'fake-cvs', label: 'Spam of fake people applying with great CVs' },
    {
      value: 'cv-mismatch',
      label:
        "Massive amount of CVs that don't match the position that I am hiring for",
    },
    {
      value: 'desperate-hiring',
      label:
        "Desperate hiring - we don't know who's actually good, but we hire them to fill the position",
    },
    {
      value: 'talkers-not-doers',
      label: 'Interviewing great "talkers" but average "doers."',
    },
    { value: 'other', label: 'Other:' },
  ],

  hiringFailureOptions: [
    { value: 'bad-interview', label: 'Bad hire that did great on interview' },
    {
      value: 'skill-assessment',
      label: "Unable to assess the candidate's skills accurately",
    },
    {
      value: 'expensive-talent',
      label: 'Senior talent too expensive to experiment on',
    },
    {
      value: 'missed-deadlines',
      label: 'Missed product deadlines due to hiring gap',
    },
    { value: 'other', label: 'Other:' },
  ],

  // ========================================================================
  // PAGE HEADERS & CONTENT
  // ========================================================================
  // Page headers for waitlist forms
  pageHeaders: {
    candidate: {
      title: `Get Discovered, Unlock Opportunities!`,
      description: `Answer few simple questions, and be the first to get exclusive early access to Skill Verdict, and get special founder's perks`,
    },
    verifier: {
      title: `Become a Skill Verifier`,
      description: `Answer few simple questions, unlock special founder's perks, and find out how you can earn money by verifying skills`,
    },
    'hiring-manager': {
      title: `Discover untapped potential and hire verified talent`,
      description: `Gain access to a pool of verified talent and reduce bad hires and your time-to-hire drastically`,
    },
  },
  // Success screen messages
  successScreen: {
    candidate: {
      title: `You have just unlocked tons of opportunities and your full potential!`,
      description: `Thanks for joining Skill Verdict. You’ll be among the first to access verified badges and get matched with top opportunities as soon as Skill Verdict launches`,
      checkEmailMessage: `Keep a look at your inbox, we will keep you updated, and not spam you.`,
      backToHomepage: `Learn more about Skill Verdict`,
    },
    verifier: {
      title: `You just joined the biggest community of tech gurus!`,
      description: `Thanks for your interest in becoming a Skill Verifier. Get ready to mentor, earn, and build your professional brand.`,
      checkEmailMessage: `Keep a look at your inbox, we will keep you updated, and not spam you.`,
      backToHomepage: `Learn more about Skill Verdict`,
    },
    'hiring-manager': {
      title: `You just tapped into the world's best talent!`,
      description: `Thank you for showing interest in community verified talent. We’ll connect you with the first group of thoroughly verified candidates as soon as we go live, helping you hire with confidence from day one.`,
      checkEmailMessage: `Keep a look at your inbox, we will keep you updated, and not spam you.`,
      backToHomepage: `Learn more about Skill Verdict`,
    },
  },

  // Form field labels and placeholders
  fields: {
    name: {
      label: `Name`,
      placeholder: `How should we call you? (optional)`,
      companyPlaceholder: `Company name (optional)`,
      ariaLabel: `Name field`,
    },
    email: {
      label: `Email Address`,
      placeholder: `your@email.com`,
      ariaLabel: `Email address field`,
    },
    technicalSkills: {
      label: `What technical skills best describe you?`,
      placeholder: `Search and select at least one skill`,
    },
    linkedIn: {
      label: `LinkedIn Profile URL`,
      placeholder: `https://linkedin.com/in/yourprofile (optional)`,
      ariaLabel: `LinkedIn profile URL field`,
    },
    githubGitlabUrl: {
      label: `GitHub or GitLab Profile URL`,
      placeholder: `GitHub or GitLab profile URL (optional)`,
      ariaLabel: `GitHub or GitLab profile URL field`,
    },
    companyUrl: {
      label: `Company URL`,
      placeholder: `https://example.com`,
      ariaLabel: `Company URL field`,
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
    newsletterOptIn: `Subscribe to our newsletter. We only send genuine updates and never spam.`,
    professionalStatus: `What is your current professional status?`,
    techCommunityMembership: `Are you already a part of an active tech communities?`,
    skillValidationConfidence: `How much do you agree with the following statement: "I would feel more confident in my job search if my skills were validated anonymously by senior engineers"`,
    jobSearchChallenges: `What is the biggest challenges you face or faced in your job search?`,
    valuableOutcomes: `What would be the biggest benefit you want to see from a skill validation platform?`,
    yearsOfExperience: `Your years of industry experience in your current or past role`,
    hoursPerWeek: `Roughly how many hours per week would you want to dedicate to reviewing candidates?`,
    coachingMentoring: `Have you ever done coaching or mentoring?`,
    verifierMotivations: `What motivates you to become a verifier and help others grow?`,
    professionalFrustration: `What is your biggest professional frustrations in your current or past roles?`,
    managerRole: `What is your current position in your company?`,
    fundingStage: `What is your company's current funding stage?`,
    engineeringTeamSize: `What is the size of your engineering team?`,
    rolesHiring: `Which roles are you looking to hire for in the next 3 months?`,
    seniorityLevel: `What is the most urgent seniority level you need to hire?`,
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
    prefix: `By submitting this form, you agree to our`,
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
} as const

const confirmEmailScreen = {
  error: {
    title: `Error verifying your email!`,
    description: `Please try again later.`,
    backToHomepage: `Back to homepage`,
    checkEmailMessage: `If you do not receive an email within 5 minutes, please check your spam folder.`,
  },
  success: {
    title: `You verified your email!`,
    description: `You will receive an email with your referral code soon. Please check your inbox.`,
    backToHomepage: `Back to homepage`,
    checkEmailMessage: `If you do not receive an email within 5 minutes, please check your spam folder.`,
  },
}

const personalitySection = {
  heading: `Know how they work, not just what they know`,
  description: `Verified skills show capability. Work-style insights add context on communication, collaboration, and team fit.`,
  cardColumns: [
    {
      title: `Understand work style`,
      icon: Brain,
      description: `See useful context on communication, teamwork, adaptability, and decision-making without reducing people to labels.`,
    },
    {
      title: `Real project results`,
      icon: FileText,
      description: `Combine practical evidence with work-style insights for a fuller view of each candidate.`,
    },
    {
      title: `Hire for the role and team`,
      icon: Building2,
      description: `Assess technical ability alongside the collaboration style your environment needs.`,
    },
    {
      title: `Look beyond a skill list`,
      icon: User,
      description: `Give candidates a fairer chance to show how they think, communicate, and contribute.`,
    },
  ],
}

// ============================================================================
// PROBLEM SECTION
// ============================================================================

const problem = {
  heading: `Hiring still runs on claims,`,
  headingHighlight: `not evidence.`,
  description: ``,
  s1: {
    title: `Candidates are asked to claim`,
    description: ``,
    points: [
      { id: 's1-point-1', text: `Which technologies they know` },
      { id: 's1-point-2', text: `How senior they are` },
      { id: 's1-point-3', text: `What they can deliver` },
    ],
  },
  s2: {
    title: `Hiring teams are left to guess from`,
    description: ``,
    points: [
      { id: 's2-point-1', text: `Keyword-heavy CVs` },
      { id: 's2-point-2', text: `Inconsistent titles and portfolios` },
      {
        id: 's2-point-3',
        text: `Short, subjective interviews`,
      },
    ],
  },
  conclusion: `The result is predictable:`,
  problem1: {
    title: `Strong engineers get overlooked`,
    description: `Ability is easy to miss when presentation matters more than proof.`,
    reasons: [
      {
        id: 'problem1-reason-1',
        text: `Good work is hidden behind a weak CV`,
      },
      {
        id: 'problem1-reason-2',
        text: `Pedigree outweighs demonstrated skill`,
      },
      {
        id: 'problem1-reason-3',
        text: `Great builders may not be great self-promoters`,
      },
    ],
    conclusion: `Real ability never gets seen.`,
  },
  problem2: {
    title: `Companies repeat the same screening`,
    description: `Hiring teams review hundreds of applications and still ask`,
    quote: `But can this person actually do the work?`,
    reasons: [
      { id: 'problem2-reason-1', text: `Every CV needs manual validation` },
      {
        id: 'problem2-reason-2',
        text: `Engineers repeat basic technical screens`,
      },
      { id: 'problem2-reason-3', text: `Bad signals increase hiring risk` },
    ],
    conclusion: `CV2.0 replaces guesswork with evidence validated by experienced peer engineers, not AI or an agency.`,
  },
}

const explainerVideo = {
  heading: `Find out how peer-vetted talent is`,
  headingHighlight: `help you find the best fit.`,
} as const

// ============================================================================
// STATS BAND SECTION
// ============================================================================

const stats = {
  heading: `Why choose us?`,
  items: [
    { value: `$0`, label: `until you hire` },
    { value: `61%`, label: `lower cost vs traditional hiring` },
    { value: `5 min`, label: `to get already interviewed talent` },
    { value: `100%`, label: `human-first vetting` },
  ],
} as const

// ============================================================================
// SMART AI SEARCH SECTION
// ============================================================================

const aiSearch = {
  eyebrow: `Smart AI search`,
  heading: `Paste a job description.`,
  headingHighlight: ` Meet your shortlist fit for the role.`,
  description: `Our AI reads your role and instantly surfaces candidates who are already peer-vetted, using personality matching and skills as parameters. No boolean filters, no resume piles.`,
  humanFirst: `AI does the searching. Humans do the vetting.`,
  placeholder: `Paste your job description...`,
  cta: `Try smart search`,
  points: [
    {
      title: `Instant matches`,
      description: `Paste a job description and get ranked, peer-vetted candidates in seconds.`,
      icon: Search,
    },
    {
      title: `Human-first vetting`,
      description: `AI narrows the field, senior engineers confirm real ability.`,
      icon: UserCheck,
    },
    {
      title: `No time wasted`,
      description: `Skip initial screening or potentially full interview processes.`,
      icon: Clock,
    },
  ],
  accessibility: {
    section: `Smart AI search for peer-vetted candidates`,
    inputMock: `Job description search preview`,
  },
} as const

// ============================================================================
// DIFFERENTIATORS SECTION
// ============================================================================

const differentiators = {
  heading: `Why Skill Verdict is different`,
  description: `A talent marketplace, but with a stricter, peer-sourced bar and a fuller picture of every candidate.`,
  iconAriaLabel: `Star icon for Skill Verdict differentiators`,
  cards: [
    {
      title: `Candidates are already screened for you`,
      description: `Candidates are vetted by senior engineers who do the work themselves, a higher bar than a screening call or an agency.`,
      icon: Users,
    },
    {
      title: `Personality on the CV2.0`,
      description: `Verified skills come with a work-style read on communication, collaboration, and decision-making, so you hire for the role and the team.`,
      icon: Brain,
    },
    {
      title: `Anonymous and bias-free`,
      description: `Reviewers assess the work, not the name, background, or location, surfacing overlooked talent and reducing bias.`,
      icon: Shield,
    },
    {
      title: `Verifiable CV2.0`,
      description: `Peer-vetted skills with linked reviewer evidence and full verification history, shareable via one link.`,
      icon: QrCode,
    },
  ],
} as const

// ============================================================================
// EXPORT ALL STRINGS AS CONSTANTS
// ============================================================================

export const strings = {
  explainerVideo,
  branding,
  navigation,
  hero,
  benefits,
  cvPreview,
  companyDiscovery,
  process,
  faq,
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
  confirmEmailScreen,
  personalitySection,
  problem,
  stats,
  aiSearch,
  differentiators,
}
