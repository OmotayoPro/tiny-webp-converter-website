import { CardShell } from "./CardShell";

/**
 * Matches Figma's Persona Grid cards (node 362:760). Heading intentionally uses "Body Large"
 * (16px) instead of the standard card-heading "Title 3" style used elsewhere — a deliberate
 * exception for this card, not drift.
 */
export function PersonaCard({ icon: Icon, title, description }) {
	return (
		<CardShell className="flex w-[256px] shrink-0 flex-col gap-2 bg-surface-secondary px-8 pt-12 pb-8 lg:w-80">
			<Icon size={32} className="text-accent-default" />
			<p className="text-body-lg font-semibold text-text-primary">{title}</p>
			<p className="text-body-sm text-text-secondary">{description}</p>
		</CardShell>
	);
}
