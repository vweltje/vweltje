"use client"

import { useEffect, useState } from "react"
import ClickAwayListener from "../ClickAwayListener/ClickAwayListener"
import Container from "../Container/Container"
import ContactForm from "../ContactForm/ContactForm"
import { useUI } from "@/lib/UIContext"

function Overlay({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = useState(false)

  // Wait a frame so the overlay fades in
  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  function deactivate() {
    setVisible(false)
    setTimeout(onClose, 200)
  }

  return (
    <div className={`ContactOverlay${visible ? " visible" : ""}`}>
      <Container size="smaller">
        <div className="ContactOverlay--Inner">
          <ClickAwayListener onClickAway={deactivate}>
            <ContactForm />
          </ClickAwayListener>
        </div>
      </Container>
    </div>
  )
}

export default function ContactOverlay() {
  const { contactOverlayActive, setContactOverlayActive } = useUI()

  if (!contactOverlayActive) return null

  return <Overlay onClose={() => setContactOverlayActive(false)} />
}
