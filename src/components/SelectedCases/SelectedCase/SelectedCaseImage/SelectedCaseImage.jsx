import React from "react"
import { Parallax } from "react-scroll-parallax"
import Image from "../../../Image/Image"

import "./SelectedCaseImage.scss"

const SelectedCaseImage = ({ image, backgroundAnimationAxis = "y" }) => {
  return (
    <div className="SelectedCaseImage">
      <div
        className={`SelectedCaseImage--Background${
          backgroundAnimationAxis === "xy" ? " Reversed" : ""
        }`}
      >
        <Parallax className="Left" y={["-60px", "60px"]} />
        <Parallax className="Right" />
      </div>
      <Image resolutions="small" lazy={false} src={image} alt={image} />
    </div>
  )
}

export default SelectedCaseImage
