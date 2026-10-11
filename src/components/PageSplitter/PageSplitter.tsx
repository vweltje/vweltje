"use client"

import { useEffect, useState, type ReactNode } from "react"
import Clone from "./Clone/Clone"
import { useUI } from "@/lib/UIContext"

// Splits the page in two halves while the navigation slides in between them
export default function PageSplitter({ children }: { children: ReactNode }) {
  const { navigationActive } = useUI()
  const [splitted, setSplitted] = useState(false)

  if (navigationActive && !splitted) setSplitted(true)

  // Keep the clone around until the closing transition has finished
  useEffect(() => {
    if (navigationActive || !splitted) return
    const timeout = setTimeout(() => setSplitted(false), 200)
    return () => clearTimeout(timeout)
  }, [navigationActive, splitted])

  return (
    <>
      <main
        className={`PageSplitter--Main${navigationActive ? " splitted" : ""}`}
      >
        {children}
      </main>
      {splitted && <Clone active={navigationActive}>{children}</Clone>}
    </>
  )
}
