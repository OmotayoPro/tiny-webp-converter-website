/**
 * The one thing every "card" on the page actually shares — the outer chrome only.
 * Persona cards, bento cards, the pricing card, and the second-CTA card all use this
 * radius + inset highlight; everything inside is bespoke per section, not this component's
 * job. See conversation notes on why this stays intentionally thin.
 */
export function CardShell({ as: Tag = 'div', className = '', style, children, ...props }) {
  return (
    <Tag
      className={`relative overflow-hidden rounded-card-lg shadow-[inset_0px_2px_1px_0px_rgba(255,255,255,0.25)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </Tag>
  )
}
