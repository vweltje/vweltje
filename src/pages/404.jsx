import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import Layout from "../layout";

import config from "../../data/SiteConfig";

export default () => (
  <Layout>
    <Helmet>
      <title>{config.siteTitle}</title>
    </Helmet>
    <section className="section thick">
      <div className="container skinny taCenter">
        <h1>404 - Page Not Found</h1>
        <p>
          We can't find the page you are looking for!
          <br />
          Head back to 
          {' '}
          <Link to="/">{config.siteTitle}</Link>
        </p>
      </div>
    </section>
  </Layout>
);
