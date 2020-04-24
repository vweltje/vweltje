import React, { useContext } from "react"
import Link from "../Link/Link"
import { store } from "../../../store"
import "./NavigationLinks.scss"

const NavigationLinks = () => {
  const { dispatch } = useContext(store)

  function openContactOverlay() {
    dispatch("navigation--deactivate")
    setTimeout(() => {
      dispatch("contactOverlay--activate")
    }, 200)
  }
  return (
    <ul className="Navigation--Links">
      <li className="Navigation--Link">
        <Link to="/cases">Cases</Link>
      </li>
      <li className="Navigation--Link">
        <Link to="/about-me">About me</Link>
      </li>
      <li className="Navigation--Link">
        <button type="button" onClick={openContactOverlay}>
          Contact
        </button>
      </li>
    </ul>
  )
}

export default NavigationLinks
