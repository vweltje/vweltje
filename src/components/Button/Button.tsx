import Link from "next/link"
import type { ReactNode } from "react"

type Props = {
  link?: string
  external?: boolean
  onClick?: () => void
  className?: string
  noHover?: boolean
  children: ReactNode
}

export default function Button({
  link = "",
  external = false,
  onClick,
  className = "",
  noHover,
  children,
}: Props) {
  const classNames = `Button${className ? ` ${className}` : ""}${
    noHover ? " noHover" : ""
  }`

  if (external) {
    return (
      <a href={link} className={classNames}>
        {children}
      </a>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={classNames} type="button">
        {children}
      </button>
    )
  }

  return (
    <Link href={link} className={classNames}>
      {children}
    </Link>
  )
}
