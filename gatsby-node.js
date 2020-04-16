/* eslint "no-console": "off" */

const path = require("path")
const _ = require("lodash")
const moment = require("moment")
const siteConfig = require("./data/SiteConfig")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)
    const parsedFilePath = path.parse(fileNode.relativePath)
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${_.kebabCase(node.frontmatter.title)}`
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`
    } else {
      slug = `/${parsedFilePath.dir}/`
    }

    if (Object.prototype.hasOwnProperty.call(node, "frontmatter")) {
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug"))
        slug = `/${_.kebabCase(node.frontmatter.slug)}`
      if (Object.prototype.hasOwnProperty.call(node.frontmatter, "date")) {
        const date = moment(node.frontmatter.date, siteConfig.dateFromFormat)
        if (!date.isValid)
          console.warn(`WARNING: Invalid date.`, node.frontmatter)

        createNodeField({ node, name: "date", value: date.toISOString() })
      }
    }
    createNodeField({ node, name: "slug", value: slug })
    // Add contentType to node.fields
    createNodeField({
      node,
      name: "contentType",
      value: parsedFilePath.dir
    })
    createNodeField({
      node,
      name: "name",
      value: parsedFilePath.name
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Get a full list of markdown posts
  const markdownQueryResult = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
              contentType
              name
            }
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (markdownQueryResult.errors) {
    console.error(markdownQueryResult.errors)
    throw markdownQueryResult.errors
  }

  const { edges } = markdownQueryResult.data.allMarkdownRemark

  // Post page creating
  console.log("Created: ")
  edges.forEach(({ node }) => {
    // Generate a list of pages
    const { id } = node
    const name = _.capitalize(String(node.fields.name))
    switch (node.fields.contentType) {
      case "cases":
        createPage({
          path: `/cases${node.fields.slug}`,
          component: path.resolve(`src/pages/SingleCase/SingleCase.jsx`),
          context: {
            id
          }
        })
        console.log(`/cases${node.fields.slug}`)
        break
      default:
        // Page
        createPage({
          path: node.frontmatter.slug || node.fields.slug,
          component: path.resolve(`src/pages/${name}/${name}.jsx`),
          context: {
            id
          }
        })
        console.log(node.frontmatter.slug || node.fields.slug)
        break
    }
  })
}

module.exports.resolvableExtensions = () => [".json"]
