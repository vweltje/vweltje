import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../../layout"
import SimpleHeader from "../../components/SimpleHeader/SimpleHeader"
import PageIntro from "../../components/PageIntro/PageIntro"
import CaseIntroList from "../../components/CaseIntroList/CaseIntroList"
import CaseDevicePreview from "../../components/CaseDevicePreview/CaseDevicePreview"
import CaseContent from "../../components/CaseContent/CaseContent"
import CaseEdgeNavigation from "../../components/CaseEdgeNavigation/CaseEdgeNavigation"
import Meta from "../../components/Meta/Meta"
import {
  getPageData,
  getMeta,
  getEdges,
  getNextEdge,
  getPreviousEdge
} from "../../helpers/graphqlHelper"
import config from "../../../data/SiteConfig"

const SingleCase = ({ data }) => {
  const pageData = getPageData(data, "case")
  const edges = getEdges(data, "allCases")

  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <Meta {...getMeta(pageData)} />
      <SimpleHeader />
      <article className="SingleCase">
        <PageIntro
          title={pageData?.title}
          excerpt={pageData?.excerpt}
          aditionalStartContent={<CaseIntroList list={pageData?.list} />}
        />
        <CaseDevicePreview image={pageData?.devicePreview} />
        <CaseContent content={pageData.content} />
        <CaseEdgeNavigation
          previous={getPreviousEdge(edges, pageData?.id)}
          next={getNextEdge(edges, pageData?.id)}
        />
      </article>
    </Layout>
  )
}

export default SingleCase

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query SingleCaseQuery($id: String) {
    case: markdownRemark(id: { eq: $id }) {
      ...Meta
      fields {
        slug
      }
      id
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

    allCases: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { contentType: { eq: "cases" } } }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
