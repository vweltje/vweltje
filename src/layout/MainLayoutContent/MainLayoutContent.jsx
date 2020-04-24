import React from "react"
import Navigation from "../../components/Navigation/Navigation"
import PageSplitter from "../../components/PageSplitter/PageSplitter"
import ContactOverlay from "../../components/ContactOverlay/ContactOverlay"
import Footer from "../../components/Footer/Footer"
import { downBreakpoint } from "../../helpers/breakpointHelper"

const MainLayoutContent = ({ children }) => {
  const Content = () => (
    <>
      {children}
      <Footer />
    </>
  )
  return (
    <>
      <Navigation />
      {!downBreakpoint("large") ? (
        <PageSplitter>
          <Content />
        </PageSplitter>
      ) : (
        <Content />
      )}
      <ContactOverlay />
    </>
  )
}

export default MainLayoutContent
