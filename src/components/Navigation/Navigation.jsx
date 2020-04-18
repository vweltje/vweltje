import React, { useContext } from "react"
import { Link } from "gatsby"
import ClickAwayListner from "../ClickAwayListner/ClickAwayListner"
import ButtonOpen from "./ButtonOpen/ButtonOpen"
import ButtonClose from "./ButtonClose/ButtonClose"
import SocialIcons from "../SocialIcons/SocialIcons"
import Logo from "../../svg/icon-1.svg"
import { store } from "../../store"
import "./Navigation.scss"

const Navigation = () => {
  const {
    state: {
      navigation: { active }
    },
    dispatch
  } = useContext(store)
  const openContactOverlay = () => {
    dispatch("navigation--deactivate")
    setTimeout(() => {
      dispatch("contactOverlay--activate")
    }, 200)
  }

  return (
    <>
      <ButtonOpen />
      <ClickAwayListner
        element="nav"
        className={`Navigation ${active ? "active" : ""}`}
        onClickAway={() => dispatch("navigation--deactivate")}
        detectEvents={active}
      >
        <div className="Navigation--Container">
          <ButtonClose />
          <Link to="/" className="Navigation--IconLink">
            <Logo className="Navigation--Icon" />
          </Link>
          <ul className="Navigation--Links">
            <li className="Navigation--Link">
              <Link to="/">Home</Link>
            </li>
            <li className="Navigation--Link">
              <Link to="/cases">Cases</Link>
            </li>
            <li className="Navigation--Link">
              <Link to="/photography">Photography</Link>
            </li>
            <li className="Navigation--Link">
              <Link to="/about-me">About me</Link>
            </li>
            <li className="Navigation--Link">
              <button type="button" onClick={openContactOverlay}>
                Contact
              </button>
            </li>
          </ul>
          <SocialIcons />
        </div>
      </ClickAwayListner>
    </>
  )
}

export default Navigation