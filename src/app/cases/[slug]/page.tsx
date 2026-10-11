import { notFound } from "next/navigation"
import SimpleHeader from "@/components/SimpleHeader/SimpleHeader"
import PageIntro from "@/components/PageIntro/PageIntro"
import CaseIntroList from "@/components/CaseIntroList/CaseIntroList"
import CaseDevicePreview from "@/components/CaseDevicePreview/CaseDevicePreview"
import CaseContent from "@/components/CaseContent/CaseContent"
import CaseEdgeNavigation from "@/components/CaseEdgeNavigation/CaseEdgeNavigation"
import { getCase, getCases } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

type Props = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return getCases().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  return pageMetadata(getCase(slug)?.item.meta)
}

export default async function SingleCase({ params }: Props) {
  const { slug } = await params
  const result = getCase(slug)
  if (!result) notFound()
  const { item, previous, next } = result

  return (
    <>
      <SimpleHeader />
      <article className="SingleCase">
        <PageIntro
          title={item.title}
          excerpt={item.excerpt}
          additionalStartContent={<CaseIntroList list={item.list} />}
        />
        <CaseDevicePreview image={item.devicePreview} />
        <CaseContent content={item.content} />
        <CaseEdgeNavigation previous={previous} next={next} />
      </article>
    </>
  )
}
