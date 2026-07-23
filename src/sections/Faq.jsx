import { CardShell } from '../components/CardShell'

const FAQS = [
  {
    question: 'Is this really free?',
    answer:
      "Yes — completely free, with no premium tier, ads, or in-app purchases. It's open source under the MIT license.",
  },
  {
    question: 'Why does macOS warn me when I open it?',
    answer:
      "Tiny WebP Converter isn't notarized by Apple yet, which is common for small independent apps. It's a one-time warning — just follow the install steps above (System Settings → Privacy & Security → Open Anyway) and it'll open normally every time after.",
  },
  {
    question: 'What image formats can I convert from?',
    answer: 'JPEG, PNG, HEIC, and TIFF — converted to WebP or AVIF.',
  },
  {
    question: 'Does this app collect any data?',
    answer:
      "No. There's no account, no analytics, and no network calls — every conversion happens locally on your Mac.",
  },
  {
    question: 'Is there a batch limit?',
    answer: 'Yes — up to 50 images per batch, processed in parallel.',
  },
  {
    question: 'Is the source code available?',
    answer:
      'Yes — the full source is public on GitHub under the MIT license. Browse the code, open an issue, or send a pull request any time.',
  },
]

/**
 * Matches Figma's "Section 7 — FAQ" (node 362:817). Figma renders this as a static, always-
 * expanded list (no chevron/collapsed state in the design) rather than an accordion — built
 * faithfully as-is.
 */
export function Faq() {
  return (
    <section id="faq" className="bg-bg-tertiary px-6 py-16 lg:px-20 lg:py-[120px]">
      <div className="wrap flex flex-col items-center gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-caption font-mono text-accent-default">EXTRA INFORMATION</p>
          <h2 className="text-[28px] leading-[1.2] font-semibold text-text-primary sm:text-[36px] lg:text-title-2">
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="max-w-[344px] text-body-lg text-text-secondary">
            Everything you need to know about Tiny WebP Converter macOS App.
          </p>
        </div>

        <CardShell as="dl" className="flex w-full max-w-[588px] flex-col bg-surface-tertiary px-2 py-2 sm:px-4">
          {FAQS.map((faq) => (
            <div
              key={faq.question}
              className="flex flex-col gap-2 px-4 py-[22px] [&:not(:first-child)]:border-t [&:not(:first-child)]:border-white/5 sm:px-6"
            >
              <dt className="text-body-lg font-medium text-text-primary">{faq.question}</dt>
              <dd className="text-body-sm text-text-secondary">{faq.answer}</dd>
            </div>
          ))}
        </CardShell>
      </div>
    </section>
  )
}
