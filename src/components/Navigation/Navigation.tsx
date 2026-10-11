"use client"

import ClickAwayListener from "../ClickAwayListener/ClickAwayListener"
import Link from "./Link/Link"
import ButtonOpen from "./ButtonOpen/ButtonOpen"
import ButtonClose from "./ButtonClose/ButtonClose"
import NavigationLinks from "./NavigationLinks/NavigationLinks"
import SocialIcons from "../SocialIcons/SocialIcons"
import VWLogo from "../icons/VWLogo"
import { useUI } from "@/lib/UIContext"
import { useIsMobile } from "@/lib/useIsMobile"

export default function Navigation() {
  const { navigationActive, setNavigationActive } = useUI()
  const isMobile = useIsMobile()

  // The open button toggles the navigation itself on mobile
  function onClickAway(event: MouseEvent) {
    if ((event.target as Element).closest(".ButtonOpen")) return
    setNavigationActive(false)
  }

  return (
    <>
      <ButtonOpen />
      <ClickAwayListener
        element="nav"
        className={`Navigation ${navigationActive ? "active" : ""}`}
        onClickAway={onClickAway}
        detectEvents={navigationActive}
      >
        <div className="Navigation--Container">
          {!isMobile && (
            <>
              <ButtonClose />
              <Link to="/">
                <VWLogo className="Navigation--Icon" />
                <span className="Hidden">Go to home</span>
              </Link>
            </>
          )}
          <NavigationLinks />
          <SocialIcons />
        </div>
      </ClickAwayListener>
    </>
  )
}
