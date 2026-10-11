"use client"

import type { ReactNode } from "react"
import Navigation from "../Navigation/Navigation"
import PageSplitter from "../PageSplitter/PageSplitter"
import ContactOverlay from "../ContactOverlay/ContactOverlay"
import Footer from "../Footer/Footer"
import { useIsMobile } from "@/lib/useIsMobile"

export default function Layout({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile()
  const content = (
    <>
      {children}
      <Footer />
    </>
  )

  return (
    <>
      <Navigation />
      {isMobile ? content : <PageSplitter>{content}</PageSplitter>}
      <ContactOverlay />
    </>
  )
}
