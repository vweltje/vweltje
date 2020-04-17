import { navReducer, navInitState } from "./components/Nav/navReducer"
import {
  contactFormReducer,
  contactFormInitState
} from "./components/ContactForm/contactFormReducer"

export const initState = {
  nav: navInitState,
  contactForm: contactFormInitState
}

export const reducer = (state, action) => {
  const mutatedAction = {
    type: action?.type ?? action,
    value: action?.value ?? undefined
  }
  return {
    nav: navReducer(state.nav, mutatedAction),
    contactForm: contactFormReducer(state.contactForm, mutatedAction)
  }
}
