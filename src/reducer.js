import {
  navigationReducer,
  navigationInitState
} from "./components/Navigation/navigationReducer"
import {
  contactOverlayReducer,
  contactOverlayInitState
} from "./components/ContactOverlay/contactOverlayReducer"

export const initState = {
  navigation: navigationInitState,
  contactOverlay: contactOverlayInitState
}

export const reducer = (state, action) => {
  const mutatedAction = {
    type: action?.type ?? action,
    value: action?.value ?? undefined
  }
  return {
    navigation: navigationReducer(state.navigation, mutatedAction),
    contactOverlay: contactOverlayReducer(state.contactOverlay, mutatedAction)
  }
}
