import WordPressIcon from "../../icons/WordPressIcon"
import ReactIcon from "../../icons/ReactIcon"

const projectTypes = {
  wordpress: { icon: <WordPressIcon />, name: "WordPress" },
  react: { icon: <ReactIcon />, name: "React" },
  vue: { icon: <ReactIcon />, name: "Vue" },
  nextjs: { icon: <ReactIcon />, name: "Next.js" },
}

export type ProjectTypeName = keyof typeof projectTypes

export default function ProjectType({ type }: { type: ProjectTypeName }) {
  return (
    <>
      {projectTypes[type].icon}
      {projectTypes[type].name}
    </>
  )
}
