export const contactFormInitState = {
  activeField: 1
}

export const contactFormReducer = (state, action) => {
  switch (action.type) {
    case "contactForm--NextField":
      return {
        ...state,
        activeField: state.activeField + 1
      }
    case "contactForm--PreviousField":
      return {
        ...state,
        activeField: state.activeField - 1
      }
    default:
      return state
  }
}
