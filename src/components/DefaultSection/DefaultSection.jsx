import React from "react"
import Container from "../Container/Container"
import Content from "../Content/Content"
import Image from "../Image/Image"

import "./DefaultSection.scss"

const DefaultSection = ({ data, imageFirst = false }) => {
  const image = (
    <div className="DefaultSection--ImageWrapper">
      <Image
        className="DefaultSection--Image"
        src={data.image}
        lazy={false}
        backgroun={false}
        alt={data.image}
      />
    </div>
  )
  const content = <Content>{data.content}</Content>
  return (
    <section className="DefaultSection">
      <Container>
        <div className="DefaultSection--Start">
          {imageFirst ? image : content}
        </div>
        <div className="DefaultSection--End">
          {imageFirst ? content : image}
        </div>
      </Container>
    </section>
  )
}

export default DefaultSection
