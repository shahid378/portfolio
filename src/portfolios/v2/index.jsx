import { useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import PersonaProvider from './PersonaProvider'
import { usePersona } from './usePersona'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Manifesto from './components/Manifesto'
import Marquee from './components/Marquee'
import InkMotifs from './components/InkMotifs'

// Single-page scroll: no client-side routing, which also sidesteps GitHub
// Pages returning a hard 404 for unknown paths on refresh.
function PortfolioBody() {
  const { personaId } = usePersona()

  // The browser resolves a #hash before React has rendered the sections, so a
  // shared deep link would silently land at the top. Re-apply it once mounted.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant', block: 'start' }))
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnimatePresence mode="wait">
          <motion.div
            key={personaId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            // Motifs are absolutely positioned against this scrolling block.
            className="relative"
          >
            {/* Both no-op outside the creative persona. */}
            <InkMotifs />
            <Manifesto />
            <Marquee />

            <Services />
            <Work />

            <Marquee reverse />

            <Experience />
            <Contact />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default function PortfolioV2() {
  return (
    <PersonaProvider>
      <div className="persona-grain min-h-screen bg-surface font-sans text-ink antialiased">
        <PortfolioBody />
      </div>
    </PersonaProvider>
  )
}
