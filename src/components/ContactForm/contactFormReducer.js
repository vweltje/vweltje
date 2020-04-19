export const contactFormInitState = {
  activeField: 1,
  activeFieldValid: false
}

export const contactFormReducer = (state, action) => {
  switch (action.type) {
    case "contactForm--nextField":
      return {
        ...state,
        activeField: state.activeField + 1
      }
    case "contactForm--previousField":
      return {
        ...state,
        activeField: state.activeField - 1
      }
    case "contactForm--markActiveFieldValid":
      return {
        ...state,
        activeFieldValid: true
      }
    case "contactForm--markActiveFieldInvalid":
      return {
        ...state,
        activeFieldValid: false
      }
    default:
      return state
  }
}
