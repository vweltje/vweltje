import SimpleHeader from "@/components/SimpleHeader/SimpleHeader"
import PageIntro from "@/components/PageIntro/PageIntro"
import InlineBanner from "@/components/InlineBanner/InlineBanner"
import Button from "@/components/Button/Button"
import AboutSections from "./AboutSections"
import { getPage, type AboutPage } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

const page = getPage<AboutPage>("about")

export const metadata = pageMetadata(page.meta)

export default function About() {
  return (
    <>
      <SimpleHeader />
      <article>
        <PageIntro title={page.title} paddingBottom={false} />
        <AboutSections
          firstSection={page.firstSection}
          secondSection={page.secondSection}
          footerImage={page.footerImage}
        />
      </article>
      <InlineBanner>
        <Button link="/cases">Check out my work</Button>
      </InlineBanner>
    </>
  )
}
