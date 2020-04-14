import React from "react"
import Helmet from "react-helmet"
// import { graphql } from "gatsby"
import Layout from "../../layout"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import SEO from "../../components/SEO/SEO"
import config from "../../../data/SiteConfig"

// const SingleCase = ({ data }) => {
const SingleCase = () => {
  // const frontmatter = data?.allMarkdownRemark?.edges?.[0]?.node?.frontmatter

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <SimpleHeader />
      SingleCase
    </Layout>
  )
}

export default SingleCase

/* eslint no-undef: "off" */
// export const pageQuery = graphql`
//   query SingleCaseQuery {
//     allMarkdownRemark(
//       filter: {
//         fields: { contentType: { eq: "pages" }, name: { eq: "landing" } }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             hero {
//               text
//             }
//             workHeading {
//               left
//               right
//             }
//           }
//         }
//       }
//     }
//   }
// `
