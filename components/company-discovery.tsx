"use client"

import { Search, Building2, CheckCircle } from "lucide-react"

export function CompanyDiscovery() {
  return (
    <section
      className="py-16 bg-slate-50"
      id="company-discovery"
      aria-label="How companies discover and contact verified talent"
    >
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Message */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-4">
              <Building2 className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Companies come to you</h3>
            <p className="text-lg text-slate-600 mb-6">
              With passive discovery, companies on SkillVerdict discover and contact you directly with opportunities that match your verified skills.
            </p>
          </div>
          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <span>Passive discovery</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <span>Direct company contact</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <span>No applications needed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
