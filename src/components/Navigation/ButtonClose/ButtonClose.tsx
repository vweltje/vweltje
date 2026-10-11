"use client"

import { useUI } from "@/lib/UIContext"

export default function ButtonClose() {
  const { setNavigationActive } = useUI()

  return (
    <button
      className="ButtonClose"
      type="button"
      onClick={() => setNavigationActive(false)}
      aria-label="Close navigation"
    >
      <span className="ButtonClose--Line first left" />
      <span className="ButtonClose--Line first right" />
      <span className="ButtonClose--Line second left" />
      <span className="ButtonClose--Line second right" />
      <span className="ButtonClose--Line third left" />
      <span className="ButtonClose--Line third right" />
    </button>
  )
}
