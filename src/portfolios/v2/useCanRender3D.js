import { useEffect, useState } from 'react'

/*
 * Gate for the WebGL hero. The 3D scene is a desktop flourish, so anything that
 * suggests it would cost more than it adds — reduced-motion preference, small
 * screen, weak device, no WebGL — falls back to a static poster instead.
 */
export function useCanRender3D() {
  const [canRender, setCanRender] = useState(false)

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const widthQuery = window.matchMedia('(min-width: 768px)')

    const supportsWebGL = () => {
      try {
        const canvas = document.createElement('canvas')
        return Boolean(
          window.WebGLRenderingContext &&
            (canvas.getContext('webgl2') || canvas.getContext('webgl')),
        )
      } catch {
        return false
      }
    }

    const evaluate = () => {
      const weakDevice = (navigator.hardwareConcurrency ?? 8) < 4
      setCanRender(
        !motionQuery.matches && widthQuery.matches && !weakDevice && supportsWebGL(),
      )
    }

    evaluate()
    motionQuery.addEventListener('change', evaluate)
    widthQuery.addEventListener('change', evaluate)
    return () => {
      motionQuery.removeEventListener('change', evaluate)
      widthQuery.removeEventListener('change', evaluate)
    }
  }, [])

  return canRender
}
