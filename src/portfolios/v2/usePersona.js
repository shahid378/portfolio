import { createContext, useContext } from 'react'
import { PERSONA_IDS } from '@data'

// Kept apart from the provider component so this module exports no components —
// which is both what react-refresh wants and a cleaner boundary.
export const PersonaContext = createContext(null)

export function usePersona() {
  const ctx = useContext(PersonaContext)
  if (!ctx) throw new Error('usePersona must be used inside a PersonaProvider')
  return ctx
}

export { PERSONA_IDS }
