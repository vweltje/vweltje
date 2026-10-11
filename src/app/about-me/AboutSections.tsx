"use client"

import DefaultSection from "@/components/DefaultSection/DefaultSection"
import LargeImage from "@/components/LargeImage/LargeImage"
import type { AboutPage } from "@/lib/content"
import { useIsMobile } from "@/lib/useIsMobile"

type Props = Pick<AboutPage, "firstSection" | "secondSection" | "footerImage">

// On mobile the second image goes first and the footer image is hidden
export default function AboutSections({
  firstSection,
  secondSection,
  footerImage,
}: Props) {
  const isMobile = useIsMobile()

  return (
    <>
      <DefaultSection data={firstSection} />
      <DefaultSection data={secondSection} imageFirst={!isMobile} />
      {!isMobile && <LargeImage image={footerImage} />}
    </>
  )
}
