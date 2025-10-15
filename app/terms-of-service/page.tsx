import type { Metadata } from 'next'
import {
  Scale,
  FileText,
  Users,
  Shield,
  AlertTriangle,
  Gavel,
} from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import { TermsBreadcrumb } from '@/components/ui/breadcrumb'
import { strings } from '@/lib/strings'

export const metadata: Metadata = generateMetadata(pageSeoConfig.terms)

/**
 * Terms of Service page component
 * Displays legal terms and conditions for using the SkillVerdict platform
 */
export default function TermsOfServicePage() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='section-padding'>
        <div className='container-narrow'>
          {/* Breadcrumb Navigation */}
          <div className='mb-8'>
            <TermsBreadcrumb />
          </div>

          {/* Header Section */}
          <div className='text-center mb-16'>
            <div className='flex justify-center mb-6'>
              <div className='p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg'>
                <Scale className='h-8 w-8 text-white' aria-hidden='true' />
              </div>
            </div>
            <h1 className='text-display-2 text-slate-900 mb-4 text-balance'>
              {strings.legalPages.termsOfService.title}
            </h1>
            <p className='text-body-large text-slate-600 max-w-2xl mx-auto'>
              {strings.legalPages.termsOfService.description}
            </p>
            <p className='text-sm text-slate-500 mt-4'>
              Last updated: {strings.legalPages.termsOfService.lastUpdated}
            </p>
          </div>

          {/* Content Sections */}
          <div className='prose prose-slate max-w-none'>
            {/* Acceptance of Terms */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-blue-100 rounded-lg'>
                  <FileText
                    className='h-5 w-5 text-blue-600'
                    aria-hidden='true'
                  />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.termsOfService.sections.acceptance.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.termsOfService.sections.acceptance.content.map(
                  (paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Description of Service */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-green-100 rounded-lg'>
                  <Users
                    className='h-5 w-5 text-green-600'
                    aria-hidden='true'
                  />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.termsOfService.sections.description.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.termsOfService.sections.description.content.map(
                  (paragraph) =>
                    typeof paragraph === 'string' ? (
                      <p key={paragraph}>{paragraph}</p>
                    ) : null
                )}
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  {strings.legalPages.termsOfService.sections.description.content
                    .slice(1)
                    .map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                </ul>
              </div>
            </section>

            {/* User Accounts */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-purple-100 rounded-lg'>
                  <Shield
                    className='h-5 w-5 text-purple-600'
                    aria-hidden='true'
                  />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {
                    strings.legalPages.termsOfService.sections.userAccounts
                      .title
                  }
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-6'>
                <div>
                  <h3 className='text-heading-2 text-slate-800 mb-3'>
                    {
                      strings.legalPages.termsOfService.sections.userAccounts
                        .accountCreation.title
                    }
                  </h3>
                  <p>
                    {
                      strings.legalPages.termsOfService.sections.userAccounts
                        .accountCreation.content
                    }
                  </p>
                </div>
                <div>
                  <h3 className='text-heading-2 text-slate-800 mb-3'>
                    {
                      strings.legalPages.termsOfService.sections.userAccounts
                        .accountSecurity.title
                    }
                  </h3>
                  <p>
                    {
                      strings.legalPages.termsOfService.sections.userAccounts
                        .accountSecurity.content
                    }
                  </p>
                </div>
              </div>
            </section>

            {/* Prohibited Uses */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-red-100 rounded-lg'>
                  <AlertTriangle
                    className='h-5 w-5 text-red-600'
                    aria-hidden='true'
                  />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {
                    strings.legalPages.termsOfService.sections.prohibitedUses
                      .title
                  }
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                <p>
                  {
                    strings.legalPages.termsOfService.sections.prohibitedUses
                      .content[0]
                  }
                </p>
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  {strings.legalPages.termsOfService.sections.prohibitedUses.content
                    .slice(1)
                    .map((listItem) => (
                      <li key={listItem}>{listItem}</li>
                    ))}
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-indigo-100 rounded-lg'>
                  <Gavel
                    className='h-5 w-5 text-indigo-600'
                    aria-hidden='true'
                  />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {
                    strings.legalPages.termsOfService.sections
                      .intellectualProperty.title
                  }
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.termsOfService.sections.intellectualProperty.content.map(
                  (paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Termination */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-orange-100 rounded-lg'>
                  <AlertTriangle
                    className='h-5 w-5 text-orange-600'
                    aria-hidden='true'
                  />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.termsOfService.sections.termination.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.termsOfService.sections.termination.content.map(
                  (paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Disclaimer */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-yellow-100 rounded-lg'>
                  <AlertTriangle
                    className='h-5 w-5 text-yellow-600'
                    aria-hidden='true'
                  />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.termsOfService.sections.disclaimer.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                <p>
                  {
                    strings.legalPages.termsOfService.sections.disclaimer
                      .content
                  }
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-slate-100 rounded-lg'>
                  <Users
                    className='h-5 w-5 text-slate-600'
                    aria-hidden='true'
                  />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.termsOfService.sections.contact.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                <p>
                  {strings.legalPages.termsOfService.sections.contact.content}
                </p>
                <div className='bg-slate-50 p-6 rounded-lg border border-slate-200'>
                  <ul className='space-y-2'>
                    <li>
                      <strong>Email:</strong>{' '}
                      {strings.legalPages.termsOfService.sections.contact.email}
                    </li>
                    <li>
                      <strong>Address:</strong>{' '}
                      {
                        strings.legalPages.termsOfService.sections.contact
                          .address
                      }
                    </li>
                    <li>
                      <strong>Response Time:</strong>{' '}
                      {
                        strings.legalPages.termsOfService.sections.contact
                          .responseTime
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
