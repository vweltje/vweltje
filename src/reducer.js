import { navReducer, navInitState } from "./components/Nav/navReducer"
import {
  contactOverlayReducer,
  contactOverlayInitState
} from "./components/ContactOverlay/contactOverlayReducer"

export const initState = {
  nav: navInitState,
  contactOverlay: contactOverlayInitState
}

export const reducer = (state, action) => {
  const mutatedAction = {
    type: action?.type ?? action,
    value: action?.value ?? undefined
  }
  return {
    nav: navReducer(state.nav, mutatedAction),
    contactOverlay: contactOverlayReducer(state.contactOverlay, mutatedAction)
  }
}
