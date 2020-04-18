import React, { useRef, useEffect } from "react"

const useClickAwayListner = (ref, onClickAway) => {
  useEffect(() => {
    const handleClickAway = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickAway()
      }
    }

    document.addEventListener("mousedown", handleClickAway)
    return () => {
      document.removeEventListener("mousedown", handleClickAway)
    }
  }, [ref])
}

const ClickAwayListner = ({ children, onClickAway }) => {
  const wrapperRef = useRef(null)
  useClickAwayListner(wrapperRef, onClickAway)

  return <div ref={wrapperRef}>{children}</div>
}

export default ClickAwayListner
