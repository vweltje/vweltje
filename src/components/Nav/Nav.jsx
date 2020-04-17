import React, { useContext } from "react"
import { Link } from "gatsby"
import { store } from "../../store"

import ButtonOpen from "./ButtonOpen/ButtonOpen"
import ButtonClose from "./ButtonClose/ButtonClose"
import SocialIcons from "../SocialIcons/SocialIcons"

import Logo from "../../svg/icon-1.svg"

import "./Nav.scss"

const Nav = () => {
  const {
    state: {
      nav: { active }
    }
  } = useContext(store)

  return (
    <>
      <ButtonOpen />
      <nav className={`Navigation ${active ? "active" : ""}`}>
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <SocialIcons />
        </div>
      </nav>
    </>
  )
}

export default Nav
