// Single source of truth for anything that changes with a new app release.
// Every download button / version string on the site should import from here,
// not hardcode its own copy — see project brief notes on why.

// TODO: replace with the real Tiny WebP Converter app repo (this is the website's own repo,
// not the app's — confirm the actual GitHub URL before shipping).
export const GITHUB_REPO_URL = 'https://github.com/OmotayoPro/tiny-webp-converter'

export const VERSION = '1.0.0'

// TODO: point at the actual latest .dmg once a release exists.
export const DOWNLOAD_URL = `${GITHUB_REPO_URL}/releases/latest/download/TinyWebPConverter.dmg`

export const MIN_MACOS_VERSION = 'macOS Sonoma 14.0'
