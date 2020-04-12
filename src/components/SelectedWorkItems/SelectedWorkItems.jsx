import React from "react"
import { StaticQuery, graphql } from "gatsby"

import SelectedWorkItem from "./SelectedWorkItem/SelectedWorkItem"

const SelectedWorkItems = ({ items }) => {
  return (
    <div className="SelectedWork">
      {!!items.length &&
        items.map((item, index) => (
          <SelectedWorkItem
            item={item}
            textFirst={index % 2 !== 0}
            key={item.slug}
          />
        ))}
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query SelectedWorkItemsQuery {
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
    render={(data) => (
      <SelectedWorkItems
        items={
          data?.allMarkdownRemark?.edges?.map((edge) => ({
            ...edge?.node?.frontmatter,
            ...edge?.node?.fields
          })) ?? []
        }
      />
    )}
  />
)
