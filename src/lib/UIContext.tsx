"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type UIState = {
  navigationActive: boolean
  setNavigationActive: (active: boolean) => void
  contactOverlayActive: boolean
  setContactOverlayActive: (active: boolean) => void
}

const UIContext = createContext<UIState | null>(null)

export function UIProvider({ children }: { children: ReactNode }) {
  const [navigationActive, setNavigationActive] = useState(false)
  const [contactOverlayActive, setContactOverlayActive] = useState(false)

  return (
    <UIContext
      value={{
        navigationActive,
        setNavigationActive,
        contactOverlayActive,
        setContactOverlayActive,
      }}
    >
      {children}
    </UIContext>
  )
}

export function useUI() {
  const context = useContext(UIContext)
  if (!context) throw new Error("useUI must be used within a UIProvider")
  return context
}
