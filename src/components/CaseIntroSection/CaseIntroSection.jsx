import React from "react"
import Container from "../Container/Container"
import CaseIntroList from "./CaseIntroList/CaseIntroList"

import "./CaseIntroSection.scss"

const CaseIntroSection = ({ title, list, excerpt }) => (
  <section className="CaseIntroSection">
    <Container>
      <div className="CaseIntroSection--Start">
        <h1>{title}</h1>
        <CaseIntroList list={list} />
      </div>
      <div className="CaseIntroSection--Start">
        <p>{excerpt}</p>
      </div>
    </Container>
  </section>
)

export default CaseIntroSection
