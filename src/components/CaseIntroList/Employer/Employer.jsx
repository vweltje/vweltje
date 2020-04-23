import React from "react"
import OddesseySolutionsIcon from "../../../svg/oddessey-solutions-icon.svg"
import ThriveWebIcon from "../../../svg/thrive-web-icon.svg"
import VWLogo from "../../../svg/vw-logo.svg"

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
  },
  personalProject: {
    url: false,
    icon: <VWLogo />,
    name: "Freelance"
  }
}

const Employer = ({ name }) => (
  <>
    {employers[name].url ? (
      <a
        href={employers[name].url}
        target="_blank"
        rel="noopener noreferrer"
        title={employers[name].name}
      >
        {employers[name].icon}
        {employers[name].name}
      </a>
    ) : (
      <span>
        {employers[name].icon}
        {employers[name].name}
      </span>
    )}
  </>
)

export default Employer
