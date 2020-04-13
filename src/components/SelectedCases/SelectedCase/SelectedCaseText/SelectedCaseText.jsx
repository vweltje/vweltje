import React from "react"
import { Link } from "gatsby"

import "./SelectedCaseText.scss"

const SelectedCaseText = ({
  title = "",
  text = "",
  link = {
    text: "",
    slug: ""
  }
}) => {
  return (
    <div className="SelectedCaseText">
      <div className="SelectedCaseText--Inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="Link" to={`${link.slug}`}>
          {link.text}
        </Link>
      </div>
    </div>
  )
}

export default SelectedCaseText
