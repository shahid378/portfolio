import { profile } from '@data'
import { usePersona } from '../usePersona'
import Section, { SectionHeading } from './Section'

export default function Contact() {
  const { personaId, content } = usePersona()
  const isTech = personaId === 'tech'

  return (
    <Section id="contact">
      <div className="rounded-3xl border border-hairline bg-surface-raised/50 p-8 sm:p-14">
        <SectionHeading
          eyebrow="Contact"
          title={isTech ? 'Have something you need built?' : 'Have something you need made?'}
          lead={
            isTech
              ? 'Freelance, contract or full-time. Tell me the problem and I will tell you honestly whether I am the right person for it.'
              : 'A script, a reel, a shoot, or an idea that needs pulling apart. Commissions and collaborations both welcome — send me the brief.'
          }
        />

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={content.persona.cta.href}
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface transition-transform hover:scale-[1.03]"
          >
            {content.persona.cta.label}
          </a>
          <a
            href={profile.links.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.gitHub}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-hairline px-6 py-3 text-sm font-medium text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-3 border-t border-hairline pt-8 text-sm sm:grid-cols-3">
          <p className="text-ink-muted">
            <span className="block text-ink-faint">Email</span>
            <a href={profile.links.mail} className="transition-colors hover:text-accent">
              {profile.email}
            </a>
          </p>
          <p className="text-ink-muted">
            <span className="block text-ink-faint">Phone</span>
            {profile.phone}
          </p>
          <p className="text-ink-muted">
            <span className="block text-ink-faint">Based in</span>
            {profile.location}
          </p>
        </div>
      </div>
    </Section>
  )
}
