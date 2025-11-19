import { motion } from 'framer-motion'

const tx = [
  { t: 'Today', items: [
    { name: 'Metro Pass', amount: '-$3.50' },
    { name: 'Blue Cafe', amount: '-$12.30' },
  ]},
  { t: 'Yesterday', items: [
    { name: 'Night Market', amount: '-$24.70' },
    { name: 'Rewards Boost', amount: '+$2.15' },
  ]}
]

export default function Transactions() {
  return (
    <div className="relative min-h-screen text-cyan-100 px-6 pt-24 pb-24 max-w-md mx-auto">
      <div className="space-y-6">
        {tx.map((day, i) => (
          <div key={i}>
            <p className="text-cyan-300/70 text-sm mb-2">{day.t}</p>
            <div className="relative border-l-2 border-cyan-400/30 ml-4">
              {day.items.map((it, j) => (
                <motion.div key={j} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: j * 0.05 }}
                  className="relative ml-4 mb-4 p-4 rounded-2xl border border-cyan-400/30 bg-slate-900/50 backdrop-blur-xl">
                  <div className="absolute -left-[11px] top-4 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-100">{it.name}</span>
                    <span className={it.amount.startsWith('+') ? 'text-cyan-300' : 'text-blue-300'}>{it.amount}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
