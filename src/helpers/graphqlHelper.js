export const getPageData = (data, selector = "markdownRemark") => ({
  ...(data?.[selector]?.id ? { id: data?.[selector]?.id } : {}),
  ...data?.[selector]?.frontmatter,
  ...data?.[selector]?.fields
})

export const getEdges = (data, selector = "allMarkdownRemark") =>
  data?.[selector]?.edges?.map((edge) => ({
    ...(edge?.node?.id ? { id: edge?.node?.id } : {}),
    ...edge?.node?.frontmatter,
    ...edge?.node?.fields,
    ...(edge?.previous ? { previous: edge?.previous } : {}),
    ...(edge?.next ? { next: edge?.next } : {})
  })) ?? []

export const getMeta = (frontmatter) => frontmatter?.meta

export const getNextEdge = (edges, currentEdgeId) => {
  const node = edges?.find((edge) => edge.id === currentEdgeId)
  return {
    ...node?.next?.fields,
    ...node?.next?.frontmatter
  }
}

export const getPreviousEdge = (edges, currentEdgeId) => {
  const node = edges?.find((edge) => edge.id === currentEdgeId)
  return {
    ...node?.previous?.fields,
    ...node?.previous?.frontmatter
  }
}
