import type { Metadata } from 'next'
import { Database, Eye, Globe, Lock, Shield, UserCheck } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import { strings } from '@/lib/strings'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

export const metadata: Metadata = generateMetadata(pageSeoConfig.privacy)

export default function PrivacyPolicyPage() {
  return (
    <div className='min-h-screen bg-background'>
      <div className='section-padding'>
        <div className='container-narrow'>
          <div className='mb-8'></div>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <div className='flex justify-center mb-6'>
              <div className='p-4 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg'>
                <Shield className='h-8 w-8 text-white' aria-hidden='true' />
              </div>
            </div>
            <Heading level={1} variant='display' className='mb-4'>
              {strings.legalPages.privacyPolicy.title}
            </Heading>
            <Text
              variant='body-large'
              className='text-slate-600 max-w-2xl mx-auto'
            >
              {strings.legalPages.privacyPolicy.description}
            </Text>
            <div className='text-sm text-slate-500 mt-4 space-y-1'>
              <Text variant='caption' className='text-slate-500'>
                Last Updated On: {strings.legalPages.privacyPolicy.lastUpdated}
              </Text>
              <Text variant='caption' className='text-slate-500'>
                Effective Date: {strings.legalPages.privacyPolicy.effectiveDate}
              </Text>
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
                <Heading level={2} variant='heading'>
                  {strings.legalPages.privacyPolicy.sections.introduction.title}
                </Heading>
              </div>
              <div className='space-y-4'>
                {strings.legalPages.privacyPolicy.sections.introduction.content.map(
                  (paragraph) => (
                    <Text
                      key={paragraph}
                      variant='body'
                      className='text-slate-700'
                    >
                      {paragraph}
                    </Text>
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
                <Heading level={2} variant='heading'>
                  {
                    strings.legalPages.privacyPolicy.sections
                      .informationWeCollect.title
                  }
                </Heading>
              </div>
              <div className='space-y-4'>
                {strings.legalPages.privacyPolicy.sections.informationWeCollect.content.map(
                  (paragraph) => (
                    <Text
                      key={paragraph}
                      variant='body'
                      className='text-slate-700'
                    >
                      {paragraph}
                    </Text>
                  )
                )}
                <ul className='list-disc list-inside space-y-2 ml-4'>
                  {strings.legalPages.privacyPolicy.sections.informationWeCollect.items.map(
                    (item) => (
                      <li key={item}>{item}</li>
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
                <Heading level={2} variant='heading'>
                  {strings.legalPages.privacyPolicy.sections.howWeUse.title}
                </Heading>
              </div>
              <div className='space-y-4'>
                {strings.legalPages.privacyPolicy.sections.howWeUse.content.map(
                  (paragraph) => (
                    <Text
                      key={paragraph}
                      variant='body'
                      className='text-slate-700'
                    >
                      {paragraph}
                    </Text>
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
                <Heading level={2} variant='heading'>
                  {
                    strings.legalPages.privacyPolicy.sections.informationSharing
                      .title
                  }
                </Heading>
              </div>
              <div className='space-y-4'>
                {strings.legalPages.privacyPolicy.sections.informationSharing.content.map(
                  (paragraph) => (
                    <Text
                      key={paragraph}
                      variant='body'
                      className='text-slate-700'
                    >
                      {paragraph}
                    </Text>
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
                <Heading level={2} variant='heading'>
                  {
                    strings.legalPages.privacyPolicy.sections.dataRetention
                      .title
                  }
                </Heading>
              </div>
              <div className='space-y-4'>
                {strings.legalPages.privacyPolicy.sections.dataRetention.content.map(
                  (paragraph) => (
                    <Text
                      key={paragraph}
                      variant='body'
                      className='text-slate-700'
                    >
                      {paragraph}
                    </Text>
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
                <Heading level={2} variant='heading'>
                  {strings.legalPages.privacyPolicy.sections.yourRights.title}
                </Heading>
              </div>
              <div className='space-y-4'>
                {strings.legalPages.privacyPolicy.sections.yourRights.content.map(
                  (paragraph) => (
                    <Text
                      key={paragraph}
                      variant='body'
                      className='text-slate-700'
                    >
                      {paragraph}
                    </Text>
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
                <Heading level={2} variant='heading'>
                  {strings.legalPages.privacyPolicy.sections.cookies.title}
                </Heading>
              </div>
              <div className='space-y-4'>
                {strings.legalPages.privacyPolicy.sections.cookies.content.map(
                  (paragraph) => (
                    <Text
                      key={paragraph}
                      variant='body'
                      className='text-slate-700'
                    >
                      {paragraph}
                    </Text>
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
                <Heading level={2} variant='heading'>
                  {strings.legalPages.privacyPolicy.sections.dataSecurity.title}
                </Heading>
              </div>
              <div className='space-y-4'>
                {strings.legalPages.privacyPolicy.sections.dataSecurity.content.map(
                  (paragraph) => (
                    <Text
                      key={paragraph}
                      variant='body'
                      className='text-slate-700'
                    >
                      {paragraph}
                    </Text>
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
                <Heading level={2} variant='heading'>
                  {
                    strings.legalPages.privacyPolicy.sections.grievanceOfficer
                      .title
                  }
                </Heading>
              </div>
              <div className='space-y-4'>
                {strings.legalPages.privacyPolicy.sections.grievanceOfficer.content.map(
                  (paragraph) => (
                    <Text
                      key={paragraph}
                      variant='body'
                      className='text-slate-700'
                    >
                      {paragraph}
                    </Text>
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
                <Heading level={2} variant='heading'>
                  Contact Information
                </Heading>
              </div>
              <div className='space-y-4'>
                <div className='bg-slate-50 p-6 rounded-lg border border-slate-200'>
                  <ul className='space-y-2'>
                    <li>
                      <strong>Email:</strong>{' '}
                      {strings.legalPages.privacyPolicy.contact.email}
                    </li>
                    {strings.legalPages.privacyPolicy.contact.phone && (
                      <li>
                        <strong>Phone:</strong>{' '}
                        {strings.legalPages.privacyPolicy.contact.phone}
                      </li>
                    )}
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
