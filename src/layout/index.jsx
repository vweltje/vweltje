import React from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav/Nav";
import config from "../../data/SiteConfig";

import "./index.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Nav />
        {children}
      </div>
    );
  }
}
