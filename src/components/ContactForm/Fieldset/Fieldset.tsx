import Field from "../Field/Field"
import NavigationButtons from "../NavigationButtons/NavigationButtons"
import Required from "../Required/Required"
import Progress from "../Progress/Progress"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import type { FieldType } from "../constants"

type Props = {
  name: string
  label: string
  type: FieldType
  required: boolean
  index: number
  activeField: number
  isValid: boolean
  showError: boolean
  onValidate: (valid: boolean) => void
  onPrevious: () => void
  onNext: () => void
}

export default function Fieldset({
  name,
  label,
  type,
  required,
  index,
  activeField,
  isValid,
  showError,
  onValidate,
  onPrevious,
  onNext,
}: Props) {
  const isActive = index === activeField - 1
  // Fieldsets after the active one are stacked behind it
  const order = index - (activeField - 1)
  const yTranslation = order > 0 ? -Math.abs(order) : Math.abs(order)
  const style = {
    zIndex: -Math.abs(order),
    transform: `translateY(${yTranslation * 20}px) scale(${
      1 - 0.01 * Math.abs(order) * 4
    })`,
    opacity: 1,
  }

  return (
    <fieldset
      className={`ContactForm--Fieldset ${isActive ? " active" : ""}`}
      style={style}
    >
      <div className="ContactForm--FieldsetTop">
        <Field
          name={name}
          label={label}
          type={type}
          required={required}
          focus={isActive}
          onValidate={onValidate}
        />
        <NavigationButtons
          activeField={activeField}
          isValid={isValid}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
      <div className="ContactForm--FieldsetBottom">
        <Required />
        <Progress activeField={activeField} />
      </div>
      {showError && <ErrorMessage />}
    </fieldset>
  )
}
