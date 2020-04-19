import React, { useContext } from "react"
import { store } from "../../../store"
import fields from "../constants"
import "./NavigationButtons.scss"

const NavigationButtons = () => {
  const {
    state: {
      contactForm: { activeField, validFields }
    },
    dispatch
  } = useContext(store)
  const isLastField = activeField === fields.length
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
      {!isLastField ? (
        <button
          className="ContactForm--NavigationButton Next"
          type="button"
          disabled={!validFields.includes(activeField)}
          onClick={() => {
            dispatch("contactForm--nextField")
            dispatch("contactForm--markActiveFieldInvalid")
          }}
        >
          Next
        </button>
      ) : (
        <button
          className="ContactForm--NavigationButton Submit"
          type="submit"
          disabled={!validFields.includes(activeField)}
          onClick={() => dispatch("contactForm--submit")}
        >
          Send
        </button>
      )}
    </div>
  )
}

export default NavigationButtons
