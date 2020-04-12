import React from "react"

import LinkedinIcon from "../../svg/linkedin.svg"
import InstagramIcon from "../../svg/instagram.svg"
import GitHubIcon from "../../svg/github.svg"

import "./SocialIcons.scss"

const SocialIcons = () => (
  <ul className="SocialIcons">
    <li>
      <a
        href="https://www.linkedin.com/in/vweltje/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <LinkedinIcon className="SocialIcons--Icon" />
      </a>
    </li>
    <li>
      <a
        href="https://www.instagram.com/vweltje/"
        target="_blank"
        rel="noopener noreferrer"
        title="Instagram"
      >
        <InstagramIcon className="SocialIcons--Icon" />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/vweltje"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <GitHubIcon className="SocialIcons--Icon" />
      </a>
    </li>
  </ul>
)

export default SocialIcons
