import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../../layout"
import SEO from "../../components/SEO/SEO"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import PageIntro from "../../components/PageIntro/PageIntro"
import AboutSection from "../../components/AboutSection/AboutSection"
import { getPageData } from "../../helpers/graphqlHelper"
import config from "../../../data/SiteConfig"

const About = ({ data }) => {
  const pageData = getPageData(data)
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <SimpleHeader />
      <article>
        <PageIntro title={pageData.title} paddingBottom={false} />
        <AboutSection data={pageData.firstSection} />
        <AboutSection data={pageData.secondSection} imageFirst />
      </article>
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
