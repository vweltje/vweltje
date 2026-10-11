import SimpleHeader from "@/components/SimpleHeader/SimpleHeader"
import PageIntro from "@/components/PageIntro/PageIntro"
import InlineBanner from "@/components/InlineBanner/InlineBanner"
import Button from "@/components/Button/Button"
import Content from "@/components/Content/Content"
import AboutSections from "./AboutSections"
import { getPage, type AboutPage, type Section } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

const page = getPage<AboutPage>("about")

export const metadata = pageMetadata(page.meta)

// The markdown is rendered here on the server, so the renderer stays out of
// the client bundle
function renderSection({ content, image }: Section) {
  return { image, content: content && <Content>{content}</Content> }
}

export default function About() {
  return (
    <>
      <SimpleHeader />
      <article>
        <PageIntro title={page.title} paddingBottom={false} />
        <AboutSections
          firstSection={renderSection(page.firstSection)}
          secondSection={renderSection(page.secondSection)}
          footerImage={page.footerImage}
        />
      </article>
      <InlineBanner>
        <Button link="/cases">Check out my work</Button>
      </InlineBanner>
    </>
  )
}
