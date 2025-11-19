import { memo } from 'react'
import { motion } from 'framer-motion'

function NeonBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_400px_at_20%_110%,rgba(34,211,238,0.18),transparent),radial-gradient(900px_400px_at_90%_120%,rgba(59,130,246,0.2),transparent)] bg-slate-950" />

      {/* Soft noise overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen"
           style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />

      {/* Animated light trails */}
      <motion.div
        className="absolute -left-32 top-10 h-2 rounded-full bg-cyan-400/40 blur-xl"
        initial={{ width: 0, opacity: 0.4 }}
        animate={{ width: ['0%', '60%', '0%'], opacity: [0.2, 0.6, 0.2], x: [0, 120, 240] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-24 h-[3px] rounded-full bg-blue-500/40 blur-lg"
        initial={{ width: 0, opacity: 0.3 }}
        animate={{ width: ['0%', '80%', '0%'], opacity: [0.2, 0.5, 0.2], x: [0, -160, -320] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Floating glow orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"
          style={{ left: `${(i * 17) % 90}%`, top: `${(i * 23) % 90}%` }}
          animate={{ y: [0, -10, 0], x: [0, 10, 0], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}
    </div>
  )
}

export default memo(NeonBackground)
