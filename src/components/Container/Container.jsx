import React from "react"

import "./Container.scss"

const Container = ({ children, noPadding }) => (
  <div className={`Container${noPadding ? " noPadding" : ""}`}>{children}</div>
)

export default Container
