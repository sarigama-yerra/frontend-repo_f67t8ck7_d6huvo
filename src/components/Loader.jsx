import { motion } from 'framer-motion'

export default function Loader({ label = 'Loading the City...' }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 backdrop-blur-xl">
      <div className="flex flex-col items-center">
        <div className="relative w-16 h-16">
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-cyan-400/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          />
          <motion.span
            className="absolute inset-2 rounded-full border-2 border-blue-500/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
          />
          <span className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/30 blur-md" />
        </div>
        <p className="mt-4 text-cyan-200 text-sm">{label}</p>
      </div>
    </div>
  )
}
