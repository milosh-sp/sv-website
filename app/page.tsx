import { navigationData } from '@/lib/navigationData'

export default function Home() {
  return (
    <>
      {navigationData.map(({ id, Component }) => {
        if (!Component) return null
        // Renders each section based on the navigation data order
        return <Component key={id} id={id} />
      })}
    </>
  )
}
