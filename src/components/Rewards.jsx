import { motion } from 'framer-motion'

export default function Rewards() {
  return (
    <div className="relative min-h-screen text-cyan-100 px-6 pt-24 pb-24 max-w-md mx-auto">
      <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur-xl p-6">
        <h3 className="text-xl font-semibold">Rewards Optimization</h3>
        <p className="text-cyan-300/70 text-sm">Cyber-grid view</p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <motion.div key={i} className="aspect-square rounded-xl border border-cyan-400/20 bg-slate-900/40 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
              <motion.div className="absolute inset-0" animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }} transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundImage: 'linear-gradient(45deg, rgba(34,211,238,0.12) 25%, transparent 25%, transparent 50%, rgba(34,211,238,0.12) 50%, rgba(34,211,238,0.12) 75%, transparent 75%, transparent)', backgroundSize: '24px 24px' }} />
            </motion.div>
          ))}
        </div>
        <button className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_10px_40px_rgba(59,130,246,0.45)] border border-cyan-400/30">Optimize Now</button>
      </div>
    </div>
  )
}
