import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../layout"
import SEO from "../../components/SEO/SEO"
import Hero from "../../components/Hero/Hero"
import VerticalHeading from "../../components/VerticalHeading/VerticalHeading"
import SelectedCases from "../../components/SelectedCases/SelectedCases"
import config from "../../../data/SiteConfig"

const Landing = ({ data }) => {
  const frontmatter = data?.allMarkdownRemark?.edges?.[0]?.node?.frontmatter

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
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
  query LandingQuery {
    allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "pages" }, name: { eq: "landing" } }
      }
    ) {
      edges {
        node {
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
    }
  }
`
