import { useState } from "react";
import { Button } from "./Button";
import { MenuIcon, CloseIcon } from "../icons/MenuIcon";
import { DOWNLOAD_URL, GITHUB_REPO_URL } from "../config/release";
import { scrollToHash } from "../utils/scrollToHash";
import appIcon from "../assets/app-icon.png";
import logoWordmark from "../assets/logo-wordmark.svg";

const LINKS = [
	{ label: "Features", href: "#features" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "FAQ", href: "#faq" },
	{ label: "GitHub", href: GITHUB_REPO_URL, external: true },
];

/**
 * Fixed/sticky across the whole page (node 363:737 in Figma). Desktop shows the four
 * tertiary links inline; below md, they're replaced by a hamburger that opens a dropdown
 * with the same links — the compact Download button stays visible at every size.
 */
export function Nav() {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed top-5 left-1/2 z-50 -translate-x-1/2">
			<nav className="flex w-max items-center gap-6 rounded-full bg-surface-secondary py-3.5 pr-4 pl-6 md:gap-20">
				<a
					href="#hero"
					onClick={(e) => scrollToHash(e, "#hero")}
					className="flex shrink-0 items-center gap-2.5"
				>
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
				</a>

				<div className="hidden items-center gap-6 md:flex">
					{LINKS.map((link) => (
						<Button
							key={link.label}
							as="a"
							href={link.href}
							variant="tertiary"
							onClick={
								link.external ? undefined : (e) => scrollToHash(e, link.href)
							}
							{...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
						>
							{link.label}
						</Button>
					))}
				</div>

				<div className="hidden md:block">
					<Button
						as="a"
						href={DOWNLOAD_URL}
						variant="primary"
						size="compact"
						icon="apple"
					>
						Download
					</Button>
				</div>

				<button
					type="button"
					onClick={() => setOpen((o) => !o)}
					className="text-text-secondary transition-colors hover:text-text-primary md:hidden"
					aria-label="Toggle menu"
					aria-expanded={open}
				>
					{open ? <CloseIcon size={40} /> : <MenuIcon size={40} />}
				</button>
			</nav>

			{open && (
				<div className="absolute top-full left-1/2 mt-3 w-56 -translate-x-1/2 rounded-2xl bg-surface-secondary p-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25),0px_0px_0px_4px_rgba(0,0,0,0.25)] md:hidden">
					<div className="flex flex-col items-start gap-4">
						{LINKS.map((link) => (
							<Button
								key={link.label}
								as="a"
								href={link.href}
								variant="tertiary"
								onClick={(e) => {
									setOpen(false);
									if (!link.external) scrollToHash(e, link.href);
								}}
								{...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
							>
								{link.label}
							</Button>
						))}
					</div>
				</div>
			)}
		</header>
	);
}
