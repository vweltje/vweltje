import React from "react"
import Image from "../../../Image/Image"

const SelectedWorkItemImage = ({ image }) => {
  return (
    <div className="SelectedWorkItemImage">
      <Image resolutions="small" lazy={false} src={image} alt={image} />
    </div>
  )
}

export default SelectedWorkItemImage
