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

const ClickAwayListner = ({ children, onClickAway, detectEvents = true }) => {
  const ref = useRef()
  useClickAwayListner(ref, onClickAway, detectEvents)

  return <div ref={ref}>{children}</div>
}

export default ClickAwayListner
