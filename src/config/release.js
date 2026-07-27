// Single source of truth for anything that changes with a new app release.
// Every download button / version string on the site should import from here,
// not hardcode its own copy — see project brief notes on why.

export const GITHUB_REPO_URL = 'https://github.com/OmotayoPro/TinyWebPConverter'

export const VERSION = '0.1.0'

export const DOWNLOAD_URL = `${GITHUB_REPO_URL}/releases/download/v${VERSION}/TinyWebPConverter-${VERSION}.dmg`

export const RELEASE_NOTES_URL = `${GITHUB_REPO_URL}/releases/tag/v${VERSION}`

export const LICENSE_URL = `${GITHUB_REPO_URL}/blob/v${VERSION}/LICENSE`

export const MIN_MACOS_VERSION = 'macOS Sonoma 14.0'
