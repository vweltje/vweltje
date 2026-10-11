import VisitSiteIcon from "../../icons/VisitSiteIcon"

export default function SiteUrl({ url }: { url: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <VisitSiteIcon />
      Visit site
    </a>
  )
}
