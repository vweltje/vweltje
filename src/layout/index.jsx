import React, { useState } from "react"
import Helmet from "react-helmet"
import Nav from "../components/Nav/Nav"
import SplitContent from "./SplitContent/SplitContent"
import Footer from "../components/Footer/Footer"
import config from "../../data/SiteConfig"

import "../scss/base.scss"

const MainLayout = ({ children }) => {
  const [navActive, setNavActive] = useState(false)
  return (
    <>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
      </Helmet>
      <Nav navActive={navActive} setNavActive={setNavActive} />
      <SplitContent split={navActive}>
        <>
          {children}
          <Footer />
        </>
      </SplitContent>
    </>
  )
}

export default MainLayout
