import { useEffect, useMemo, useState } from 'react'
import { DEFAULT_PERSONA, PERSONA_IDS, getContent } from '@data'
import { PersonaContext } from './usePersona'

const QUERY_KEY = 'mode'

function readPersonaFromUrl() {
  if (typeof window === 'undefined') return DEFAULT_PERSONA
  const requested = new URLSearchParams(window.location.search).get(QUERY_KEY)
  return PERSONA_IDS.includes(requested) ? requested : DEFAULT_PERSONA
}

export default function PersonaProvider({ children }) {
  const [personaId, setPersonaId] = useState(readPersonaFromUrl)

  // Keep the URL shareable: a link with ?mode=creative opens straight into the
  // writing side, while the default stays clean for recruiters.
  useEffect(() => {
    const url = new URL(window.location.href)
    if (personaId === DEFAULT_PERSONA) {
      url.searchParams.delete(QUERY_KEY)
    } else {
      url.searchParams.set(QUERY_KEY, personaId)
    }
    window.history.replaceState({}, '', url)
  }, [personaId])

  // Palette lives in CSS, keyed off this attribute, so switching personas
  // repaints without re-rendering the tree.
  useEffect(() => {
    document.documentElement.dataset.persona = personaId
  }, [personaId])

  const content = useMemo(() => getContent(personaId), [personaId])

  // Single-page app on static hosting, so metadata is set imperatively.
  useEffect(() => {
    const { title, description } = content.persona.seo
    document.title = title
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
    }
    tag.setAttribute('content', description)

    // Keep mobile browser chrome in step with the theme.
    const themeTag = document.querySelector('meta[name="theme-color"]')
    if (themeTag && content.persona.themeColor) {
      themeTag.setAttribute('content', content.persona.themeColor)
    }
  }, [content])

  // Browser back/forward should move between personas too.
  useEffect(() => {
    const onPop = () => setPersonaId(readPersonaFromUrl())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const value = useMemo(
    () => ({ personaId, setPersona: setPersonaId, content }),
    [personaId, content],
  )

  return <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>
}
