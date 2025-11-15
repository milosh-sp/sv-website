import { strings } from '@/lib/strings'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'

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
          <article key={`feature-${feature.title}`} className='text-center p-1'>
            <div
              className='w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4'
              role='img'
              aria-label={`${feature.title} icon`}
            >
              <FeatureIcon
                className='h-8 w-8 text-foreground'
                aria-hidden='true'
              />
            </div>
            <Heading level={3} variant='subheading' size='md' className='mb-2'>
              {feature.title}
            </Heading>
            <Text variant='caption'>{feature.description}</Text>
          </article>
        )
      })}
    </section>
  )
}
