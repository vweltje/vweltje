import React, { useContext } from "react"
import { store } from "../../../store"
import "./NavigationButtons.scss"

const NavigationButtons = () => {
  const {
    state: {
      contactOverlay: { activeField, activeFieldValid }
    },
    dispatch
  } = useContext(store)

  return (
    <div className="ContactForm--NavigationButtons">
      {activeField > 1 && (
        <>
          <button
            className="ContactForm--NavigationButton Prev"
            type="button"
            onClick={() => dispatch("contactOverlay--previousField")}
          >
            Prev
          </button>
          /
        </>
      )}
      <button
        className="ContactForm--NavigationButton Next"
        type="button"
        disabled={!activeFieldValid}
        onClick={() => dispatch("contactOverlay--nextField")}
      >
        Next
      </button>
    </div>
  )
}

export default NavigationButtons
