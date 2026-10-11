"use client"

import { useUI } from "@/lib/UIContext"
import { useIsMobile } from "@/lib/useIsMobile"

export default function ButtonOpen() {
  const { navigationActive, setNavigationActive } = useUI()
  const isMobile = useIsMobile()

  // On mobile this button toggles the navigation, on desktop it only opens it
  function openCloseNav() {
    setNavigationActive(isMobile ? !navigationActive : true)
  }

  return (
    <button
      className="ButtonOpen"
      type="button"
      onClick={openCloseNav}
      aria-label="Open navigation"
    >
      <span className="ButtonOpen--Line first left" />
      <span className="ButtonOpen--Line first right" />
      <span className="ButtonOpen--Line second left" />
      <span className="ButtonOpen--Line second right" />
      <span className="ButtonOpen--Line third left" />
      <span className="ButtonOpen--Line third right" />
    </button>
  )
}
