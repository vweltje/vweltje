import { navReducer, navInitState } from "./components/Nav/navReducer"

export const initState = {
  ...navInitState
}

export const reducer = (state, action) => {
  const mutatedAction = {
    type: action?.type ?? action,
    value: action?.value ?? undefined
  }
  return {
    ...navReducer(state, mutatedAction)
  }
}
