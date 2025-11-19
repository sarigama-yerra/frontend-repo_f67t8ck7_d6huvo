import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Onboarding({ onContinue }) {
  return (
    <div className="relative min-h-screen text-cyan-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/30 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 flex flex-col min-h-screen max-w-md mx-auto px-6 pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-auto"
        >
          <h1 className="text-4xl font-semibold leading-tight text-cyan-100 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
            Glide through the Blue Flame City
          </h1>
          <p className="mt-3 text-cyan-200/80">
            Payments that flow. Neon streets. Holographic cards. Welcome to DualSwipe.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 text-center">
            {['Fast', 'Secure', 'Intuitive'].map((k, i) => (
              <motion.div key={k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                className="rounded-xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-xl py-3 text-sm text-cyan-200/90 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
                {k}
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={onContinue}
            whileTap={{ scale: 0.98 }}
            className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_10px_40px_rgba(59,130,246,0.45)] border border-cyan-400/30"
          >
            Enter City
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
