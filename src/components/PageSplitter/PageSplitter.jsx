import React, { useState, useEffect, useContext } from "react"
import { store } from "../../store"
import "./PageSplitter.scss"

const PageSplitter = ({ children }) => {
  const {
    state: {
      navigation: { active }
    }
  } = useContext(store)
  const [splitted, setSplitted] = useState(true)
  const splitContent = active

  useEffect(() => {
    if (splitContent) {
      setSplitted(false)
    }
    if (!splitContent) {
      setTimeout(() => {
        setSplitted(true)
      }, 200)
    }
  }, [splitContent])

  return (
    <>
      <main className={`PageSplitter--Main ${splitContent ? "splitted" : ""}`}>
        {children}
      </main>
      <div
        className={`PageSplitter--Clone ${splitContent ? "splitted" : ""}`}
        style={{
          zIndex: splitContent || !splitted ? "1" : "-1"
        }}
      >
        {children}
      </div>
    </>
  )
}

export default PageSplitter
