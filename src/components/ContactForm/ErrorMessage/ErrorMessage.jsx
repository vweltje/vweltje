import React, { useState, useEffect } from "react"
import { errorMessage } from "../constants"
import "./ErrorMessage.scss"

const ErrorMessage = ({ message = errorMessage }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 200)
  })

  return (
    <p className={`ContactForm--ErrorMessage ${visible ? " visible" : ""}`}>
      {message}
    </p>
  )
}

export default ErrorMessage
