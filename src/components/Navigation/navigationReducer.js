export const navigationInitState = {
  active: false
}

export const navigationReducer = (state, action) => {
  switch (action.type) {
    case "navigation--activate":
      return {
        ...state,
        active: true
      }
    case "navigation--deactivate":
      return {
        ...state,
        active: false
      }
    default:
      return state
  }
}
