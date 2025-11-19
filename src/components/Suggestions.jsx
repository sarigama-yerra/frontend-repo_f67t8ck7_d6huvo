import { motion } from 'framer-motion'

const items = [
  { title: 'Use BlueCard • 5% back', sub: 'Groceries nearby', tone: 'cyan' },
  { title: 'Split ride automatically', sub: 'Frequent route detected', tone: 'blue' },
  { title: 'Round-up savings', sub: 'Build your flame fund', tone: 'cyan' }
]

export default function Suggestions() {
  return (
    <div className="relative min-h-screen text-cyan-100 px-6 pt-24 pb-24 max-w-md mx-auto">
      <div className="space-y-4">
        {items.map((card, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="rounded-3xl border border-cyan-400/30 bg-slate-900/50 backdrop-blur-xl p-5 shadow-[0_0_50px_rgba(34,211,238,0.25)] relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl" />
            <p className="text-cyan-200/80 text-sm">Smart Suggestion</p>
            <h3 className="mt-1 text-lg font-semibold">{card.title}</h3>
            <p className="text-cyan-300/70 text-sm">{card.sub}</p>

            {/* Hologram scan line */}
            <motion.div className="mt-4 h-10 rounded-lg bg-cyan-400/10 overflow-hidden border border-cyan-400/20">
              <motion.div className="h-full w-1/3 bg-gradient-to-r from-cyan-400/30 to-transparent blur-md" animate={{ x: ['-30%', '120%'] }} transition={{ duration: 2.2, repeat: Infinity }} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
