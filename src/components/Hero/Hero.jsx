import React from "react";
import Splitview, { SplitviewContainer } from "../Splitview/Splitview";
import Logo from "../../svg/logo-2.svg";
import "./Hero.scss";

const Hero = () => (
  <header className="Hero">
    <Splitview>
      <SplitviewContainer position="left">
        <h1 className="Hero--Heading">
          {`Hi, I'm Vincent Weltje. A full stack web developer coding
              lightning fast web apps`}
        </h1>
        <p>
          {`I enjoy turning complex problems into beautifull, fast and easy to
              use applications. When I'm not coding, pushing pixels or drinking
              coffee, you'll find me out in nature making awesome photos.`}
        </p>
        <p>
          Interested in working together?
          <br />
          Lets have a talk.
        </p>
      </SplitviewContainer>
      <SplitviewContainer position="right">
        <Logo className="Logo" />
      </SplitviewContainer>
    </Splitview>
  </header>
);

export default Hero;
