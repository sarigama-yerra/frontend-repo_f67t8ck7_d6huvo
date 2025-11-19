import { useState } from 'react'
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

function App() {
  const [screen, setScreen] = useState('onboarding')

  const navigate = (key) => {
    if (key === 'split') setScreen('split')
    if (key === 'suggest') setScreen('suggestions')
    if (key === 'rewards') setScreen('rewards')
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <CityNavbar />

      {screen === 'onboarding' && (
        <Onboarding onContinue={() => setScreen('auth')} />
      )}

      {screen === 'auth' && (
        <Auth onLogin={() => setScreen('home')} />
      )}

      {screen === 'home' && (
        <Home onNavigate={navigate} />
      )}

      {screen === 'split' && <SplitPayment />}
      {screen === 'suggestions' && <Suggestions />}
      {screen === 'addcard' && <AddCard />}
      {screen === 'transactions' && <Transactions />}
      {screen === 'rewards' && <Rewards />}
      {screen === 'settings' && <Settings />}

      {/* Bottom nav */}
      {['home','split','suggestions','addcard','transactions','rewards','settings'].includes(screen) && (
        <div className="fixed bottom-4 left-0 right-0 z-40">
          <div className="mx-auto max-w-md px-4">
            <div className="backdrop-blur-xl bg-slate-900/60 border border-cyan-400/20 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.25)]">
              <div className="grid grid-cols-7 text-center text-cyan-200/80 text-xs">
                {[
                  ['home','Home'],
                  ['split','Split'],
                  ['suggestions','AI'],
                  ['addcard','Card'],
                  ['transactions','History'],
                  ['rewards','Rewards'],
                  ['settings','Settings']
                ].map(([key,label]) => (
                  <button key={key} onClick={() => setScreen(key)} className={`py-3 ${screen===key ? 'text-cyan-300' : ''}`}>
                    {label}
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
