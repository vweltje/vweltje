import React, { useState, useEffect } from "react"
import { successMessage } from "../constants"

import "./SuccessMessage.scss"

const SuccessMessage = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 200)
  })
  return (
    <h2 className={`ContactForm--SuccessMessage${visible ? " visible" : ""}`}>
      {successMessage}
    </h2>
  )
}

export default SuccessMessage
