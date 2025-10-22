import { strings } from '@/lib/strings'
import { Database, IdCard, type LucideIcon, QrCode, Shield } from 'lucide-react'

const FEATURE_ICONS: readonly LucideIcon[] = [
  QrCode,
  Shield,
  Database,
  IdCard,
] as const

const featuresWithIcons = strings.cvPreview.features.map((feature, index) => ({
  ...feature,
  icon: FEATURE_ICONS[index],
}))

export function CvFeaturesList() {
  return (
    <section
      className='grid md:grid-cols-4 gap-8 mt-12'
      aria-label='CV2.0 Features'
    >
      {featuresWithIcons.map((feature) => (
        <article key={`feature-${feature.title}`} className='text-center p-6'>
          <div
            className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4'
            role='img'
            aria-label={`${feature.title} icon`}
          >
            <feature.icon
              className='h-8 w-8 text-slate-800'
              aria-hidden='true'
            />
          </div>
          <h3 className='font-semibold text-gray-900 mb-2'>{feature.title}</h3>
          <p className='text-gray-600 text-sm'>{feature.description}</p>
        </article>
      ))}
    </section>
  )
}
