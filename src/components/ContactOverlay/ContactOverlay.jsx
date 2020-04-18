import React, { useContext, memo } from "react"
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
    <ClickAwayListner
      onClickAway={() => dispatch("ContactOverlay--Deactivate")}
      detectEvents={active}
    >
      <div className={`ContactOverlay${active ? " visible" : ""}`}>
        <Container size="smaller">
          <div className="ContactOverlay--Inner">
            <ContactForm />
          </div>
        </Container>
      </div>
    </ClickAwayListner>
  )
}

export default memo(ContactOverlay)
