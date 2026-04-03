import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Manifesto from './components/sections/Manifesto'
import Heritage from './components/sections/Heritage'
import Services from './components/sections/Services'
import Women from './components/sections/Women'
import FabricHotspots from './components/sections/FabricHotspots'
import Contact from './components/sections/Contact'
import OmniBot from './components/ui/OmniBot'

export default function App() {
  return (
    <div className="relative">
      <Navigation />
      <main>
        <Hero />
        <Manifesto />
        <Heritage />
        <Services />
        <Women />
        <FabricHotspots />
        <Contact />
      </main>
      <Footer />
      <OmniBot />
    </div>
  )
}
