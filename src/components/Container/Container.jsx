import React from "react"
import "./Container.scss"

const Container = ({
  children,
  noPadding = false,
  size = "",
  className = ""
}) => (
  <div
    className={`Container${noPadding ? " noPadding" : ""}${
      size ? ` ${size}` : ""
    }${className ? ` ${className}` : ""}`}
  >
    {children}
  </div>
)

export default Container
