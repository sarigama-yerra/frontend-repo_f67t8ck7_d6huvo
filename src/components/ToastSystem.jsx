import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import * as Toast from '@radix-ui/react-toast'

const ToastContext = createContext({ push: (_msg, _desc) => {} })

export function ToastProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [description, setDescription] = useState('')

  const push = useCallback((msg, desc = '') => {
    setMessage(msg)
    setDescription(desc)
    setOpen(false)
    // wait a tick to retrigger
    setTimeout(() => setOpen(true), 0)
  }, [])

  const value = useMemo(() => ({ push }), [push])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <Toast.Provider swipeDirection="right">
        <Toast.Root open={open} onOpenChange={setOpen}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60] w-[92%] max-w-md rounded-2xl border border-cyan-400/30 bg-slate-900/80 backdrop-blur-xl shadow-[0_0_40px_rgba(34,211,238,0.35)] text-cyan-100 px-4 py-3">
          <Toast.Title className="text-sm font-medium text-cyan-100">{message}</Toast.Title>
          {description ? (
            <Toast.Description className="mt-0.5 text-xs text-cyan-300/80">{description}</Toast.Description>
          ) : null}
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
