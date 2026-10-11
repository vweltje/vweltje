"use client"

import { useEffect, useRef, useState } from "react"
import { getResizedSrc } from "./Image"

// Shows a tiny placeholder until the image scrolls into view
export default function LazyBackgroundImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const smallSrc = getResizedSrc(src, "10x")
  const fullSrc = getResizedSrc(src, "1000x")

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        observer.disconnect()
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="BackgroundImage"
      ref={ref}
      style={{ backgroundImage: `url(${smallSrc})`, backgroundSize: "cover" }}
    >
      <div
        className="LazyImage BackgroundImage absolute faded"
        style={{
          backgroundImage: `url(${isIntersecting ? fullSrc : smallSrc})`,
          backgroundSize: "cover",
        }}
      />
    </div>
  )
}
