import type { ReactNode } from "react"
import Container from "../Container/Container"

type Props = {
  title: string
  excerpt?: string
  additionalStartContent?: ReactNode
  paddingBottom?: boolean
}

export default function PageIntro({
  title,
  excerpt,
  additionalStartContent,
  paddingBottom = true,
}: Props) {
  return (
    <section
      className={`PageIntro ${paddingBottom ? "" : "resetBottomPadding"}`}
    >
      <Container>
        <div className="PageIntro--Start">
          <h1 className="PageIntro-heading">{title}</h1>
          {additionalStartContent}
        </div>
        <div className="PageIntro--End">{excerpt && <p>{excerpt}</p>}</div>
      </Container>
    </section>
  )
}
