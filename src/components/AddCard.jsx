import { motion } from 'framer-motion'
import { CreditCard } from 'lucide-react'

export default function AddCard() {
  return (
    <div className="relative min-h-screen text-cyan-100 px-6 pt-24 pb-24 max-w-md mx-auto">
      <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/50 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(34,211,238,0.25)]">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Add Card</h3>
          <CreditCard className="text-cyan-300" size={22} />
        </div>

        <div className="mt-6 relative h-44 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-400/30 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(400px_120px_at_20%_0%,rgba(255,255,255,0.15),transparent)]" />
          <motion.div className="absolute inset-0"
            animate={{ background: [
              'radial-gradient(200px_60px_at_30%_10%,rgba(34,211,238,0.35),transparent)',
              'radial-gradient(260px_80px_at_70%_90%,rgba(59,130,246,0.35),transparent)',
              'radial-gradient(200px_60px_at_30%_10%,rgba(34,211,238,0.35),transparent)'
            ] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute bottom-3 left-4 text-cyan-100 font-medium">BLUE FLAME</div>
          <div className="absolute top-3 right-4 text-cyan-200 text-sm">••• 2456</div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <input className="bg-slate-900/60 border border-cyan-400/30 rounded-xl px-3 py-3 text-cyan-100 placeholder:text-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Card Number" />
          <input className="bg-slate-900/60 border border-cyan-400/30 rounded-xl px-3 py-3 text-cyan-100 placeholder:text-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="MM/YY" />
          <input className="bg-slate-900/60 border border-cyan-400/30 rounded-xl px-3 py-3 text-cyan-100 placeholder:text-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 col-span-2" placeholder="Name on Card" />
        </div>

        <button className="mt-6 w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_10px_40px_rgba(59,130,246,0.45)] border border-cyan-400/30">Save Card</button>
      </div>
    </div>
  )
}
