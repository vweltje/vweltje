import React from "react"
import { Link } from "gatsby"
import Container from "../Container/Container"
import Logo from "../../svg/icon-1.svg"
import "./SimpleHeader.scss"

const SimpleHeader = () => (
  <header className="SimpleHeader">
    <Container>
      <Link to="/">
        <Logo className="SimpleHeader--Logo" />
      </Link>
    </Container>
  </header>
)

export default SimpleHeader