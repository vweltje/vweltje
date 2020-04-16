import React from "react"
import { Parallax } from "react-scroll-parallax"
import { downBreakpoint } from "../../helpers/breakpointHelper"
import "./VerticalHeading.scss"

const VerticalHeading = ({ textLeft, textRight }) => (
  <h2 className="VerticalHeading">
    <Parallax y={[-20, 20]} disabled={downBreakpoint("large")}>
      <div className="VerticalHeading--Left">
        {[...textLeft].map((character, index) => (
          <span
            className="VerticalHeading--Character"
            key={`${character}-${index}`}
          >
            {character}
          </span>
        ))}
      </div>
    </Parallax>
    <Parallax y={[-60, 60]} disabled={downBreakpoint("large")}>
      <div className="VerticalHeading--Right">
        {[...textRight].map((character, index) => (
          <span
            className="VerticalHeading--Character"
            key={`${character}-${index}`}
          >
            {character}
          </span>
        ))}
      </div>
    </Parallax>
  </h2>
)

export default VerticalHeading
