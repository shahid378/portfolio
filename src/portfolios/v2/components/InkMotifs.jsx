import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { usePersona } from '../usePersona'

/*
 * Decorative ink blots and paper scraps that drift at different rates as the
 * page scrolls. Creative persona only, purely ornamental, and skipped entirely
 * for reduced-motion users.
 */

function Blot({ className, d, speed, rotate = 0, progress }) {
  const y = useTransform(progress, [0, 1], ['0%', `${speed * 100}%`])
  const r = useTransform(progress, [0, 1], [rotate, rotate + speed * 22])

  return (
    <motion.svg
      style={{ y, rotate: r }}
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 200 200"
      fill="currentColor"
      aria-hidden
    >
      <path d={d} />
    </motion.svg>
  )
}

// Hand-drawn-ish blob outlines, not perfect circles.
const BLOTS = [
  'M148 44c22 20 34 54 24 82s-40 46-72 50-64-8-79-32 -8-56 12-78 52-32 79-28 24 4 36 6z',
  'M52 30c30-14 74-6 96 20s22 68 2 94-62 34-92 20-48-52-44-84 8-36 38-50z',
]

export default function InkMotifs() {
  const { personaId } = usePersona()
  const reduced = useReducedMotion()

  // Gate before the inner component so useScroll never tracks a ref that was
  // never mounted.
  if (personaId !== 'creative' || reduced) return null
  return <Motifs />
}

function Motifs() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Blot
        progress={scrollYProgress}
        d={BLOTS[0]}
        speed={-0.35}
        rotate={-12}
        className="-left-16 top-[12%] h-64 w-64 text-accent/[0.07] sm:h-80 sm:w-80"
      />
      <Blot
        progress={scrollYProgress}
        d={BLOTS[1]}
        speed={0.28}
        rotate={18}
        className="-right-20 top-[45%] h-72 w-72 text-ink/[0.05] sm:h-96 sm:w-96"
      />
      <Blot
        progress={scrollYProgress}
        d={BLOTS[0]}
        speed={-0.18}
        rotate={40}
        className="bottom-[8%] left-[22%] h-40 w-40 text-accent/[0.05]"
      />
    </div>
  )
}
