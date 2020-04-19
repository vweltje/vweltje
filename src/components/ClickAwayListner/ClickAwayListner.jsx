import React, { useRef, useEffect } from "react"

const useClickAwayListner = (ref, onClickAway, detectEvents) => {
  useEffect(() => {
    const handleClickAway = (event) => {
      if (detectEvents && ref.current && !ref.current.contains(event.target)) {
        onClickAway()
      }
    }

    document.addEventListener("mousedown", handleClickAway)
    return () => document.removeEventListener("mousedown", handleClickAway)
  }, [ref, detectEvents])
}

const ClickAwayListner = ({
  children,
  onClickAway,
  detectEvents = true,
  element = "div",
  className = ""
}) => {
  const Element = element
  const ref = useRef()
  useClickAwayListner(ref, onClickAway, detectEvents)

  return (
    <Element className={className} ref={ref}>
      {children}
    </Element>
  )
}

export default ClickAwayListner
