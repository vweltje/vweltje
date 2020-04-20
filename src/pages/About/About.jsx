import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../../layout"
import Meta from "../../components/Meta/Meta"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import PageIntro from "../../components/PageIntro/PageIntro"
import DefaultSection from "../../components/DefaultSection/DefaultSection"
import LargeImage from "../../components/LargeImage/LargeImage"
import { getPageData } from "../../helpers/graphqlHelper"
import config from "../../../data/SiteConfig"

const About = ({ data }) => {
  const pageData = getPageData(data)
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <Meta />
      <SimpleHeader />
      <article>
        <PageIntro title={pageData.title} paddingBottom={false} />
        <DefaultSection data={pageData.firstSection} />
        <DefaultSection data={pageData.secondSection} imageFirst />
        <LargeImage image={pageData.footerImage} />
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
