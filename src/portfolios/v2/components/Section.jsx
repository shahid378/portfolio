import { motion } from 'motion/react'

export function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-lg leading-relaxed text-ink-muted">{lead}</p>}
    </div>
  )
}

export default function Section({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mx-auto w-full max-w-6xl px-6 py-20 sm:py-28 ${className}`}
    >
      {children}
    </motion.section>
  )
}
