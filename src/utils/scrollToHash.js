// Intercepts clicks on same-page anchor links so they always animate — some browsers skip
// `scroll-behavior: smooth` on native fragment navigation (Chrome bug 796092), so we drive the
// scroll ourselves via scrollIntoView instead of letting the click default through.
export function scrollToHash(event, href) {
  const id = href?.slice(1)
  if (!id) return

  const target = document.getElementById(id)
  if (!target) return

  event.preventDefault()
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.pushState(null, '', href)
}
