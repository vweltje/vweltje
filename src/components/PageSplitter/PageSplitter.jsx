import React, { useState, useEffect, useContext } from "react"
import Clone from "./Clone/Clone"
import { store } from "../../store"
import "./PageSplitter.scss"

const PageSplitter = ({ children }) => {
  const {
    state: {
      navigation: { active }
    }
  } = useContext(store)
  const [splitted, setSplitted] = useState(false)

  useEffect(() => {
    if (active) {
      setSplitted(true)
    }
    if (!active && splitted) {
      setTimeout(() => {
        setSplitted(false)
      }, 200)
    }
  }, [active])

  return (
    <>
      <main className={`PageSplitter--Main${active ? " splitted" : ""}`}>
        {children}
      </main>
      {(active || splitted) && <Clone splitted={splitted}>{children}</Clone>}
    </>
  )
}

export default PageSplitter
