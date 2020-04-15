import React from "react"
import Helmet from "react-helmet"
import Layout from "../../layout"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import SEO from "../../components/SEO/SEO"
import config from "../../../data/SiteConfig"

const Cases = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <SimpleHeader />
    </Layout>
  )
}

export default Cases

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CasesQuery($id: String!) {
    case: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        excerpt
      }
    }
  }
`
