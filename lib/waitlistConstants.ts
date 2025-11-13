/**
 * Shared constants for waitlist forms
 * Centralized to eliminate duplication across form components
 */

// ============================================================================
// FORM STEP CONFIGURATION
// ============================================================================

const TOTAL_FORM_STEPS = 4

// ============================================================================
// SKILL AREAS & TECHNICAL SKILLS
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

const SKILL_AREAS: SkillArea[] = [
  { id: 'frontend', label: 'Frontend Development' },
  { id: 'backend', label: 'Backend Development' },
  { id: 'fullstack', label: 'Full Stack Development' },
  { id: 'devops', label: 'DevOps' },
  { id: 'data', label: 'Data Science' },
]

const TECHNICAL_SKILLS: TechnicalSkill[] = [
  { id: 'react', label: 'React' },
  { id: 'typescript', label: 'TypeScript' },
  { id: 'nodejs', label: 'Node.js' },
  { id: 'python', label: 'Python' },
  { id: 'aws', label: 'AWS' },
]

// ============================================================================
// CANDIDATE FORM OPTIONS
// ============================================================================

const PROFESSIONAL_STATUS_OPTIONS = [
  { value: 'student', label: 'Student' },
  { value: 'unemployed', label: 'Unemployed' },
  { value: 'employed-fulltime', label: 'Employed (full-time)' },
  { value: 'employed-parttime', label: 'Employed (part-time)' },
  { value: 'freelancer', label: 'Freelancer' },
]

const TECH_COMMUNITY_OPTIONS = [
  { value: 'yes', label: 'Yes, specify:' },
  { value: 'no', label: 'No' },
]

const SKILL_VALIDATION_OPTIONS = [
  { value: 'strongly-agree', label: 'Strongly Agree' },
  { value: 'agree', label: 'Agree' },
  { value: 'neutral', label: 'Neutral' },
  { value: 'disagree', label: 'Disagree' },
  { value: 'strongly-disagree', label: 'Strongly Disagree' },
]

const JOB_SEARCH_CHALLENGE_OPTIONS = [
  { value: 'no-response', label: 'Getting no response after applying' },
  { value: 'cv-rejections', label: 'My CV is getting rejections' },
  {
    value: 'no-feedback',
    label:
      'Rejection without clear feedback (even after passing technical rounds)',
  },
  {
    value: 'bias',
    label: 'Bias (e.g., based on location, background, age, gender)',
  },
  { value: 'not-knowing', label: 'Not knowing what to improve' },
  { value: 'lack-mentorship', label: 'Lack of mentorship / guidance' },
  { value: 'other', label: 'Other:' },
]

const VALUABLE_OUTCOME_OPTIONS = [
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
]

// ============================================================================
// VERIFIER FORM OPTIONS
// ============================================================================

const YEARS_OF_EXPERIENCE_OPTIONS = [
  { value: '3-5', label: '3–5 years' },
  { value: '6-10', label: '6–10 years' },
  { value: '10+', label: '10+ years' },
]

const HOURS_PER_WEEK_OPTIONS = [
  { value: '1-3', label: '1-3 hours' },
  { value: '4-7', label: '4-7 hours' },
  { value: '8+', label: '8+ hours' },
]

const COACHING_MENTORING_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
]

const VERIFIER_MOTIVATION_OPTIONS = [
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
]

const PROFESSIONAL_FRUSTRATION_OPTIONS = [
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
]

// ============================================================================
// HIRING MANAGER FORM OPTIONS
// ============================================================================

const MANAGER_ROLE_OPTIONS = [
  { value: 'cto-vp', label: 'CTO / VP Engineering' },
  { value: 'head-engineering', label: 'Head of Engineering' },
  { value: 'tech-lead', label: 'Tech Lead / Engineering Manager' },
  { value: 'founder-ceo', label: 'Founder / CEO (hiring first engineers)' },
  { value: 'recruiter', label: 'Recruiter' },
]

const FUNDING_STAGE_OPTIONS = [
  { value: 'pre-seed', label: 'Pre-seed / Bootstrapped' },
  { value: 'seed', label: 'Seed' },
  { value: 'series-a', label: 'Series A' },
  { value: 'series-b', label: 'Series B' },
  { value: 'profitable', label: 'Profitable / Late-Stage' },
]

const TEAM_SIZE_OPTIONS = [
  { value: '0', label: '0' },
  { value: '1-5', label: '1-5' },
  { value: '6-15', label: '6-15' },
  { value: '16-30', label: '16-30' },
  { value: '30+', label: '30+' },
]

const ROLES_HIRING_OPTIONS = [
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
]

const SENIORITY_LEVEL_OPTIONS = [
  { value: 'intern', label: 'Intern' },
  { value: 'mid-level', label: 'Mid-level' },
  { value: 'senior', label: 'Senior' },
  { value: 'staff-principal', label: 'Staff / Principal' },
  {
    value: 'generalists',
    label: 'Hands-on startup generalists (wears many hats)',
  },
]

const INTERVIEW_HOURS_OPTIONS = [
  { value: 'less-10', label: 'Less than 10 hours' },
  { value: '10-20', label: '10 - 20 hours' },
  { value: '20-40', label: '20 - 40 hours' },
  { value: '40+', label: "40+ hours (it's a massive drain)" },
  { value: 'dont-know', label: "I don't know" },
]

const HIRING_FRUSTRATIONS_OPTIONS = [
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
]

const HIRING_FAILURES_OPTIONS = [
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
]

export {
  TOTAL_FORM_STEPS,
  SKILL_AREAS,
  TECHNICAL_SKILLS,
  PROFESSIONAL_STATUS_OPTIONS,
  TECH_COMMUNITY_OPTIONS,
  SKILL_VALIDATION_OPTIONS,
  JOB_SEARCH_CHALLENGE_OPTIONS,
  VALUABLE_OUTCOME_OPTIONS,
  YEARS_OF_EXPERIENCE_OPTIONS,
  HOURS_PER_WEEK_OPTIONS,
  COACHING_MENTORING_OPTIONS,
  VERIFIER_MOTIVATION_OPTIONS,
  PROFESSIONAL_FRUSTRATION_OPTIONS,
  MANAGER_ROLE_OPTIONS,
  FUNDING_STAGE_OPTIONS,
  TEAM_SIZE_OPTIONS,
  ROLES_HIRING_OPTIONS,
  SENIORITY_LEVEL_OPTIONS,
  INTERVIEW_HOURS_OPTIONS,
  HIRING_FRUSTRATIONS_OPTIONS,
  HIRING_FAILURES_OPTIONS,
}
