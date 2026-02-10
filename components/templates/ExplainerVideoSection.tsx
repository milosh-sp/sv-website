import { SectionWrapper } from '@/components/templates/SectionWrapper'
import type { SectionProps } from '@/types/Sections.types'
import { strings } from '@/lib/strings'
import { HeaderAndDescription } from '../molecules/HeaderAndDescription'

export function ExplainerVideoSection({ id }: SectionProps) {
  const { heading, headingHighlight } = strings.explainerVideo

  return (
    <SectionWrapper
      id={id}
      className='py-20'
      aria-labelledby='explainer-video-heading'
    >
      <div className='container-wide'>
        <HeaderAndDescription
          heading={heading}
          headingHighlight={headingHighlight}
        />
        <iframe
          title='Skill Verdict explainer'
          src={`https://player.mux.com/6jVXgZ1hI7zHZ00Xw1qj6028F2OdaXqp4CVTeUevF8mEs?metadata-video-title=Skill+Verdict+explainer&video-title=Skill+Verdict+explainer&default-hidden-captions=true&thumbnail-time=38&accent-color=%235a8ab5`}
          style={{
            width: '100%',
            border: 'none',
            aspectRatio: '161/90',
            borderRadius: '1rem',
            outline: 'none',
          }}
          allow='accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;'
          allowFullScreen
        />
      </div>
    </SectionWrapper>
  )
}
