/**
 * Matches Figma's "Section 2 — Live Preview Demo" (node 362:727). The video area is a
 * placeholder — Figma has a real video fill there (confirmed via its videoHash), but there's
 * no path for me to export video bytes through the Figma tooling available. Swap in the real
 * file at src/assets/live-preview.mp4 (or wire up a <video> tag) once you've got it — the
 * frame/shadow/radius around it already matches the design.
 */
export function LivePreview() {
  return (
    <section id="live-preview" className="bg-bg-secondary px-6 pt-16 pb-20 lg:px-20 lg:pt-[100px] lg:pb-[120px]">
      <div className="wrap flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-4">
          <p className="text-caption font-mono font-semibold text-accent-default">
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

        <div className="mt-5 w-full max-w-[1040px] overflow-hidden rounded-[40px] border border-dashed border-white/15 bg-surface-secondary shadow-[0px_654px_183px_0px_rgba(0,0,0,0.1),0px_419px_167px_0px_rgba(0,0,0,0.01),0px_235px_141px_0px_rgba(0,0,0,0.05),0px_105px_105px_0px_rgba(0,0,0,0.09),0px_26px_58px_0px_rgba(0,0,0,0.1)]">
          <div className="flex aspect-[1040/786] items-center justify-center p-8">
            <p className="max-w-xs text-body-sm text-text-muted">
              Video placeholder — waiting on the live-preview video file
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
