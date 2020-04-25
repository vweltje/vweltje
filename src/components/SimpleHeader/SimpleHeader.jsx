import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import Container from "../Container/Container"
import Logo from "../../svg/vw-logo.svg"
import { downBreakpoint } from "../../helpers/breakpointHelper"
import { store } from "../../store"
import "./SimpleHeader.scss"

const SimpleHeader = () => {
  const {
    state: {
      navigation: { active }
    }
  } = useContext(store)
  const [isMobileNavigationAtive, setIsMobileNavigationAtive] = useState(false)
  const changeBackgroundColor = downBreakpoint("large") && active

  useEffect(() => {
    if (changeBackgroundColor) {
      setIsMobileNavigationAtive(true)
    }
    if (!changeBackgroundColor) {
      setIsMobileNavigationAtive(false)
    }
  }, [changeBackgroundColor])

  return (
    <>
      <header
        className={`SimpleHeader${
          isMobileNavigationAtive ? " MobleMenuActive" : ""
        }`}
      >
        <Container>
          <Link to="/">
            <Logo className="SimpleHeader--Logo" />
          </Link>
        </Container>
      </header>
      {downBreakpoint("large") && (
        <div className="SimpleHeader--MobileSpacer" />
      )}
    </>
  )
}

export default SimpleHeader
