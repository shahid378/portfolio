import { motion } from 'motion/react'
import { usePersona } from '../usePersona'
import Section, { SectionHeading } from './Section'

export default function Services() {
  const { personaId, content } = usePersona()
  const { services } = content

  const isTech = personaId === 'tech'

  return (
    <Section id="services">
      <SectionHeading
        eyebrow={isTech ? 'Services' : 'What I do'}
        title={isTech ? 'What I can build for you' : 'What I can make for you'}
        lead={
          isTech
            ? 'Everything below is work I have shipped to production, not a list of things I have read about.'
            : 'Bring me a brief, a rough idea, or a shoot that needs a face. Anything marked new is something I am building into, and I would rather say so.'
        }
      />

      <div className="grid gap-5 md:grid-cols-3">
        {services.proven.map((service, i) => (
          <motion.article
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            className="group flex flex-col rounded-2xl border border-hairline bg-surface-raised/60 p-6 transition-colors hover:border-accent/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              {/* Said plainly rather than implied, so nothing here overclaims. */}
              {service.nascent && (
                <span className="mt-0.5 shrink-0 rounded-full border border-hairline px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-faint">
                  New
                </span>
              )}
            </div>

            {service.hook && (
              <p className="mt-3 font-serif text-xl leading-snug text-accent">{service.hook}</p>
            )}

            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{service.summary}</p>

            <ul className="mt-5 space-y-2">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5 text-sm text-ink-muted">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-hairline pt-5">
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {services.expanding && (
        <div className="mt-8 rounded-2xl border border-dashed border-hairline p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
              Also expanding into
            </span>
            {services.expanding.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-hairline px-3 py-1 text-sm text-ink-muted"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-3 text-sm text-ink-faint">{services.expanding.note}</p>
        </div>
      )}
    </Section>
  )
}
