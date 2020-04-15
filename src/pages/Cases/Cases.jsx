import React from "react"
import Helmet from "react-helmet"
import Layout from "../../layout"
import SEO from "../../components/SEO/SEO"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import PageIntro from "../../components/PageIntro/PageIntro"
import config from "../../../data/SiteConfig"

const Cases = ({ data }) => {
  const pageData = { ...data?.case?.frontmatter, ...data?.case?.fields }
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <SimpleHeader />
      <PageIntro title={pageData?.title} excerpt={pageData?.excerpt} />
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
