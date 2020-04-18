export const contactOverlayInitState = {
  active: false,
  activeField: 1
}

export const contactOverlayReducer = (state, action) => {
  switch (action.type) {
    case "caseontactOverlay--Activate":
      return {
        ...state,
        active: true
      }
    case "ContactOverlay--Deactivate":
      return {
        ...state,
        active: false
      }
    case "ContactOverlay--NextField":
      return {
        ...state,
        activeField: state.activeField + 1
      }
    case "ContactOverlay--PreviousField":
      return {
        ...state,
        activeField: state.activeField - 1
      }
    default:
      return state
  }
}
