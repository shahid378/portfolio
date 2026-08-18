import { motion, useReducedMotion } from 'motion/react'
import { usePersona } from '../usePersona'

// Words assemble as the statement enters view. Reduced-motion users get the
// same text, delivered at once.
function KineticLine({ text, className, delayStart = 0, reduced }) {
  const words = text.split(' ')

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={reduced ? false : { opacity: 0, y: '0.5em', rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.55,
            delay: delayStart + i * 0.07,
            ease: [0.2, 0.8, 0.2, 1],
          }}
        >
          {word}
          {i < words.length - 1 && ' '}
        </motion.span>
      ))}
    </span>
  )
}

export default function Manifesto() {
  const { content } = usePersona()
  const reduced = useReducedMotion()
  const { manifesto } = content

  if (!manifesto) return null

  return (
    <section id="manifesto" className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-36">
        <h2 className="max-w-4xl font-serif text-4xl leading-[1.12] sm:text-6xl">
          <KineticLine text={manifesto.lead} className="text-ink" reduced={reduced} />{' '}
          <KineticLine
            text={manifesto.punch}
            className="text-accent italic"
            delayStart={manifesto.lead.split(' ').length * 0.07 + 0.15}
            reduced={reduced}
          />
        </h2>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-muted"
        >
          {manifesto.body}
        </motion.p>
      </div>
    </section>
  )
}
