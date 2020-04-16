import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../../layout"
import SEO from "../../components/SEO/SEO"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import { getPageData } from "../../helpers/graphqlHelper"
import config from "../../../data/SiteConfig"

const About = ({ data }) => {
  const pageData = getPageData(data)
  console.log(pageData)
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <SimpleHeader />
    </Layout>
  )
}

export default About

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AboutQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        firstSection {
          content
          image
        }
        secondSection {
          content
          image
        }
        footerImage
      }
    }
  }
`
