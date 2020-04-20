import React from "react"
import OddesseySolutionsIcon from "../../../svg/oddessey-solutions-icon.svg"
import ThriveWebIcon from "../../../svg/thrive-web-icon.svg"

const employers = {
  oddesseySolutions: {
    url: "https://oddesseysolutions.nl/",
    icon: <OddesseySolutionsIcon />,
    name: "Oddessey Solutions"
  },
  thriveWeb: {
    url: "https://thriveweb.com.au/",
    icon: <ThriveWebIcon />,
    name: "Thrive Web"
  }
}

const Employer = ({ name }) => (
  <a
    href={employers[name].url}
    target="_blank"
    rel="noopener noreferrer"
    title={employers[name].name}
  >
    {employers[name].icon}
    {employers[name].name}
  </a>
)

export default Employer
