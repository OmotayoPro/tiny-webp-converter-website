import { Button } from "../components/Button";
import { BatchIcon } from "../icons/BatchIcon";
import { WebpIcon } from "../icons/WebpIcon";
import { AvifIcon } from "../icons/AvifIcon";
import { SecureIcon } from "../icons/SecureIcon";
import { MoneyIcon } from "../icons/MoneyIcon";
import { DOWNLOAD_URL, MIN_MACOS_VERSION } from "../config/release";
import appIcon from "../assets/app-icon.png";
import heroScreenshot from "../assets/hero-screenshot.avif";

const FEATURES = [
	{ Icon: BatchIcon, label: "Batch", color: "text-accent-success" },
	{ Icon: WebpIcon, label: "WebP", color: "text-accent-highlight" },
	{ Icon: AvifIcon, label: "AVIF", color: "text-accent-default" },
	{ Icon: SecureIcon, label: "Private", color: "text-accent-warning" },
	{ Icon: MoneyIcon, label: "Free", color: "text-accent-danger" },
];

export function Hero() {
	return (
		<section id="hero" className="bg-bg-primary pt-[190px]">
			<div className="wrap flex flex-col items-center gap-10 text-center">
				<div className="relative size-[89.6px] shrink-0 overflow-hidden rounded-[26px] shadow-[0px_0px_0px_8px_rgba(0,0,0,0.2)] sm:size-28">
					<div className="absolute inset-0 bg-[#f3f4f6]" />
					<img
						src={appIcon}
						alt=""
						className="absolute inset-0 size-full object-cover"
					/>
					<div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-2px_2px_0px_rgba(0,0,0,0.5),inset_0px_3px_0px_0px_rgba(255,255,255,0.8)]" />
				</div>

				<div className="flex flex-col items-center gap-2.5">
					<h1 className="text-[36px] leading-[1.1] font-semibold text-text-primary sm:text-[48px] lg:text-title-1">
						Convert Large Images
						<br />
						into WebP &amp; AVIF
					</h1>
					<p className="text-body-lg text-text-secondary">
						Batch convert heavy images into light WebP or
						<br />
						AVIF formats. Offline, and free forever.
					</p>
				</div>

				<div className="flex flex-col items-center gap-[17px]">
					<div className="flex flex-col items-center gap-4 sm:flex-row">
						<Button
							as="a"
							href={DOWNLOAD_URL}
							variant="primary"
							icon="apple"
						>
							Download for macOS
						</Button>
						<a
							href="https://www.producthunt.com/products/tinywebp-free-image-converter-for-mac?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-tinywebp-free-image-converter-for-mac"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1209543&theme=dark&t=1785310425116"
								alt="TinyWebP — Free Image Converter for Mac - Convert large images into light-weight WebP and AVIF formats | Product Hunt"
								width={250}
								height={54}
							/>
						</a>
					</div>
					<p className="text-caption font-mono text-text-muted">
						{MIN_MACOS_VERSION} or later &middot; Free &middot; Open Source
					</p>
				</div>
			</div>

			<div className="wrap mt-24">
				<img
					src={heroScreenshot}
					alt="Tiny WebP Converter app interface"
					className="mx-auto w-full max-w-[1040px] rounded-[24px]"
				/>
			</div>

			<div className="wrap mt-14 flex items-center justify-center gap-6 pb-24 sm:gap-16">
				{FEATURES.map(({ Icon, label, color }) => (
					<div key={label} className="flex flex-col items-center gap-2">
						<div className="relative flex size-7 items-center justify-center rounded-lg bg-bg-secondary shadow-[0px_0px_0px_2px_rgba(0,0,0,0.25)]">
							<Icon size={16} className={color} />
							<div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
						</div>
						<p className="text-caption font-mono text-text-muted uppercase">
							{label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
