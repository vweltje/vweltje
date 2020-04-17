import React, { useContext } from "react"
import Nav from "../../components/Nav/Nav"
import PageSplitter from "../../components/PageSplitter/PageSplitter"
import ContactOverlay from "../../components/ContactOverlay/ContactOverlay"
import Footer from "../../components/Footer/Footer"
import { store } from "../../store"

const MainLayoutContent = ({ children }) => {
  const {
    state: { contactOverlay }
  } = useContext(store)
  return (
    <>
      <Nav />
      <PageSplitter>
        <>
          {children}
          {contactOverlay.active && <ContactOverlay />}
          <Footer />
        </>
      </PageSplitter>
    </>
  )
}

export default MainLayoutContent
