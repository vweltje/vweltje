import ProjectType from "./ProjectType/ProjectType"
import Employer, { type EmployerName } from "./Employer/Employer"
import SiteUrl from "./SiteUrl/SiteUrl"
import type { CaseList } from "@/lib/content"

export default function CaseIntroList({ list }: { list?: CaseList }) {
  if (!list) return null
  const { url, employer, projectType } = list

  return (
    <ul className="CaseIntroList">
      {url && (
        <li>
          <SiteUrl url={url} />
        </li>
      )}
      {employer && (
        <li>
          <Employer name={employer as EmployerName} />
        </li>
      )}
      {projectType && (
        <li>
          <ProjectType type={projectType} />
        </li>
      )}
    </ul>
  )
}
