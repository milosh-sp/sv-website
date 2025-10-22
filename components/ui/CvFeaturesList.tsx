import { strings } from '@/lib/strings'

// Features already have icons embedded in strings
const featuresWithIcons = strings.cvPreview.features
export function CvFeaturesList() {
  return (
    <section
      className='grid md:grid-cols-4 gap-8 mt-12'
      aria-label='CV2.0 Features'
    >
      {featuresWithIcons.map((feature) => {
        const FeatureIcon = feature.icon
        return (
          <article key={`feature-${feature.title}`} className='text-center p-6'>
            <div
              className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4'
              role='img'
              aria-label={`${feature.title} icon`}
            >
              <FeatureIcon
                className='h-8 w-8 text-slate-800'
                aria-hidden='true'
              />
            </div>
            <h3 className='font-semibold text-gray-900 mb-2'>
              {feature.title}
            </h3>
            <p className='text-gray-600 text-sm'>{feature.description}</p>
          </article>
        )
      })}
    </section>
  )
}
