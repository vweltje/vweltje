import React from "react"
import ProjectType from "./ProjectType/ProjectType"
import Employer from "./Employer/Employer"
import SiteUrl from "./SiteUrl/SiteUrl"
import "./CaseIntroList.scss"

const CaseIntroList = ({ list }) => {
  return (
    <>
      {list && (
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
                  content = <SiteUrl url={list[type]} />
                  break
              }
              return <li key={type}>{content}</li>
            })}
        </ul>
      )}
    </>
  )
}

export default CaseIntroList
