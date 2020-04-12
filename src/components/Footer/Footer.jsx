import React from "react"
import { Link } from "gatsby"
import Container from "../Container/Container"
import SocialIcons from "../SocialIcons/SocialIcons"

import Logo from "../../svg/logo-2.svg"

import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="Footer">
      <Container>
        <div className="Footer--Columns">
          <div className="Footer--Column">
            <div>
              <Link to="/" className="Footer--LogoLink">
                <Logo className="Footer--Logo" />
              </Link>
            </div>
          </div>
          <div className="Footer--Column">
            <div>
              <h5>Location</h5>
              <p>
                Eindhoven, <br />
                The Netherlands
              </p>
            </div>
          </div>
          <div className="Footer--Column">
            <div>
              <h5>Socials</h5>
              <SocialIcons />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
