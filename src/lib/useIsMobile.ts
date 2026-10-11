"use client"

import { useSyncExternalStore } from "react"

const query = "(max-width: 992px)"

function subscribe(onChange: () => void) {
  const mediaQuery = window.matchMedia(query)
  mediaQuery.addEventListener("change", onChange)
  return () => mediaQuery.removeEventListener("change", onChange)
}

// Matches the $bpLarge breakpoint. The static HTML is rendered as desktop.
export function useIsMobile() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}
