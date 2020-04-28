import React, { useState, useEffect, useContext } from "react"
import { store } from "../../store"
import "./PageSplitter.scss"

const SplitContainer = ({ active, children }) => {
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
      {(active || splitted) && (
        <SplitContainer active={active} splitted={splitted}>
          {children}
        </SplitContainer>
      )}
    </>
  )
}

export default PageSplitter
