import React from "react"
import Navigation from "../../components/Navigation/Navigation"
import PageSplitter from "../../components/PageSplitter/PageSplitter"
import ContactOverlay from "../../components/ContactOverlay/ContactOverlay"
import Footer from "../../components/Footer/Footer"

const MainLayoutContent = ({ children }) => {
  return (
    <>
      <Navigation />
      <PageSplitter>
        <>
          {children}
          <Footer />
        </>
      </PageSplitter>
      <ContactOverlay />
    </>
  )
}

export default MainLayoutContent
