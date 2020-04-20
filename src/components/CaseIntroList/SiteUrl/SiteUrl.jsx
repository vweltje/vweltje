import React from "react"
import SitePreviewIcon from "../../../svg/visit-site-icon.svg"

const SiteUrl = ({ url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    <SitePreviewIcon />
    Visit site
  </a>
)

export default SiteUrl
