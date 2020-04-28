import React, { useState, useEffect, useContext } from "react"
import { store } from "../../../store"
import "./Clone.scss"

const Clone = ({ children }) => {
  const {
    state: {
      navigation: { active }
    }
  } = useContext(store)
  const [splitContent, setSplitContent] = useState(false)
  const [zIndex, setZindex] = useState("-1")

  useEffect(() => {
    setSplitContent(true)
  })
  useEffect(() => {
    if (!active) {
      setTimeout(() => {
        setZindex("-1")
      }, 200)
    } else {
      setZindex("1")
    }
  }, [active])

  return (
    <div
      className={`PageSplitter--Clone${
        splitContent && active ? " splitted" : ""
      }`}
      style={{ zIndex }}
    >
      {children}
    </div>
  )
}

export default Clone
