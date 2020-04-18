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
    default:
      return state
  }
}
