import React from "react"
import Container from "../Container/Container"
import Content from "../Content/Content"
import "./CaseContent.scss"

const CaseContent = ({ content }) => (
  <section className="CaseContent">
    <Container size="tiny">
      <Content>{content}</Content>
    </Container>
  </section>
)

export default CaseContent
