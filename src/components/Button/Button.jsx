import React from "react"
import { Link } from "gatsby"
import "./Button.scss"

const Button = ({
  link = false,
  external = false,
  onClick = false,
  className = "",
  noHover,
  children
}) => {
  const classNames = `Button${className ? ` ${className}` : ""}${
    noHover ? " noHover" : ""
  }`
  const InternalLink = () => (
    <Link to={link} className={classNames}>
      {children}
    </Link>
  )
  const ExternalLink = () => (
    <a href={link} className={classNames}>
      {children}
    </a>
  )
  const ActionLink = () => (
    <button onClick={onClick} className={classNames} type="button">
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
