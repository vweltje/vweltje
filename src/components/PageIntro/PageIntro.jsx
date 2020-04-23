import React from "react"
import Container from "../Container/Container"
import "./PageIntro.scss"

const PageIntro = ({
  title,
  excerpt,
  aditionalStartContent,
  aditionalEndContent,
  paddingBottom = true
}) => (
  <section className={`PageIntro ${paddingBottom ? "" : "resetBottomPadding"}`}>
    <Container>
      <div className="PageIntro--Start">
        <h1 className="PageIntro-heading">{title}</h1>
        {!!aditionalStartContent && aditionalStartContent}
      </div>
      <div className="PageIntro--End">
        {excerpt && <p>{excerpt}</p>}
        {!!aditionalEndContent && aditionalEndContent}
      </div>
    </Container>
  </section>
)

export default PageIntro
