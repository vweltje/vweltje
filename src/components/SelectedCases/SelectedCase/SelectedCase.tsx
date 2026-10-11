import Container from "../../Container/Container"
import SelectedCaseText from "./SelectedCaseText/SelectedCaseText"
import SelectedCaseImage from "./SelectedCaseImage/SelectedCaseImage"
import type { Case } from "@/lib/content"

type Props = {
  item: Case
  textFirst?: boolean
}

// textFirst only applies on desktop, on mobile the image always goes first
export default function SelectedCase({ item, textFirst = false }: Props) {
  return (
    <div className={`SelectedCase${textFirst ? " textFirst" : ""}`}>
      <Container>
        <SelectedCaseImage image={item.devicePreview} reversed={textFirst} />
        <SelectedCaseText
          title={item.title}
          text={item.excerpt}
          link={{ href: `/cases/${item.slug}`, text: "View case study" }}
        />
      </Container>
    </div>
  )
}
