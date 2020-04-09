import React from "react";
import { Link } from "gatsby";

import ButtonOpen from "./ButtonOpen/ButtonOpen";
import ButtonClose from "./ButtonClose/ButtonClose";

import Logo from "../../svg/icon-1.svg";
import LinkedinIcon from "../../svg/linkedin.svg";
import InstagramIcon from "../../svg/instagram.svg";

import "./Nav.scss";

const Nav = ({ navActive, setNavActive }) => (
  <>
    <ButtonOpen onButtonClick={() => setNavActive(true)} />
    <nav className={`Navigation ${navActive ? "active" : ""}`}>
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
            <Link to="/work">Work</Link>
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
        <ul className="Navigation--SocialIcons">
          <li>
            <a
              href="https://www.linkedin.com/in/vweltje/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/vweltje/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </>
);

export default Nav;
