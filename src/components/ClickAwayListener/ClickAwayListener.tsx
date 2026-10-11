"use client"

import { useEffect, useRef, type ReactNode } from "react"

type Props = {
  children: ReactNode
  onClickAway: (event: MouseEvent) => void
  detectEvents?: boolean
  element?: "div" | "nav"
  className?: string
}

export default function ClickAwayListener({
  children,
  onClickAway,
  detectEvents = true,
  element: Element = "div",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement & HTMLElement>(null)

  useEffect(() => {
    if (!detectEvents) return

    function handleClickAway(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickAway(event)
      }
    }

    document.addEventListener("mousedown", handleClickAway)
    return () => document.removeEventListener("mousedown", handleClickAway)
  }, [detectEvents, onClickAway])

  return (
    <Element className={className} ref={ref}>
      {children}
    </Element>
  )
}
