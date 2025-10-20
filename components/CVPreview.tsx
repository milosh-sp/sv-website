import type { LucideIcon } from 'lucide-react'
import {
  User,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  QrCode,
  Shield,
  Database,
  Link,
  FolderOpen,
  Globe,
} from 'lucide-react'
import { strings } from '@/lib/strings'
import { cn } from '@/lib/utils'
import { HeaderAndDescription } from './ui/HeaderAndDescription'

/**
 * Type definitions for CV data structures
 */
interface VerificationStatus {
  verified: boolean | 'pending'
  verifier?: string
}

interface SkillItem extends VerificationStatus {
  name: string
}

interface EducationItem extends VerificationStatus {
  degree: string
  institution: string
  year: string
}

interface ExperienceItem extends VerificationStatus {
  title: string
  company: string
  period: string
  description: string
}

interface ProjectItem extends VerificationStatus {
  name: string
  description: string
}

interface CertificationItem {
  name: string
  verifier: string
}

interface LanguageItem {
  name: string
  level: string
  verified: boolean | 'pending'
  verifier?: string
}

interface CVSectionProps {
  title: string
  icon: LucideIcon
  children?: React.ReactNode
  className?: string
}

interface VerificationBadgeProps {
  verified: boolean | 'pending'
  className?: string
}

interface VerifierTooltipProps {
  verifier: string
}

/**
 * Reusable CV Section Header Component
 * Single Responsibility: Renders section headers with consistent styling
 */
function CVSectionHeader({
  title,
  icon: Icon,
  children,
  className,
}: CVSectionProps) {
  return (
    <>
      <h3
        className={cn(
          'flex items-center gap-2 text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-200',
          className
        )}
      >
        <Icon className='h-5 w-5' aria-hidden='true' />
        {title}
      </h3>
      {children}
    </>
  )
}

/**
 * Reusable Verification Badge Component
 * Single Responsibility: Displays verification status with consistent styling
 */
function VerificationBadge({ verified, className }: VerificationBadgeProps) {
  let statusConfig: { label: string; className: string }

  if (verified === true) {
    statusConfig = {
      label: strings.cvSampleData.statusLabels.verified,
      className: 'bg-green-100 text-green-800',
    }
  } else if (verified === 'pending') {
    statusConfig = {
      label: strings.cvSampleData.statusLabels.pending,
      className: 'bg-yellow-100 text-yellow-800',
    }
  } else {
    statusConfig = {
      label: strings.cvSampleData.statusLabels.unverified,
      className: 'bg-gray-100 text-gray-800',
    }
  }

  return (
    <span
      className={cn(
        'text-xs px-2 py-1 rounded-full',
        statusConfig.className,
        className
      )}
    >
      {statusConfig.label}
    </span>
  )
}

/**
 * Reusable Verifier Tooltip Component
 * Single Responsibility: Displays verifier information on hover
 */
function VerifierTooltip({ verifier }: VerifierTooltipProps) {
  const [verifierName, verifierRole] = verifier.split(' - ')

  return (
    <div className='absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-lg max-w-48'>
      <div className='text-center'>
        <div>Verified by {verifierName}</div>
        <div className='text-slate-300 mt-1'>{verifierRole}</div>
      </div>
      <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900' />
    </div>
  )
}

/**
 * CV Header Component
 * Single Responsibility: Displays user profile header
 */
function CVHeader() {
  return (
    <div className='bg-slate-800 text-white p-8'>
      <div className='flex flex-col md:flex-row items-center gap-6'>
        <div className='w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center'>
          <User className='h-12 w-12 text-white' aria-hidden='true' />
        </div>
        <div className='text-center md:text-left'>
          <h2 className='text-2xl md:text-3xl font-bold mb-2 text-white'>
            {strings.cvSampleData.profile.name}
          </h2>
          <p className='text-lg text-slate-200'>
            {strings.cvSampleData.profile.title}
          </p>
        </div>
      </div>
    </div>
  )
}

/**
 * Profile Section Component
 * Single Responsibility: Displays user bio
 */
function ProfileSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.profile}
        icon={User}
      >
        <p className='text-gray-600 text-sm'>
          {strings.cvSampleData.profile.bio}
        </p>
      </CVSectionHeader>
    </div>
  )
}

/**
 * Technical Skills Section Component
 * Single Responsibility: Displays technical skills with verification status
 */
function TechnicalSkillsSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.technicalSkills}
        icon={Code}
      >
        <div className='grid grid-cols-2 gap-3'>
          {strings.cvSampleData.skills.map(
            (skill: SkillItem, index: number) => (
              <div
                key={`skill-${skill.name}-${index}`}
                className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative'
              >
                <span className='font-medium text-sm text-slate-800'>
                  {skill.name}
                </span>
                <VerificationBadge verified={skill.verified} />
                {skill.verified && skill.verifier && (
                  <VerifierTooltip verifier={skill.verifier} />
                )}
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}

/**
 * Education Section Component
 * Single Responsibility: Displays education history
 */
function EducationSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.education}
        icon={GraduationCap}
      >
        <div className='space-y-4'>
          {strings.cvSampleData.education.map(
            (edu: EducationItem, index: number) => (
              <div
                key={`education-${edu.degree}-${index}`}
                className='relative'
              >
                <div className='flex justify-between items-start mb-1'>
                  <span className='font-medium text-sm'>{edu.degree}</span>
                  <span className='text-xs text-gray-500'>{edu.year}</span>
                </div>
                <div className='text-slate-800 text-sm mb-2'>
                  {edu.institution}
                </div>
                <VerificationBadge
                  verified={edu.verified}
                  className='absolute top-0 right-0'
                />
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}

/**
 * Experience Section Component
 * Single Responsibility: Displays work experience
 */
function ExperienceSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.experience}
        icon={Briefcase}
      >
        <div className='space-y-6'>
          {strings.cvSampleData.experience.map(
            (job: ExperienceItem, index: number) => (
              <div
                key={`experience-${job.company}-${index}`}
                className='relative pb-4'
              >
                <div className='flex justify-between items-start mb-1'>
                  <span className='font-medium text-sm'>{job.title}</span>
                  <span className='text-xs text-gray-500'>{job.period}</span>
                </div>
                <div className='text-slate-800 text-sm mb-2'>{job.company}</div>
                <p className='text-gray-600 text-xs'>{job.description}</p>
                <VerificationBadge
                  verified={job.verified}
                  className='absolute top-0 right-0'
                />
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}

/**
 * Projects Section Component
 * Single Responsibility: Displays project portfolio
 */
function ProjectsSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.projects}
        icon={FolderOpen}
      >
        <div className='space-y-4'>
          {strings.cvSampleData.projects.map(
            (project: ProjectItem, index: number) => (
              <div
                key={`project-${project.name}-${index}`}
                className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative'
              >
                <div className='flex items-center justify-between mb-2'>
                  <span className='font-medium text-sm text-slate-800'>
                    {project.name}
                  </span>
                  <VerificationBadge verified={project.verified} />
                </div>
                <p className='text-slate-600 text-xs'>{project.description}</p>
                {project.verified && project.verifier && (
                  <VerifierTooltip verifier={project.verifier} />
                )}
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}

/**
 * Certifications Section Component
 * Single Responsibility: Displays professional certifications
 */
function CertificationsSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.certifications}
        icon={Award}
      >
        <div className='grid grid-cols-1 gap-3'>
          {strings.cvSampleData.certifications.map(
            (cert: CertificationItem, index: number) => (
              <div
                key={`cert-${cert.name}-${index}`}
                className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 flex items-center justify-between group relative'
              >
                <span className='font-medium text-sm text-slate-800'>
                  {cert.name}
                </span>
                <VerificationBadge verified={true} />
                <VerifierTooltip verifier={cert.verifier} />
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}

/**
 * Languages Section Component
 * Single Responsibility: Displays language proficiency
 */
function LanguagesSection() {
  return (
    <div>
      <CVSectionHeader
        title={strings.cvSampleData.sections.languages}
        icon={Globe}
      >
        <div className='grid grid-cols-1 gap-3'>
          {strings.cvSampleData.languages.map(
            (language: LanguageItem, index: number) => (
              <div
                key={`language-${language.name}-${index}`}
                className='bg-slate-50 p-3 rounded-lg border-l-4 border-slate-700 group relative'
              >
                <div className='flex items-center justify-between mb-1'>
                  <span className='font-medium text-sm text-slate-800'>
                    {language.name}
                  </span>
                  <VerificationBadge verified={language.verified} />
                </div>
                <div className='text-slate-600 text-xs'>{language.level}</div>
                {language.verified === true && language.verifier && (
                  <VerifierTooltip verifier={language.verifier} />
                )}
              </div>
            )
          )}
        </div>
      </CVSectionHeader>
    </div>
  )
}

/**
 * QR Code Section Component
 * Single Responsibility: Displays QR code for CV verification
 */
function QRCodeSection() {
  return (
    <div className='bg-gray-50 p-6 text-center border-t'>
      <div className='w-24 h-24 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center'>
        <QrCode className='h-12 w-12 text-gray-600' aria-hidden='true' />
      </div>
      <p className='text-sm text-gray-600 mb-2'>
        {strings.cvSampleData.qrSection.scanText}
      </p>
      <button
        type='button'
        className='text-slate-800 text-sm hover:underline bg-transparent border-none cursor-pointer'
        aria-label='View verification history'
      >
        {strings.cvSampleData.qrSection.viewHistoryLink}
      </button>
    </div>
  )
}

/**
 * CV Features Grid Component
 * Single Responsibility: Displays CV platform features
 */
function CVFeaturesGrid() {
  const FEATURE_ICONS: readonly LucideIcon[] = [
    QrCode,
    Shield,
    Database,
    Link,
  ] as const

  const featuresWithIcons = strings.cvPreview.features.map(
    (feature, index) => ({
      ...feature,
      icon: FEATURE_ICONS[index],
    })
  )

  return (
    <div className='grid md:grid-cols-4 gap-8 mt-12'>
      {featuresWithIcons.map((feature, index) => (
        <div
          key={`feature-${feature.title}-${index}`}
          className='text-center p-6'
        >
          <div
            className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4'
            aria-hidden='true'
          >
            <feature.icon className='h-8 w-8 text-slate-800' />
          </div>
          <h3 className='font-semibold text-gray-900 mb-2'>{feature.title}</h3>
          <p className='text-gray-600 text-sm'>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

/**
 * CV Preview Section Component
 * Displays a sample CV with verified skills and achievements
 * Demonstrates the CV2.0 platform capabilities
 *
 * @remarks
 * This component follows SOLID principles:
 * - Single Responsibility: Each sub-component handles one specific section
 * - Open/Closed: Extensible through composition, closed for modification
 * - Liskov Substitution: All section components follow consistent interfaces
 * - Interface Segregation: Minimal, focused prop interfaces
 * - Dependency Inversion: Depends on abstractions (props) not concrete implementations
 */
export function CVPreview() {
  return (
    <section
      id='cv-preview'
      className='py-20 bg-white'
      aria-label='CV Preview Section'
    >
      <div className='container mx-auto px-4'>
        <HeaderAndDescription
          heading={strings.cvPreview.heading}
          description={strings.cvPreview.description}
          className='mb-12'
        />
        <p className='text-sm text-gray-500 max-w-3xl mx-auto text-center mb-12'>
          {strings.cvPreview.note}
        </p>

        <div className='max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden'>
          <CVHeader />

          <div className='grid md:grid-cols-2 gap-8 p-8'>
            {/* Left Column */}
            <div className='space-y-8'>
              <ProfileSection />
              <TechnicalSkillsSection />
              <EducationSection />
              <ExperienceSection />
            </div>

            {/* Right Column */}
            <div className='space-y-8'>
              <ProjectsSection />
              <CertificationsSection />
              <LanguagesSection />
            </div>
          </div>

          <QRCodeSection />
        </div>

        <CVFeaturesGrid />
      </div>
    </section>
  )
}
