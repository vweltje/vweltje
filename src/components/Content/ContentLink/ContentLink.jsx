import React from 'react'

const ContentLink = ({href, children}) => (
 <a target="_blank" href={href} rel="noopener noreferrer" title={children}>{children}</a>
)

export default ContentLink
