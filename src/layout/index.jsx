import React from "react"
import Helmet from "react-helmet"
import { ParallaxProvider } from "react-scroll-parallax"
import { StateProvider } from "../store"
import MainLayoutContent from "./MainLayoutContent/MainLayoutContent"

import config from "../../data/SiteConfig"

import "../scss/base.scss"

const MainLayout = ({ children }) => {
  return (
    <StateProvider>
      <Helmet>
        <meta name="description" content={config.siteDescription} />
        <html lang="en" />
        <link href="https://ucarecdn.com" rel="preconnect" crossOrigin />
        <link rel="dns-prefetch" href="https://ucarecdn.com" />
      </Helmet>
      <ParallaxProvider>
        <MainLayoutContent>{children}</MainLayoutContent>
      </ParallaxProvider>
    </StateProvider>
  )
}

export default MainLayout
