import React from "react"
import Content from "../Content/Content"
import Image from "../Image/Image"

const AboutSection = ({ data, imageFirst = false }) => {
  const image = <Image src={data.image} background lazy alt={data.image} />
  const content = <Content>{data.content}</Content>
  return (
    <div className="AboutSection">
      <div className="AboutSection--Left">{imageFirst ? image : content}</div>
      <div className="AboutSection--Right">{imageFirst ? content : image}</div>
    </div>
  )
}

export default AboutSection
