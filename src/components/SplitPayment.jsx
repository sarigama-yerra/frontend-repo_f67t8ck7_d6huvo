import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SplitPayment() {
  const [value, setValue] = useState(50)
  return (
    <div className="relative min-h-screen text-cyan-100 px-6 pt-24 pb-24 max-w-md mx-auto">
      <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(34,211,238,0.25)]">
        <h3 className="text-xl font-semibold">Split Payment</h3>
        <p className="text-cyan-300/70 text-sm">Drag the flame to adjust</p>

        <div className="mt-8">
          <div className="relative h-16">
            <div className="absolute inset-y-0 left-0 right-0 m-auto h-[6px] rounded-full bg-gradient-to-r from-blue-800/60 to-cyan-500/60 border border-cyan-400/20" />

            <motion.div className="absolute top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_25px_rgba(34,211,238,0.6)] border border-cyan-400/40"
              drag="x" dragConstraints={{ left: 0, right: 280 }} dragElastic={0.05}
              onDrag={(e, info) => setValue(Math.round((info.point.x % 300) / 3))}
              animate={{ boxShadow: ['0 0 20px rgba(34,211,238,0.5)','0 0 35px rgba(34,211,238,0.7)','0 0 20px rgba(34,211,238,0.5)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            {/* Flame-like reactive glow */}
            <motion.div className="absolute inset-0 pointer-events-none"
              animate={{ background: [
                'radial-gradient(60px_30px_at_var(--x,50%)_50%,rgba(59,130,246,0.25),transparent)',
                'radial-gradient(80px_40px_at_var(--x,50%)_50%,rgba(34,211,238,0.35),transparent)',
                'radial-gradient(60px_30px_at_var(--x,50%)_50%,rgba(59,130,246,0.25),transparent)'
              ] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              style={{ '--x': `${value}%` }}
            />
          </div>
          <div className="mt-6 flex items-center justify-between text-cyan-200">
            <span>You</span><span className="text-2xl font-semibold">{value}%</span><span>Friend</span>
          </div>
        </div>
      </div>
    </div>
  )
}
