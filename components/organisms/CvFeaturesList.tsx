import { strings } from '@/lib/strings'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'
import { QrCode } from 'lucide-react'

const featuresWithIcons = strings.cvPreview.features

type FeatureCardProps = {
  feature: (typeof featuresWithIcons)[number]
}

function FeatureCard({ feature }: FeatureCardProps) {
  const FeatureIcon = feature.icon
  const showQrVisual = 'showQrVisual' in feature && feature.showQrVisual

  return (
    <article className='h-full rounded-xl border border-slate-200/80 bg-white/90 p-4 shadow-sm sm:p-5'>
      <div
        className={cn(
          'flex gap-4',
          showQrVisual ? 'flex-col sm:flex-row sm:items-center' : 'items-start'
        )}
      >
        {showQrVisual ? (
          <figure
            className={cn(
              'mx-auto sm:mx-0 shrink-0 flex flex-col items-center justify-center rounded-lg border border-slate-200 bg-muted/50 p-4 w-full sm:w-28'
            )}
            aria-label={strings.cvPreview.accessibility.qrVisual}
          >
            <QrCode className='h-16 w-16 text-foreground' aria-hidden='true' />
            <Text variant='caption' className='mt-2 text-center font-medium'>
              {strings.cvSampleData.qrSection.viewHistoryLink}
            </Text>
          </figure>
        ) : (
          <div
            className='w-10 h-10 shrink-0 bg-muted rounded-full flex items-center justify-center'
            role='img'
            aria-label={feature.iconAriaLabel}
          >
            <FeatureIcon
              className='h-5 w-5 text-foreground'
              aria-hidden='true'
            />
          </div>
        )}

        <div
          className={cn(showQrVisual ? 'text-center sm:text-left' : undefined)}
        >
          <Heading level={3} variant='subheading' size='sm' className='mb-1'>
            {feature.title}
          </Heading>
          <Text variant='caption'>{feature.description}</Text>
        </div>
      </div>
    </article>
  )
}

export function CvFeaturesList() {
  return (
    <section
      className='w-full'
      aria-label={strings.cvPreview.accessibility.featuresSection}
    >
      <ul
        className='grid list-none grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4'
        aria-label={strings.cvPreview.accessibility.featuresList}
      >
        {featuresWithIcons.map((feature) => (
          <li
            key={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            className={cn(
              'showQrVisual' in feature && feature.showQrVisual
                ? 'sm:col-span-2'
                : undefined
            )}
          >
            <FeatureCard feature={feature} />
          </li>
        ))}
      </ul>
    </section>
  )
}
