import React from "react"
import Container from "../Container/Container"
import Image from "../Image/Image"

import "./LargeImage.scss"

const LargeImage = ({ image }) => (
  <section className="LargeImage">
    <Container>
      <Image
        className="LargeImage--Image"
        src={image}
        alt={image}
        background={false}
        lazy={false}
      />
    </Container>
  </section>
)

export default LargeImage
