export const navInitState = {
  navigationActive: false
}

export const navReducer = (state, action) => {
  switch (action.type) {
    case "activateNavigation":
      return {
        ...state,
        navigationActive: true
      }
    case "deactivateNavigation":
      return {
        ...state,
        navigationActive: false
      }
    default:
      return state
  }
}
