import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../layout"
import Meta from "../../components/Meta/Meta"
import Hero from "../../components/Hero/Hero"
import VerticalHeading from "../../components/VerticalHeading/VerticalHeading"
import SelectedCases from "../../components/SelectedCases/SelectedCases"
import { getPageData } from "../../helpers/graphqlHelper"
import config from "../../../data/SiteConfig"

const Landing = ({ data }) => {
  const frontmatter = getPageData(data)

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <Meta />
      <Hero>{frontmatter?.hero?.text}</Hero>
      <section>
        <VerticalHeading
          textLeft={frontmatter?.workHeading?.left}
          textRight={frontmatter?.workHeading?.right}
        />
        <SelectedCases />
      </section>
    </Layout>
  )
}

export default Landing

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query LandingQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        hero {
          text
        }
        workHeading {
          left
          right
        }
      }
    }
  }
`
