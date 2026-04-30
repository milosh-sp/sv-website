import { navigationData } from '@/lib/navigationData'
import { generateMetadata } from '@/lib/seo'
import { pageSeoConfig } from '@/lib/seo-config'
import type { Metadata } from 'next'
import { LaunchingSoonModal } from '@/components/molecules/LaunchingSoonModal'

export const metadata: Metadata = generateMetadata(pageSeoConfig['/'])

export default function Home() {
  return (
    <>
      <LaunchingSoonModal />
      {navigationData.map(({ id, Component }) => {
        if (!Component) return null
        // Renders each section based on the navigation data order
        return <Component key={id} id={id} />
      })}
    </>
  )
}
