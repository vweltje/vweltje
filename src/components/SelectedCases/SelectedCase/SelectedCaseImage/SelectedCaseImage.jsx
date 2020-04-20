import React from "react"
import { Parallax } from "react-scroll-parallax"
import Image from "../../../Image/Image"
import { downBreakpoint } from "../../../../helpers/breakpointHelper"
import "./SelectedCaseImage.scss"

const SelectedCaseImage = ({ image, backgroundAnimationAxis = "y" }) => (
  <div className="SelectedCaseImage">
    <div
      className={`SelectedCaseImage--Background${
        backgroundAnimationAxis === "xy" ? " Reversed" : ""
      }`}
    >
      <Parallax
        className="Left"
        y={backgroundAnimationAxis === "y" ? [-7.5, 7.5] : [0, 0]}
        disabled={downBreakpoint("large")}
      />
      <Parallax
        className="Right"
        y={backgroundAnimationAxis === "xy" ? [-7.5, 7.5] : [0, 0]}
        x={backgroundAnimationAxis === "xy" ? [-7.5, 0] : [0, 0]}
        disabled={downBreakpoint("large")}
      />
    </div>
    <Image resolutions="small" lazy={false} src={image} alt={image} />
  </div>
)

export default SelectedCaseImage
