import { strings } from '@/lib/strings'
import { type LucideIcon, QrCode, Shield, Database, Link } from 'lucide-react'

export function CvFeaturesList() {
  const FEATURE_ICONS: readonly LucideIcon[] = [
    QrCode,
    Shield,
    Database,
    Link,
  ] as const

  const featuresWithIcons = strings.cvPreview.features.map(
    (feature, index) => ({
      ...feature,
      icon: FEATURE_ICONS[index],
    })
  )

  return (
    <div className='grid md:grid-cols-4 gap-8 mt-12'>
      {featuresWithIcons.map((feature, index) => (
        <div
          key={`feature-${feature.title}-${index}`}
          className='text-center p-6'
        >
          <div
            className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4'
            aria-hidden='true'
          >
            <feature.icon className='h-8 w-8 text-slate-800' />
          </div>
          <h3 className='font-semibold text-gray-900 mb-2'>{feature.title}</h3>
          <p className='text-gray-600 text-sm'>{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
