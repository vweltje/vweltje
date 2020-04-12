import React from "react"
import { Link } from "gatsby"

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
      <div className="SelectedCaseText--inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={`${link.slug}`}>{link.text}</Link>
      </div>
    </div>
  )
}

export default SelectedCaseText
