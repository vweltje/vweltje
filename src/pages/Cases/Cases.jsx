import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../../layout"
import Meta from "../../components/Meta/Meta"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import PageIntro from "../../components/PageIntro/PageIntro"
import CasesGrid from "../../components/CasesGrid/CasesGrid"
import { getPageData, getEdges, getMeta } from "../../helpers/graphqlHelper"
import config from "../../../data/SiteConfig"

const Cases = ({ data }) => {
  const pageData = getPageData(data, "casesPage")
  const cases = getEdges(data, "cases")

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <Meta {...getMeta(pageData)} />
      <SimpleHeader />
      <PageIntro title={pageData?.title} excerpt={pageData?.excerpt} />
      <CasesGrid cases={cases} />
    </Layout>
  )
}

export default Cases

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CasesQuery($id: String) {
    casesPage: markdownRemark(id: { eq: $id }) {
      ...Meta
      frontmatter {
        title
        excerpt
      }
    }

    cases: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "cases" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            excerpt
            title
            featuredImage
            date
          }
          fields {
            slug
            name
            contentType
          }
        }
      }
    }
  }
`
