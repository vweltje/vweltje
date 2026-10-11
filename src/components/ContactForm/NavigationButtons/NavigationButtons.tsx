import { fields } from "../constants"

type Props = {
  activeField: number
  isValid: boolean
  onPrevious: () => void
  onNext: () => void
}

export default function NavigationButtons({
  activeField,
  isValid,
  onPrevious,
  onNext,
}: Props) {
  const isLastField = activeField === fields.length

  return (
    <div className="ContactForm--NavigationButtons">
      {activeField > 1 && (
        <>
          <button
            className="ContactForm--NavigationButton Prev"
            type="button"
            onClick={onPrevious}
          >
            Prev
          </button>
          <span className="ContactForm--NavigationButtonsDivider">/</span>
        </>
      )}
      {isLastField ? (
        <button
          className="ContactForm--NavigationButton Submit"
          type="submit"
          disabled={!isValid}
        >
          Send
        </button>
      ) : (
        <button
          className="ContactForm--NavigationButton Next"
          type="button"
          disabled={!isValid}
          onClick={onNext}
        >
          Next
        </button>
      )}
    </div>
  )
}
