import React from "react"
import WordPressIcon from "../../../svg/wordpress-icon.svg"
import ReactIcon from "../../../svg/react-icon.svg"

const projectTypes = {
  wordpress: { icon: <WordPressIcon />, name: "WordPress" },
  react: { icon: <ReactIcon />, name: "React" }
}

const ProjectType = ({ type }) => {
  return (
    <>
      {projectTypes[type].icon}
      {projectTypes[type].name}
    </>
  )
}
export default ProjectType
