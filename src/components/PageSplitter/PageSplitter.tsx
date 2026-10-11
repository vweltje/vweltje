"use client"

import { useEffect, useState, type ReactNode } from "react"
import Clone from "./Clone/Clone"
import { useUI } from "@/lib/UIContext"
import { useIsMobile } from "@/lib/useIsMobile"

// Splits the page in two halves while the navigation slides in between them.
// On mobile the navigation slides down over the page instead.
export default function PageSplitter({ children }: { children: ReactNode }) {
  const { navigationActive } = useUI()
  const isMobile = useIsMobile()
  const active = navigationActive && !isMobile
  const [splitted, setSplitted] = useState(false)

  if (active && !splitted) setSplitted(true)

  // Keep the clone around until the closing transition has finished
  useEffect(() => {
    if (active || !splitted) return
    const timeout = setTimeout(() => setSplitted(false), 200)
    return () => clearTimeout(timeout)
  }, [active, splitted])

  return (
    <>
      <main className={`PageSplitter--Main${active ? " splitted" : ""}`}>
        {children}
      </main>
      {splitted && <Clone active={active}>{children}</Clone>}
    </>
  )
}
