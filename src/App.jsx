import { PersonaCard } from './components/PersonaCard'
import { DesignerIcon } from './icons/DesignerIcon'
import { DevIcon } from './icons/DevIcon'
import { PhotoIcon } from './icons/PhotoIcon'
import { PeopleIcon } from './icons/PeopleIcon'

const PERSONAS = [
  {
    icon: DesignerIcon,
    title: 'Designers',
    description:
      'Export smaller, high quality assets ready for the web without ever leaving your Macbook.',
  },
  {
    icon: DevIcon,
    title: 'Developers',
    description:
      'Optimize your image assets for production use without needing to install a build-tool plugin.',
  },
  {
    icon: PhotoIcon,
    title: 'Photographers',
    description: 'Batch-convert an entire photo shoot into lightweight, web-friendly sizes in seconds.',
  },
  {
    icon: PeopleIcon,
    title: 'Anyone',
    description:
      'Get smaller photos to email or share with faster load times, all in just a couple of clicks.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-bg-secondary text-text-primary">
      <div className="wrap flex flex-col items-start gap-12 py-24">
        <p className="text-caption font-mono font-semibold tracking-[0.12em] text-accent-default uppercase">
          Persona card check
        </p>

        <div className="flex items-start gap-4">
          {PERSONAS.map((p) => (
            <PersonaCard key={p.title} icon={p.icon} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
