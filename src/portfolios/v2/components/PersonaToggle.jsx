import { motion } from 'motion/react'
import { personas } from '@data'
import { usePersona, PERSONA_IDS } from '../usePersona'

export default function PersonaToggle() {
  const { personaId, setPersona } = usePersona()

  return (
    <div
      role="tablist"
      aria-label="Choose what to see"
      className="relative flex items-center gap-1 rounded-full border border-hairline bg-surface-raised/80 p-1 backdrop-blur"
    >
      {PERSONA_IDS.map((id) => {
        const selected = id === personaId
        return (
          <button
            key={id}
            role="tab"
            aria-selected={selected}
            onClick={() => setPersona(id)}
            className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              selected ? 'text-surface' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {selected && (
              <motion.span
                layoutId="persona-pill"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                className="absolute inset-0 rounded-full bg-accent"
              />
            )}
            <span className="relative z-10">{personas[id].label}</span>
          </button>
        )
      })}
    </div>
  )
}
