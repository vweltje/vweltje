import SimpleHeader from "@/components/SimpleHeader/SimpleHeader"
import PageIntro from "@/components/PageIntro/PageIntro"
import CasesGrid from "@/components/CasesGrid/CasesGrid"
import { getCases, getPage, type CasesPage } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

const page = getPage<CasesPage>("cases")

export const metadata = pageMetadata(page.meta)

export default function Cases() {
  return (
    <>
      <SimpleHeader />
      <PageIntro title={page.title} excerpt={page.excerpt} />
      <CasesGrid cases={getCases()} />
    </>
  )
}
