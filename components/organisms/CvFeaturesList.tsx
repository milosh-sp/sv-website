import { strings } from '@/lib/strings'
import { Heading } from '@/components/atoms/Heading'
import { Text } from '@/components/atoms/Text'
import { cn } from '@/lib/utils'
import { Carousel } from '@/components/organisms/Carousel'

// Features already have icons embedded in strings
const featuresWithIcons = strings.cvPreview.features

type FeatureCardProps = {
  feature: (typeof featuresWithIcons)[number]
}

function FeatureCard({ feature }: FeatureCardProps) {
  const FeatureIcon = feature.icon
  return (
    <article className='text-center p-1'>
      <div
        className='w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4'
        role='img'
        aria-label={`${feature.title} icon`}
      >
        <FeatureIcon className='h-8 w-8 text-foreground' aria-hidden='true' />
      </div>
      <Heading level={3} variant='subheading' size='md' className='mb-2'>
        {feature.title}
      </Heading>
      <Text variant='caption'>{feature.description}</Text>
    </article>
  )
}

export function CvFeaturesList() {
  const carouselSlides = featuresWithIcons.map((feature) => ({
    id: feature.title.toLowerCase().replace(/\s+/g, '-'),
    element: <FeatureCard feature={feature} />,
  }))

  return (
    <section aria-label='CV2.0 Features'>
      {/* Mobile: Carousel */}
      <div className={cn('md:hidden mt-12')}>
        <Carousel
          options={{ loop: true, duration: 15 }}
          slides={carouselSlides}
          aria-label='CV2.0 Features carousel'
        />
      </div>

      {/* Desktop: Grid */}
      <ul
        className={cn('hidden md:grid md:grid-cols-4 gap-8 mt-12 list-none')}
        aria-label='CV2.0 Features list'
      >
        {featuresWithIcons.map((feature) => (
          <li
            key={`feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <FeatureCard feature={feature} />
          </li>
        ))}
      </ul>
    </section>
  )
}
