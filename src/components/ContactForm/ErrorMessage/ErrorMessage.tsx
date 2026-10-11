"use client"

import { useEffect, useState } from "react"
import { errorMessage } from "../constants"

export default function ErrorMessage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <p className={`ContactForm--ErrorMessage ${visible ? " visible" : ""}`}>
      {errorMessage}
    </p>
  )
}
