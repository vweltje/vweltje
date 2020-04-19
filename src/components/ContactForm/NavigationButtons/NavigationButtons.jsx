import React, { useContext } from "react"
import { store } from "../../../store"
import "./NavigationButtons.scss"

const NavigationButtons = () => {
  const {
    state: {
      contactForm: { activeField, activeFieldValid }
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
            onClick={() => dispatch("contactForm--previousField")}
          >
            Prev
          </button>
          <span className="ContactForm--NavigationButtonsDivider">/</span>
        </>
      )}
      <button
        className="ContactForm--NavigationButton Next"
        type="button"
        disabled={!activeFieldValid}
        onClick={() => dispatch("contactForm--nextField")}
      >
        Next
      </button>
    </div>
  )
}

export default NavigationButtons
