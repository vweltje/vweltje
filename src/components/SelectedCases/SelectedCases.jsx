import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SelectedCase from "./SelectedCase/SelectedCase"
import { getEdges } from "../../helpers/graphqlHelper"
import { downBreakpoint } from "../../helpers/breakpointHelper"
import "./SelectedCases.scss"

const SelectedCases = ({ items }) => {
  return (
    <div className="SelectedCases">
      {!!items.length &&
        items.map((item, index) => (
          <SelectedCase
            item={item}
            textFirst={!downBreakpoint("large") && index % 2 !== 0}
            key={item.slug}
          />
        ))}
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query SelectedCasesQuery {
        allMarkdownRemark(
          filter: { fields: { contentType: { eq: "cases" } } }
          limit: 3
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                excerpt
                title
                devicePreview
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
    `}
    render={(data) => <SelectedCases items={getEdges(data)} />}
  />
)
