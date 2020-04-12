import React from "react"

import "./VerticalHeading.scss"

const VerticalHeading = ({ textLeft, textRight }) => (
  <h2 className="VerticalHeading">
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
  </h2>
)

export default VerticalHeading
