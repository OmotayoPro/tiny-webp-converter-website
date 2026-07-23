import { CardShell } from '../components/CardShell'
import { Button } from '../components/Button'
import { CheckmarkIcon } from '../icons/CheckmarkIcon'
import { DOWNLOAD_URL, GITHUB_REPO_URL } from '../config/release'

const FEATURES = [
  'Anywhere drag & drop',
  '20 Image Batch Convert',
  'WebP + AVIF Output',
  'Live Preview',
  'Lossy & Lossless Mode',
  'Quality Mode',
]

/**
 * Matches Figma's "Section 5 — Free & Open Source" (node 362:781). The card's teal
 * radial-gradient approximates Figma's raw SVG gradient (its gradientTransform describes an
 * elliptical gradient anchored at the top) — close enough visually, exact geometry not worth
 * hand-replicating.
 */
export function FreeOpenSource() {
  return (
    <section id="pricing" className="bg-bg-primary px-6 py-16 lg:px-20 lg:py-[120px]">
      <div className="wrap flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-caption font-mono font-semibold text-accent-default">PRICING</p>
          <h2 className="text-[28px] leading-[1.2] font-semibold text-text-primary sm:text-[36px] lg:text-title-2">
            This is not another
            <br />
            Subscription
          </h2>
          <p className="max-w-[344px] text-body-lg text-text-secondary">
            Tiny WebP Converter is entirely free for everyone to use. Open Source too.
          </p>
        </div>

        <CardShell
          className="flex w-full max-w-[373px] flex-col items-center gap-10 pt-14 pb-10"
          style={{
            background:
              'radial-gradient(130% 130% at 50% 0%, #00ECF1 0%, #00C4C8 25%, #009B9F 50%, #007375 75%, #004A4C 100%)',
          }}
        >
          <div className="flex flex-col items-center gap-8 px-8">
            <div className="flex flex-col items-center gap-2">
              <p className="text-caption font-mono font-semibold tracking-wide text-white">
                COMPLETELY FREE
              </p>
              <p className="text-price-display font-mono font-semibold text-white text-shadow-[0px_-5px_2px_rgba(0,0,0,0.3)]">
                $0
              </p>
              <p className="text-center text-body-sm text-white/60">
                Every line of code is public - Star it,
                <br />
                inspect it, fork it, or send a PR
              </p>
            </div>
            <Button as="a" href={DOWNLOAD_URL} variant="primary" icon="apple">
              Download for macOS
            </Button>
          </div>

          <div className="flex w-full flex-col gap-2 border-t border-white/20 px-10 py-8 shadow-[0px_-2px_0px_0px_rgba(0,0,0,0.6)]">
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-4">
                <CheckmarkIcon size={14} className="shrink-0 text-accent-success" />
                <p className="text-body-lg text-white/60">{feature}</p>
              </div>
            ))}
          </div>
        </CardShell>

        <Button as="a" href={GITHUB_REPO_URL} variant="secondary" icon="github" className="w-full max-w-[378px]">
          View on Github
        </Button>
      </div>
    </section>
  )
}
