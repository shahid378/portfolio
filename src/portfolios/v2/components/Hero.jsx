import { motion } from 'motion/react'
import { profile } from '@data'
import { usePersona } from '../usePersona'
import HeroVisual from './HeroVisual'

export default function Hero() {
  const { personaId, content } = usePersona()
  const { persona } = content

  return (
    <section id="top" className="relative flex min-h-[88vh] items-center overflow-hidden">
      <HeroVisual />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <motion.div
          key={personaId}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {persona.role}
          </p>

          <h1
            className={`text-balance text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-6xl ${
              personaId === 'creative' ? 'font-serif font-normal italic' : ''
            }`}
          >
            {persona.tagline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">{persona.pitch}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={persona.cta.href}
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition-transform hover:scale-[1.03]"
            >
              {persona.cta.label}
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              Download CV
            </a>
          </div>

          <p className="mt-10 text-sm text-ink-faint">
            {profile.location} · Available for freelance & contract
          </p>
        </motion.div>
      </div>
    </section>
  )
}
