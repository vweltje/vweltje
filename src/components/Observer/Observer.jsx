import { useState, useEffect } from "react"

const Observer = ({ onIntersecting, children }) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  const getCurrentScrollPos = () => {
    const supportPageOffset = window.pageXOffset !== undefined
    const isCSS1Compat = (document.compatMode || "") === "CSS1Compat"
    if (supportPageOffset) return window.pageYOffset
    if (isCSS1Compat) return document.documentElement.scrollTop
    return document.body.scrollTop
  }

  const handleScroll = (ref) => {
    const threshold = getCurrentScrollPos() + window.innerHeight
    if (
      !isIntersecting &&
      ref !== null &&
      ref.getBoundingClientRect().top <= threshold
    ) {
      setIsIntersecting(true)
      window.removeEventListener("scroll", handleScroll)
    }
  }

  useEffect(() => {
    if (children?.ref?.current) {
      const ref = children?.ref.current
      window.addEventListener("scroll", () => handleScroll(ref))
      handleScroll(ref)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
    return 0
  }, [children.ref.current])

  useEffect(() => {
    if (isIntersecting) onIntersecting()
  }, [isIntersecting])

  return children
}

export default Observer
