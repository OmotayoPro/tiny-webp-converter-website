import { AppleIcon } from '../icons/AppleIcon'
import { GithubIcon } from '../icons/GithubIcon'

const ICONS = { apple: AppleIcon, github: GithubIcon }

// Matches Figma's "Buttons" reference (node 429:384): primary/secondary get a hover wash
// (layered gradient, defined as .btn-primary/.btn-secondary in index.css) and a 5% press-down
// scale on click. Tertiary is plain text with a color shift on hover — no press interaction.
const PRESS_TRANSITION = 'transition-transform duration-150 active:scale-95'

const VARIANT_STYLES = {
  primary: {
    background: 'btn-primary',
    text: 'text-bg-primary',
    shadow:
      'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_0px_0px_4px_rgba(0,0,0,0.25),inset_0px_2px_0px_0px_white]',
    glyphShadow: '[filter:drop-shadow(1px_1px_0px_white)]',
    textShadow: 'text-shadow-[1px_1px_0px_white]',
    interaction: PRESS_TRANSITION,
  },
  secondary: {
    background: 'btn-secondary',
    text: 'text-text-primary',
    shadow:
      'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_0px_0px_4px_rgba(0,0,0,0.25),inset_0px_1px_0px_0px_rgba(255,255,255,0.2)]',
    glyphShadow: '[filter:drop-shadow(-1px_-1px_0px_rgba(0,0,0,0.5))]',
    textShadow: 'text-shadow-[-1px_-1px_0px_rgba(0,0,0,0.5)]',
    interaction: PRESS_TRANSITION,
  },
}

const SIZE_STYLES = {
  default: {
    radius: 'rounded-button',
    iconSize: 20,
    text: 'text-button-label',
  },
  compact: {
    radius: 'rounded-button-sm',
    iconSize: 15,
    text: 'text-[14px] leading-[1.1]', // no named style for this size yet — see note below
  },
}

/**
 * Matches Figma's "Buttons" reference (node 429:384): primary (light) / secondary (dark) /
 * tertiary (plain text link) variants. Primary and secondary support default (48px-tall
 * contexts) / compact (nav) sizes; tertiary is text-only, size doesn't apply.
 *
 * The compact size's 14px/1.1 text doesn't have a named Figma text style yet (Button Label
 * is defined at 16px only) — flagged for the design side to formalize if compact buttons
 * end up reused elsewhere.
 */
export function Button({
  variant = 'primary',
  size = 'default',
  icon,
  as: Tag = 'a',
  className = '',
  children,
  ...props
}) {
  const Icon = icon ? ICONS[icon] : null

  if (variant === 'tertiary') {
    return (
      <Tag
        className={`inline-flex items-center gap-2 font-sans text-[14px] leading-[1.15] font-normal text-text-secondary transition-colors duration-150 hover:text-text-primary ${className}`}
        {...props}
      >
        {Icon && <Icon size={16} />}
        {children}
      </Tag>
    )
  }

  const v = VARIANT_STYLES[variant]
  const s = SIZE_STYLES[size]

  return (
    <Tag
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden pl-6 pr-7 py-[15px] font-sans font-semibold ${s.radius} ${v.background} ${v.text} ${v.shadow} ${v.interaction} ${className}`}
      {...props}
    >
      {Icon && <Icon size={s.iconSize} className={v.glyphShadow} />}
      <span className={`whitespace-nowrap ${s.text} ${v.textShadow}`}>{children}</span>
    </Tag>
  )
}
