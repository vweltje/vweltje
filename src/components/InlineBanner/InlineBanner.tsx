"use client"

import type { ReactNode } from "react"
import Container from "../Container/Container"
import Button from "../Button/Button"
import { useUI } from "@/lib/UIContext"

export default function InlineBanner({ children }: { children?: ReactNode }) {
  const { setContactOverlayActive } = useUI()

  return (
    <section className="InlineBanner">
      <Container>
        <div className="InlineBanner--Inner">
          {children ?? (
            <Button onClick={() => setContactOverlayActive(true)}>
              Ok, let&apos;s talk
            </Button>
          )}
        </div>
      </Container>
    </section>
  )
}
