import WordPressIcon from "../../icons/WordPressIcon"
import ReactIcon from "../../icons/ReactIcon"

const projectTypes = {
  wordpress: { icon: <WordPressIcon />, name: "WordPress" },
  react: { icon: <ReactIcon />, name: "React" },
  vue: { icon: <ReactIcon />, name: "Vue" },
  nextjs: { icon: <ReactIcon />, name: "Next.js" },
}

export type ProjectTypeName = keyof typeof projectTypes

// Accepts a known key ("react") or free text ("React / Sitecore XMC");
// for free text the icon is taken from the first known type it mentions.
export default function ProjectType({ type }: { type: string }) {
  const known = projectTypes[type as ProjectTypeName]
  if (known) {
    return (
      <>
        {known.icon}
        {known.name}
      </>
    )
  }

  const normalized = type.toLowerCase().replace(/[^a-z]/g, "")
  const match = Object.entries(projectTypes).find(([key]) =>
    normalized.includes(key)
  )?.[1]

  return (
    <>
      {match?.icon}
      {type}
    </>
  )
}
