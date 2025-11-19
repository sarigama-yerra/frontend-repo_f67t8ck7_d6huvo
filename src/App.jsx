import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Home as HomeIcon, Scissors, Sparkles, CreditCard as CardIcon, Clock, Trophy, Settings as SettingsIcon } from 'lucide-react'

import CityNavbar from './components/CityNavbar'
import Onboarding from './components/Onboarding'
import Auth from './components/Auth'
import Home from './components/Home'
import SplitPayment from './components/SplitPayment'
import Suggestions from './components/Suggestions'
import AddCard from './components/AddCard'
import Transactions from './components/Transactions'
import Rewards from './components/Rewards'
import Settings from './components/Settings'
import NeonBackground from './components/NeonBackground'

const ScreenWrapper = ({ children, screen }) => (
  <motion.div
    key={screen}
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
    className="relative"
  >
    {children}
  </motion.div>
)

function App() {
  const [screen, setScreen] = useState('onboarding')

  const navigate = (key) => {
    if (key === 'split') setScreen('split')
    if (key === 'suggest') setScreen('suggestions')
    if (key === 'rewards') setScreen('rewards')
  }

  const showBottomBar = ['home','split','suggestions','addcard','transactions','rewards','settings'].includes(screen)

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Ambient neon layers behind content (except onboarding which is cinematic) */}
      {screen !== 'onboarding' && <NeonBackground />}

      <CityNavbar />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {screen === 'onboarding' && (
            <ScreenWrapper screen={screen}>
              <Onboarding onContinue={() => setScreen('auth')} />
            </ScreenWrapper>
          )}

          {screen === 'auth' && (
            <ScreenWrapper screen={screen}>
              <Auth onLogin={() => setScreen('home')} />
            </ScreenWrapper>
          )}

          {screen === 'home' && (
            <ScreenWrapper screen={screen}>
              <Home onNavigate={navigate} />
            </ScreenWrapper>
          )}

          {screen === 'split' && (
            <ScreenWrapper screen={screen}>
              <SplitPayment />
            </ScreenWrapper>
          )}
          {screen === 'suggestions' && (
            <ScreenWrapper screen={screen}>
              <Suggestions />
            </ScreenWrapper>
          )}
          {screen === 'addcard' && (
            <ScreenWrapper screen={screen}>
              <AddCard />
            </ScreenWrapper>
          )}
          {screen === 'transactions' && (
            <ScreenWrapper screen={screen}>
              <Transactions />
            </ScreenWrapper>
          )}
          {screen === 'rewards' && (
            <ScreenWrapper screen={screen}>
              <Rewards />
            </ScreenWrapper>
          )}
          {screen === 'settings' && (
            <ScreenWrapper screen={screen}>
              <Settings />
            </ScreenWrapper>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom nav */}
      {showBottomBar && (
        <div className="fixed bottom-4 left-0 right-0 z-40">
          <div className="mx-auto max-w-md px-4">
            <div className="backdrop-blur-xl bg-slate-900/60 border border-cyan-400/20 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.25)]">
              <div className="grid grid-cols-7 text-center text-cyan-200/80 text-[10px]">
                {[
                  { key: 'home', label: 'Home', Icon: HomeIcon },
                  { key: 'split', label: 'Split', Icon: Scissors },
                  { key: 'suggestions', label: 'AI', Icon: Sparkles },
                  { key: 'addcard', label: 'Card', Icon: CardIcon },
                  { key: 'transactions', label: 'History', Icon: Clock },
                  { key: 'rewards', label: 'Rewards', Icon: Trophy },
                  { key: 'settings', label: 'Settings', Icon: SettingsIcon }
                ].map(({ key, label, Icon }) => (
                  <button
                    key={key}
                    onClick={() => setScreen(key)}
                    className={`py-2.5 flex flex-col items-center gap-0.5 ${screen===key ? 'text-cyan-300' : ''}`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
