import React, { useContext } from "react"
import ClickAwayListner from "../ClickAwayListner/ClickAwayListner"
import Link from "./Link/Link"
import ButtonOpen from "./ButtonOpen/ButtonOpen"
import ButtonClose from "./ButtonClose/ButtonClose"
import NavigationLinks from "./NavigationLinks/NavigationLinks"
import SocialIcons from "../SocialIcons/SocialIcons"
import Logo from "../../svg/vw-logo.svg"
import { downBreakpoint } from "../../helpers/breakpointHelper"
import { store } from "../../store"
import "./Navigation.scss"

const Navigation = () => {
  const {
    state: {
      navigation: { active }
    },
    dispatch
  } = useContext(store)

  return (
    <>
      <ButtonOpen />
      <ClickAwayListner
        element="nav"
        className={`Navigation ${active ? "active" : ""}`}
        onClickAway={() => dispatch("navigation--deactivate")}
        detectEvents={active}
      >
        <div className="Navigation--Container">
          {!downBreakpoint("large") && (
            <>
              <ButtonClose />
              <Link to="/">
                <Logo className="Navigation--Icon" />
                <span className="Hidden">Go to home</span>
              </Link>
            </>
          )}
          <NavigationLinks />
          <SocialIcons />
        </div>
      </ClickAwayListner>
    </>
  )
}

export default Navigation

// <li className="Navigation--Link">
//   <Link to="/photography">Photography</Link>
// </li>
