export const navInitState = {
  active: false
}

export const navReducer = (state, action) => {
  switch (action.type) {
    case "nav--activate":
      return {
        ...state,
        active: true
      }
    case "nav--deactivate":
      return {
        ...state,
        active: false
      }
    default:
      return state
  }
}
