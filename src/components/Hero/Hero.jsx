import React from "react"
import Splitview, { SplitviewContainer } from "./Splitview/Splitview"
import Logo from "../../svg/vw-logo-full.svg"
import Content from "../Content/Content"
import "./Hero.scss"

const Hero = ({ children }) => (
  <header className="Hero">
    <Splitview>
      <SplitviewContainer position="left">
        <Content>{children}</Content>
      </SplitviewContainer>
      <SplitviewContainer position="right">
        <Logo className="Logo" />
      </SplitviewContainer>
    </Splitview>
  </header>
)

export default Hero
