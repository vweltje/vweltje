"use client"

import type { ReactNode } from "react"
import Splitview, { SplitviewContainer } from "./Splitview/Splitview"
import Button from "../Button/Button"
import VWLogo from "../icons/VWLogo"
import VWLogoFull from "../icons/VWLogoFull"
import { useUI } from "@/lib/UIContext"
import { useIsMobile } from "@/lib/useIsMobile"

type Props = {
  buttonText: string
  // Rendered on the server, so the markdown renderer stays out of the bundle
  children: ReactNode
}

export default function Hero({ buttonText, children }: Props) {
  const { setContactOverlayActive } = useUI()
  const isMobile = useIsMobile()

  return (
    <header className="Hero">
      <Splitview>
        <SplitviewContainer position="Left">
          {children}
          <Button onClick={() => setContactOverlayActive(true)}>
            {buttonText}
          </Button>
        </SplitviewContainer>
        <SplitviewContainer position="Right">
          {isMobile ? (
            <VWLogo className="Logo" />
          ) : (
            <VWLogoFull className="Logo" />
          )}
        </SplitviewContainer>
      </Splitview>
    </header>
  )
}
