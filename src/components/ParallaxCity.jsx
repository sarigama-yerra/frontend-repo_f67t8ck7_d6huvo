import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

// Subtle parallax neon city layers for depth. Designed for mobile: reacts to slight pointer moves.
export default function ParallaxCity({ intensity = 8, className = '' }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const containerRef = useRef(null)

  // Map pointer offset to small translations
  const layer = (factor) => ({
    x: useTransform(x, [ -50, 50 ], [ -factor, factor ]),
    y: useTransform(y, [ -50, 50 ], [ -factor, factor ])
  })

  const l1 = layer(intensity * 0.3)
  const l2 = layer(intensity * 0.6)
  const l3 = layer(intensity * 1.0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.touches ? e.touches[0].clientX : e.clientX) - (rect.left + rect.width / 2)
      const py = (e.touches ? e.touches[0].clientY : e.clientY) - (rect.top + rect.height / 2)
      x.set(Math.max(-50, Math.min(50, px / (rect.width / 4) * 50)))
      y.set(Math.max(-50, Math.min(50, py / (rect.height / 4) * 50)))
    }

    const relax = () => {
      animate(x, 0, { type: 'spring', stiffness: 60, damping: 20 })
      animate(y, 0, { type: 'spring', stiffness: 60, damping: 20 })
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('touchmove', handleMove, { passive: true })
    el.addEventListener('mouseleave', relax)
    el.addEventListener('touchend', relax)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('touchmove', handleMove)
      el.removeEventListener('mouseleave', relax)
      el.removeEventListener('touchend', relax)
    }
  }, [x, y])

  return (
    <div ref={containerRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Farthest glow horizon */}
      <motion.div style={l1} className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-600/20 via-cyan-500/10 to-transparent" />

      {/* Mid skyline silhouettes */}
      <motion.svg style={l2} viewBox="0 0 800 200" preserveAspectRatio="none"
        className="absolute bottom-0 left-0 right-0 h-36 text-cyan-400/20">
        <path d="M0 180 L40 160 L60 165 L90 150 L120 170 L150 130 L170 140 L200 120 L240 150 L260 140 L300 160 L330 150 L360 165 L400 130 L430 150 L470 140 L510 160 L540 150 L580 170 L620 145 L650 160 L700 140 L740 155 L800 140 L800 200 L0 200 Z" fill="currentColor" />
      </motion.svg>

      {/* Foreground buildings with neon windows */}
      <motion.div style={l3} className="absolute bottom-0 left-0 right-0 h-28">
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/80 to-transparent" />
        <div className="absolute left-6 bottom-0 w-8 h-24 bg-slate-800/90 border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.12)]" />
        <div className="absolute left-20 bottom-0 w-12 h-20 bg-slate-800/90 border border-cyan-400/20" />
        <div className="absolute left-40 bottom-0 w-10 h-28 bg-slate-800/90 border border-cyan-400/20" />
        <div className="absolute left-64 bottom-0 w-7 h-18 bg-slate-800/90 border border-cyan-400/20" />
        <div className="absolute left-80 bottom-0 w-11 h-24 bg-slate-800/90 border border-cyan-400/20" />
        {/* Neon windows */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="absolute w-1 h-2 bg-cyan-400/60" style={{
            left: `${(i * 17) % 90 + 5}%`,
            bottom: `${(i * 7) % 24 + 3}px`,
            boxShadow: '0 0 8px rgba(34,211,238,0.5)'
          }} />
        ))}
      </motion.div>
    </div>
  )
}
