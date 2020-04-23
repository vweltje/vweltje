import React from "react"
import Splitview, { SplitviewContainer } from "./Splitview/Splitview"
import Logo from "../../svg/vw-logo-full.svg"
import Icon from "../../svg/vw-logo.svg"
import Content from "../Content/Content"
import { downBreakpoint } from "../../helpers/breakpointHelper"
import "./Hero.scss"

const Hero = ({ children }) => (
  <header className="Hero">
    <Splitview>
      <SplitviewContainer position="left">
        <Content>{children}</Content>
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

export default Hero
