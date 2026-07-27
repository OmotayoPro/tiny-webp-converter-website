// Generic play/pause icons for the live-preview video control — not part of the brand Icon
// Set, since these are standard interaction affordances rather than product iconography.
export function PlayIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M5.5 3.5L16 10L5.5 16.5V3.5Z" fill="currentColor" />
    </svg>
  )
}

export function PauseIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="4.5" y="3.5" width="3.5" height="13" rx="1" fill="currentColor" />
      <rect x="12" y="3.5" width="3.5" height="13" rx="1" fill="currentColor" />
    </svg>
  )
}
