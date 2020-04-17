import navigationReducer from "./components/Nav/reducer"

export default (state, action) => {
  const mutatedAction = {
    type: action?.type ?? action,
    value: action?.value ?? undefined
  }
  return {
    ...navigationReducer(state, mutatedAction)
  }
}
