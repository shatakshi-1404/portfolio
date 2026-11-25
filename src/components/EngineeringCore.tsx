import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

interface EngineeringCoreProps {
  /** Simplified scene for phones / touch devices. */
  lite?: boolean
  /** Pause the render loop when off-screen. */
  active?: boolean
}

const VIOLET = '#8B5CF6'
const CYAN = '#22D3EE'
const LIME = '#A3E635'

/** Deterministic PRNG so the scene is identical on every load. */
function mulberry32(seed: number) {
  let a = seed
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function Ring({
  radius,
  tube = 0.018,
  tilt,
  speed,
  color,
}: {
  radius: number
  tube?: number
  tilt: [number, number, number]
  speed: number
  color: string
}) {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.z += dt * speed
  })
  return (
    <group rotation={tilt}>
      <group ref={ref}>
        <mesh>
          <torusGeometry args={[radius, tube, 24, 200]} />
          <meshStandardMaterial color={color} metalness={1} roughness={0.22} envMapIntensity={1.4} />
        </mesh>
        {/* a bead riding the ring */}
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.07, 20, 20]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} toneMapped={false} />
        </mesh>
      </group>
    </group>
  )
}

function OrbitNode({
  radius,
  speed,
  phase,
  incline,
  color,
  size,
}: {
  radius: number
  speed: number
  phase: number
  incline: number
  color: string
  size: number
}) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame(({ clock }) => {
    const m = ref.current
    if (!m) return
    const t = clock.elapsedTime * speed + phase
    const x = Math.cos(t) * radius
    const z = Math.sin(t) * radius
    m.position.set(x, z * Math.sin(incline), z * Math.cos(incline))
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[size, 1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.4} metalness={0.4} roughness={0.3} toneMapped={false} />
    </mesh>
  )
}

/** Particle shell connected by faint lines — the "network" part of the core. */
function Network({ count, linkDistance }: { count: number; linkDistance: number }) {
  const group = useRef<THREE.Group>(null)

  const { points, lines } = useMemo(() => {
    const rand = mulberry32(1404)
    const pts: THREE.Vector3[] = []
    for (let i = 0; i < count; i++) {
      const u = rand()
      const v = rand()
      const theta = 2 * Math.PI * u
      const phi = Math.acos(2 * v - 1)
      const r = 2.1 + rand() * 1.5
      pts.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta) * 0.8,
          r * Math.cos(phi),
        ),
      )
    }
    const pos = new Float32Array(count * 3)
    pts.forEach((p, i) => p.toArray(pos, i * 3))

    const seg: number[] = []
    for (let i = 0; i < pts.length; i++) {
      let links = 0
      for (let j = i + 1; j < pts.length && links < 3; j++) {
        if (pts[i].distanceTo(pts[j]) < linkDistance) {
          seg.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z)
          links++
        }
      }
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    const lGeo = new THREE.BufferGeometry()
    lGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(seg), 3))
    return { points: pGeo, lines: lGeo }
  }, [count, linkDistance])

  useFrame((_, dt) => {
    if (group.current) {
      group.current.rotation.y += dt * 0.05
      group.current.rotation.x += dt * 0.012
    }
  })

  return (
    <group ref={group}>
      <points geometry={points}>
        <pointsMaterial color="#c4b5fd" size={0.045} sizeAttenuation transparent opacity={0.9} depthWrite={false} />
      </points>
      <lineSegments geometry={lines}>
        <lineBasicMaterial color={CYAN} transparent opacity={0.16} depthWrite={false} />
      </lineSegments>
    </group>
  )
}

function Core({ lite }: { lite: boolean }) {
  const group = useRef<THREE.Group>(null)
  const inner = useRef<THREE.Mesh>(null)
  const shell = useRef<THREE.Mesh>(null)

  useFrame((state, dt) => {
    // mouse-responsive tilt, eased
    if (group.current) {
      const tx = -state.pointer.y * 0.38
      const ty = state.pointer.x * 0.55
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, tx, 2.6, dt)
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, ty, 2.6, dt)
      group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08
    }
    if (inner.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.6) * 0.04
      inner.current.scale.setScalar(s)
    }
    if (shell.current) shell.current.rotation.y += dt * 0.12
  })

  return (
    <group ref={group}>
      {/* glowing inner core */}
      <mesh ref={inner}>
        <sphereGeometry args={[0.62, 48, 48]} />
        <meshStandardMaterial color="#e9d5ff" emissive={VIOLET} emissiveIntensity={2.4} toneMapped={false} />
      </mesh>
      <pointLight color={VIOLET} intensity={26} distance={9} />
      <pointLight position={[0, 0, 2]} color={CYAN} intensity={8} distance={8} />

      {/* glass sphere */}
      <mesh>
        <sphereGeometry args={[1.28, lite ? 48 : 96, lite ? 48 : 96]} />
        {lite ? (
          <meshStandardMaterial color="#a78bfa" transparent opacity={0.22} roughness={0.1} metalness={0.2} />
        ) : (
          <meshPhysicalMaterial
            color="#c7d2fe"
            transmission={1}
            thickness={1.2}
            roughness={0.04}
            ior={1.35}
            attenuationColor={VIOLET}
            attenuationDistance={2.4}
            envMapIntensity={1.6}
            clearcoat={1}
            clearcoatRoughness={0.05}
          />
        )}
      </mesh>

      {/* faceted wire shell */}
      <mesh ref={shell}>
        <icosahedronGeometry args={[1.62, 1]} />
        <meshBasicMaterial color={CYAN} wireframe transparent opacity={0.22} />
      </mesh>

      {/* orbiting metallic rings */}
      <Ring radius={2.05} tilt={[Math.PI / 2.35, 0, 0]} speed={0.35} color="#cbd5e1" />
      <Ring radius={2.55} tilt={[Math.PI / 3, 0.5, 0]} speed={-0.26} color={VIOLET} tube={0.014} />
      {!lite && <Ring radius={3.05} tilt={[Math.PI / 1.9, -0.6, 0.3]} speed={0.18} color={CYAN} tube={0.012} />}

      {/* floating nodes */}
      <OrbitNode radius={2.9} speed={0.28} phase={0} incline={0.6} color={CYAN} size={0.1} />
      <OrbitNode radius={2.4} speed={-0.34} phase={2} incline={-0.4} color={VIOLET} size={0.085} />
      <OrbitNode radius={3.3} speed={0.2} phase={4} incline={1.0} color={LIME} size={0.07} />
      {!lite && (
        <>
          <OrbitNode radius={2.7} speed={0.31} phase={1} incline={-1.1} color={CYAN} size={0.075} />
          <OrbitNode radius={3.5} speed={-0.17} phase={3} incline={0.2} color={VIOLET} size={0.095} />
        </>
      )}

      <Network count={lite ? 46 : 110} linkDistance={lite ? 1.5 : 1.25} />
    </group>
  )
}

export default function EngineeringCore({ lite = false, active = true }: EngineeringCoreProps) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={lite ? [1, 1.25] : [1, 1.75]}
      camera={{ position: [0, 0, 8.2], fov: 40 }}
      gl={{ antialias: !lite, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
      aria-hidden
    >
      <ambientLight intensity={0.35} />
      <Core lite={lite} />
      {/* Procedural studio lighting: no external HDR download. */}
      <Environment resolution={lite ? 64 : 256}>
        <Lightformer form="rect" intensity={3} color="#8B5CF6" position={[-5, 3, 4]} scale={[8, 3, 1]} />
        <Lightformer form="rect" intensity={3} color="#22D3EE" position={[5, -2, 4]} scale={[8, 3, 1]} />
        <Lightformer form="ring" intensity={2} color="#ffffff" position={[0, 5, -4]} scale={6} />
      </Environment>
    </Canvas>
  )
}
