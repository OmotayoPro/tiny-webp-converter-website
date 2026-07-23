import { CardShell } from '../components/CardShell'

const STEPS = [
  'Open the .dmg file and drag "TinyWebPConverter" onto the "Applications" folder icon.',
  'Open your Applications folder and double-click TinyWebPConverter.',
  'macOS will say it can\'t verify the app — it\'s from an independent developer. Click "Done" / "OK".',
  'Open System Settings → Privacy & Security, scroll down, and click "Open Anyway" next to TinyWebPConverter.',
  'Confirm once more. This is only needed the first time — after that, the app opens normally.',
]

/** Matches Figma's "Section 6 — Install Instructions" (node 372:1471). */
export function InstallSteps() {
  return (
    <section id="install" className="bg-bg-secondary px-6 py-16 lg:px-20 lg:py-[120px]">
      <div className="wrap flex flex-col items-center gap-10 lg:gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-caption font-mono font-semibold text-accent-default">HOW TO INSTALL</p>
          <h2 className="text-[28px] leading-[1.2] font-semibold text-text-primary sm:text-[36px] lg:text-title-2">
            Get started in a few
            <br />
            simple steps
          </h2>
          <p className="max-w-[344px] text-body-lg text-text-secondary">
            Tiny WebP Converter is open-source, takes a few steps to get started.
          </p>
        </div>

        <CardShell
          as="ol"
          className="flex w-full max-w-[548px] flex-col bg-bg-primary py-4 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.25),0px_0px_0px_8px_rgba(0,0,0,0.25)]"
        >
          {STEPS.map((step, i) => (
            <li
              key={step}
              className="flex items-center gap-5 px-5 py-[22px] first:pt-0 last:pb-0 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-white/10 sm:px-7"
            >
              <span className="relative flex size-[30px] shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_20%,#00BFC3_0%,#01A0A4_18%,#028285_36%,#005B5D_100%)] text-[13px] font-semibold text-white shadow-[0px_0px_5px_0px_rgba(3,255,223,0.2),0px_0px_20px_0px_rgba(3,255,223,0.5),inset_0px_2px_5px_0px_rgba(255,255,255,0.25)]">
                {i + 1}
              </span>
              <p className="text-body-lg text-text-primary">{step}</p>
            </li>
          ))}
        </CardShell>
      </div>
    </section>
  )
}
