import Container from "../Container/Container"
import ImageWrapper from "./ImageWrapper/ImageWrapper"
import Content from "../Content/Content"
import type { Section } from "@/lib/content"

type Props = {
  data: Section
  // Only applies on desktop, on mobile the image always goes first
  imageFirst?: boolean
}

export default function DefaultSection({ data, imageFirst = false }: Props) {
  return (
    <section className={`DefaultSection${imageFirst ? " imageFirst" : ""}`}>
      <Container>
        <div className="DefaultSection--Start">
          {data.content && <Content>{data.content}</Content>}
        </div>
        <div className="DefaultSection--End">
          {data.image && <ImageWrapper image={data.image} />}
        </div>
      </Container>
    </section>
  )
}
