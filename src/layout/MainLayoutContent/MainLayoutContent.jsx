import React from "react"
import Nav from "../../components/Nav/Nav"
import PageSplitter from "../../components/PageSplitter/PageSplitter"
import Footer from "../../components/Footer/Footer"

const MainLayoutContent = ({ children }) => {
  return (
    <>
      <Nav />
      <PageSplitter>
        <>
          {children}
          <Footer />
        </>
      </PageSplitter>
    </>
  )
}

export default MainLayoutContent
