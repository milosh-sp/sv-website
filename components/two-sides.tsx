'use client'

import { useState } from 'react'
import {
  DollarSign,
  Award,
  Calendar,
  TrendingUp,
  Network,
  Medal,
  FastForward,
  Rocket,
  QrCode,
} from 'lucide-react'
import { structuredData } from '@/lib/seo-config'

export function TwoSides() {
  const [activeTab, setActiveTab] = useState('candidate')

  const vetterBenefits = structuredData.verifierBenefits.map(
    (benefit, index) => ({
      ...benefit,
      icon: [DollarSign, Calendar, TrendingUp, Network][index],
    })
  )

  const candidateBenefits = structuredData.memberBenefits.map(
    (benefit, index) => ({
      ...benefit,
      icon: [Medal, FastForward, Rocket, QrCode][index],
    })
  )

  return (
    <section
      className="section-padding bg-gradient-to-b from-white to-slate-50/50"
      id="how-it-works"
      aria-label="How SkillVerdict works for different users"
    >
      <div className="container-wide">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-heading-1 text-slate-900 mb-6 text-balance">
            Twitter Community Notes, but for your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              skills
            </span>
          </h2>
          <p className="text-body-large text-slate-600 max-w-4xl mx-auto text-pretty leading-relaxed">
            Inspired by models like Twitter's Community Notes, SkillVerdict
            brings transparent, community-driven verification to member's
            skills. It's unbiased assessment, powered by the community.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div
            className="flex bg-slate-100/80 backdrop-blur-sm rounded-xl p-1.5 shadow-sm border border-slate-200/50"
            role="tablist"
            aria-label="Choose user type"
          >
            <button
              onClick={() => setActiveTab('candidate')}
              className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'candidate'
                  ? 'bg-white text-blue-600 shadow-md border border-blue-100'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
              role="tab"
              aria-selected={activeTab === 'candidate'}
              aria-controls="candidate-panel"
            >
              <Award className="h-5 w-5" aria-hidden="true" />
              Members
            </button>
            <button
              onClick={() => setActiveTab('vetter')}
              className={`flex items-center gap-3 px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === 'vetter'
                  ? 'bg-white text-blue-600 shadow-md border border-blue-100'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
              }`}
              role="tab"
              aria-selected={activeTab === 'vetter'}
              aria-controls="vetter-panel"
            >
              <DollarSign className="h-5 w-5" aria-hidden="true" />
              Tech professionals
            </button>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {activeTab === 'vetter' && (
            <div
              className="text-center animate-fade-in-scale"
              role="tabpanel"
              id="vetter-panel"
              aria-labelledby="vetter-tab"
            >
              <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <DollarSign
                  className="h-14 w-14 text-white"
                  aria-hidden="true"
                />
              </div>
              <p className="text-body-large text-slate-600 mb-12 max-w-3xl mx-auto text-pretty">
                Top talent is valued in the SkillVerdict community. Monetize
                your expertise by verifying the skills of other members.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {vetterBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="card-interactive p-8 text-left group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <benefit.icon
                        className="h-7 w-7 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'candidate' && (
            <div
              className="text-center animate-fade-in-scale"
              role="tabpanel"
              id="candidate-panel"
              aria-labelledby="candidate-tab"
            >
              <div className="w-28 h-28 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                <Award className="h-14 w-14 text-white" aria-hidden="true" />
              </div>
              <p className="text-body-large text-slate-600 mb-12 max-w-3xl mx-auto text-pretty">
                Get your skills verified by global industry experts and boost
                your career with a next-generation CV2.0.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {candidateBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="card-interactive p-8 text-left group cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <benefit.icon
                        className="h-7 w-7 text-emerald-600"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
