import React, { useContext } from "react"
import { Link as GatsbyLink, navigate } from "gatsby"
import { store } from "../../../store"
import "./Link.scss"

const Link = ({ to, children }) => {
  const { dispatch } = useContext(store)
  return (
    <GatsbyLink
      to={to}
      onClick={(e) => {
        e.preventDefault()
        dispatch("navigation--deactivate")
        setTimeout(() => {
          navigate(to)
        }, 200)
      }}
    >
      {children}
    </GatsbyLink>
  )
}

export default Link
