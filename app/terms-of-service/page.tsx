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

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-padding">
        <div className="container-narrow">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <TermsBreadcrumb />
          </div>

          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
                <Scale className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
            </div>
            <h1 className="text-display-2 text-slate-900 mb-4 text-balance">
              {strings.legalPages.termsOfService.title}
            </h1>
            <p className="text-body-large text-slate-600 max-w-2xl mx-auto">
              {strings.legalPages.termsOfService.description}
            </p>
            <p className="text-sm text-slate-500 mt-4">
              Last updated: {strings.legalPages.termsOfService.lastUpdated}
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-slate max-w-none">
            {/* Acceptance of Terms */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Acceptance of Terms
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  By accessing and using SkillVerdict ("the Platform"), you
                  accept and agree to be bound by the terms and provision of
                  this agreement. If you do not agree to abide by the above,
                  please do not use this service.
                </p>
                <p>
                  These Terms of Service ("Terms") govern your use of our
                  website located at skillverdict.com and our skill verification
                  services (together or individually "Service") operated by
                  SkillVerdict.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Description of Service
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  SkillVerdict is a platform that provides skill verification
                  services for technology professionals. Our service includes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Peer-to-peer skill verification and assessment</li>
                  <li>Digital CV2.0 generation with verified credentials</li>
                  <li>Community-driven skill validation</li>
                  <li>Professional networking and discovery features</li>
                  <li>Verifier marketplace and earning opportunities</li>
                </ul>
              </div>
            </section>

            {/* User Accounts */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield className="h-5 w-5 text-purple-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  User Accounts
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-6">
                <div>
                  <h3 className="text-heading-2 text-slate-800 mb-3">
                    Account Creation
                  </h3>
                  <p>
                    To use certain features of our Service, you must register
                    for an account. You agree to provide accurate, current, and
                    complete information during the registration process and to
                    update such information to keep it accurate, current, and
                    complete.
                  </p>
                </div>
                <div>
                  <h3 className="text-heading-2 text-slate-800 mb-3">
                    Account Security
                  </h3>
                  <p>
                    You are responsible for safeguarding the password and for
                    maintaining the confidentiality of your account. You agree
                    not to disclose your password to any third party and to take
                    sole responsibility for any activities or actions under your
                    account.
                  </p>
                </div>
              </div>
            </section>

            {/* Prohibited Uses */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Prohibited Uses
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>You may not use our Service:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    For any unlawful purpose or to solicit others to perform
                    unlawful acts
                  </li>
                  <li>
                    To violate any international, federal, provincial, or state
                    regulations, rules, laws, or local ordinances
                  </li>
                  <li>
                    To infringe upon or violate our intellectual property rights
                    or the intellectual property rights of others
                  </li>
                  <li>
                    To harass, abuse, insult, harm, defame, slander, disparage,
                    intimidate, or discriminate
                  </li>
                  <li>To submit false or misleading information</li>
                  <li>
                    To upload or transmit viruses or any other type of malicious
                    code
                  </li>
                  <li>
                    To spam, phish, pharm, pretext, spider, crawl, or scrape
                  </li>
                  <li>For any obscene or immoral purpose</li>
                  <li>
                    To interfere with or circumvent the security features of the
                    Service
                  </li>
                </ul>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Gavel className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Intellectual Property Rights
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  The Service and its original content, features, and
                  functionality are and will remain the exclusive property of
                  SkillVerdict and its licensors. The Service is protected by
                  copyright, trademark, and other laws.
                </p>
                <p>
                  Our trademarks and trade dress may not be used in connection
                  with any product or service without our prior written consent.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Termination
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  We may terminate or suspend your account and bar access to the
                  Service immediately, without prior notice or liability, under
                  our sole discretion, for any reason whatsoever and without
                  limitation, including but not limited to a breach of the
                  Terms.
                </p>
                <p>
                  If you wish to terminate your account, you may simply
                  discontinue using the Service or contact us to request account
                  deletion.
                </p>
              </div>
            </section>

            {/* Disclaimer */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Disclaimer
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  The information on this website is provided on an "as is"
                  basis. To the fullest extent permitted by law, this Company
                  excludes all representations, warranties, conditions and
                  terms.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <Users className="h-5 w-5 text-slate-600" />
                </div>
                <h2 className="text-heading-1 text-slate-900 mb-0">
                  Contact Us
                </h2>
              </div>
              <div className="text-body text-slate-700 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <ul className="space-y-2">
                    <li>
                      <strong>Email:</strong> legal@skillverdict.com
                    </li>
                    <li>
                      <strong>Address:</strong> SkillVerdict Legal Team
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
