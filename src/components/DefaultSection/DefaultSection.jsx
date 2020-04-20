import React from "react"
import Container from "../Container/Container"
import ImageWrapper from "./ImageWrapper/ImageWrapper"
import Content from "../Content/Content"
import "./DefaultSection.scss"

const DefaultSection = ({ data, imageFirst = false }) => {
  return (
    <section className="DefaultSection">
      <Container>
        <div className="DefaultSection--Start">
          {imageFirst ? (
            <ImageWrapper image={data.image} />
          ) : (
            <Content>{data.content}</Content>
          )}
        </div>
        <div className="DefaultSection--End">
          {imageFirst ? (
            <Content>{data.content}</Content>
          ) : (
            <ImageWrapper image={data.image} />
          )}
        </div>
      </Container>
    </section>
  )
}

export default DefaultSection
