import React from "react"
import Container from "../Container/Container"
import Content from "../Content/Content"
import Image from "../Image/Image"

import "./AboutSection.scss"

const AboutSection = ({ data, imageFirst = false }) => {
  const image = (
    <div className="AboutSection--ImageWrapper">
      <Image
        className="AboutSection--Image"
        src={data.image}
        lazy={false}
        backgroun={false}
        alt={data.image}
      />
    </div>
  )
  const content = <Content>{data.content}</Content>
  return (
    <section className="AboutSection">
      <Container>
        <div className="AboutSection--Start">
          {imageFirst ? image : content}
        </div>
        <div className="AboutSection--End">{imageFirst ? content : image}</div>
      </Container>
    </section>
  )
}

export default AboutSection
