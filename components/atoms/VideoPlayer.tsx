import Video, { type VideoProps } from 'next-video'

export function VideoPlayer(props: VideoProps) {
  return <Video {...props} />
}
