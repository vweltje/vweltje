import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  noPadding?: boolean
  size?: "" | "small" | "smaller" | "tiny"
  className?: string
}

export default function Container({
  children,
  noPadding = false,
  size = "",
  className = "",
}: Props) {
  return (
    <div
      className={`Container${noPadding ? " noPadding" : ""}${
        size ? ` ${size}` : ""
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  )
}
