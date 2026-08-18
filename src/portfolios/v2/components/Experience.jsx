import { motion } from 'motion/react'
import { usePersona } from '../usePersona'
import Section, { SectionHeading } from './Section'

export default function Experience() {
  const { content } = usePersona()
  const { experience, education, skillGroups } = content

  if (experience.length === 0) return null

  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I have done it" />

      <div className="relative space-y-10 border-l border-hairline pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.07, ease: 'easeOut' }}
            className="relative"
          >
            <span
              aria-hidden
              className="absolute -left-[2.28rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-surface bg-accent"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold text-ink">
                {job.role} · <span className="text-accent">{job.company}</span>
              </h3>
              <p className="font-mono text-xs text-ink-faint">{job.period}</p>
            </div>
            {job.client && <p className="mt-0.5 text-sm text-ink-faint">{job.client}</p>}
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{job.summary}</p>

            {job.highlights.length > 0 && (
              <ul className="mt-4 space-y-2">
                {job.highlights.map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm text-ink-muted">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    {line}
                  </li>
                ))}
              </ul>
            )}

            {job.stack.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[11px] text-ink-faint"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {skillGroups.length > 0 && (
        <div id="stack" className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {group.label}
              </h3>
              <ul className="mt-4 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {education && (
        <p className="mt-16 border-t border-hairline pt-8 text-sm text-ink-faint">
          {education.degree} · {education.school} · {education.period}
        </p>
      )}
    </Section>
  )
}
