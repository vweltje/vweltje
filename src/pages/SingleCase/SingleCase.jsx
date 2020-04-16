import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../layout"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import PageIntro from "../../components/PageIntro/PageIntro"
import CaseIntroList from "../../components/CaseIntroList/CaseIntroList"
import CaseDevicePreview from "../../components/CaseDevicePreview/CaseDevicePreview"
import CaseContent from "../../components/CaseContent/CaseContent"
import SEO from "../../components/SEO/SEO"
import { getPageData } from "../../helpers/graphqlHelper"
import config from "../../../data/SiteConfig"

const SingleCase = ({ data }) => {
  const pageData = getPageData(data)
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <SimpleHeader />
      <article className="SingleCase">
        <PageIntro
          title={pageData?.title}
          excerpt={pageData?.excerpt}
          aditionalStartContent={<CaseIntroList list={pageData?.list} />}
        />
        <CaseDevicePreview image={pageData?.devicePreview} />
        <CaseContent content={pageData.content} />
      </article>
    </Layout>
  )
}

export default SingleCase

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query SingleCaseQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
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
