import React from "react"
import Field from "../Field/Field"
import NavigationButtons from "../NavigationButtons/NavigationButtons"
import Required from "../Required/Required"
import Progress from "../Progress/Progress"

import "./Fieldset.scss"

const Fieldset = ({ name, label, type, required, index }) => (
  <fieldset
    className="ContactForm--Fieldset"
    style={{
      zIndex: -Math.abs(index),
      transform: `translateY(-${index * 10}px) scale(${1 - 0.01 * index * 2})`
    }}
  >
    <div className="ContactForm--FieldsetTop">
      <Field name={name} label={label} type={type} required={required} />
      <NavigationButtons />
    </div>
    <div className="ContactForm--FieldsetBottom">
      <Required />
      <Progress />
    </div>
  </fieldset>
)

export default Fieldset
