"use client"

import Link from "next/link"
import Container from "../Container/Container"
import VWLogo from "../icons/VWLogo"
import { useUI } from "@/lib/UIContext"

export default function SimpleHeader() {
  const { navigationActive } = useUI()

  return (
    <>
      <header
        className={`SimpleHeader${navigationActive ? " MobleMenuActive" : ""}`}
      >
        <Container>
          <Link href="/">
            <VWLogo className="SimpleHeader--Logo" />
          </Link>
        </Container>
      </header>
      <div className="SimpleHeader--MobileSpacer" />
    </>
  )
}
