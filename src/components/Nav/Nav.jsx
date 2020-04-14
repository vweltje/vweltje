import React, { useState } from "react"
import { Link } from "gatsby"

import ButtonOpen from "./ButtonOpen/ButtonOpen"
import ButtonClose from "./ButtonClose/ButtonClose"
import SocialIcons from "../SocialIcons/SocialIcons"

import Logo from "../../svg/icon-1.svg"

import "./Nav.scss"

const Nav = ({ navActive, setNavActive }) => {
  const [isActive, setIsActive] = useState(false)
  if (navActive !== isActive) {
    setTimeout(() => {
      setIsActive(navActive)
    }, 10)
  }
  return (
    <>
      <ButtonOpen onButtonClick={() => setNavActive(true)} />
      <nav className={`Navigation ${isActive ? "active" : ""}`}>
        <div className="Navigation--Container">
          <ButtonClose onButtonClick={() => setNavActive(false)} />
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
              <Link to="/about">About me</Link>
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
