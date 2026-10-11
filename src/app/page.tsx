import Hero from "@/components/Hero/Hero"
import Content from "@/components/Content/Content"
import VerticalHeading from "@/components/VerticalHeading/VerticalHeading"
import SelectedCases from "@/components/SelectedCases/SelectedCases"
import InlineBanner from "@/components/InlineBanner/InlineBanner"
import { getCases, getPage, type LandingPage } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

const page = getPage<LandingPage>("landing")

export const metadata = pageMetadata(page.meta)

export default function Home() {
  return (
    <>
      <Hero buttonText={page.hero.buttonText}>
        <Content>{page.hero.text}</Content>
      </Hero>
      <section>
        <VerticalHeading
          textLeft={page.workHeading.left}
          textRight={page.workHeading.right}
        />
        <SelectedCases items={getCases().slice(0, 3)} />
      </section>
      <InlineBanner />
    </>
  )
}
