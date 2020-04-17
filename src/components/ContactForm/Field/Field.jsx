import React from "react"
import Input from "../Input/Input"
import NavigationButtons from "../NavigationButtons/NavigationButtons"
import Required from "../Required/Required"
import Progress from "../Progress/Progress"

const Field = ({ name, label, type, required, index }) => (
  <fieldset
    className="ContactForm--Field"
    style={{
      zIndex: -Math.abs(index),
      transform: `translateY(-${index * 10}px) scale(${1 - 0.01 * index * 2})`
    }}
  >
    <div className="ContactForm--FieldTop">
      <Input name={name} label={label} type={type} required={required} />
      <NavigationButtons />
    </div>
    <div className="ContactForm--FieldBottom">
      <Required />
      <Progress />
    </div>
  </fieldset>
)

export default Field
