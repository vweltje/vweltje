import React, { useContext } from "react"
import ClickAwayListner from "../ClickAwayListner/ClickAwayListner"
import Container from "../Container/Container"
import ContactForm from "../ContactForm/ContactForm"
import { store } from "../../store"
import "./ContactOverlay.scss"

const ContactOverlay = () => {
  const {
    state: {
      contactOverlay: { active }
    },
    dispatch
  } = useContext(store)

  console.log("contactOverlay", active)

  return (
    <div className={`ContactOverlay${active ? " visible" : ""}`}>
      <Container size="smaller">
        <div className="ContactOverlay--Inner">
          <ClickAwayListner
            detectEvents={active}
            onClickAway={() => dispatch("contactOverlay--deactivate")}
          >
            <ContactForm />
          </ClickAwayListner>
        </div>
      </Container>
    </div>
  )
}

export default ContactOverlay
