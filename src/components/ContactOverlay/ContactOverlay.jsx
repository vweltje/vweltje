import React, { useContext, useState, useEffect } from "react"
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
  const [visible, setVisible] = useState(false)
  const deactivate = () => {
    setVisible(false)
    setTimeout(() => {
      dispatch("contactOverlay--deactivate")
    }, 200)
  }

  useEffect(() => {
    if (active) setVisible(true)
  }, [active])

  return (
    <>
      {active && (
        <div className={`ContactOverlay${visible ? " visible" : ""}`}>
          <Container size="smaller">
            <div className="ContactOverlay--Inner">
              <ClickAwayListner detectEvents={active} onClickAway={deactivate}>
                <ContactForm />
              </ClickAwayListner>
            </div>
          </Container>
        </div>
      )}
    </>
  )
}

export default ContactOverlay
