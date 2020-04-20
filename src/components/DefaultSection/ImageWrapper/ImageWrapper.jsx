import React from "react"
import Image from "../../Image/Image"
import "./ImageWrapper.scss"

const ImageWrapper = ({ image }) => (
  <div className="DefaultSection--ImageWrapper">
    <Image
      className="DefaultSection--Image"
      src={image}
      lazy={false}
      backgroun={false}
      alt={image}
    />
  </div>
)

export default ImageWrapper
