import React, { useEffect, useState, lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import Loader from './Loader'

// Error boundary to prevent blank screen if the Spline chunk or scene fails
class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    console.error('Spline failed to load:', error, info)
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

// Lazy-load Spline to keep initial bundle light
const Spline = lazy(() => import('@splinetool/react-spline'))

export default function Onboarding({ onContinue }) {
  const [loaded, setLoaded] = useState(false)
  const [showSkip, setShowSkip] = useState(false)
  const [failed, setFailed] = useState(false)

  // Safety timeout in case onLoad isn't fired
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 4500)
    const s = setTimeout(() => setShowSkip(true), 2000)
    return () => { clearTimeout(t); clearTimeout(s) }
  }, [])

  const StaticBackdrop = (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(700px_360px_at_80%_110%,rgba(34,211,238,0.2),transparent)] bg-slate-950" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
    </div>
  )

  return (
    <div className="relative min-h-screen text-cyan-100">
      <div className="absolute inset-0">
        <SplineErrorBoundary fallback={StaticBackdrop}>
          <Suspense fallback={<Loader label="Loading 3D scene..." />}> 
            {!failed ? (
              <Spline
                scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
                onLoad={() => setLoaded(true)}
                onError={() => { setFailed(true); setLoaded(true) }}
              />
            ) : (
              StaticBackdrop
            )}
          </Suspense>
        </SplineErrorBoundary>
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

          <div className="mt-8 grid grid-cols-1 gap-3">
            <motion.button
              onClick={onContinue}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-[0_10px_40px_rgba(59,130,246,0.45)] border border-cyan-400/30"
            >
              Enter City
            </motion.button>
            {showSkip && (
              <button
                onClick={() => { setFailed(true); setLoaded(true) }}
                className="w-full py-3 rounded-xl border border-cyan-400/30 text-cyan-200/80 bg-slate-900/40 backdrop-blur-xl"
              >
                Skip 3D (slow network)
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {!loaded && <Loader label="Warming up neon streets..." />}
    </div>
  )
}
