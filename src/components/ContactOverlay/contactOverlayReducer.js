export const contactOverlayInitState = {
  active: true
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
    default:
      return state
  }
}
