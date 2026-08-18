import { useEffect, useState } from 'react'
import { profile } from '@data'
import { usePersona } from '../usePersona'
import PersonaToggle from './PersonaToggle'

const NAV = {
  tech: [
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
  creative: [
    { id: 'services', label: 'What I write' },
    { id: 'work', label: 'Samples' },
    { id: 'contact', label: 'Contact' },
  ],
}

export default function Header() {
  const { personaId, content } = usePersona()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Samples section is absent until there is work to show, so drop its nav link.
  const items = NAV[personaId].filter((item) => item.id !== 'work' || content.work.length > 0)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-hairline bg-surface/85 backdrop-blur-xl' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6">
        <a href="#top" className="text-sm font-bold tracking-tight text-ink">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <PersonaToggle />
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-hairline px-4 py-1.5 text-sm text-ink-muted transition-colors hover:border-accent hover:text-accent sm:block"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  )
}
