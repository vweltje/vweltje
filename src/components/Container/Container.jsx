import React from "react"

import "./Container.scss"

const Container = ({ children, noPadding = false, size = "" }) => (
  <div className={`Container${noPadding ? " noPadding" : ""} ${size}`}>
    {children}
  </div>
)

export default Container
