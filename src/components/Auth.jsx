import { motion } from 'framer-motion'
import { Mail, Lock, ArrowRight } from 'lucide-react'

export default function Auth({ onLogin }) {
  return (
    <div className="relative min-h-screen text-cyan-100 flex items-end">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-20%,rgba(59,130,246,0.25),transparent),radial-gradient(700px_300px_at_80%_120%,rgba(34,211,238,0.2),transparent)]" />

      <div className="relative z-10 w-full max-w-md mx-auto px-6 pb-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="rounded-3xl border border-cyan-400/30 bg-slate-900/50 backdrop-blur-xl p-6 shadow-[0_0_60px_rgba(34,211,238,0.25)]">
          <h2 className="text-2xl font-semibold mb-6 text-cyan-100">Welcome back</h2>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-3 top-3 text-cyan-300"><Mail size={18} /></div>
              <input className="w-full bg-slate-900/60 border border-cyan-400/30 rounded-xl pl-10 pr-3 py-3 text-cyan-100 placeholder:text-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Email" />
            </div>
            <div className="relative">
              <div className="absolute left-3 top-3 text-cyan-300"><Lock size={18} /></div>
              <input type="password" className="w-full bg-slate-900/60 border border-cyan-400/30 rounded-xl pl-10 pr-3 py-3 text-cyan-100 placeholder:text-cyan-300/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" placeholder="Password" />
            </div>
            <button onClick={onLogin} className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_10px_40px_rgba(59,130,246,0.45)] border border-cyan-400/30">
              Continue <ArrowRight size={18} />
            </button>
            <p className="text-center text-cyan-300/70 text-sm">New here? <span className="text-cyan-200">Create account</span></p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
