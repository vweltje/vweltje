import React, { useContext } from "react"
import Splitview, { SplitviewContainer } from "./Splitview/Splitview"
import Button from "../Button/Button"
import Logo from "../../svg/vw-logo-full.svg"
import Icon from "../../svg/vw-logo.svg"
import Content from "../Content/Content"
import { downBreakpoint } from "../../helpers/breakpointHelper"
import { store } from "../../store"
import "./Hero.scss"

const Hero = ({ buttonText, children }) => {
  const { dispatch } = useContext(store)
  return (
    <header className="Hero">
      <Splitview>
        <SplitviewContainer position="left">
          <Content>{children}</Content>
          <Button onClick={() => dispatch("contactOverlay--activate")}>
            {buttonText}
          </Button>
        </SplitviewContainer>
        <SplitviewContainer position="right">
          {downBreakpoint("large") ? (
            <Icon className="Logo" />
          ) : (
            <Logo className="Logo" />
          )}
        </SplitviewContainer>
      </Splitview>
    </header>
  )
}

export default Hero
