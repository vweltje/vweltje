import React, { useState } from "react";
import Helmet from "react-helmet";
import Nav from "../components/Nav/Nav";
import config from "../../data/SiteConfig";

import "./index.scss";

const SplitContent = ({ split, children }) => {
  return (
    <>
      <main>{children}</main>
      {split && <div className="Clone">{children}</div>}
    </>
  );
};

const MainLayout = ({ children }) => {
  const [navActive, setNavActive] = useState(false);
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Nav navActive={navActive} setNavActive={setNavActive} />
      <SplitContent split={navActive}>{children}</SplitContent>
    </>
  );
};

export default MainLayout;
