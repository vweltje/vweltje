"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { useIsMobile } from "@/lib/useIsMobile"

type Range = [number, number]

type Props = {
  className?: string
  x?: Range
  y?: Range
  children?: ReactNode
}

// Moves the inner element by a percentage of its own size while the outer
// element scrolls through the viewport. Uses the same math as
// react-scroll-parallax v2, which the site was designed with: the position is
// only updated while the element is in view and kept when it leaves.
export default function ParallaxLayer({
  className = "",
  x = [0, 0],
  y = [0, 0],
  children,
}: Props) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const [x0, x1] = x
  const [y0, y1] = y

  useEffect(() => {
    if (!outerRef.current || !innerRef.current || isMobile) return
    const outer = outerRef.current
    const inner = innerRef.current

    let top = 0
    let height = 0
    let start = 0
    let end = 0
    let frame = 0

    // Cache the position, extended by the distance the element moves
    function measure() {
      const viewHeight = window.innerHeight
      height = outer.offsetHeight
      top = outer.getBoundingClientRect().top + window.scrollY
      const y0Px = (y0 * height) / 100
      const y1Px = (y1 * height) / 100
      const offset = Math.abs(y0Px) + Math.abs(y1Px)
      const multiplier =
        (viewHeight + height) /
        (viewHeight + height + (y1Px > y0Px ? -offset : offset))
      start = top + Math.min(y0Px, 0) * multiplier
      end = top + height + Math.max(y1Px, 0) * multiplier
    }

    function update() {
      frame = 0
      const viewHeight = window.innerHeight
      const startInView = start - window.scrollY
      const endInView = end - window.scrollY
      const isInView =
        (startInView >= 0 && startInView <= viewHeight) ||
        (endInView >= 0 && endInView <= viewHeight) ||
        (startInView <= 0 && endInView >= viewHeight)
      if (!isInView) return

      const progress =
        (window.scrollY - top + viewHeight) / (viewHeight + height)
      inner.style.transform = `translate3d(${x0 + (x1 - x0) * progress}%, ${
        y0 + (y1 - y0) * progress
      }%, 0)`
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    function onResize() {
      measure()
      update()
    }

    // Images and fonts loading above the element move it down the page
    const observer = new ResizeObserver(onResize)
    observer.observe(document.body)
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
      inner.style.transform = ""
    }
  }, [isMobile, x0, x1, y0, y1])

  return (
    <div
      className={`parallax-outer${className ? ` ${className}` : ""}`}
      ref={outerRef}
    >
      <div className="parallax-inner" ref={innerRef}>
        {children}
      </div>
    </div>
  )
}
