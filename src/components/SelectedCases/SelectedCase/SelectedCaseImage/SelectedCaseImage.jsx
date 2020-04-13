import React from "react"
import Image from "../../../Image/Image"

import "./SelectedCaseImage.scss"

const SelectedCaseImage = ({ image }) => {
  return (
    <div className="SelectedCaseImage">
      <div className="SelectedCaseImage--Background">
        <div className="Left" />
        <div className="Right" />
      </div>
      <Image resolutions="small" lazy={false} src={image} alt={image} />
    </div>
  )
}

export default SelectedCaseImage
