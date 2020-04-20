import React, { useContext } from "react"
import { store } from "../../../store"
import "./ButtonOpen.scss"

const ButtonOpen = () => {
  const { dispatch } = useContext(store)

  return (
    <button
      className="ButtonOpen"
      type="button"
      onClick={() => dispatch("navigation--activate")}
    >
      <span className="ButtonOpen--Line first left" />
      <span className="ButtonOpen--Line first right" />
      <span className="ButtonOpen--Line second left" />
      <span className="ButtonOpen--Line second right" />
      <span className="ButtonOpen--Line third left" />
      <span className="ButtonOpen--Line third right" />
    </button>
  )
}

export default ButtonOpen
