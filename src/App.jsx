import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { LivePreview } from './sections/LivePreview'
import { Features } from './sections/Features'
import { Personas } from './sections/Personas'
import { FreeOpenSource } from './sections/FreeOpenSource'
import { InstallSteps } from './sections/InstallSteps'
import { Faq } from './sections/Faq'
import { Footer } from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />
      <main>
        <Hero />
        <LivePreview />
        <Features />
        <Personas />
        <FreeOpenSource />
        <InstallSteps />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}

export default App
