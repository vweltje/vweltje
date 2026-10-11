"use client"

import { useEffect, useState, type ReactNode } from "react"

type Props = {
  active: boolean
  children: ReactNode
}

export default function Clone({ active, children }: Props) {
  const [mounted, setMounted] = useState(false)

  // Wait a frame so the split animates in
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className={`PageSplitter--Clone${mounted && active ? " splitted" : ""}`}>
      {children}
    </div>
  )
}
