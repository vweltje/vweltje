export const contactFormInitState = {
  activeField: 1,
  validFields: [],
  successfulSubmit: false,
  unsuccessfulSubmit: false
}

export const contactFormReducer = (state, action) => {
  switch (action.type) {
    case "contactForm--nextField":
      return {
        ...state,
        activeField: state.activeField + 1
      }
    case "contactForm--previousField":
      return {
        ...state,
        activeField: state.activeField - 1
      }
    case "contactForm--markFieldValid":
      return {
        ...state,
        validFields: !state.validFields.includes(action.value)
          ? [...state.validFields, action.value]
          : state.validFields
      }
    case "contactForm--markFieldInvalid":
      return {
        ...state,
        validFields: state.validFields.filter((field) => field !== action.value)
      }
    case "contactForm--successfulSubmit":
      return {
        ...state,
        successfulSubmit: true,
        unsuccessfulSubmit: false
      }
    case "contactForm--unsuccessfulSubmit":
      return {
        ...state,
        successfulSubmit: false,
        unsuccessfulSubmit: true
      }
    default:
      return state
  }
}
