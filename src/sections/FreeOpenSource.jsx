import { CardShell } from "../components/CardShell";
import { Button } from "../components/Button";
import { CheckmarkIcon } from "../icons/CheckmarkIcon";
import { DOWNLOAD_URL, GITHUB_REPO_URL } from "../config/release";
import noiseTexture from "../assets/noise-texture.png";

const FEATURES = [
	"Anywhere drag & drop",
	"20 Image Batch Convert",
	"WebP + AVIF Output",
	"Live Preview",
	"Lossy & Lossless Mode",
	"Quality Mode",
];

/**
 * Matches Figma's "Open Source Card" (node 362:782). The gradient is Figma's real 5-stop
 * radial gradient at its actual size/position (derived from the raw SVG gradientTransform:
 * ~91%/87% ellipse anchored at top-center), rendered at 50% opacity directly over the
 * section's own dark bg — same effect as Figma's separate 50%-opacity gradient layer, without
 * needing a second stacked element.
 */
export function FreeOpenSource() {
	return (
		<section
			id="pricing"
			className="bg-bg-primary px-6 py-16 lg:px-20 lg:py-[120px]"
		>
			<div className="wrap flex flex-col items-center gap-10">
				<div className="flex flex-col items-center gap-2 text-center">
					<p className="text-caption font-mono text-accent-default">PRICING</p>
					<h2 className="text-[28px] leading-[1.2] font-semibold text-text-primary sm:text-[36px] lg:text-title-2">
						This is not another
						<br />
						Subscription
					</h2>
					<p className="max-w-[344px] text-body-lg text-text-secondary">
						Tiny WebP Converter is entirely free for everyone to use. Open
						Source too.
					</p>
				</div>

				<CardShell
					className="flex w-full max-w-[373px] flex-col items-center gap-10 pt-14 pb-10"
					style={{
						background:
							"radial-gradient(90.7% 86.8% at 50% 0%, rgba(0,236,241,0.5) 0%, rgba(0,196,200,0.5) 25%, rgba(0,155,159,0.5) 50%, rgba(0,115,117,0.5) 75%, rgba(0,74,76,0.5) 100%)",
						boxShadow:
							"0px 0px 0px 8px rgba(0,0,0,0.2), inset 0px 2px 0px 0px rgba(255,255,255,0.5)",
					}}
				>
					<div
						aria-hidde2
						className="pointer-events-none absolute inset-0 opacity-[0.03]"
						style={{
							backgroundImage: `url(${noiseTexture})`,
							backgroundSize: "1067.84px 1067.84px",
							backgroundPosition: "top left",
						}}
					/>
					<div className="relative z-10 flex flex-col items-center gap-8 px-8">
						<div className="flex flex-col items-center gap-2">
							<p className="text-caption font-mono tracking-wide text-white">
								COMPLETELY FREE
							</p>
							<p className="text-price-display font-mono font-semibold text-white text-shadow-[0px_-5px_2px_rgba(0,0,0,0.3)]">
								$0
							</p>
							<p className="text-center text-body-sm text-white/60">
								Every line of code is public - Star it,
								<br />
								inspect it, fork it, or send a PR
							</p>
						</div>
						<Button as="a" href={DOWNLOAD_URL} variant="primary" icon="apple">
							Download for macOS
						</Button>
					</div>

					<div className="relative z-10 flex w-full flex-col gap-2 border-t border-white/20 px-10 py-8 shadow-[0px_-2px_0px_0px_rgba(0,0,0,0.6)]">
						{FEATURES.map((feature) => (
							<div key={feature} className="flex items-center gap-4">
								<CheckmarkIcon
									size={14}
									className="shrink-0 text-accent-success"
								/>
								<p className="text-body-lg text-white/60">{feature}</p>
							</div>
						))}
					</div>
				</CardShell>

				<Button
					as="a"
					href={GITHUB_REPO_URL}
					variant="secondary"
					icon="github"
					className="w-full max-w-[378px]"
				>
					View on Github
				</Button>
			</div>
		</section>
	);
}
