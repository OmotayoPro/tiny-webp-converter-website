import { CardShell } from "../components/CardShell";
import { Button } from "../components/Button";
import {
	DOWNLOAD_URL,
	GITHUB_REPO_URL,
	LICENSE_URL,
	RELEASE_NOTES_URL,
	MIN_MACOS_VERSION,
} from "../config/release";
import { scrollToHash } from "../utils/scrollToHash";
import appIcon from "../assets/app-icon.png";
import logoWordmark from "../assets/logo-wordmark.svg";
import avatar from "../assets/avatar.png";
import noiseTexture from "../assets/noise-texture.avif";

const FIGMA_DESIGN_URL =
	"https://www.figma.com/design/FAmhBZB0DXHMz7pMDZh2VV/Pro-Playground?node-id=217-6812&t=UEYwtJVzVKBxth8Q-1";
const REPORT_BUGS_URL = "https://telegram.me/tywardaddy";
const CREATOR_X_URL = "https://x.com/tywardaddy";

const FOOTER_COLUMNS = [
	{
		heading: "Product",
		links: [
			{ label: "Features", href: "#features" },
			{ label: "Pricing", href: "#pricing" },
			{ label: "How to Install", href: "#install" },
			{ label: "FAQ", href: "#faq" },
		],
	},
	{
		heading: "Resources",
		links: [
			{ label: "Release Notes", href: RELEASE_NOTES_URL, external: true },
			{ label: "Figma Design", href: FIGMA_DESIGN_URL, external: true },
			{ label: "GitHub", href: GITHUB_REPO_URL, external: true },
			{ label: "MIT License", href: LICENSE_URL, external: true },
		],
	},
	{
		heading: "Contact",
		links: [
			{ label: "Report Bugs", href: REPORT_BUGS_URL, external: true },
			{ label: "Give Feedback", href: "#" },
			{ label: "Buy Me Coffee", href: "#" },
		],
	},
	{
		heading: "Legal",
		links: [
			{ label: "Privacy", href: "#" },
			{ label: "Terms", href: "#" },
		],
	},
];

/**
 * Matches Figma's "Section 8 — Footer" (node 369:1372), which nests the Second CTA card at
 * the top. Give Feedback, Buy Me Coffee, Privacy, and Terms don't have real destinations yet —
 * left as "#" placeholders (pages to be built later).
 */
export function Footer() {
	return (
		<footer className="bg-bg-primary px-6 pt-16 pb-8 lg:px-20 lg:pt-20 lg:pb-10">
			<div className="wrap flex flex-col gap-16 lg:gap-24">
				<CardShell
					className="flex flex-col items-center gap-2 px-6 py-16 text-center lg:px-[120px] lg:py-20"
					style={{
						background:
							"radial-gradient(53.8% 86.8% at 50% 0%, rgba(0,250,255,0.5) 0%, rgba(0,206,210,0.5) 25%, rgba(0,162,165,0.5) 50%, rgba(0,118,121,0.5) 75%, rgba(0,74,76,0.5) 100%)",
						boxShadow:
							"0px 0px 0px 8px rgba(0,0,0,0.2), inset 0px 2px 0px 0px white",
					}}
				>
					<div
						aria-hidden
						className="pointer-events-none absolute inset-0 opacity-[0.03]"
						style={{
							backgroundImage: `url(${noiseTexture})`,
							backgroundSize: "1067.84px 1067.84px",
							backgroundPosition: "top left",
						}}
					/>
					<p className="relative z-10 text-caption font-mono tracking-wide text-white uppercase">
						Tiny WebP Converter
					</p>
					<h2 className="relative z-10 mt-2 text-[28px] leading-[1.2] font-semibold text-white sm:text-[36px] lg:text-title-2">
						Optimal File Size,
						<br />
						Same Image Quality.
					</h2>
					<div className="relative z-10 mt-6 flex flex-col items-center gap-[17px]">
						<Button
							as="a"
							href={DOWNLOAD_URL}
							variant="primary"
							icon="apple"
							target="_blank"
							rel="noreferrer"
						>
							Download for macOS
						</Button>
						<p className="text-caption font-mono text-text-muted">
							{MIN_MACOS_VERSION} or later &middot; Free &middot; Open Source
						</p>
					</div>
				</CardShell>

				<div className="flex flex-col border-t border-white/20 py-10 lg:flex-row lg:justify-between lg:gap-12">
					<div className="flex max-w-[237px] flex-col gap-4">
						<div className="flex items-center gap-2.5">
							<img
								src={appIcon}
								alt=""
								className="size-10 rounded-[10px] object-cover"
							/>
							<img
								src={logoWordmark}
								alt="Tiny WebP Converter"
								className="h-[26px] w-auto"
							/>
						</div>
						<p className="text-body-sm text-text-secondary">
							Batch convert heavy images into light WebP or AVIF formats.
						</p>
						<p className="text-caption font-mono text-text-muted">
							{MIN_MACOS_VERSION} +
						</p>
					</div>

					<div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:mt-0 lg:flex lg:gap-12">
						{FOOTER_COLUMNS.map((column) => (
							<div key={column.heading} className="flex flex-col gap-6">
								<p className="text-body-lg font-semibold text-text-primary">
									{column.heading}
								</p>
								<div className="flex flex-col items-start gap-4">
									{column.links.map((link) => (
										<Button
											key={link.label}
											as="a"
											href={link.href}
											variant="tertiary"
											onClick={
												link.href.startsWith("#") && link.href.length > 1
													? (e) => scrollToHash(e, link.href)
													: undefined
											}
											{...(link.external
												? { target: "_blank", rel: "noreferrer" }
												: {})}
										>
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
						<p className="text-body-sm text-text-secondary">
							Built with Passion by
						</p>
						<img
							src={avatar}
							alt=""
							className="size-6 rounded-full object-cover"
						/>
						<a
							href={CREATOR_X_URL}
							target="_blank"
							rel="noreferrer"
							className="text-body-lg font-medium text-text-primary transition-colors hover:text-accent-default"
						>
							Omotayo Taiwo
						</a>
					</div>
					<p className="text-body-sm text-text-secondary">
						&copy; 2026 Tiny WebP Converter. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
