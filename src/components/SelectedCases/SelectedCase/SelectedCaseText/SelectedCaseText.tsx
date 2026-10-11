"use client"

import Link from "next/link"
import { useIsMobile } from "@/lib/useIsMobile"

type Props = {
  title: string
  text: string
  link: { href: string; text: string }
}

export default function SelectedCaseText({ title, text, link }: Props) {
  const isMobile = useIsMobile()

  return (
    <div className="SelectedCaseText">
      <div className="SelectedCaseText--Inner">
        <h2>{title}</h2>
        <p>{text}</p>
        {isMobile ? (
          // The whole case is wrapped in a link on mobile
          <span className="Link">{link.text}</span>
        ) : (
          <Link className="Link" href={link.href}>
            {link.text}
          </Link>
        )}
      </div>
    </div>
  )
}
