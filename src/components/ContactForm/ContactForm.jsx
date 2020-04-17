import React from "react"
import Field from "./Field/Field"
import fields from "./constants"
import "./ContactForm.scss"

const ContactForm = () => {
  const handleSubmit = () => {}
  return (
    <form
      className="ContactForm"
      name="Contact"
      onSubmit={handleSubmit}
      data-netlify=""
    >
      {fields.map(({ name, label, type, required }, index) => (
        <Field
          name={name}
          label={label}
          type={type}
          required={required}
          index={index}
        />
      ))}
    </form>
  )
}

export default ContactForm
