import About from './components/About'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ScrollUI from './components/ScrollUI'
import SideNav from './components/SideNav'
import Skills from './components/Skills'
import { NAV_LINKS } from './data/content'
import { useActiveSection } from './hooks/useActiveSection'
import { useReveal } from './hooks/useReveal'

const SECTION_IDS = NAV_LINKS.map((l) => l.id)

export default function App() {
  useReveal()
  const active = useActiveSection(SECTION_IDS)

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ScrollUI />
      <Navbar active={active} />
      <SideNav active={active} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}