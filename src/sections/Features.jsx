import { CardShell } from "../components/CardShell";
import batchProductUi from "../assets/batch-product-ui.png";
import batchImageDrag from "../assets/batch-image-drag.png";
import fullcontrolBackground from "../assets/fullcontrol-background.png";
import fullcontrolControlsUi from "../assets/fullcontrol-controls-ui.png";
import fullcontrolGlow from "../assets/fullcontrol-glow.png";
import privateBackground from "../assets/private-background.png";
import privateIcons from "../assets/private-icons.png";
import webpavifProductUi from "../assets/webpavif-product-ui.avif";
import webpavifOutput from "../assets/webpavif-output.png";

/**
 * Matches Figma's simplified card frame (node 447:968). Four bespoke bento cards — each
 * card's illustration is now a small set of flattened images from Figma (background texture,
 * glow, UI mockup) layered with absolute positioning, rather than hand-built CSS mockups.
 */

const CARD_TEXT_HEADING = "text-title-3 font-semibold text-text-primary";
const CARD_TEXT_BODY = "text-body-sm text-text-secondary";

function BatchConvertCard() {
	return (
		<CardShell
			className="group flex h-[308px] w-full flex-col justify-end rounded-[24px]! sm:h-[520px] sm:rounded-[40px]! lg:w-[603px]"
			style={{
				background:
					"radial-gradient(130% 130% at 15% 8%, #009B9F 0%, #00696C 50%, #005052 75%, #003739 100%)",
			}}
		>
			<img
				src={batchProductUi}
				alt=""
				className="absolute inset-0 size-full object-cover"
			/>
			<img
				src={batchImageDrag}
				alt=""
				className="absolute top-[51px] left-10 z-10 w-[197.5px] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-10"
			/>
			<div className="relative z-10 flex flex-col gap-2 pt-10 pr-10 pb-8 pl-10 lg:pr-[200px]">
				<p className={CARD_TEXT_HEADING}>Batch Convert Images</p>
				<p className={CARD_TEXT_BODY}>
					Convert up to 50 images at once, processed in parallel. Switch between
					grid and list view, and multi-select whatever you need.
				</p>
			</div>
		</CardShell>
	);
}

function FullControlCard() {
	return (
		<CardShell
			className="flex h-[308px] w-full flex-col justify-end rounded-[24px]! sm:h-[520px] sm:rounded-[40px]! lg:w-[421px]"
			style={{
				background: "linear-gradient(180deg, #2b2b2b 0%, #1c1c1c 100%)",
			}}
		>
			<img
				src={fullcontrolBackground}
				alt=""
				className="absolute inset-0 size-full object-cover"
			/>
			<img
				src={fullcontrolControlsUi}
				alt=""
				className="absolute top-[62px] left-1/2 z-10 w-[276px] -translate-x-1/2"
			/>

			<img
				src={fullcontrolGlow}
				alt=""
				className="absolute top-[-8px] right-0 z-20 w-[281px]"
			/>

			<div className="relative z-10 flex flex-col gap-2 pt-10 pr-10 pb-8 pl-10 lg:pr-[120px]">
				<p className={CARD_TEXT_HEADING}>Full control</p>
				<p className={CARD_TEXT_BODY}>
					Adjust quality, flip on lossless mode, resize on the way out, and
					strip metadata automatically.
				</p>
			</div>
		</CardShell>
	);
}

function PrivateByDesignCard() {
	return (
		<CardShell
			className="flex h-[308px] w-full flex-col justify-end rounded-[24px]! sm:h-[520px] sm:rounded-[40px]! lg:w-[428px]"
			style={{
				background: "linear-gradient(180deg, #2b2b2b 0%, #1c1c1c 100%)",
			}}
		>
			<img
				src={privateBackground}
				alt=""
				className="absolute inset-0 size-full object-cover"
			/>
			<img
				src={privateIcons}
				alt=""
				className="absolute top-[55.5px] left-1/2 z-10 w-full -translate-x-1/2"
			/>
			<div className="relative z-10 flex flex-col gap-2 pt-10 pr-10 pb-8 pl-10 lg:pr-[120px]">
				<p className={CARD_TEXT_HEADING}>Private by design</p>
				<p className={CARD_TEXT_BODY}>
					No accounts, no telemetry, no network calls. Every conversion happens
					right here on your Mac.
				</p>
			</div>
		</CardShell>
	);
}

function WebpAvifCard() {
	return (
		<CardShell
			className="flex h-[308px] w-full flex-col justify-end rounded-[24px]! sm:h-[520px] sm:rounded-[40px]! lg:w-[596px]"
			style={{
				background:
					"radial-gradient(130% 130% at 15% 8%, #0091FF 0%, #0075CD 25%, #00599C 50%, #003C6A 75%, #002E52 87.5%, #002039 100%)",
			}}
		>
			<img
				src={webpavifProductUi}
				alt=""
				className="absolute inset-0 size-full object-cover"
			/>
			<img
				src={webpavifOutput}
				alt=""
				className="absolute top-[52px] left-10 z-10 w-[45%]"
			/>
			<div className="relative z-10 flex flex-col gap-2 pt-10 pr-10 pb-8 pl-10 lg:pr-[200px]">
				<p className={CARD_TEXT_HEADING}>WebP &amp; AVIF output</p>
				<p className={CARD_TEXT_BODY}>
					Choose the modern format that fits your project — WebP for broad
					support, AVIF when you want the smallest possible file.
				</p>
			</div>
		</CardShell>
	);
}

export function Features() {
	return (
		<section
			id="features"
			className="scroll-mt-28 bg-bg-primary px-6 pt-24 pb-20 lg:px-20 lg:pt-[120px] lg:pb-20"
		>
			<div className="wrap flex flex-col items-center gap-10 lg:gap-20">
				<div className="flex flex-col items-center gap-4 text-center">
					<p className="text-caption font-mono text-accent-default">FEATURES</p>
					<h2 className="text-[28px] leading-[1.2] font-semibold text-text-primary sm:text-[36px] lg:text-title-2">
						One Great Tool,
						<br />
						Everything you need,
						<br />
						No Extra Fluff
					</h2>
				</div>

				<div className="flex w-full max-w-[1040px] flex-col gap-4">
					<div className="flex flex-col gap-4 lg:flex-row">
						<BatchConvertCard />
						<FullControlCard />
					</div>
					<div className="flex flex-col gap-4 lg:flex-row">
						<PrivateByDesignCard />
						<WebpAvifCard />
					</div>
				</div>
			</div>
		</section>
	);
}
