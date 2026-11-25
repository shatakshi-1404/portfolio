/** CSS-only "engineering core" used while WebGL loads, on reduced-motion, or if WebGL is unavailable. */
export function CoreFallback({ animated = true }: { animated?: boolean }) {
  return (
    <div className="relative grid h-full w-full place-items-center" aria-hidden>
      <div className="absolute h-[70%] w-[70%] rounded-full bg-violet/20 blur-[80px]" />
      <div className="absolute h-[45%] w-[45%] rounded-full bg-cyan/15 blur-[70px]" />
      {[100, 78, 58].map((size, i) => (
        <div
          key={size}
          className="absolute rounded-full border border-white/10"
          style={{
            width: `${size}%`,
            height: `${size}%`,
            transform: `rotateX(${62 - i * 8}deg) rotateZ(${i * 40}deg)`,
            borderColor: i === 1 ? 'rgba(34,211,238,0.35)' : 'rgba(139,92,246,0.35)',
          }}
        />
      ))}
      <div
        className={`relative h-[34%] w-[34%] rounded-full ${animated ? 'animate-orb-pulse' : ''}`}
        style={{
          background:
            'radial-gradient(circle at 32% 28%, rgba(255,255,255,0.85), rgba(167,139,250,0.55) 28%, rgba(34,211,238,0.28) 62%, rgba(8,11,20,0.2) 100%)',
          boxShadow: '0 0 60px rgba(139,92,246,0.45), inset 0 0 40px rgba(34,211,238,0.25)',
        }}
      />
    </div>
  )
}
