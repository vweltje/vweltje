import React from "react"

import "./ButtonOpen.scss"

const ButtonOpen = ({ onButtonClick }) => (
  <button className="ButtonOpen" type="button" onClick={onButtonClick}>
    <span className="ButtonOpen--Line first left" />
    <span className="ButtonOpen--Line first right" />
    <span className="ButtonOpen--Line second left" />
    <span className="ButtonOpen--Line second right" />
    <span className="ButtonOpen--Line third left" />
    <span className="ButtonOpen--Line third right" />
  </button>
)

export default ButtonOpen
