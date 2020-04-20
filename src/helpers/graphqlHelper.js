export const getPageData = (data, selector = "markdownRemark") => ({
  ...data?.[selector]?.frontmatter,
  ...data?.[selector]?.fields
})

export const getEdges = (data, selector = "allMarkdownRemark") =>
  data?.[selector]?.edges?.map((edge) => ({
    ...edge?.node?.frontmatter,
    ...edge?.node?.fields
  })) ?? []

export const getMeta = (frontmatter) => frontmatter?.meta
