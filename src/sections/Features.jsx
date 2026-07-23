import { CardShell } from '../components/CardShell'
import appIcon from '../assets/app-icon.png'
import diskIcon from '../assets/disk-icon.png'
import thumb1 from '../assets/thumb-1.png'
import thumb2 from '../assets/thumb-2.png'
import thumb3 from '../assets/thumb-3.png'
import thumb4 from '../assets/thumb-4.png'

/**
 * Matches Figma's "Section 3 — Feature Storytelling" (node 393:3830). Four bespoke bento
 * cards, each hand-built — see conversation notes on why these don't share a template beyond
 * CardShell. Decorative-only background texture (the dot-grid mask overlays, the soft ellipse
 * glows blended via mix-blend-mode) is approximated with simple blurred glow shapes rather
 * than exact mask replication — the content-bearing elements (photos, icons, text, mockup UI)
 * are faithful to the source.
 */

const CARD_TEXT_HEADING = 'text-title-3 font-semibold text-text-primary'
const CARD_TEXT_BODY = 'text-body-sm text-text-secondary'

function CardText({ title, description }) {
  return (
    <div className="relative z-10 flex flex-col gap-2 px-10 pt-10 pb-8">
      <p className={CARD_TEXT_HEADING}>{title}</p>
      <p className={CARD_TEXT_BODY}>{description}</p>
    </div>
  )
}

function BatchConvertCard() {
  return (
    <CardShell
      className="flex h-[440px] w-full flex-col justify-end lg:w-[603px]"
      style={{
        background:
          'radial-gradient(130% 130% at 15% 8%, #009B9F 0%, #00696C 50%, #005052 75%, #003739 100%)',
      }}
    >
      <div className="pointer-events-none absolute -top-16 -left-6 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
      <div className="relative h-56 shrink-0">
        <div className="absolute top-[18%] left-[16%] size-[102px] -rotate-[9deg] overflow-hidden rounded-xl shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
          <img src={thumb2} alt="" className="size-full object-cover" />
        </div>
        <div className="absolute top-[20%] left-[20%] size-[102px] rotate-[6deg] overflow-hidden rounded-xl shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
          <img src={thumb1} alt="" className="size-full object-cover" />
        </div>
        <div className="absolute top-[24%] left-[18%] size-[102px] overflow-hidden rounded-xl shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
          <img src={thumb3} alt="" className="size-full object-cover" />
        </div>
        <div className="absolute top-[22%] left-[15%] size-[102px] overflow-hidden rounded-xl shadow-[0px_6px_6px_0px_rgba(0,0,0,0.25)]">
          <img src={thumb4} alt="" className="size-full object-cover" />
        </div>
        <div className="absolute top-[46%] left-[20%] flex h-6 items-center rounded-[3px] bg-[#0088ff] px-1.5">
          <p className="text-[13px] leading-none font-semibold text-white">Mac...jpg</p>
        </div>
        <div className="absolute top-[16%] left-[38%] flex size-8 items-center justify-center rounded-full bg-[#ff383c] text-[11px] font-semibold text-white">
          50
        </div>
      </div>
      <CardText
        title="Batch Convert Images"
        description="Convert up to 50 images at once, processed in parallel. Switch between grid and list view, and multi-select whatever you need."
      />
    </CardShell>
  )
}

function FullControlCard() {
  return (
    <CardShell
      className="flex h-[440px] w-full flex-col items-center justify-end lg:w-[421px]"
      style={{ background: 'linear-gradient(180deg, #2b2b2b 0%, #1c1c1c 100%)' }}
    >
      <div className="pointer-events-none absolute -top-16 right-0 h-52 w-52 rounded-full bg-white/5 blur-3xl" />
      <div className="relative z-10 mt-14 w-64 rounded-xl bg-[#2b2b2b] shadow-[0px_10px_10px_0px_rgba(0,0,0,0.25),0px_0px_0px_8px_#222]">
        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
          <p className="text-[13px] text-text-primary/85">Compression</p>
          <p className="text-[13px] text-text-secondary">Lossless</p>
        </div>
        <div className="flex h-11 items-center gap-4 border-b border-white/10 px-4">
          <p className="text-[13px] text-text-primary/85">Quality</p>
          <div className="relative h-1 flex-1 rounded-full bg-white/15">
            <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-accent-default" />
            <div className="absolute top-1/2 left-1/2 size-3 -translate-y-1/2 rounded-full bg-white shadow" />
          </div>
          <p className="font-mono text-[13px] text-text-primary/85">50%</p>
        </div>
        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
          <p className="text-[13px] text-text-primary/85">Resize</p>
          <div className="flex items-center gap-2">
            <div className="rounded-md border border-white/5 bg-[#1e1e1e] px-2 py-1 text-[13px] text-text-primary/85">
              2450
            </div>
            <span className="text-[13px] text-text-primary/85">x</span>
            <div className="rounded-md border border-white/5 bg-[#1e1e1e] px-2 py-1 text-[13px] text-text-primary/85">
              2450
            </div>
          </div>
        </div>
        <div className="flex h-11 items-center justify-between px-4">
          <p className="text-[13px] text-text-primary/85">Keep Metadata</p>
          <div className="flex h-4 w-9 items-center rounded-full bg-accent-default p-0.5">
            <div className="ml-auto size-3 rounded-full bg-white" />
          </div>
        </div>
      </div>
      <CardText title="Full control" description="Adjust quality, flip on lossless mode, resize on the way out, and strip metadata automatically." />
    </CardShell>
  )
}

function PrivateByDesignCard() {
  return (
    <CardShell
      className="relative flex h-[440px] w-full flex-1 flex-col items-center justify-end"
      style={{ background: 'linear-gradient(180deg, #2b2b2b 0%, #1c1c1c 100%)' }}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-24 w-56 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="relative z-10 mt-16 flex h-44 w-full items-center justify-center">
        <img src={diskIcon} alt="" className="absolute h-[196px] w-[196px] -translate-x-6" />
        <div className="absolute size-[104px] translate-x-16 overflow-hidden rounded-[24px] shadow-lg">
          <img src={appIcon} alt="" className="size-full object-cover" />
        </div>
      </div>
      <CardText title="Private by design" description="No accounts, no telemetry, no network calls. Every conversion happens right here on your Mac." />
    </CardShell>
  )
}

function WebpAvifCard() {
  return (
    <CardShell
      className="flex h-[440px] w-full flex-col justify-end lg:w-[596px]"
      style={{
        background:
          'radial-gradient(130% 130% at 15% 8%, #0091FF 0%, #0075CD 25%, #00599C 50%, #003C6A 75%, #002E52 87.5%, #002039 100%)',
      }}
    >
      <div className="pointer-events-none absolute -top-14 right-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="relative z-10 ml-10 w-64 rounded-xl bg-[#2b2b2b] shadow-[0px_0px_0px_5px_#222]">
        <div className="flex h-11 items-center justify-between px-4">
          <p className="text-[13px] text-text-primary/85">Output Format</p>
          <div className="rounded-md bg-gradient-to-b from-[#0091ff] to-[#005596] px-3 py-1 text-[13px] text-text-primary/85 shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.25)]">
            WebP
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-3 ml-10 w-64 rounded-xl bg-[#2b2b2b] shadow-[0px_0px_0px_5px_#222]">
        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
          <p className="text-[13px] text-text-primary/85">Output Format</p>
          <div className="rounded-md bg-gradient-to-b from-[#0091ff] to-[#005596] px-3 py-1 text-[13px] text-text-primary/85 shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.25)]">
            AVIF
          </div>
        </div>
        <div className="flex flex-col gap-1 px-4 py-2">
          <p className="text-[13px] text-text-primary/85">Output Folder</p>
          <div className="flex items-center justify-between">
            <p className="text-[13px] text-text-primary/55">~/...WebP Converter</p>
            <div className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-text-primary/85">
              Choose...
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-3 ml-10 flex h-8 w-64 items-center justify-center rounded-full bg-gradient-to-b from-[#0091ff] to-[#005596] text-[13px] text-white shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.25)]">
        Convert Images
      </div>
      <CardText
        title="WebP &amp; AVIF output"
        description="Choose the modern format that fits your project — WebP for broad support, AVIF when you want the smallest possible file."
      />
    </CardShell>
  )
}

export function Features() {
  return (
    <section id="features" className="bg-bg-primary px-6 pt-24 pb-20 lg:px-20 lg:pt-[120px] lg:pb-20">
      <div className="wrap flex flex-col items-center gap-16 lg:gap-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-caption font-mono text-accent-default">FEATURES</p>
          <h2 className="text-[28px] leading-[1.2] font-semibold text-text-primary sm:text-[36px] lg:text-title-2">
            One Great Tool,
            <br />
            Everything you need,
            <br />
            No Extra Fluff
          </h2>
        </div>

        <div className="flex w-full max-w-[1040px] flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            <BatchConvertCard />
            <FullControlCard />
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <PrivateByDesignCard />
            <WebpAvifCard />
          </div>
        </div>
      </div>
    </section>
  )
}
