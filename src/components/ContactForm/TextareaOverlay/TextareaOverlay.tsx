"use client"

import { useEffect, useState } from "react"
import ClickAwayListener from "../../ClickAwayListener/ClickAwayListener"
import Button from "../../Button/Button"

type Props = {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  onDeactivate: () => void
}

export default function TextareaOverlay({
  label,
  id,
  value,
  onChange,
  onDeactivate,
}: Props) {
  const [active, setActive] = useState(false)

  // Wait a frame so the overlay animates open
  useEffect(() => {
    const frame = requestAnimationFrame(() => setActive(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  function deactivate() {
    setActive(false)
    setTimeout(onDeactivate, 200)
  }

  return (
    <ClickAwayListener onClickAway={deactivate}>
      <div className={`ContactForm--TextareaOverlay${active ? " active" : ""}`}>
        {!value && <label htmlFor={id}>{label}</label>}
        <textarea
          id={id}
          autoFocus
          value={value}
          onChange={(event) => onChange(event.currentTarget.value)}
          onKeyDown={(event) => event.key === "Escape" && deactivate()}
        />
        <Button
          className="ContactForm--TextareaOverlayButton"
          noHover
          onClick={deactivate}
        >
          Done
        </Button>
      </div>
    </ClickAwayListener>
  )
}
