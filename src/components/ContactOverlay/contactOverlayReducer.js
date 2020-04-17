export const contactOverlayInitState = {
  active: false,
  activeField: 1
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
    case "contactOverlay--NextField":
      return {
        ...state,
        activeField: state.activeField + 1
      }
    case "contactOverlay--PreviousField":
      return {
        ...state,
        activeField: state.activeField - 1
      }
    default:
      return state
  }
}
