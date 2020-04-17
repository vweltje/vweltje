import React from "react"

const Input = ({ name, label, type, required }) => (
  <label htmlFor={name} className="ContactForm--Label">
    {label}
    {type === "textarea" ? (
      <textarea
        className="ContactForm--Textarea"
        id={name}
        name={name}
        required={required}
      />
    ) : (
      <input
        className="ContactForm--Input"
        id={name}
        name={name}
        type={type}
        required={required}
      />
    )}
  </label>
)
export default Input
