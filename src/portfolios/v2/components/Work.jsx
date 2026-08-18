import { motion } from 'motion/react'
import { usePersona } from '../usePersona'
import Section, { SectionHeading } from './Section'

function CaseStudy({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      className="rounded-2xl border border-hairline bg-surface-raised/50 p-7 transition-colors hover:border-accent/40 sm:p-9"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold text-ink sm:text-2xl">{item.title}</h3>
        <p className="font-mono text-xs text-ink-faint">{item.period}</p>
      </div>
      <p className="mt-1 text-sm text-accent">{item.org}</p>

      <dl className="mt-6 space-y-4">
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            Problem
          </dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.problem}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            Approach
          </dt>
          <dd className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.approach}</dd>
        </div>
        <div>
          <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
            Impact
          </dt>
          <dd className="mt-2">
            <ul className="space-y-2">
              {item.impact.map((line) => (
                <li key={line} className="flex gap-2.5 text-sm text-ink">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {line}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-hairline pt-6">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="ml-auto flex flex-wrap gap-4">
          {item.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-ink-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function Sample({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
      className="rounded-2xl border border-hairline bg-surface-raised/50 p-7"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-serif text-2xl text-ink">{item.title}</h3>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {item.format} · {item.year}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.logline}</p>
      {item.excerpt && (
        <blockquote className="mt-5 border-l-2 border-accent/40 pl-5 font-serif text-lg italic leading-relaxed text-ink">
          {item.excerpt}
        </blockquote>
      )}
      {item.href && (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block text-sm font-medium text-ink-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          Read the full piece ↗
        </a>
      )}
    </motion.article>
  )
}

export default function Work() {
  const { personaId, content } = usePersona()
  const items = content.work

  // Creative mode ships with no samples yet. Hiding the section entirely reads
  // as deliberate, where an empty "coming soon" shell would read as unfinished.
  if (items.length === 0) return null

  const isTech = personaId === 'tech'

  return (
    <Section id="work">
      <SectionHeading
        eyebrow={isTech ? 'Selected work' : 'Samples'}
        title={isTech ? 'Things I have shipped' : 'Selected writing'}
        lead={
          isTech
            ? 'Production systems, with public links so you can check the work rather than take my word for it.'
            : undefined
        }
      />
      <div className="space-y-5">
        {items.map((item, i) =>
          isTech ? (
            <CaseStudy key={item.id} item={item} index={i} />
          ) : (
            <Sample key={item.id} item={item} index={i} />
          ),
        )}
      </div>
    </Section>
  )
}
