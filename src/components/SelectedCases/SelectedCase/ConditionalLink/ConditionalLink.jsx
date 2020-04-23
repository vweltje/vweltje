import React from "react"
import { Link } from "gatsby"
import { downBreakpoint } from "../../../../helpers/breakpointHelper"

const ConditionalLink = ({ link, children }) => (
  <>
    {downBreakpoint("large") ? (
      <Link className="PostCard--ContentLink" to={link}>
        {children}
      </Link>
    ) : (
      children
    )}
  </>
)

export default ConditionalLink
