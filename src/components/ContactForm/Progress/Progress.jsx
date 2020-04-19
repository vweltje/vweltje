import React, { useContext } from "react"
import { store } from "../../../store"
import fields from "../constants"
import "./Progress.scss"

const Progress = () => {
  const {
    state: {
      contactOverlay: { activeField }
    }
  } = useContext(store)
  return (
    <div className="ContactForm--Progress">
      Step {activeField}{" "}
      <span className="ContactForm--ProgressNext">/ {fields.length}</span>
    </div>
  )
}

export default Progress
