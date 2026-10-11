import type { ReactNode } from "react"
import Navigation from "../Navigation/Navigation"
import PageSplitter from "../PageSplitter/PageSplitter"
import ContactOverlay from "../ContactOverlay/ContactOverlay"
import Footer from "../Footer/Footer"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <PageSplitter>
        {children}
        <Footer />
      </PageSplitter>
      <ContactOverlay />
    </>
  )
}
