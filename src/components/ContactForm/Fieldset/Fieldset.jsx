import React, { useContext } from "react"
import Field from "../Field/Field"
import NavigationButtons from "../NavigationButtons/NavigationButtons"
import Required from "../Required/Required"
import Progress from "../Progress/Progress"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { store } from "../../../store"
import "./Fieldset.scss"

const Fieldset = ({ name, label, type, required, index }) => {
  const {
    state: {
      contactForm: { activeField, unsuccessfulSubmit }
    }
  } = useContext(store)
  const order = index - (activeField - 1)
  const yTranslation = order > 0 ? -Math.abs(order) : Math.abs(order)
  const style = {
    zIndex: -Math.abs(order),
    transform: `translateY(${yTranslation * 20}px) scale(${
      1 - 0.01 * Math.abs(order) * 4
    })`,
    opacity: 1
  }

  return (
    <fieldset
      className={`ContactForm--Fieldset ${
        index === activeField - 1 ? " active" : ""
      }`}
      style={style}
    >
      <div className="ContactForm--FieldsetTop">
        <Field
          name={name}
          label={label}
          type={type}
          required={required}
          index={index}
          focus={index === activeField - 1}
        />
        <NavigationButtons />
      </div>
      <div className="ContactForm--FieldsetBottom">
        <Required />
        <Progress />
      </div>
      {unsuccessfulSubmit && <ErrorMessage />}
    </fieldset>
  )
}

export default Fieldset
