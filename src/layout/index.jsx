import React from "react"
import Helmet from "react-helmet"
import { ParallaxProvider } from "react-scroll-parallax"
import { StateProvider } from "../store"
import MainLayoutContent from "./MainLayoutContent/MainLayoutContent"
import "../scss/base.scss"

const MainLayout = ({ children }) => {
  return (
    <StateProvider>
      <Helmet>
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
