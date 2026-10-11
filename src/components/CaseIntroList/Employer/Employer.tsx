import OddesseySolutionsIcon from "../../icons/OddesseySolutionsIcon"
import ThriveWebIcon from "../../icons/ThriveWebIcon"
import VWLogo from "../../icons/VWLogo"

const employers = {
  efteling: {
    url: "https://efteling.com/",
    icon: <OddesseySolutionsIcon />,
    name: "Efteling",
  },
  io: {
    url: "https://iodigital.nl/",
    icon: <OddesseySolutionsIcon />,
    name: "iO digital",
  },
  daf: {
    url: "https://daf.nl/",
    icon: <OddesseySolutionsIcon />,
    name: "Daf Nederland",
  },
  oddesseySolutions: {
    url: "https://oddesseysolutions.nl/",
    icon: <OddesseySolutionsIcon />,
    name: "Oddessey Solutions",
  },
  thriveWeb: {
    url: "https://thriveweb.com.au/",
    icon: <ThriveWebIcon />,
    name: "Thrive Web",
  },
  personalProject: {
    url: null,
    icon: <VWLogo />,
    name: "Freelance",
  },
}

export type EmployerName = keyof typeof employers

export default function Employer({ name }: { name: EmployerName }) {
  const { url, icon, name: label } = employers[name]

  if (!url) {
    return (
      <span>
        {icon}
        {label}
      </span>
    )
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={label}>
      {icon}
      {label}
    </a>
  )
}
