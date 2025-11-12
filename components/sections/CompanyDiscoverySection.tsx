import { strings } from '@/lib/strings'
import { HeaderAndDescription } from '@/components/molecules/HeaderAndDescription'
import type { SectionProps } from '@/types/Sections.types'

const BuildingIcon = strings.companyDiscovery.icon

export function CompanyDiscoverySection({ id }: SectionProps) {
  return (
    <section
      className='py-16 bg-slate-50'
      id={id}
      aria-labelledby='company-discovery-heading'
      aria-describedby='company-discovery-description'
    >
      <div className='container-wide'>
        <div className='max-w-3xl mx-auto text-center'>
          {/* Main Message */}
          <header className='mb-8'>
            <div
              className='inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-4'
              aria-hidden='true'
            >
              <BuildingIcon className='h-6 w-6 text-white' aria-hidden='true' />
            </div>
            <HeaderAndDescription
              heading={strings.companyDiscovery.heading}
              description={strings.companyDiscovery.description}
            />
          </header>
          {/* Benefits List */}
          <ul
            className='flex flex-wrap justify-center gap-6 text-sm list-none'
            aria-label='Company discovery benefits'
          >
            {strings.companyDiscovery.benefits.map((benefit) => {
              const BenefitIcon = benefit.icon
              return (
                <li
                  key={benefit.text}
                  className='flex items-center gap-2 text-slate-600'
                >
                  <BenefitIcon
                    className='h-4 w-4 text-blue-600'
                    aria-hidden='true'
                  />
                  <span>{benefit.text}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
