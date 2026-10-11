"use client"

import NextLink from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"
import { useUI } from "@/lib/UIContext"

type Props = {
  to: string
  className?: string
  children: ReactNode
}

// Closes the navigation first and navigates once the close animation is done
export default function Link({ to, className, children }: Props) {
  const router = useRouter()
  const { setNavigationActive } = useUI()

  return (
    <NextLink
      href={to}
      className={className}
      onClick={(event) => {
        event.preventDefault()
        setNavigationActive(false)
        setTimeout(() => router.push(to), 200)
      }}
    >
      {children}
    </NextLink>
  )
}
