import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../layout";
import SEO from "../../components/SEO/SEO";
import Hero from "../../components/Hero/Hero";
import VerticalHeading from "../../components/VerticalHeading/VerticalHeading";
import config from "../../../data/SiteConfig";

const Landing = () => {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <SEO />
      <Hero />
      <VerticalHeading />
    </Layout>
  );
};

export default Landing;

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
          }
        }
      }
    }
  }
`;
