import React, { createContext, useReducer } from "react"
import { reducer, initState } from "./reducer"

const store = createContext(initState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
