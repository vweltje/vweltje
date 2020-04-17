import React from "react"
import Container from "../Container/Container"
import ContactForm from "../ContactForm/ContactForm"
import "./ContactOverlay.scss"

const ContactOverlay = () => {
  return (
    <div className="ContactOverlay">
      <Container size="smaller">
        <div className="ContactOverlay--Inner">
          <ContactForm />
        </div>
      </Container>
    </div>
  )
}

export default ContactOverlay
