import Container from "../../Container/Container"
import ConditionalLink from "./ConditionalLink/ConditionalLink"
import SelectedCaseText from "./SelectedCaseText/SelectedCaseText"
import SelectedCaseImage from "./SelectedCaseImage/SelectedCaseImage"
import type { Case } from "@/lib/content"

type Props = {
  item: Case
  textFirst?: boolean
}

export default function SelectedCase({ item, textFirst = false }: Props) {
  const link = { href: `/cases/${item.slug}`, text: "View case study" }
  const text = (
    <SelectedCaseText title={item.title} text={item.excerpt} link={link} />
  )

  return (
    <div className={`SelectedCase${textFirst ? " textFirst" : ""}`}>
      <Container>
        <ConditionalLink href={link.href}>
          {textFirst ? (
            <>
              {text}
              <SelectedCaseImage image={item.devicePreview} reversed />
            </>
          ) : (
            <>
              <SelectedCaseImage image={item.devicePreview} />
              {text}
            </>
          )}
        </ConditionalLink>
      </Container>
    </div>
  )
}
