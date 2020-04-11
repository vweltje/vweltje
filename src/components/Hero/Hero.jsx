import React from "react"
import Splitview, { SplitviewContainer } from "../Splitview/Splitview"
import Logo from "../../svg/logo-2.svg"
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

// <h1 className="Hero--Heading">
//   Hi, I'm Vincent Weltje. A full stack web developer coding lightning
//   fast web apps
// </h1>
// <p>
//   I enjoy turning complex problems into beautifull, fast and easy to use
//   applications. When I'm not coding, pushing pixels or drinking coffee,
//   you'll find me out in nature making awesome photos.
// </p>
// <p>
//   Interested in working together?
//   <br />
//   Lets have a talk.
// </p>
