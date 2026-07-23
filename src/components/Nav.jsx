import { useState } from 'react'
import { Button } from './Button'
import { MenuIcon, CloseIcon } from '../icons/MenuIcon'
import { DOWNLOAD_URL, GITHUB_REPO_URL } from '../config/release'
import appIcon from '../assets/app-icon.png'

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'GitHub', href: GITHUB_REPO_URL },
]

/**
 * Fixed/sticky across the whole page (node 363:737 in Figma). Desktop shows the four
 * tertiary links inline; below md, they're replaced by a hamburger that opens a dropdown
 * with the same links — the compact Download button stays visible at every size.
 */
export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-10 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-6 rounded-full bg-surface-secondary py-3.5 pr-4 pl-6 md:gap-20">
        <a href="#hero" className="flex shrink-0 items-center gap-2.5">
          <img src={appIcon} alt="" className="size-10 rounded-[10px] object-cover" />
          <span className="text-[14px] leading-[1.1] font-semibold text-text-primary">
            <span className="block">Tiny WebP</span>
            <span className="block">Converter</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <Button key={link.label} as="a" href={link.href} variant="tertiary">
              {link.label}
            </Button>
          ))}
        </div>

        <Button as="a" href={DOWNLOAD_URL} variant="primary" size="compact" icon="apple">
          Download
        </Button>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-text-secondary transition-colors hover:text-text-primary md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-full left-1/2 mt-3 w-56 -translate-x-1/2 rounded-2xl bg-surface-secondary p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_0px_0px_4px_rgba(0,0,0,0.25)] md:hidden">
          <div className="flex flex-col items-start gap-4">
            {LINKS.map((link) => (
              <Button
                key={link.label}
                as="a"
                href={link.href}
                variant="tertiary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
