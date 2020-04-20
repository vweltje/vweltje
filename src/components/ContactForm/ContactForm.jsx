import React, { useContext } from "react"
import Form from "./Form/Form"
import SuccessMessage from "./SuccessMessage/SuccessMessage"
import { store } from "../../store"

const ContactForm = () => {
  const {
    state: {
      contactForm: { successfulSubmit }
    }
  } = useContext(store)

  return <>{successfulSubmit ? <SuccessMessage /> : <Form />}</>
}

export default ContactForm
