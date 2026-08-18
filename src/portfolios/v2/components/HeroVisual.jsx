import { Suspense, lazy } from 'react'
import { useCanRender3D } from '../useCanRender3D'
import { usePersona } from '../usePersona'

// Split so three.js never enters the initial bundle.
const HeroScene = lazy(() => import('./HeroScene'))

const ACCENT = { tech: '#0dfc4b', creative: '#f0a03c' }

// Static stand-in used on phones, reduced-motion, weak devices and while the
// 3D chunk loads. Pure CSS, so it costs nothing.
function HeroPoster() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/25" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />
    </div>
  )
}

export default function HeroVisual() {
  const canRender3D = useCanRender3D()
  const { personaId } = usePersona()

  if (!canRender3D) return <HeroPoster />

  return (
    <div aria-hidden className="absolute inset-0">
      {/* Sits beside the copy rather than behind it, so wireframe edges never
          cut through the headline. */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[62%]">
        <Suspense fallback={<HeroPoster />}>
          <HeroScene
            accent={ACCENT[personaId] ?? ACCENT.tech}
            drift={personaId === 'creative' ? 0.6 : 1}
          />
        </Suspense>
      </div>

      {/* Scrim guarantees text contrast wherever the two still overlap. */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-transparent md:via-surface/70" />
    </div>
  )
}
