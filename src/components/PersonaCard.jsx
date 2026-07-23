import { CardShell } from './CardShell'

/**
 * Matches Figma's Persona Grid cards (node 362:760). Heading uses the standardized
 * "Title 3" style (20px/SF Pro) rather than Figma's current 17px/Inter — that size predates
 * the Text Styles work and was confirmed as drift to fix, not a deliberate difference.
 */
export function PersonaCard({ icon: Icon, title, description }) {
  return (
    <CardShell className="flex w-80 flex-col gap-4 bg-surface-secondary px-8 pt-12 pb-8">
      <Icon size={24} className="text-accent-default" />
      <p className="text-title-3 font-semibold text-text-primary">{title}</p>
      <p className="text-body-lg text-text-secondary">{description}</p>
    </CardShell>
  )
}
