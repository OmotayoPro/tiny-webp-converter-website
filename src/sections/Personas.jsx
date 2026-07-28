/**
 * Matches Figma's "Section 4 — Persona Grid" (node 362:760): a fixed-width (320px),
 * non-wrapping, horizontally-scrolling row at every size. Below lg, the row also breaks out
 * to the full viewport width (via the left-1/2/-translate-x-1/2 full-bleed trick, since the
 * section's own padding would otherwise clip the "peek" of the next card) so cards can be
 * swiped edge-to-edge; the scrollbar itself stays hidden since swipe/drag is the intended
 * affordance here, not a visible track.
 */
import { PersonaCard } from "../components/PersonaCard";
import { DesignerIcon } from "../icons/DesignerIcon";
import { DevIcon } from "../icons/DevIcon";
import { PhotoIcon } from "../icons/PhotoIcon";
import { PeopleIcon } from "../icons/PeopleIcon";

const PERSONAS = [
	{
		icon: DesignerIcon,
		title: "Designers",
		description:
			"Export smaller, high quality assets ready for the web without ever leaving your Macbook.",
	},
	{
		icon: DevIcon,
		title: "Developers",
		description:
			"Optimize your image assets for production use without needing to install a build-tool plugin.",
	},
	{
		icon: PhotoIcon,
		title: "Photographers",
		description:
			"Batch-convert an entire photo shoot into lightweight, web-friendly sizes in seconds.",
	},
	{
		icon: PeopleIcon,
		title: "Anyone",
		description:
			"Get smaller photos to email or share with faster load times, all in just a couple of clicks.",
	},
];

export function Personas() {
	return (
		<section className="bg-bg-secondary px-6 py-16 lg:px-20 lg:py-[120px]">
			<div className="wrap flex flex-col gap-10 lg:gap-16">
				<div className="flex flex-col gap-4">
					<p className="text-caption font-mono text-accent-default">
						WHO IS IT FOR
					</p>
					<h2 className="text-[28px] leading-[1.2] font-semibold text-text-primary sm:text-[36px] lg:text-title-2">
						Tiny WebP Converter
						<br />
						is built for everyone
					</h2>
					<p className="max-w-[344px] text-body-lg text-text-secondary">
						A simple light-weight tool absolutely anyone can use, just drag,
						drop and convert.
					</p>
				</div>

				<div className="scrollbar-hide relative left-1/2 flex w-screen -translate-x-1/2 gap-4 overflow-x-auto px-4 sm:w-[280px] lg:static lg:left-auto lg:w-full lg:translate-x-0 lg:px-0">
					{PERSONAS.map((persona) => (
						<PersonaCard key={persona.title} {...persona} />
					))}
				</div>
			</div>
		</section>
	);
}
