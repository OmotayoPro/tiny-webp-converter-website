import livePreviewVideo from '../assets/live-preview.mp4'

/** Matches Figma's "Section 2 — Live Preview Demo" (node 362:727). */
export function LivePreview() {
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

        <div className="mt-5 w-full max-w-[1040px] overflow-hidden rounded-[40px] bg-surface-secondary">
          <video
            src={livePreviewVideo}
            className="aspect-[1040/786] w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  )
}
