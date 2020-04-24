import React, { useContext, useState } from "react"
import { downBreakpoint } from "../../../helpers/breakpointHelper"
import { store } from "../../../store"
import "./ButtonOpen.scss"

const ButtonOpen = () => {
  const {
    state: {
      navigation: { active }
    },
    dispatch
  } = useContext(store)
  const isMobile = downBreakpoint("large")
  const [action, setAction] = useState(active && isMobile ? "close" : "open")

  function openCloseNav() {
    if (!isMobile) setAction("open")
    if (action === "open") {
      dispatch("navigation--activate")
      if (isMobile) {
        setAction("close")
      }
    } else {
      dispatch("navigation--deactivate")
      if (isMobile) {
        setAction("open")
      }
    }
  }

  return (
    <button className="ButtonOpen" type="button" onClick={openCloseNav}>
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
