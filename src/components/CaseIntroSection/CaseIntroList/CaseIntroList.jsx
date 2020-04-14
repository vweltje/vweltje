import React from "react"

import OddesseySolutionsIcon from "../../../svg/oddessey-solutions-icon.svg"
import ThriveWebIcon from "../../../svg/thrive-web-icon.svg"
import SitePreviewIcon from "../../../svg/visit-site-icon.svg"
import WordPressIcon from "../../../svg/wordpress-icon.svg"
import ReactIcon from "../../../svg/react-icon.svg"

import "./CaseIntroList.scss"

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

const projectTypes = {
  wordpress: { icon: <WordPressIcon />, name: "WordPress" },
  react: { icon: <ReactIcon />, name: "React" }
}

const ProjectType = ({ type }) => {
  console.log(type)
  return (
    <>
      {projectTypes[type].icon}
      {projectTypes[type].name}
    </>
  )
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

const SyteUrl = ({ url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <SitePreviewIcon />
    Visit site
  </a>
)

const CaseIntroList = ({ list }) => {
  return (
    <ul className="CaseIntroList">
      {!!Object.keys(list).length &&
        Object.keys(list).map((type) => {
          let content
          switch (type) {
            case "projectType":
              content = <ProjectType type={list[type]} />
              break
            case "employer":
              content = <Employer name={list[type]} />
              break
            default:
              content = <SyteUrl url={list[type]} />
              break
          }
          return <li key={type}>{content}</li>
        })}
    </ul>
  )
}

export default CaseIntroList
