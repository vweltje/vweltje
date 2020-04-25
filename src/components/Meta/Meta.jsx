import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import config from "../../../data/SiteConfig"

export const query = graphql`
  fragment Meta on MarkdownRemark {
    frontmatter {
      meta {
        title
        description
        noindex
        canonicalLink
      }
    }
  }
`

const Meta = ({
  title = config.siteTitle,
  url = typeof window !== "undefined" ? window.location.href : false,
  description = config.siteDescription,
  noindex,
  canonicalLink,
  absoluteImageUrl = config.socialMediaCard,
  siteTitle = config.siteTitle,
  siteDescription = config.siteDescription,
  googleTrackingId = config.googleTrackingId
}) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:type" content="website" />}
      {url && <meta property="og:url" content={url} />}
      {noindex && <meta name="robots" content="noindex" />}
      {canonicalLink && <link rel="canonical" href={canonicalLink} />}

      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta name="twitter:card" content={absoluteImageUrl} />

      {googleTrackingId && (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
        />
      )}

      {googleTrackingId && (
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleTrackingId}');
          `}
        </script>
      )}
    </Helmet>
  )
}

export default Meta
