import React from "react"
import Container from "../Container/Container"

import "./PageIntro.scss"

const PageIntro = ({
  title,
  excerpt,
  aditionalStartContent,
  aditionalEndContent
}) => (
  <section className="PageIntro">
    <Container>
      <div className="PageIntro--Start">
        <h1>{title}</h1>
        {!!aditionalStartContent && aditionalStartContent}
      </div>
      <div className="PageIntro--End">
        <p>{excerpt}</p>
        {!!aditionalEndContent && aditionalEndContent}
      </div>
    </Container>
  </section>
)

export default PageIntro
