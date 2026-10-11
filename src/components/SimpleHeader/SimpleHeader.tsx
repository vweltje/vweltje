"use client"

import Link from "next/link"
import Container from "../Container/Container"
import VWLogo from "../icons/VWLogo"
import { useUI } from "@/lib/UIContext"
import { useIsMobile } from "@/lib/useIsMobile"

export default function SimpleHeader() {
  const { navigationActive } = useUI()
  const isMobile = useIsMobile()

  return (
    <>
      <header
        className={`SimpleHeader${
          isMobile && navigationActive ? " MobleMenuActive" : ""
        }`}
      >
        <Container>
          <Link href="/">
            <VWLogo className="SimpleHeader--Logo" />
          </Link>
        </Container>
      </header>
      {isMobile && <div className="SimpleHeader--MobileSpacer" />}
    </>
  )
}
