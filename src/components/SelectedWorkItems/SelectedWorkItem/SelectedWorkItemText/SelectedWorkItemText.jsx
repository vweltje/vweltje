import React from "react"
import { Link } from "gatsby"

const SelectedWorkItemText = ({
  title = "",
  text = "",
  link = {
    text: "",
    slug: ""
  }
}) => {
  return (
    <div className="SelectedWorkItemText">
      <div className="SelectedWorkItemText--inner">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={`${link.slug}`}>{link.text}</Link>
      </div>
    </div>
  )
}

export default SelectedWorkItemText
