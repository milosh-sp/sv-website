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
  Users,
} from 'lucide-react'
import { techSkills } from './tech-skills'

// ============================================================================
// SITE BRANDING & IDENTITY
// ============================================================================

const branding = {
  // Company name and tagline
  companyName: `Skill Verdict`,
  tagline: `Don't chase, attract!`,

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
  // Main navigation items
  menu: {
    home: `Home`,
    benefits: `Benefits`,
    cvPreview: `CV2.0`,
    companies: `Companies`,
    howToJoin: `How it works`,
    faqs: `FAQs`,
    contact: `Contact`,
  },

  // Mobile menu specific items
  mobile: {
    cvPreview: `CV2.0`,
    forCompanies: `Companies`,
    process: `Process`,
    faq: `FAQ`,
    contact: `Contact`,
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
  mainHeading: `Attract Careers, Not Just Interviews—With the Peer-Verified`,
  /**
   * Will be placed next to the main heading to the right side, with a gradient applied
   */
  mainHeadingHighlight: ` CV2.0!`,
  subHeading: `Backed by anonymous, peer-validated reviews and real-world skill assessments, CV2.0 proves your true engineering ability and delivers actionable feedback to help you grow—while giving companies instant,trusted access to verified talent they can rely on`,
  callToAction: `Choose your path to get started:`,

  // Action buttons
  buttons: {
    verifySkills: `Verify my skills`,
    earnByVerifying: `Earn by verifying`,
    hireMeNow: `Hire me`,
  },

  // Trust indicators with embedded icons
  trustIndicators: [
    {
      text: `100% Secure & transparent`,
      icon: Shield,
    },
    {
      text: `Your time, your schedule`,
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
    openSignupModal: `Navigate to the candidate wait-list`,
    openEarnModal: `Navigate to the verifier wait-list`,
  },
} as const

// ============================================================================
// BENEFITS SECTION
// ============================================================================
const benefits = {
  // Section header
  heading: `Peer-Powered Skill Verification, Inspired by Community Notes`,
  headingHighlight: `Skill`,
  description: `Inspired by models like Twitter’s 
              Community Notes, Skill Verdict brings transparent,
               community-driven verification to your skills—enabling 
               trust and bias-free recognition for every member.`,

  // Tab labels
  tabs: {
    members: `Members`,
    guruMembers: `Guru members`,
    hiringManagers: `Companies`,
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
        title: `Your verified skill badges`,
        description: `Get verified skill badges on your profile—professionally 
                      endorsed evidence of your abilities.`,
        icon: Medal,
      },
      {
        title: `Anonymous, fair and unbiased skill verification`,
        description: `We make that the verification process as transparent and fair as possible, the guru members
        will not know who they are verifying, which insures they focus on the candidate's skills and not their personal biases.`,
        icon: Users,
      },
      {
        title: `Increase your hiring chances`,
        description: `Verified skills from respected professionals catch employers 
        attention—don't just claim you’re good, prove it and possibly skip technical interviews!`,
        icon: Rocket,
      },
      {
        title: `Passive discovery`,
        description: `No need to apply to jobs, jobs will be apply to you. With passive discovery 
        companies will contact you and offer you opportunities.`,
        icon: QrCode,
      },
    ],
  },

  // Guru member section
  guruMembers: {
    iconAriaLabel: `Dollar sign icon for tech professionals`,
    description: `Top talent is valued in the Skill Verdict community. Monetize your
      expertise by verifying the skills of other members.`,
    benefits: [
      {
        title: `Earn extra income`,
        description: `Get paid for reviewing code and conducting technical interviews—turn your experience into extra income.`,
        icon: DollarSign,
      },
      {
        title: `Your schedule`,
        description: `By verifying skills, you establish yourself as an industry expert, building your professional reputation among peers.`,
        icon: Calendar,
      },
      {
        title: `Build your reputation`,
        description: `By verifying skills, you establish yourself as an industry expert, building your professional reputation among peers`,
        icon: TrendingUp,
      },
      {
        title: `Expand your skills and network`,
        description: `By collaborating with talented members across the Skill Verdict community. `,
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
  // Section header
  heading: `Your CV2.0 - The Living CV that Opens Opportunities`,
  description: `Showcase your verified skills in a way regular resumes can’t. With CV2.0, your profile automatically updates with your latest achievements and peer reviews, no manual work required.

Demonstrate real expertise with verified badges, and always keep your credentials fresh, accurate, and matched to what employers actually want to see.

Worried about privacy or control? Your data stays yours—customize what gets displayed and update your CV2.0 anytime.`,
  note: `Note: This is a demo—help us shape CV2.0 to fit your needs. Your feedback will make it even more powerful and personalized. The community will build the CV2.0, not us.`,

  // CV features
  features: [
    {
      title: `Share instantly, connect everywhere`,
      description: `Anyone can access your CV2.0 by scanning your unique QR code — network in person, online, or at events with one seamless tap.`,
      icon: QrCode,
    },
    {
      title: `Skill Badges`,
      description: `Visual badges highlight every skill you’ve been peer-verified for — stand out to employers and collaborators at a glance.`,
      icon: Shield,
    },
    {
      title: `Optimized metadata`,
      description: `Your live CV2.0 and exported PDF come with optimized metadata, so you’re more discoverable in recruiter searches and professional databases.`,
      icon: Database,
    },
    {
      title: `Your brand, your personal business card`,
      description: `Add your CV2.0 to your Apple or Google Wallet — now your verified skills travel with you, ready to share anytime, anywhere.`,
      icon: IdCard,
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
  heading: `Discover and Hire Verified Talent, Instantly`,
  description: `Ditch the guesswork. Skill Verdict gives your company access to a trusted pool of peer-verified engineers—proven in real-world conditions, not just interview puzzles.`,
  // Benefits list
  benefits: [
    {
      title: `Instantly identify true experts`,
      description: `Browse a talent pool where every candidate's abilities are validated through anonymous, real-world project evaluations—no more relying on self-reported claims or artificial assessments.`,
      icon: UserCheck,
    },
    {
      title: `Reduce Time-to-Hire`,
      description: `Skip redundant screening rounds. Candidates demonstrate proven skills in hands-on, scenario-based reviews, so your team interviews only those already recognized for excellence by domain experts.`,
      icon: Clock,
    },

    {
      title: `Access Broader, More Diverse Talent`,
      description: `Skill Verdict's decentralized, anonymous review process neutralizes hiring bias, allowing you to connect with high-potential professionals from all backgrounds and geographies—opening doors to hidden talent.`,
      icon: Globe,
    },
    {
      title: `Seamless Integration & Passive Candidate Discovery`,
      description: `Reach out directly to pre-qualified professionals whose verified skills match your exact requirements, or let passive discovery bring strong contenders to you.`,
      icon: Search,
    },
  ],
  buttons: {
    hiringManagerCta: `Discover verified talent`,
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
  heading: `How Skill Verdict Works`,
  description: {
    members: `As a Member, your skills are evaluated by Guru reviewers with their own real world techniques so every endorsement reflects practical, professional expertise, not just another generic quiz. Want to expand your abilities? Verify as many skills as you like and add new ones whenever you’re ready.
     Each review boosts your profile with peer-validated badges,
      making you stand out to employers who trust 
      Skill Verdict’s hiring signal.`,
    guruMembers: `As a Guru, you set the standard — review Members’ skills your way, using your preferred methods and proven expertise. 
    Your evaluations shape authentic, actionable feedback, helping candidates grow through real-world scenarios, not just theory.
By mentoring and validating others,
 you not only influence the next generation of
 talent but also build your reputation as a respected industry expert.`,
  },

  // Tab labels
  tabs: {
    members: `Members`,
    guruMembers: `Guru members`,
  },

  // Process steps for members
  memberSteps: [
    {
      title: `1. Create your profile`,
      description: `Connect your professional and portfolio accounts to instantly build your new, dynamic CV2.0 and showcase your real-world experience.`,
      icon: FileText,
    },
    {
      title: `2. Prepare for verification`,
      description: `Select any skills you want to get verified (add more any time) and pick your Guru for a personalized, skill-based assessment.`,
      icon: Brain,
    },
    {
      title: `3. Verification process`,
      description: `Receive a practical assignment from your Guru reviewer, 
      complete it, and get actionable, 
      growth-focused feedback in a real conversation.`,
      icon: Video,
    },
    {
      title: `4. Final verdict`,
      description: `Pass the review to earn your verified skill badge, 
      boost your profile visibility, 
      and rate your experience to help others choose top Gurus.`,
      icon: CheckCircle,
    },
  ],

  // Process steps for tech professionals
  guruMembersteps: [
    {
      title: `1. Create your Guru profile`,
      description: `Connect your professional and portfolio accounts to showcase your real industry expertise and 
      set up your personalized Guru identity.`,
      icon: ClipboardList,
    },
    {
      title: `2. Pass the Guru interview`,
      description: `Join a collaborative interview with 
      other Gurus to demonstrate your technical know-how 
      and mentoring experience—the community only admits trusted experts.`,
      icon: Video,
    },
    {
      title: `3. Start mentoring`,
      description: `Access our intuitive AI-powered dashboard 
      to review candidates, design meaningful assessments,
      and provide valuable feedback that strengthens the entire community.`,
      icon: MessageCircle,
    },
    {
      title: `4. Earn recognition and income`,
      description: `Get rewarded for your expertise: 
      earn money with every review, grow your reputation as an industry leader, and sharpen your skills through real-world candidate challenges.`,
      icon: DollarSign,
    },
  ],
} as const

// ============================================================================
// FAQ SECTION
// ============================================================================
const faq = {
  membersHeading: `Frequently asked questions for Members`,
  verifiersHeading: `Frequently asked questions for Guru members`,
  hiringManagersHeading: `Frequently asked questions for Hiring Managers`,
  contactUsButton: `Have more questions? Contact us`,

  // Members FAQ
  members: [
    {
      question: `How does the verification process work?`,
      answer: `Our multi-step process lets your skills shine—every 
      submission is reviewed by expert Gurus with real
       hiring backgrounds (think Google, Netflix, Amazon, Meta).
        You’ll complete practical assessments, get actionable feedback, and, once verified,
         your skills are recorded and easily shareable by QR code or direct link—ready for 
         employers to see in seconds.`,
    },
    {
      question: `How long does it take to get a skill or skills verified?`,
      answer: `No more endless waiting. 
      Most verifications take just 1–3 day, so you can move forward in your job search or unlock new opportunities right away. 
      Timing depends on the skills and Guru availability, but we keep it fast.`,
    },
    {
      question: `Can I update my skills after verification?`,
      answer: `Absolutely. Add new skills anytime, or ask for re-verification as you level up your CV2.0 evolves with your career. You’re never locked, making ongoing growth and credibility effortless.`,
    },
    {
      question: `What if I’m not happy with my verification outcome?`,
      answer: `Your fairness matters. If you feel your skills weren’t evaluated properly, simply file a complaint. We’ll review your case, and if needed, connect you to a different Guru for a fresh, unbiased assessment—so you always have a voice and a path to a fair outcome.`,
    },
    {
      question: `Can I become a Guru member and earn?`,
      answer: `Absolutely! Once you've successfully verified your own skills, you can apply to become a Guru. Share your expertise, help others grow, and earn income each time you verify members’ skills. It’s a rewarding way to level up your own reputation, grow your network, and get paid for your experience.`,
    },
    {
      question: `Is my data and code safe? Who can see my verification results?`,
      answer: `Your privacy and security are at the core of Skill Verdict. 
      Only your assigned verifiers can see your code and assignment solutions. 
      Your public CV2.0 and profile will display just the skills you choose and you always control what’s visible to employers or the public. 
      You’re in charge of your data, your privacy, and every detail of your profile.`,
    },
  ],

  // Verifiers FAQ
  verifiers: [
    {
      question:
        'How do you prevent a guru member verifying their own skills on their CV2.0?',
      answer: `
      We have a strict policy in place to prevent this. When a guru member applies to verify their own skills, 
      the guru member won't be able to see themselves in the list of available verifiers and the Skill Verdict team will
      investigate the case, if an attempt at cheating is made`,
    },
    {
      question: `How much can I earn as a guru member?`,
      answer: `Your earning power grows with your expertise. For every skill assessment you complete, you earn a share of the verification fee, higher complexity means higher rewards. Track your income and see exactly what you’ve earned in your dashboard. The more you help, the more you earn.`,
    },
    {
      question: `What's the time commitment for being a guru member?`,
      answer: `You’re in control! There’s no minimum time requirement. Take on as many or as few verifications as you want, whenever it fits your schedule. It’s flexible by design, so you can contribute and earn on your terms, no pressure.`,
    },
    {
      question: `How does the "AI-assisted dashboard" help me?`,
      answer: `Our dashboard does the heavy lifting, so you can focus on what matters—mentoring and evaluating. It speeds up code review, flags patterns, organizes your queue, and provides templates for feedback, letting you deliver great, consistent experiences without extra busywork.`,
    },
    {
      question: `What happens if a candidate disputes my assessment?`,
      answer: `We stand by fairness. If a candidate disputes your review, our admins handle the case neutrally and privately. As long as your feedback is fair and constructive, your reputation remains protected. The platform is designed to support both verifiers and candidates, making sure everyone gets a fair process.`,
    },
    {
      question: `What payment methods do you support?`,
      answer: `We will support many payment methods, including bank transfer, Bitcoin, Ethereum, and more. You can view and manage your earnings in your dashboard.`,
    },
  ],

  hiringManagers: [
    {
      question: `Can I hire entire teams or just individuals?`,
      answer: `You can hire both pre-formed teams (squads) and individual vetted developers, helping to speed up project launches with ready-to-work groups.`,
    },
    {
      question: `What if a candidate doesn’t meet our skill level?`,
      answer: `Candidates receive clear feedback and a roadmap to improve, making every assessment a growth opportunity instead of a dead end.`,
    },
    {
      question: `How does peer-validated assessment reduce hiring risk?`,
      answer: `Traditional interviews often fail to surface true skill, leading to costly bad hires. 
      With CV 2.0, candidates are evaluated by a decentralized network of qualified engineers and domain experts. 
      This peer review system ensures that only candidates with proven, real-world abilities receive higher skill tiers.
       You can trust these credentials because they’re backed by community validation, not just a single company’s flawed process.`,
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
      cvPreview: `View CV2.0 Preview`,
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
    personality: `Personality: ISTP`,
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
      title: `Get Discovered — Unlock Opportunities!`,
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
      placeholder: `https://linkedin.com/in/yourprofile`,
      ariaLabel: `LinkedIn profile URL field`,
    },
    githubGitlabUrl: {
      label: `GitHub or GitLab Profile URL`,
      placeholder: `GitHub or GitLab profile URL`,
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
  heading: `Personality Tests That Add Depth to Real-World Performance`,
  description: `You’re not just looking at resumes or polished profiles you’re
   exploring a talent pool where every candidate has proven their abilities through real, 
  anonymous project work. This gives you a grounded, trustworthy starting point.
   But skills alone don’t tell the whole story. 
   That’s why Skill Verdict also includes personality tests to help you understand how someone works, not just what they can do.`,
  cardColumns: [
    {
      title: `Get an insight to who you are really hiring`,
      icon: Brain,
      description: `We use well-known frameworks like the 16-personality test (MBTI), along with other research-backed assessments that measure traits such as communication style, 
      teamwork, leadership tendencies, adaptability, and decision-making patterns. These tests aren’t treated as rigid labels or stereotypes. 
      Instead, they offer helpful context—insights into how a person naturally approaches challenges, collaborates with others, or stays motivated.`,
    },
    {
      title: `Real project results`,
      icon: FileText,
      description: `When combined with real project results, personality insights paint a fuller, more human picture of each candidate. 
      You can see whether someone thrives in fast-paced environments, 
      prefers structured tasks, leads with empathy, or brings a calm, analytical approach to problem-solving.`,
    },
    {
      title: `Helping you hire the right people`,
      icon: Building2,
      description: `For companies, this means making hiring decisions with greater confidence choosing people not 
      just for their technical ability, but for the way they’ll fit into teams, communicate, grow, and contribute over time. 
      You can hire an already pre-built team with the right personality and skills.`,
    },
    {
      title: `Get the right person for your company culture`,
      icon: User,
      description: ` 
      Skill Verdict brings skills and personality together to help you hire people who are not only capable,
      but also genuinely aligned with your culture and the way your team works.
      For candidates, it means being understood as a person, not just as a list of skills.
      `,
    },
  ],
}

// ============================================================================
// PROBLEM SECTION
// ============================================================================

const problem = {
  heading: `The Problem we solve`,
  headingHighlight: `Hiring is based on claims. Not proof.`,
  description: `Right now, the tech hiring process runs on trust. You say you know React. You say you worked with AWS. You say you're senior. And companies are expected to believe it.`,
  s1: {
    title: `It's all based on trust`,
    description: `The tech hiring process runs on trust, not evidence.`,
    points: [
      { id: 's1-point-1', text: `You say you know React` },
      { id: 's1-point-2', text: `You say you worked with AWS` },
      { id: 's1-point-3', text: `You say you're senior` },
    ],
  },
  s2: {
    title: `So they rely on`,
    description: `Companies rely on unverifiable signals to assess candidates.`,
    points: [
      { id: 's2-point-1', text: `CVs filled with keywords` },
      { id: 's2-point-2', text: `Job titles that don't reflect real ability` },
      {
        id: 's2-point-3',
        text: `LinkedIn profiles and GitHub links that are hard to evaluate`,
      },
      {
        id: 's2-point-4',
        text: `Interviews that test talking skills more than building skills`,
      },
    ],
  },
  problem1: {
    title: `Problem #1 — Skilled developers get ignored`,
    description: `Developers who are actually good at what they do often`,
    reasons: [
      {
        id: 'problem1-reason-1',
        text: `Don't know how to write impressive resumes`,
      },
      {
        id: 'problem1-reason-2',
        text: `Don't have big company names on their CV`,
      },
      {
        id: 'problem1-reason-3',
        text: `Struggle to "sell themselves" in interviews`,
      },
      {
        id: 'problem1-reason-4',
        text: `Get filtered out by keyword scanners before a human ever sees them`,
      },
      {
        id: 'problem1-reason-5',
        text: `Have trouble showing confidence during interviews`,
      },
    ],
  },
  problem2: {
    title: `Problem #2 — Companies can't trust what they see`,
    description: `Recruiters and hiring managers face hundreds of applications and still ask`,
    quote: `But can this person actually do the work?`,
    reasons: [
      { id: 'problem2-reason-1', text: `A CV is a description, not evidence` },
      { id: 'problem2-reason-2', text: `A portfolio is not standardized` },
      { id: 'problem2-reason-3', text: `Interviews are short and subjective` },
      {
        id: 'problem2-reason-4',
        text: `There is no reliable way to verify skills before hiring`,
      },
      {
        id: 'problem2-reason-5',
        text: `Don't know if the candidate will fit in the company's culture`,
      },
    ],
  },
  result: {
    title: `The Result`,
    description: `The hiring process rewards`,
    rewards: {
      title: `People who are good at presenting themselves`,
      items: [
        { id: 'result-reward-1', text: `Master the art of the interview` },
        { id: 'result-reward-2', text: `Know how to sell themselves` },
        { id: 'result-reward-3', text: `Have impressive resumes` },
      ],
    },
    shouldReward: {
      title: `Instead of`,
      items: [
        {
          id: 'result-should-1',
          text: `People who are good at building software`,
        },
        { id: 'result-should-2', text: `Those who can actually do the work` },
        { id: 'result-should-3', text: `Real technical ability` },
      ],
    },
  },
}

// ============================================================================
// EXPORT ALL STRINGS AS CONSTANTS
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
}
