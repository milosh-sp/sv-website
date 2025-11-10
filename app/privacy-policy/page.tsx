import type { Metadata } from 'next'
import { Database, Eye, Globe, Lock, Shield, UserCheck } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import { strings } from '@/lib/strings'
import { PrivacyPolicyBreadcrumb } from '@/components/PrivacyPolicyBreadcrumb'

export const metadata: Metadata = generateMetadata(pageSeoConfig.privacy)

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='section-padding'>
        <div className='container-narrow'>
          {/* Breadcrumb Navigation */}
          <div className='mb-8'>
            <PrivacyPolicyBreadcrumb />
          </div>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <div className='flex justify-center mb-6'>
              <div className='p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg'>
                <Shield className='h-8 w-8 text-white' aria-hidden='true' />
              </div>
            </div>
            <h1 className='text-display-2 text-slate-900 mb-4 text-balance'>
              {strings.legalPages.privacyPolicy.title}
            </h1>
            <p className='text-body-large text-slate-600 max-w-2xl mx-auto'>
              {strings.legalPages.privacyPolicy.description}
            </p>
            <div className='text-sm text-slate-500 mt-4 space-y-1'>
              <p>
                Last Updated On: {strings.legalPages.privacyPolicy.lastUpdated}
              </p>
              <p>
                Effective Date: {strings.legalPages.privacyPolicy.effectiveDate}
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className='prose prose-slate max-w-none'>
            {/* Introduction */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-blue-100 rounded-lg'>
                  <Eye className='h-5 w-5 text-blue-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.privacyPolicy.sections.introduction.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.privacyPolicy.sections.introduction.content.map(
                  (paragraph, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                    <p key={`intro-${index}`}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Information We Collect */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-green-100 rounded-lg'>
                  <Database className='h-5 w-5 text-green-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {
                    strings.legalPages.privacyPolicy.sections
                      .informationWeCollect.title
                  }
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.privacyPolicy.sections.informationWeCollect.content.map(
                  (paragraph, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                    <p key={`info-collect-${index}`}>{paragraph}</p>
                  )
                )}
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  {strings.legalPages.privacyPolicy.sections.informationWeCollect.items.map(
                    (item, index) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                      <li key={`collect-item-${index}`}>{item}</li>
                    )
                  )}
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-purple-100 rounded-lg'>
                  <UserCheck className='h-5 w-5 text-purple-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.privacyPolicy.sections.howWeUse.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.privacyPolicy.sections.howWeUse.content.map(
                  (paragraph, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                    <p key={`how-we-use-${index}`}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Information Sharing */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-orange-100 rounded-lg'>
                  <Globe className='h-5 w-5 text-orange-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {
                    strings.legalPages.privacyPolicy.sections.informationSharing
                      .title
                  }
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.privacyPolicy.sections.informationSharing.content.map(
                  (paragraph, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                    <p key={`info-sharing-${index}`}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Data Retention */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-teal-100 rounded-lg'>
                  <Database className='h-5 w-5 text-teal-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {
                    strings.legalPages.privacyPolicy.sections.dataRetention
                      .title
                  }
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.privacyPolicy.sections.dataRetention.content.map(
                  (paragraph, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                    <p key={`data-retention-${index}`}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Your Rights */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-indigo-100 rounded-lg'>
                  <UserCheck className='h-5 w-5 text-indigo-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.privacyPolicy.sections.yourRights.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.privacyPolicy.sections.yourRights.content.map(
                  (paragraph, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                    <p key={`your-rights-${index}`}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Cookies */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-amber-100 rounded-lg'>
                  <Eye className='h-5 w-5 text-amber-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.privacyPolicy.sections.cookies.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.privacyPolicy.sections.cookies.content.map(
                  (paragraph, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                    <p key={`cookies-${index}`}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Data Security */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-red-100 rounded-lg'>
                  <Lock className='h-5 w-5 text-red-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {strings.legalPages.privacyPolicy.sections.dataSecurity.title}
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.privacyPolicy.sections.dataSecurity.content.map(
                  (paragraph, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                    <p key={`data-security-${index}`}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Grievance / Data Protection Officer */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-slate-100 rounded-lg'>
                  <UserCheck className='h-5 w-5 text-slate-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  {
                    strings.legalPages.privacyPolicy.sections.grievanceOfficer
                      .title
                  }
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                {strings.legalPages.privacyPolicy.sections.grievanceOfficer.content.map(
                  (paragraph, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: Required for mapping array items in privacy policy
                    <p key={`grievance-${index}`}>{paragraph}</p>
                  )
                )}
              </div>
            </section>

            {/* Contact Information */}
            <section className='mb-12'>
              <div className='flex items-center gap-3 mb-6'>
                <div className='p-2 bg-blue-100 rounded-lg'>
                  <Globe className='h-5 w-5 text-blue-600' />
                </div>
                <h2 className='text-heading-1 text-slate-900 mb-0'>
                  Contact Information
                </h2>
              </div>
              <div className='text-body text-slate-700 space-y-4'>
                <div className='bg-slate-50 p-6 rounded-lg border border-slate-200'>
                  <ul className='space-y-2'>
                    <li>
                      <strong>Email:</strong>{' '}
                      {strings.legalPages.privacyPolicy.contact.email}
                    </li>
                    <li>
                      <strong>Phone:</strong>{' '}
                      {strings.legalPages.privacyPolicy.contact.phone}
                    </li>
                    <li>
                      <strong>Address:</strong>{' '}
                      {strings.legalPages.privacyPolicy.contact.address}
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
