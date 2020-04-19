export const contactOverlayInitState = {
  active: true,
  activeField: 1,
  activeFieldValid: false
}

export const contactOverlayReducer = (state, action) => {
  switch (action.type) {
    case "contactOverlay--activate":
      return {
        ...state,
        active: true
      }
    case "contactOverlay--deactivate":
      return {
        ...state,
        active: false
      }
    case "contactOverlay--nextField":
      return {
        ...state,
        activeField: state.activeField + 1
      }
    case "contactOverlay--previousField":
      return {
        ...state,
        activeField: state.activeField - 1
      }
    case "contactOverlay--markActiveFieldValid":
      return {
        ...state,
        activeFieldValid: true
      }
    case "contactOverlay--markActiveFieldInvalid":
      return {
        ...state,
        activeFieldValid: false
      }
    default:
      return state
  }
}
