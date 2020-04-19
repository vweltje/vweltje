import React, { useContext, useState } from "react"
import TextareaOverlay from "../TextareaOverlay/TextareaOverlay"
import { validate } from "../../../helpers/formHelper"
import { store } from "../../../store"
import "./Field.scss"

const Field = ({ name, label, type, required, focus }) => {
  const { dispatch } = useContext(store)
  const [empty, setEmpty] = useState(true)
  const [textareaValue, setTextareaValue] = useState("")
  const [textareaOverlayActive, setTextareaOverlayActive] = useState(false)

  function inputChanged({ currentTarget }) {
    setEmpty(!currentTarget.value.length)
    if (validate[currentTarget.type](currentTarget.value)) {
      dispatch("contactForm--markActiveFieldValid")
    } else {
      dispatch("contactForm--markActiveFieldInvalid")
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
            onInput={inputChanged}
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
                inputChanged(event)
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
          onInput={inputChanged}
        />
      )}
    </label>
  )
}
export default Field
