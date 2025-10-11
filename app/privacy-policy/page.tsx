import type { Metadata } from 'next'
import { Shield, Lock, Eye, UserCheck, Database, Globe } from 'lucide-react'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import { PrivacyPolicyBreadcrumb } from '@/components/ui/breadcrumb'
import { strings } from '@/lib/strings'

export const metadata: Metadata = generateMetadata(pageSeoConfig.privacy)

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding">
        <div className="container-narrow">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <PrivacyPolicyBreadcrumb />
          </div>
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <Shield className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-display-2 text-slate-900 mb-4 text-balance">
              {strings.legalPages.privacyPolicy.title}
            </h1>
            <p className="text-body-large text-slate-600 max-w-2xl mx-auto">
              {strings.legalPages.privacyPolicy.description}
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Last updated: {strings.legalPages.privacyPolicy.lastUpdated}
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-slate max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Eye className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Introduction
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  SkillVerdict ("we," "our," or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our
                  skill verification platform.
                </p>
                <p>
                  By using SkillVerdict, you agree to the collection and use of
                  information in accordance with this policy. If you do not
                  agree with our policies and practices, do not use our service.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Database className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Information We Collect
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-6">
                <div>
                  <h3 className="text-heading-2 text-slate-800 mb-3">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name, email address, and contact information</li>
                    <li>Professional background and work experience</li>
                    <li>Skills, certifications, and educational background</li>
                    <li>Profile information and professional achievements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-heading-2 text-slate-800 mb-3">
                    Technical Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Code submissions and technical assessments</li>
                    <li>Verification results and skill ratings</li>
                    <li>Platform usage data and interaction patterns</li>
                    <li>Device information and IP addresses</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <UserCheck className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  How We Use Your Information
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our skill verification services</li>
                  <li>
                    Process verification requests and generate skill assessments
                  </li>
                  <li>
                    Connect you with qualified verifiers and potential employers
                  </li>
                  <li>Improve our platform and develop new features</li>
                  <li>
                    Communicate with you about your account and our services
                  </li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations and resolve disputes</li>
                </ul>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Globe className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Information Sharing and Disclosure
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-6">
                <div>
                  <h3 className="text-heading-2 text-slate-800 mb-3">
                    With Verifiers
                  </h3>
                  <p>
                    Your code submissions and technical materials are shared
                    only with qualified verifiers assigned to assess your
                    skills. Verifiers are bound by confidentiality agreements.
                  </p>
                </div>
                <div>
                  <h3 className="text-heading-2 text-slate-800 mb-3">
                    With Employers
                  </h3>
                  <p>
                    Your public profile and verified skills are visible to
                    potential employers. You control what information is
                    publicly displayed through your privacy settings.
                  </p>
                </div>
                <div>
                  <h3 className="text-heading-2 text-slate-800 mb-3">
                    Legal Requirements
                  </h3>
                  <p>
                    We may disclose your information if required by law, court
                    order, or to protect our rights, property, or safety.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 rounded-lg">
                  <Lock className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Data Security
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for sensitive data transmission</li>
                  <li>Secure data storage with regular security audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security training for our team members</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or
                  electronic storage is 100% secure. While we strive to protect
                  your information, we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <UserCheck className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Your Rights and Choices
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal
                    information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information (subject to legal requirements)
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data
                    to another service provider
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request limitation of how we
                    process your information
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to certain types of
                    processing
                  </li>
                </ul>
                <p>
                  To exercise these rights, please contact us at
                  privacy@skillverdict.com. We will respond to your request
                  within 30 days.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-teal-100 rounded-lg">
                  <Database className="h-5 w-5 text-teal-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Data Retention
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  We retain your personal information for as long as necessary
                  to provide our services and fulfill the purposes outlined in
                  this policy. Specific retention periods include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Account information: Until account deletion or 7 years after
                    last activity
                  </li>
                  <li>
                    Verification records: Permanently (to maintain credential
                    integrity)
                  </li>
                  <li>
                    Code submissions: 3 years after verification completion
                  </li>
                  <li>Communication records: 3 years for support purposes</li>
                </ul>
              </div>
            </section>

            {/* International Transfers */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Globe className="h-5 w-5 text-cyan-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  International Data Transfers
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  SkillVerdict operates globally, and your information may be
                  transferred to and processed in countries other than your own.
                  We ensure appropriate safeguards are in place for
                  international transfers, including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Standard contractual clauses approved by relevant
                    authorities
                  </li>
                  <li>Adequacy decisions for transfers to certain countries</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-pink-100 rounded-lg">
                  <Shield className="h-5 w-5 text-pink-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Children's Privacy
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  SkillVerdict is not intended for use by children under 16
                  years of age. We do not knowingly collect personal information
                  from children under 16. If we become aware that we have
                  collected personal information from a child under 16, we will
                  take steps to delete such information.
                </p>
              </div>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Eye className="h-5 w-5 text-amber-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Changes to This Privacy Policy
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
                <p>
                  For significant changes, we will provide additional notice
                  (such as email notification) at least 30 days before the
                  changes take effect.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <UserCheck className="h-5 w-5 text-slate-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Contact Us
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <ul className="space-y-2">
                    <li>
                      <strong>Email:</strong> privacy@skillverdict.com
                    </li>
                    <li>
                      <strong>Address:</strong> SkillVerdict Privacy Team
                    </li>
                    <li>
                      <strong>Response Time:</strong> We aim to respond within
                      48 hours
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
