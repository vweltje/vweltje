"use client"

import DefaultSection, {
  type DefaultSectionData,
} from "@/components/DefaultSection/DefaultSection"
import LargeImage from "@/components/LargeImage/LargeImage"
import { useIsMobile } from "@/lib/useIsMobile"

type Props = {
  firstSection: DefaultSectionData
  secondSection: DefaultSectionData
  footerImage: string
}

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
