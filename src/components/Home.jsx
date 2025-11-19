import { motion } from 'framer-motion'
import { Wallet, ChartBar, Sparkles, ArrowRight } from 'lucide-react'
import NeonBackground from './NeonBackground'

export default function Home({ onNavigate }) {
  return (
    <div className="relative min-h-screen text-cyan-100">
      <NeonBackground />

      <div className="relative z-10 max-w-md mx-auto px-6 pt-24 pb-28">
        <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/50 backdrop-blur-xl p-5 shadow-[0_0_60px_rgba(34,211,238,0.25)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-300/70 text-sm">Available Balance</p>
              <h2 className="text-3xl font-semibold">$4,932.18</h2>
            </div>
            <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
              <Wallet size={22} />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
            {[
              { title: 'Split', icon: Sparkles, key: 'split' },
              { title: 'Suggestions', icon: ChartBar, key: 'suggest' },
              { title: 'Rewards', icon: ArrowRight, key: 'rewards' }
            ].map(({ title, icon: Icon, key }) => (
              <button key={title} onClick={() => onNavigate(key)} className="rounded-2xl border border-cyan-400/30 bg-slate-900/40 backdrop-blur-xl py-4 text-cyan-200/90 flex flex-col items-center gap-2 hover:bg-white/5">
                <Icon size={18} />
                {title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-cyan-400/30 bg-slate-900/50 p-5">
          <p className="text-cyan-300/70 text-sm">Light Trails</p>
          <motion.div className="h-20 mt-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-600/10 overflow-hidden border border-cyan-400/20">
            <motion.div className="h-full w-1/3 bg-gradient-to-r from-cyan-400/40 to-transparent blur-xl" animate={{ x: ['-30%', '120%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
