import React from "react"

import Container from "../Container/Container"
import Image from "../Image/Image"

import "./CaseDevicePreview.scss"

const CaseDevicePreview = ({ image }) => (
  <section className="CaseDevicePreview">
    <Container size="small">
      <figure className="CaseDevicePreview--Figure">
        <Image
          className="CaseDevicePreview--Image"
          resolutions="large"
          lazy={false}
          src={image}
          alt={image}
        />
      </figure>
    </Container>
  </section>
)

export default CaseDevicePreview
