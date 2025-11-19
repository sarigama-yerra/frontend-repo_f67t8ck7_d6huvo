import { Menu, Settings, Bell, Flame, User } from 'lucide-react'

export default function CityNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-md px-4 pt-5">
        <div className="backdrop-blur-xl bg-slate-900/40 border border-cyan-400/20 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.25)]">
          <div className="flex items-center justify-between px-4 py-3 text-cyan-100">
            <button className="p-2 rounded-xl hover:bg-white/5 transition-colors">
              <Menu size={22} />
            </button>
            <div className="flex items-center gap-2 text-cyan-300 font-medium">
              <Flame className="text-blue-400" size={20} />
              DualSwipe
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-xl hover:bg-white/5 transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2 rounded-xl hover:bg-white/5 transition-colors">
                <Settings size={20} />
              </button>
              <button className="p-1 rounded-xl hover:bg-white/5 transition-colors">
                <User size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
