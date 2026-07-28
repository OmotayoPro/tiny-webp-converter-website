import { useEffect, useRef, useState } from 'react'
import livePreviewVideo from '../assets/live-preview.mp4'
import { PlayIcon, PauseIcon } from '../icons/PlayPauseIcon'

/**
 * Matches Figma's "Section 2 — Live Preview Demo" (node 362:727). The video autoplays/loops
 * for the usual product-demo effect, but WCAG 2.2.2 requires a way to pause any auto-playing
 * content longer than 5s — so it ships with a visible toggle, and starts paused for anyone
 * with prefers-reduced-motion set (autoPlay is JS-driven below rather than the HTML attribute,
 * specifically so that check can run before the first frame plays).
 */
export function LivePreview() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    video.addEventListener('play', onPlay)
    video.addEventListener('pause', onPause)

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.play().catch(() => {})
    }

    return () => {
      video.removeEventListener('play', onPlay)
      video.removeEventListener('pause', onPause)
    }
  }, [])

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }

  return (
    <section id="live-preview" className="bg-bg-secondary px-6 pt-16 pb-20 lg:px-20 lg:pt-[100px] lg:pb-[120px]">
      <div className="wrap flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-caption font-mono text-accent-default">
            LIVE PREVIEWS
          </p>
          <h2 className="text-[28px] leading-[1.2] font-semibold text-text-primary sm:text-[36px] lg:text-title-2">
            Instant image preview
            <br />
            before you convert.
          </h2>
          <p className="max-w-[344px] text-body-lg text-text-secondary">
            Get real-time preview of your compressed file, compared against the old file size.
          </p>
        </div>

        <div className="relative mt-5 w-full max-w-[1040px] overflow-hidden rounded-[24px] bg-surface-secondary sm:rounded-[40px]">
          <video
            ref={videoRef}
            src={livePreviewVideo}
            className="aspect-[1040/786] w-full object-cover"
            loop
            muted
            playsInline
          />
          <button
            type="button"
            onClick={toggle}
            aria-label={playing ? 'Pause preview video' : 'Play preview video'}
            className="absolute right-4 bottom-4 flex size-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            {playing ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
          </button>
        </div>
      </div>
    </section>
  )
}
