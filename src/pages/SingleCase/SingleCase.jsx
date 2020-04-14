import React from "react"
import Helmet from "react-helmet"
// import { graphql } from "gatsby"
import Layout from "../../layout"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import CaseIntroSection from "../../components/CaseIntroSection/CaseIntroSection"
import CaseDevicePreview from "../../components/CaseDevicePreview/CaseDevicePreview"
import Container from "../../components/Container/Container"
import Content from "../../components/Content/Content"
import SEO from "../../components/SEO/SEO"
import config from "../../../data/SiteConfig"

const SingleCase = ({ data }) => {
  const caseData = { ...data?.case?.frontmatter, ...data?.case?.fields }
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <SimpleHeader />
      <article className="SingleCase">
        <CaseIntroSection
          title={caseData?.title}
          list={caseData?.list}
          excerpt={caseData?.excerpt}
        />
        <CaseDevicePreview image={caseData?.devicePreview} />
        <Container size="small">
          <Content>{caseData.content}</Content>
        </Container>
      </article>
    </Layout>
  )
}

export default SingleCase

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query SingleCaseQuery($id: String!) {
    case: markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      frontmatter {
        title
        date
        featuredImage
        list {
          url
          employer
          projectType
        }
        excerpt
        devicePreview
        content
      }
    }
  }
`
