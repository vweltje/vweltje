import React from "react"
import { Link } from "gatsby"
import { downBreakpoint } from "../../../../helpers/breakpointHelper"
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
        {!downBreakpoint("large") ? (
          <Link className="Link" to={`${link.slug}`}>
            {link.text}
          </Link>
        ) : (
          <span className="Link" to={`${link.slug}`}>
            {link.text}
          </span>
        )}
      </div>
    </div>
  )
}

export default SelectedCaseText
