import { CardShell } from '../components/CardShell'
import { Button } from '../components/Button'
import { DOWNLOAD_URL, GITHUB_REPO_URL, MIN_MACOS_VERSION } from '../config/release'
import appIcon from '../assets/app-icon.png'
import avatar from '../assets/avatar.png'

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How to Install', href: '#install' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Release Notes', href: '#' },
      { label: 'Figma Design', href: '#' },
      { label: 'GitHub', href: GITHUB_REPO_URL },
      { label: 'MIT License', href: '#' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Report Bugs', href: '#' },
      { label: 'Give Feedback', href: '#' },
      { label: 'Buy Me Coffee', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
    ],
  },
]

/**
 * Matches Figma's "Section 8 — Footer" (node 369:1372), which nests the Second CTA card at
 * the top. Several footer links (Release Notes, Figma Design, MIT License, Report Bugs, Give
 * Feedback, Buy Me Coffee, Privacy, Terms) don't have real destinations yet in Figma — left as
 * "#" placeholders, same TODO status as src/config/release.js.
 */
export function Footer() {
  return (
    <footer className="bg-bg-primary px-6 pt-16 pb-8 lg:px-20 lg:pt-20 lg:pb-10">
      <div className="wrap flex flex-col gap-16 lg:gap-24">
        <CardShell
          className="flex flex-col items-center gap-2 px-6 py-16 text-center shadow-[inset_0px_2px_0px_0px_white] lg:px-[120px] lg:py-20"
          style={{
            background:
              'radial-gradient(130% 130% at 50% 0%, #00FAFF 0%, #00CED2 25%, #00A2A5 50%, #007679 75%, #004A4C 100%)',
          }}
        >
          <p className="text-caption font-mono font-semibold tracking-wide text-white uppercase">
            Tiny WebP Converter
          </p>
          <h2 className="mt-2 text-[28px] leading-[1.2] font-semibold text-white sm:text-[36px] lg:text-title-2">
            Optimal File Size,
            <br />
            Same Image Quality.
          </h2>
          <div className="mt-6 flex flex-col items-center gap-[17px]">
            <Button as="a" href={DOWNLOAD_URL} variant="primary" icon="apple">
              Download for macOS
            </Button>
            <p className="text-caption font-mono text-white/40">
              {MIN_MACOS_VERSION} or later &middot; Free &middot; Open Source
            </p>
          </div>
        </CardShell>

        <div className="flex flex-col border-t border-white/20 py-10 lg:flex-row lg:justify-between lg:gap-12">
          <div className="flex max-w-[237px] flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <img src={appIcon} alt="" className="size-10 rounded-[10px] object-cover" />
              <span className="text-[14px] leading-[1.1] font-semibold text-text-primary">
                <span className="block">Tiny WebP</span>
                <span className="block">Converter</span>
              </span>
            </div>
            <p className="text-body-sm text-text-secondary">
              Batch convert heavy images into light WebP or AVIF formats.
            </p>
            <p className="text-caption font-mono text-text-muted">{MIN_MACOS_VERSION} +</p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:mt-0 lg:flex lg:gap-12">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading} className="flex flex-col gap-6">
                <p className="text-body-lg font-semibold text-text-primary">{column.heading}</p>
                <div className="flex flex-col items-start gap-4">
                  {column.links.map((link) => (
                    <Button key={link.label} as="a" href={link.href} variant="tertiary">
                      {link.label}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-4 border-t border-white/20 py-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <p className="text-body-sm text-text-secondary">Built with Passion by</p>
            <img src={avatar} alt="" className="size-6 rounded-full object-cover" />
            <p className="text-body-lg font-medium text-text-primary">Omotayo Taiwo</p>
          </div>
          <p className="text-body-sm text-text-secondary">
            &copy; 2026 Tiny WebP Converter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
