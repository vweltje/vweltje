import { useState, useEffect } from "react"
import { throttle } from "lodash"

const breakpoints = {
  extraLarge: 1200,
  large: 992,
  medium: 768,
  small: 576
}

const getCurrentBreakpoint = (width) => {
  let breakpoint = ""
  Object.keys(breakpoints).forEach((name) => {
    breakpoint = width <= breakpoints[name] ? name : breakpoint
  })
  return breakpoint
}

const isDownBreakpoint = (breakpoint, width) => width <= breakpoints[breakpoint]

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getCurrentBreakpoint(window.innerWidth)
  )

  useEffect(() => {
    const calcualte = throttle(() => {
      setBreakpoint(getCurrentBreakpoint(window.innerWidth))
    }, 200)
    window.addEventListener("resize", calcualte)
    return () => window.removeEventListener("resize", calcualte)
  }, [])

  return breakpoint
}

const downBreakpoint = (breakpoint) => {
  const [isDown, setIsDown] = useState(() =>
    isDownBreakpoint(breakpoint, window.innerWidth)
  )

  useEffect(() => {
    const calcualte = throttle(() => {
      setIsDown(isDownBreakpoint(breakpoint, window.innerWidth))
    }, 200)
    window.addEventListener("resize", calcualte)
    return () => window.removeEventListener("resize", calcualte)
  }, [])

  return isDown
}

export { useBreakpoint as default, downBreakpoint }
