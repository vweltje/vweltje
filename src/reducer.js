import {
  navigationReducer,
  navigationInitState
} from "./components/Navigation/navigationReducer"
import {
  contactOverlayReducer,
  contactOverlayInitState
} from "./components/ContactOverlay/contactOverlayReducer"
import {
  contactFormReducer,
  contactFormInitState
} from "./components/ContactForm/contactFormReducer"

export const initState = {
  navigation: navigationInitState,
  contactOverlay: contactOverlayInitState,
  contactForm: contactFormInitState
}

export const reducer = (state, action) => {
  const mutatedAction = {
    type: action?.type ?? action,
    value: action?.value ?? undefined
  }
  return {
    navigation: navigationReducer(state.navigation, mutatedAction),
    contactOverlay: contactOverlayReducer(state.contactOverlay, mutatedAction),
    contactForm: contactFormReducer(state.contactForm, mutatedAction)
  }
}
