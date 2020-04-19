export const contactFormInitState = {
  activeField: 1,
  activeFieldValid: false,
  validFields: []
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
    default:
      return state
  }
}
