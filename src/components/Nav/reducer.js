export default (state, action) => {
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
