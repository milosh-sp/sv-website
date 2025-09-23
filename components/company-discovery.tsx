"use client"

import { Search, Target, MessageSquare, Zap, Building2, Users, CheckCircle, Star } from "lucide-react"

export function CompanyDiscovery() {
  const discoveryFeatures = [
    {
      icon: Search,
      title: "Advanced Talent Search",
      description: "Search our verified talent pool by specific skills, experience level, and verification scores to find exactly what you need",
    },
    {
      icon: Target,
      title: "Precision Matching",
      description: "Our AI-powered matching system connects you with candidates whose verified skills align perfectly with your requirements",
    },
    {
      icon: CheckCircle,
      title: "Pre-Verified Skills",
      description: "Skip lengthy technical screenings—every skill badge represents hours of rigorous evaluation by industry experts",
    },
    {
      icon: MessageSquare,
      title: "Direct Contact",
      description: "Reach out to verified members directly through our platform with confidence in their proven abilities",
    },
  ]

  const companyBenefits = [
    {
      icon: Zap,
      title: "Faster Hiring",
      description: "Reduce time-to-hire by up to 60% with pre-verified candidates",
      stat: "60%",
    },
    {
      icon: Star,
      title: "Higher Quality",
      description: "Access top-tier talent verified by professionals from leading tech companies",
      stat: "95%",
    },
    {
      icon: Users,
      title: "Reduced Screening",
      description: "Skip initial technical rounds with confidence in verified skill assessments",
      stat: "3x",
    },
  ]

  return (
    <section
      className="section-padding bg-gradient-to-b from-slate-50/50 to-white"
      id="company-discovery"
      aria-label="How companies discover and contact verified talent"
    >
      <div className="container-wide">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-heading-1 text-slate-900 mb-6 text-balance">
            Companies discover and hire
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> verified talent</span>
          </h2>
          <p className="text-body-large text-slate-600 max-w-4xl mx-auto text-pretty leading-relaxed">
            Join forward-thinking companies that trust SkillVerdict's community-verified talent pool. 
            Connect directly with professionals whose skills have been rigorously validated by industry experts.
          </p>
        </div>

        {/* Company Benefits Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {companyBenefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl border border-slate-200/50 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="h-8 w-8 text-emerald-600" aria-hidden="true" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">{benefit.stat}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Discovery Process */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Building2 className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-heading-2 text-slate-900 mb-4">How Companies Find You</h3>
            <p className="text-body-large text-slate-600 max-w-3xl mx-auto text-pretty">
              Our platform makes it easy for companies to discover and connect with verified professionals like you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {discoveryFeatures.map((feature, index) => (
              <div key={index} className="card-interactive p-8 text-left group cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <feature.icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-slate-200/50">
          <h3 className="text-heading-2 text-slate-900 mb-4">Ready to be discovered?</h3>
          <p className="text-body-large text-slate-600 mb-6 max-w-2xl mx-auto text-pretty">
            Join thousands of verified professionals who are getting noticed by top companies. 
            Your verified skills are your competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              <span>Verified by industry experts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              <span>Direct company contact</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-emerald-600" />
              <span>Skip technical screenings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
