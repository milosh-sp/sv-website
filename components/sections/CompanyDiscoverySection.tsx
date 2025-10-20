import { Building2, CheckCircle } from 'lucide-react'
import { strings } from '@/lib/strings'

export function CompanyDiscoverySection() {
  return (
    <section
      className='py-16 bg-slate-50'
      id='company-discovery'
      aria-label={
        strings.companyDiscovery.accessibility.companyDiscoverySection
      }
    >
      <div className='container-wide'>
        <div className='max-w-3xl mx-auto text-center'>
          {/* Main Message */}
          <div className='mb-8'>
            <div className='inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-4'>
              <Building2 className='h-6 w-6 text-white' aria-hidden='true' />
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-3'>
              {strings.companyDiscovery.heading}
            </h3>
            <p className='text-lg text-slate-600 mb-6'>
              {strings.companyDiscovery.description}
            </p>
          </div>
          {/* Benefits List */}
          <div className='flex flex-wrap justify-center gap-6 text-sm'>
            {strings.companyDiscovery.benefits.map((benefit) => (
              <div
                key={benefit}
                className='flex items-center gap-2 text-slate-600'
              >
                <CheckCircle className='h-4 w-4 text-blue-600' />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
