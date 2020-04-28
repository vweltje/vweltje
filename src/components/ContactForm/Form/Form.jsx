import React, { useContext } from "react"
import { stringify } from "qs"
import { serialize } from "dom-form-serializer"
import Fieldset from "../Fieldset/Fieldset"
import { store } from "../../../store"
import { fields } from "../constants"
import "./Form.scss"

const Form = () => {
  const { dispatch } = useContext(store)

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target

    fetch(`${form.action}?${stringify(serialize(form))}`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
      .then((result) => {
        if (result.ok) return result
        console.log(result)
        throw new Error("Network error")
      })
      .then(() => {
        form.reset()
        dispatch("contactForm--successfulSubmit")
      })
      .catch((e) => {
        console.log(e)
        dispatch("contactForm--unsuccessfulSubmit")
      })
  }

  return (
    <form
      className="ContactForm--Form"
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      data-netlify="true"
    >
      {fields.map(({ name, label, type, required }, index) => (
        <Fieldset
          name={name}
          label={label}
          type={type}
          required={required}
          index={index}
          key={name}
        />
      ))}
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}

export default Form
