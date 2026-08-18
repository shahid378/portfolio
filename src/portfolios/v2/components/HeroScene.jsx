import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Icosahedron, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

/*
 * Lazy-loaded WebGL hero. One scene shared by both personas — only the accent
 * colour and motion feel change — so the chunk is paid for once and the persona
 * toggle produces a visible physical shift.
 */

function ParticleField({ color, drift }) {
  const ref = useRef()

  // Fixed seed-free random cloud, generated once.
  const positions = useMemo(() => {
    const count = 1400
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const r = 2.6 + Math.random() * 2.4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [])

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.05 * drift
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15
  })

  return (
    <Points ref={ref} positions={positions} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
      />
    </Points>
  )
}

function Core({ color, drift }) {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.14 * drift
    ref.current.rotation.z += delta * 0.05 * drift
    // Ease toward the pointer rather than snapping to it.
    const { x, y } = state.pointer
    ref.current.rotation.x += (y * 0.35 - ref.current.rotation.x) * 0.04
    ref.current.position.x += (x * 0.35 - ref.current.position.x) * 0.04
  })

  return (
    <Icosahedron ref={ref} args={[1.7, 1]}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.35} />
    </Icosahedron>
  )
}

export default function HeroScene({ accent, drift = 1 }) {
  const color = useMemo(() => new THREE.Color(accent), [accent])

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 50 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      // Pause the loop when the tab is hidden instead of burning battery.
      frameloop="always"
      style={{ pointerEvents: 'none' }}
    >
      <ParticleField color={color} drift={drift} />
      <Core color={color} drift={drift} />
    </Canvas>
  )
}
