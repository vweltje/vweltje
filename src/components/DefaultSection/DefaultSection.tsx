import Container from "../Container/Container"
import ImageWrapper from "./ImageWrapper/ImageWrapper"
import Content from "../Content/Content"
import type { Section } from "@/lib/content"

type Props = {
  data: Section
  imageFirst?: boolean
}

export default function DefaultSection({ data, imageFirst = false }: Props) {
  const image = data.image && <ImageWrapper image={data.image} />
  const content = data.content && <Content>{data.content}</Content>

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
