"use client"

import Link from "next/link"
import type { ReactNode } from "react"
import { useIsMobile } from "@/lib/useIsMobile"

type Props = {
  href: string
  children: ReactNode
}

export default function ConditionalLink({ href, children }: Props) {
  const isMobile = useIsMobile()

  if (!isMobile) return children

  return (
    <Link className="PostCard--ContentLink" href={href}>
      {children}
    </Link>
  )
}
