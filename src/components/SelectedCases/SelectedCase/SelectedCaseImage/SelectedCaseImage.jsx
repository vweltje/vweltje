import React from "react"
import Image from "../../../Image/Image"

const SelectedCaseImage = ({ image }) => {
  return (
    <div className="SelectedCaseImage">
      <Image resolutions="small" lazy={false} src={image} alt={image} />
    </div>
  )
}

export default SelectedCaseImage
