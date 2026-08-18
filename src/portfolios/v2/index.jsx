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

// Single-page scroll: no client-side routing, which also sidesteps GitHub
// Pages returning a hard 404 for unknown paths on refresh.
function PortfolioBody() {
  const { personaId } = usePersona()

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
          >
            <Services />
            <Work />
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
