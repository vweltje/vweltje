import type { ReactNode } from "react"
import Container from "../Container/Container"
import ImageWrapper from "./ImageWrapper/ImageWrapper"

export type DefaultSectionData = {
  content?: ReactNode
  image?: string
}

type Props = {
  data: DefaultSectionData
  imageFirst?: boolean
}

export default function DefaultSection({ data, imageFirst = false }: Props) {
  const image = data.image && <ImageWrapper image={data.image} />
  const content = data.content

  return (
    <section className="DefaultSection">
      <Container>
        <div className="DefaultSection--Start">
          {imageFirst ? image : content}
        </div>
        <div className="DefaultSection--End">
          {imageFirst ? content : image}
        </div>
      </Container>
    </section>
  )
}
