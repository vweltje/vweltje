import React, { useContext, useState } from "react"
import { validate } from "../../../helpers/formHelper"
import { store } from "../../../store"
import "./Field.scss"

const Field = ({ name, label, type, required }) => {
  const { dispatch } = useContext(store)
  const [empty, setEmpty] = useState(true)
  const inputChanged = ({ currentTarget }) => {
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
        <textarea
          className="ContactForm--Textarea"
          id={name}
          name={name}
          required={required}
          onChange={inputChanged}
        />
      ) : (
        <input
          className="ContactForm--Input"
          id={name}
          name={name}
          type={type}
          required={required}
          onChange={inputChanged}
        />
      )}
    </label>
  )
}
export default Field
