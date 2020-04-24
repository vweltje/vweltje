import React from "react"
import { Link } from "gatsby"
import "./Button.scss"

const Button = ({
  link = false,
  external = false,
  onClick = false,
  children
}) => {
  const InternalLink = () => (
    <Link to={link} className="Button">
      {children}
    </Link>
  )
  const ExternalLink = () => (
    <a href={link} className="Button">
      {children}
    </a>
  )
  const ActionLink = () => (
    <button onClick={onClick} className="Button" type="button">
      {children}
    </button>
  )

  let button = <InternalLink />

  if (external) {
    button = <ExternalLink />
  } else if (!external && onClick) {
    button = <ActionLink />
  }

  return button
}

export default Button
