const config = {
  siteTitle: "Portfolio | Vincent Weltje", // Site title.
  siteTitleShort: "Portfolio vweltje", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://vweltje.nl", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Personal portfolio web site of Vincent Weltje", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Portfolio | Vincent Weltje", // Title of the RSS feed
  googleAnalyticsID: "", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  copyright: "Copyright © 2020. vweltje.nl", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#2a4742", // Used for setting manifest and progress theme colors.
  backgroundColor: "#fff" // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = ""
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`

module.exports = config
