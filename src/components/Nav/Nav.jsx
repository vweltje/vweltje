import React, { Component } from "react";
import { Link } from "gatsby";

import ButtonOpen from "./ButtonOpen/ButtonOpen";
import ButtonClose from "./ButtonClose/ButtonClose";

import Logo from "../../svg/icon-1.svg";
import LinkedinIcon from "../../svg/linkedin.svg";
import InstagramIcon from "../../svg/instagram.svg";

import "./Nav.scss";

class Nav extends Component {
  constructor() {
    super();

    this.state = {
      navStatus: ""
    };

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close(e) {
    e.stopPropagation();
    this.setState({
      navStatus: ""
    });
  }

  open(e) {
    e.stopPropagation();
    this.setState({
      navStatus: "active"
    });
  }

  render() {
    const { navStatus } = this.state;
    return (
      <>
        <ButtonOpen onButtonClick={this.open} />
        <nav className={`Navigation ${navStatus}`}>
          <div className="Navigation--Container">
            <ButtonClose onButtonClick={this.close} />
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
  }
}

export default Nav;
