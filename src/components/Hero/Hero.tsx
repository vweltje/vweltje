"use client"

import Splitview, { SplitviewContainer } from "./Splitview/Splitview"
import Button from "../Button/Button"
import Content from "../Content/Content"
import VWLogo from "../icons/VWLogo"
import VWLogoFull from "../icons/VWLogoFull"
import { useUI } from "@/lib/UIContext"
import { useIsMobile } from "@/lib/useIsMobile"

type Props = {
  buttonText: string
  text: string
}

export default function Hero({ buttonText, text }: Props) {
  const { setContactOverlayActive } = useUI()
  const isMobile = useIsMobile()

  return (
    <header className="Hero">
      <Splitview>
        <SplitviewContainer position="Left">
          <Content>{text}</Content>
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
