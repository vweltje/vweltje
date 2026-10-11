import Container from "../Container/Container"
import Content from "../Content/Content"

export default function CaseContent({ content }: { content: string }) {
  return (
    <section className="CaseContent">
      <Container size="tiny">
        <Content>{content}</Content>
      </Container>
    </section>
  )
}
