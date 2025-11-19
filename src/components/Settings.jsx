import * as Switch from '@radix-ui/react-switch'

export default function Settings() {
  const Item = ({ label, desc }) => (
    <div className="flex items-center justify-between py-3">
      <div>
        <p className="text-cyan-100">{label}</p>
        <p className="text-cyan-300/70 text-sm">{desc}</p>
      </div>
      <Switch.Root className="w-12 h-7 bg-slate-800/70 rounded-full border border-cyan-400/30 data-[state=checked]:bg-cyan-500/40 relative shadow-inner">
        <Switch.Thumb className="block w-6 h-6 bg-white rounded-full translate-x-1 will-change-transform data-[state=checked]:translate-x-5 transition-transform shadow-[0_0_16px_rgba(34,211,238,0.6)]" />
      </Switch.Root>
    </div>
  )

  return (
    <div className="relative min-h-screen text-cyan-100 px-6 pt-24 pb-24 max-w-md mx-auto">
      <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur-xl p-6">
        <h3 className="text-xl font-semibold">Settings</h3>
        <div className="mt-4 divide-y divide-cyan-400/10">
          <Item label="Haptic Feedback" desc="Subtle taps on interactions" />
          <Item label="Light Trails" desc="Animated city light traces" />
          <Item label="Auto Split" desc="Intelligently split purchases" />
        </div>
      </div>
    </div>
  )
}
