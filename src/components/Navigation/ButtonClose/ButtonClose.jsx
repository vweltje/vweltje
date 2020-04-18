import React, { useContext } from "react"
import { store } from "../../../store"

import "./ButtonClose.scss"

const ButtonClose = () => {
  const { dispatch } = useContext(store)
  return (
    <button
      className="ButtonClose"
      type="button"
      onClick={() => dispatch("navigation--deactivate")}
    >
      <span className="ButtonClose--Line first left" />
      <span className="ButtonClose--Line first right" />
      <span className="ButtonClose--Line second left" />
      <span className="ButtonClose--Line second right" />
      <span className="ButtonClose--Line third left" />
      <span className="ButtonClose--Line third right" />
    </button>
  )
}

export default ButtonClose
