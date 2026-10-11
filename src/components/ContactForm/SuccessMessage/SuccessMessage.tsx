"use client"

import { useEffect, useState } from "react"
import { successMessage } from "../constants"

export default function SuccessMessage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <h2 className={`ContactForm--SuccessMessage${visible ? " visible" : ""}`}>
      {successMessage}
    </h2>
  )
}
