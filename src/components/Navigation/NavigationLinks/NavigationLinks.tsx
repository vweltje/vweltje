"use client"

import Link from "../Link/Link"
import { useUI } from "@/lib/UIContext"

export default function NavigationLinks() {
  const { setNavigationActive, setContactOverlayActive } = useUI()

  function openContactOverlay() {
    setNavigationActive(false)
    setTimeout(() => setContactOverlayActive(true), 200)
  }

  return (
    <ul className="Navigation--Links">
      <li className="Navigation--Link">
        <Link to="/cases">Cases</Link>
      </li>
      <li className="Navigation--Link">
        <Link to="/about-me">About me</Link>
      </li>
      <li className="Navigation--Link">
        <button type="button" onClick={openContactOverlay}>
          Contact
        </button>
      </li>
    </ul>
  )
}
