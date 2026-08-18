import { useReducedMotion } from 'motion/react'
import { usePersona } from '../usePersona'

/*
 * Infinite ticker of the "hire me for..." lines. The track holds two identical
 * copies and translates by exactly -50%, so the loop is seamless. Pure CSS
 * animation, which keeps it off the main thread.
 */
export default function Marquee({ reverse = false }) {
  const { content } = usePersona()
  const reduced = useReducedMotion()
  const items = content.marquee

  if (!items || items.length === 0) return null

  // Static, readable fallback when motion is unwelcome.
  if (reduced) {
    return (
      <div className="overflow-hidden border-y border-hairline py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-2 px-6">
          {items.map((item) => (
            <span
              key={item}
              className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    )
  }

  const track = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-hairline py-5">
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${items.length * 6}s` }}
      >
        {track.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center">
            <span className="px-6 font-serif text-xl italic text-ink sm:text-2xl">{item}</span>
            <span aria-hidden className="text-accent">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
