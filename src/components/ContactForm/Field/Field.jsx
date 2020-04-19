import React, { useContext, useState } from "react"
import TextareaOverlay from "../TextareaOverlay/TextareaOverlay"
import { validate } from "../../../helpers/formHelper"
import { store } from "../../../store"
import "./Field.scss"

const Field = ({ name, label, type, required, focus }) => {
  const {
    state: {
      contactForm: { activeField, validFields }
    },
    dispatch
  } = useContext(store)
  const [empty, setEmpty] = useState(true)
  const [textareaValue, setTextareaValue] = useState("")
  const [textareaOverlayActive, setTextareaOverlayActive] = useState(false)
  console.log(validFields)
  function validateInput({ currentTarget: { value } }) {
    setEmpty(!value.length)
    console.log(validate[type](value))
    if (validate[type](value)) {
      dispatch({ type: "contactForm--markFieldValid", value: activeField })
    } else {
      dispatch({ type: "contactForm--markFieldInvalid", value: activeField })
    }
  }

  return (
    <label htmlFor={name} className="ContactForm--Field">
      {empty && label}
      {type === "textarea" ? (
        <>
          <textarea
            className="ContactForm--Textarea"
            id={name}
            name={name}
            required={required}
            onInput={validateInput}
            value={textareaValue}
            onChange={() => {}}
            onClick={() => setTextareaOverlayActive(true)}
          />
          {textareaOverlayActive && (
            <TextareaOverlay
              label={label}
              name={`textareaOverlay--${name}`}
              currentValue={textareaValue}
              onDeactivate={() => setTextareaOverlayActive(false)}
              onInput={(event) => {
                validateInput(event)
                setTextareaValue(event.currentTarget.value)
              }}
            />
          )}
        </>
      ) : (
        <input
          className="ContactForm--Input"
          ref={(input) => focus && input?.focus()}
          id={name}
          name={name}
          type={type}
          required={required}
          onInput={validateInput}
        />
      )}
    </label>
  )
}
export default Field
