/**
 * Matches Figma's "Section 4 — Persona Grid" (node 362:760). Desktop (lg+) keeps Figma's
 * fixed-width (320px), non-wrapping, horizontally-scrolling row. Below lg, cards go full-width
 * in a 2-column grid instead — Figma's row doesn't fit mobile viewports at all.
 */
import { PersonaCard } from '../components/PersonaCard'
import { DesignerIcon } from '../icons/DesignerIcon'
import { DevIcon } from '../icons/DevIcon'
import { PhotoIcon } from '../icons/PhotoIcon'
import { PeopleIcon } from '../icons/PeopleIcon'

const PERSONAS = [
  {
    icon: DesignerIcon,
    title: 'Designers',
    description: 'Export smaller, high quality assets ready for the web without ever leaving your Macbook.',
  },
  {
    icon: DevIcon,
    title: 'Developers',
    description: 'Optimize your image assets for production use without needing to install a build-tool plugin.',
  },
  {
    icon: PhotoIcon,
    title: 'Photographers',
    description: 'Batch-convert an entire photo shoot into lightweight, web-friendly sizes in seconds.',
  },
  {
    icon: PeopleIcon,
    title: 'Anyone',
    description: 'Get smaller photos to email or share with faster load times, all in just a couple of clicks.',
  },
]

export function Personas() {
  return (
    <section className="bg-bg-secondary px-6 py-16 lg:px-20 lg:py-[120px]">
      <div className="wrap flex flex-col gap-10 lg:gap-16">
        <div className="flex flex-col gap-4">
          <p className="text-caption font-mono text-accent-default">WHO IS IT FOR</p>
          <h2 className="text-[28px] leading-[1.2] font-semibold text-text-primary sm:text-[36px] lg:text-title-2">
            Tiny WebP Converter
            <br />
            is built for everyone
          </h2>
          <p className="max-w-[344px] text-body-lg text-text-secondary">
            A simple light-weight tool absolutely anyone can use, just drag, drop and convert.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row lg:overflow-x-auto">
          {PERSONAS.map((persona) => (
            <PersonaCard key={persona.title} {...persona} />
          ))}
        </div>
      </div>
    </section>
  )
}
